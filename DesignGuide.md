# Easycal设计文档 #
## 数据存储 ##
我们把日程数据存储在了浏览器扩展的本地存储中，这样不用担心浏览器关闭后及电脑重启后数据的丢失，下面介绍存储用到的数据结构及API。
  * 数据结构
我们以`(key, value)`对的形式存储数据，key为关键字`"sched"+id` 如 `sched3` 等，value存储了日程相关的信息，包括日程时间、内容、提醒提前时间等。

Value的格式如下：
```
schedule.
         id                // ID
         content           // 内容
         sched_time        // 日程时间
         sched_remindtime  // 提醒提前时间
```

  * 存储API
存储用到的API如下，它们是对原生本地存储 API 的封装：
```
function setItem(key, value)  // Store item in local storage.

function getItem(key)  // Gets item from local storage with specified key.

function removeItem(key) // Remove an item fro local storage by its key.

function clearStrg()  // Clears all key/value pairs in local storage.
```

调用示例代码如下：
```
    // store into local storage
    var storekey = "sched" + g_schedule.id;
    setItem(storekey, JSON.stringify(g_schedule));
```

## 算法 ##
### 选中内容——右键划词 ###
用户右键选中内容后，后台脚本 `sample.js` 响应右键菜单中菜单项的点击，
创建新日程对象。然后执行脚本 `editcal.js`
（为 content script） 修改当前 HTML 页面添加编辑日程界面
（表现为一个弹出层）。使用 Chrome API 中消息传递机制在后台和 content
script 之间传递日程信息。

### 自动识别关键信息 ###
用正则表达式提取用户选中内容中的时间、地点等关键信息，用到的模式匹配串如下：
```
// date extraction

    // 识别X年X月X日

    var patt1 = /(\d+)年(\d+)月(\d+)日*/;

    // 识别XXXX-X-X

    var patt2 = /(\d\d\d\d)-(\d+)-(\d+)/;

    // 识别X月X日

    var patt3 = /(\d+)月(\d+)日*/;

    // 识别X-X

    var patt4 = /(\d+)-(\d+)/;

    // 识别X日

    var patt5 = /(\d+)日/;

    // 识别今天、今晚、明天、明晚

    var patt6 = /([今明])[天晚]/;


    // time extraction

    // 识别X:X

    var patt_t = /(\d+)[:：](\d+)/;

    // 识别上午、下午、中午、晚、晚上X点X分

    var patt_t_1 = /([上中下]午|晚上*)(\d+)[时点](\d+)[分]*/;

    // 识别X时X分、X点X分

    var patt_t_2 = /(\d+)[时点](\d+)[分]*/;

    // 识别上午、中午、下午、晚、晚上X时、X点

    var patt_t_3 = /([上中下]午|晚上*)(\d+)[时点]/;

    // 识别X时、X点

    var patt_t_4 = /(\d+)[时点]/;

    // 识别上午、中午、下午、晚、晚上

    var patt_t_5 = /([上中下]午|晚上*)/;
```
程序依次使用日期的pattern识别日期，使用一些规则来处理汉语表达习惯，如中午12点->12:00 中午1点->13::00 下午6点->18:00 晚8点->20:00。

识别地点的pattern如下：
```
// location extraction
    // 识别“地点：”后面的字符串为地点
    var patt_loc = /地点[:：](\S+)/;
```
### 管理日历 ###
用户可以点击浏览器地址栏上的扩展图标，弹出日历主界面，
可以浏览每天的的日程安排。jsDatePick 模块响应日期选择，并返回
一个对象，包含选定日期的年、月、日。

读取本地存储，筛选出当天的所有日程，使用 JavaScript 动态创建 HTML 表格
显示当前日程。

用户可以对现有日程进行删除，当执行删除操作时，我们用 JavaScript DOM
操作找出日程的 ID，然后调用存储 API 中的删除函数删除日程，同时我们
修改当前 HTML 页面删除该日程信息。

用户可对日程做进一步编辑，当执行编辑动作时，使用 JavaScript 动态创建
HTML 表单呈现日程时间、内容等信息供用户修改。修改完成后会调用存储 API
存入修改后的日程，然后刷新主界面的日程信息。

用户还可以手工新加日程，当执行新加动作时，使用 JavaScript 动态创建
HTML 表单呈现日程时间、内容等输入框供用户填充。添加完毕后会调用存储 API
存入新建的日程，然后刷新主界面的日程信息。