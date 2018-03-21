---
layout: post
title: SafariService
categories: android
---

原生App嵌入web内容

<!--more-->

## UIWebView

在此之前我一直使用UIWebView来展示非交互的web类容，可以用它加载本地的html和js脚本，通过delegate可以过滤UIWebView发起的调用。但是，除了慢还有更多要死的因素：swift和js互相调用没戏啊

## SafariService

我想要的东西在iOS8之后都有了。  

* 嵌入Safari浏览器
* swift和js互相调用
* 其他



## SFSafariViewController

用户在不退出当前app的情况下就可以使用嵌入的safari浏览器，它共用了系统safari的cookies等等。如果使用openURL的话会跳转出当前的app。

## WKWebView

载入一个网页非常的方便

{% highlight swift linenos %}
let wk = WKWebView(frame: CGRectZero)
let request = NSURLRequest(URL: NSURL(string: "http://helapu.github.io/")!)
wk.loadRequest(request)
{% endhighlight %}


## 添加网页内容到Safari阅读列表

SSReadingList可以添加内容到阅读列表。

{% highlight swift linenos %}
do {
    try         SSReadingList.defaultReadingList()?.addReadingListItemWithURL(url!, title: "Helapu", previewText: "无间道")
} catch {
    //error
}
{% endhighlight %}


## swift/js交互

[Cocoa China翻译](http://www.cocoachina.com/ios/20150205/11108.html)

有两处可以拦截并且注入js代码。
