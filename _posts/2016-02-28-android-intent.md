---
layout: post
title: Android Intent
categories: android
---

Android开发：在Activity之间传递信息是通过Intent完成的。

<!--more-->

## 四大组件

* Activity
* Service
* Content Provider
* BroadcastReceiver


## 在各个Activity之间跳转

页面之间的跳转是通过ACtivity完成的，相应的函数是：


{% highlight swift linenos %}
startActivity(intent);
{% endhighlight %}


同时可以携带更多的数据，Intent的实例方法来完成:

    intent.putExtra(EXTRA_MESSAGE, str);

其中第二个参数可以是任何的数据类型。


完整示例如下：

{% highlight swift linenos %}
public void sendMessage(View view) {
    Log.d("TAG", "sendMessage: 测试");
    EditText edit = (EditText) findViewById(R.id.edit_message);
    String str = edit.getText().toString();
    Intent intent = new Intent(this, DisplayActivity.class);
    intent.putExtra(EXTRA_MESSAGE, str);

    startActivity(intent);
}

{% endhighlight %}

## 取回数据

在目标Activity中取出数据

{% highlight swift linenos %}
Intent intent = getIntent();
final String info = intent.getStringExtra(MainActivity.EXTRA_MESSAGE);
Log.d("Display", info);
{% endhighlight %}

有一系列的getXXXExtra(key)函数可以取回不通的数据类型。
