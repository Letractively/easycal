# Introduction #

In this project, I use regular expression to extract time and location, which is one of the most easy-to-implement way. I will describe the rules I used in Dec-27 edition, and the capabilities and drawbacks of this edition will be clear enough.

# Details #

## Time Extraction ##

#### Please allow me to post a few time regular expressions. ####
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

### Process of date extraction: ###
> 依次使用日期的pattern识别日期

### Process of time extraction: ###
> 依次使用时间的pattern识别时间
> 使用一些规则来处理汉语表达习惯，如中午12点->12:00  中午1点->13::00  下午6点->18:00  晚8点->20:00





## Location Extraction ##

#### Please allow me to post a few time regular expressions. ####
```
    // location extraction
    // 识别“地点：”后面的字符串为地点
    var patt_loc = /地点[:：](\S+)/;
```