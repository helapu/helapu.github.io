---
layout: post
title: 蓝牙通信
date:   2016-01-27 12:01:21 +0800
categories: iOS
---

Core Bluetooth
<!--more-->

### 介绍

苹果在OS X 10.9和iOS 6版本后，提供了BLE外设(Peripheral)功能，可以将设备作为Peripheral来处理。
在Peripheral端，本地Peripheral设备表示为一个CBPeripheralManager对象。这些对象用于管理将服务及特性发布到本地Peripheral设备数据库，并广告这些服务给Central设备。Peripheral管理器也用于响应来自Central端的读写请求。


{% highlight swift linenos %}

import UIKit
import CoreBluetooth

// central端

class LJCentralBluetooth: NSObject, CBCentralManagerDelegate, CBPeripheralDelegate {
    static let sharedInstance = LJCentralBluetooth()
    private var centralManager = CBCentralManager()

    override init() {
        super.init()
        centralManager.delegate = self
    }


    func scanPeripherals() {
        debugPrint("start scan")
        centralManager.scanForPeripheralsWithServices(nil, options: nil)
    }

    // CBCentralManagerDelegate必须要实现的代理
    func centralManagerDidUpdateState(central: CBCentralManager) {
        debugPrint("\(central.state)")
        switch central.state {
        case CBCentralManagerState.Unknown:
            debugPrint("Unknown")
        case CBCentralManagerState.Resetting:
            debugPrint("")

        case CBCentralManagerState.Unsupported:
            debugPrint("Unsupported")
        case CBCentralManagerState.Unauthorized:
            debugPrint("Unauthorize")
        case CBCentralManagerState.PoweredOff:
            debugPrint("PowerOff")
        case CBCentralManagerState.PoweredOn:
            debugPrint("PowerOn")
            centralManager.scanForPeripheralsWithServices(nil, options: nil)
        }
    }

    func centralManager(central: CBCentralManager, didDiscoverPeripheral peripheral: CBPeripheral, advertisementData: [String : AnyObject], RSSI: NSNumber) {
        debugPrint("Discover Peripheral: \(peripheral.name)")
        centralManager.connectPeripheral(peripheral, options: nil)

        debugPrint("data \(advertisementData.keys)")
        debugPrint("\(RSSI)")
    }
    func centralManager(central: CBCentralManager, didConnectPeripheral peripheral: CBPeripheral) {
        debugPrint("didconnected \(peripheral.name)")
        peripheral.delegate = self
        peripheral.discoverServices(nil)
        debugPrint("发现外围设备的特性.")
    }
    func centralManager(central: CBCentralManager, didFailToConnectPeripheral peripheral: CBPeripheral, error: NSError?) {
        debugPrint("connected failed")
    }
    func centralManager(central: CBCentralManager, didDisconnectPeripheral peripheral: CBPeripheral, error: NSError?) {
        debugPrint("disconnected")
    }

    // 处理链接外围设备
    func peripheral(peripheral: CBPeripheral, didDiscoverServices error: NSError?) {
        debugPrint("peripheral:\(peripheral.name)")
    }

    // 订阅外围特性更新

}
{% endhighlight %}

Peripheral端处理也非常的类似，暂时只知道可以使用两台iPhone进行调试，所以详细的代码就不再纪录了。
