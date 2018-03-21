---
layout: post
title: UIMenuCntroller and UIPastedboard
categories: android
---

分享菜单和粘贴板

<!--more-->

受到这篇[NSHipster文章](http://nshipster.cn/long-live-cocoa/)启发,是啊，感叹隐藏在Cocoa下的无数宝藏。  

## UIPastedboard

在一个app中可以把数据复制到粘贴板中然后在另外的app中粘贴来完成数据的交互，cool。  

{% highlight linenos %}

+ (UIPasteboard *)generalPasteboard;
+ (nullable UIPasteboard *)pasteboardWithName:(NSString *)pasteboardName create:(BOOL)create;
+ (UIPasteboard *)pasteboardWithUniqueName;
{% endhighlight %}

你可以使用通用的Pastedboard，这样的话就可以在任何一个app中粘贴了。但是你也可以取一个不同的名字，这样的话复制粘贴就可以限制在你的一些列app之间了，而不能在其他的app中复制粘贴了。

#### 监听Pastedboard数据变化

{% highlight linenos %}
// Notification
UIKIT_EXTERN NSString *const UIPasteboardChangedNotification __TVOS_PROHIBITED;
UIKIT_EXTERN NSString *const UIPasteboardChangedTypesAddedKey __TVOS_PROHIBITED;
UIKIT_EXTERN NSString *const UIPasteboardChangedTypesRemovedKey __TVOS_PROHIBITED;
{% endhighlight %}



## UIMenuCntroller

UIKIt本身就已经有了非常棒的分享组件UIMenuCntroller。  
一个控件要实现分享菜单的话必须实现几个方法  

{% highlight linenos %}

//LJLabel
class LJLabel: UILabel {

    override func canBecomeFirstResponder() -> Bool {
        return true
    }

    override func canPerformAction(action: Selector, withSender sender: AnyObject?) -> Bool {
        //可以根据业务需求处理
        return action == Selector("ljCopy:")
    }

    func ljCopy(sender: AnyObject?) {

    }
}


//使用方法
func viooewDidLoad() {
    super.viewDidLoad()

    let label: LJLabel = LJLabel()
        label.userInteractionEnabled = true
    view.addSubview(label)

    let gestureRecognizer = UILongPressGestureRecognizer(target: self, action: "handleLongPressGesture:")
    label.addGestureRecognizer(gestureRecognizer)
}

// MARK: - UIGestureRecognizer

func handleLongPressGesture(recognizer: UIGestureRecognizer) {
    if let recognizerView = recognizer.view,
        recognizerSuperView = recognizerView.superview
    {
        let menuController = UIMenuController.sharedMenuController()
        menuController.setTargetRect(recognizerView.frame, inView: recognizerSuperView)
        menuController.setMenuVisible(true, animated:true)
        recognizerView.becomeFirstResponder()
    }
}


//设置UIMenuController全局菜单
func setupMenuController() {
    let menuController = UIMenuController.sharedMenuController()

    let item0 = UIMenuItem(title: "copy", action: Selector("copy:") )
    let item1 = UIMenuItem(title: "relay", action: Selector("relay:") )

    menuController.setMenuVisible(true, animated: true)
    menuController.menuItems = [item0, item1]
}

{% endhighlight %}

使用UIMenuController包括三个注意点：  
* 定制控件  
* 如何使用  
* 设置Menu
