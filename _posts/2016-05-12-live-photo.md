---
layout: post
title: iOS动态照片
categories: iOS
---

在iOS9以上提供了预览LivePhoto的API，可以在APP当中获取和显示动态照片了。
<!--more-->

## Live Photo

用于表示动态照片的数据是PHLivePhoto类，此类暂时没有提供更多的信息。如果需要将动态照片的数据上传的话，就需要Photo框架提供的数据访问了。  
PHLivePhotoView用于显示，是UIView的子类。  

## 获取

需要设置mediaTypes属性为**@[(NSString *)kUTTypeImage, (NSString *)kUTTypeLivePhoto]**。  
头文件**<MobileCoreServices/MobileCoreServices.h>**详细的描述了如何来表示多媒体信息的一些定义，这样的定义规范属于UTI规范。  


    UIImagePickerController *picker = [[UIImagePickerController alloc]init];
    picker.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
    picker.allowsEditing = NO;
    picker.delegate = self;

    // make sure we include Live Photos (otherwise we'll only get UIImages)
    NSArray *mediaTypes = @[(NSString *)kUTTypeImage, (NSString *)kUTTypeLivePhoto];
    picker.mediaTypes = mediaTypes;

    // bring up the picker
    [self presentViewController:picker animated:YES completion:nil];

## 处理获取数据

使用PHLivePhotoView显示有交互的动态照片。  

    - (void)imagePickerController:(UIImagePickerController *)picker didFinishPickingMediaWithInfo:(NSDictionary<NSString *,id> *)info {
        NSLog(@"media: %@", info);
        NSLog(@"media: %@", [info objectForKey:UIImagePickerControllerLivePhoto]);
        PHLivePhoto *livePhoto = [info objectForKey:UIImagePickerControllerLivePhoto];

        PHLivePhotoView *liveView = [[PHLivePhotoView alloc] initWithFrame:self.view.frame];
        liveView.livePhoto = livePhoto;
        [self.view addSubview:liveView];

        [picker dismissViewControllerAnimated:YES completion:nil];
    }

这没啥可说的。
