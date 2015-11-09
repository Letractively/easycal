初始版本是一个选中词提交到Google Calendar的原型软件。

由以下部分组成：
```
manifest.json //这个是配置文件，指定图标、应用类型、模块等，主要就是完成一些对项目的配置工作。看Chrome的帮助会经常看到需要在这个里面加一行，以使你的脚本行为获得浏览器的许可。

huaci.png //图标。

background.html //在后台运行的网页，主要也就运行几个脚本，如sample.js

sample.js //被background.html在后台调用的脚本，因为是从Google Chrome Sample抄过来，名字懒得改了，它现在完成的功能是context menu，也就是右键菜单，触发行为现在是把东西提交给Google Calendar。这一部分需要开发，触发行为改为识别时间、弹出窗口让用户创建日程。

popup.html  //这个是弹出窗口，点击浏览器应用栏的图表会弹出的小泡泡。这个需要开发成主界面，上次的需求分析已经说明。

_locales/  //本地化路径，存放本地化的字符串

_locales/en/messages.json   //英文本地化字符串

_locales/zh-CN/messages.json   //简体中文本地化字符串
```

参考：

Chrome扩展开发初探(http://1.wangheda.sinaapp.com/?p=14)

Chrome扩展开发初探(二)——Chrome扩展的本地化(http://1.wangheda.sinaapp.com/?p=31)

Git参考：

Git(http://learn.tsinghua.edu.cn:8080/2008011211/html/git.html)