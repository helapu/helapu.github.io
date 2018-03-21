---
layout: post
title: AVFoundation
date:   2016-01-26 15:34:57 +0800
categories: iOS
---

AVFoundation可以处理音频和视频，二维码扫描也可以非常方便的实现，还有录制视频，实时视频分析。
<!--more-->

## 二维码扫描

{% highlight swift linenos %}
import UIKit
import AVFoundation

class ViewController: UIViewController, AVCaptureMetadataOutputObjectsDelegate {

    let prelayer = AVCaptureVideoPreviewLayer()
    let session = AVCaptureSession()

    override func viewDidLoad() {

    }

    func qrcodeScan() {

        prelayer.frame = CGRectMake(0, 100, CGRectGetWidth(view.bounds), 400)
        view.layer.addSublayer(prelayer)
        prelayer.session = session

        //device
        let device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
        //input
        let input: AVCaptureDeviceInput?
        do {
            input = try AVCaptureDeviceInput(device: device)
        } catch _ {
            input = nil
        }
        if (input != nil) {
            session.addInput(input)
        }

        //output AVCaptureMetadataOutput
        let output = AVCaptureMetadataOutput()

        //session
        session.addOutput(output)
        for item in output.availableMetadataObjectTypes {
            print(item.stringValue)
        }
        //需要把output添加到session之后呢才可以设置metadataObjectTypes, 否则会出现添加的type不支持的情况.
        output.metadataObjectTypes = [AVMetadataObjectTypeQRCode]
        output.setMetadataObjectsDelegate(self, queue: dispatch_get_main_queue() )
        //
        session.startRunning()

    }

    func captureOutput(captureOutput: AVCaptureOutput!, didOutputMetadataObjects metadataObjects: [AnyObject]!, fromConnection connection: AVCaptureConnection!) {
        //qrcode

        for metadata in metadataObjects {
            if metadata.type==AVMetadataObjectTypeQRCode {
                // 处理扫描出来的二维码信息
                print(metadata.stringValue)
            }
        }
    }

}
{% endhighlight %}


## 获取视频数据

获取视频的时候基本步骤和扫描二维码类似，区别在于创建output的类型和delegate的类型。

{% highlight swift linenos %}

import UIKit
import AVFoundation

class ViewController: UIViewController, AVCaptureVideoDataOutputSampleBufferDelegate {

    let prelayer = AVCaptureVideoPreviewLayer()
    let session = AVCaptureSession()

    override func viewDidLoad() {

    }

    func qrcodeScan() {

        prelayer.frame = CGRectMake(0, 100, CGRectGetWidth(view.bounds), 400)
        view.layer.addSublayer(prelayer)
        prelayer.session = session

        //device
        let device = AVCaptureDevice.defaultDeviceWithMediaType(AVMediaTypeVideo)
        //input
        let input: AVCaptureDeviceInput?
        do {
            input = try AVCaptureDeviceInput(device: device)
        } catch _ {
            input = nil
        }
        if (input != nil) {
            session.addInput(input)
        }

        //output 与qrcode不同
        let output = AVCaptureVideoDataOutput()
        output.setSampleBufferDelegate(self, queue: dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0))

        //session
        session.addOutput(output)

        session.startRunning()

    }

    func captureOutput(captureOutput: AVCaptureOutput!, didOutputSampleBuffer sampleBuffer: CMSampleBuffer!, fromConnection connection: AVCaptureConnection!) {
        print("---")

    }
}
{% endhighlight %}
