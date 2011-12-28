window.onload = function(){
    g_globalObject = new JsDatePick({
        useMode:1,
        isStripped:true,
        target:"calendar"
        /*selectedDate:{
          day:5,
          month:9,
          year:2006
          },
          yearsRange:[1978,2020],
          limitToToday:false,
          cellColorScheme:"beige",
          dateFormat:"%m-%d-%Y",
          imgPath:"img/",
          weekStartDay:1*/
    });

    g_globalObject.setOnSelectedDelegate(function(){
        var obj = g_globalObject.getSelectedDay();
        console.log("a date was just selected and the date is : " + obj.day + "/" + obj.month + "/" + obj.year);
        document.getElementById("calendar_result").innerHTML = obj.day + "/" + obj.month + "/" + obj.year;
        getSchedulesByTime(obj);
    });

};

function getSchedulesByTime(obj) {
    var maxid_plus1 = getItem('sched_index');
    if (maxid_plus1 == null) {
        return null;
    }
    var sched_table = "<table>";

    for (var i = 0; i < maxid_plus1; ++i) {
        var schedule_str = getItem('sched' + i);
        if (schedule_str == null) {
            continue;
        }
        var s = JSON.parse(schedule_str);
        var time = new Date(s.sched_time);
        if ((time.getFullYear() == obj.year) &&
            ((time.getMonth() + 1) == obj.month) &&
            (time.getDate() == obj.day)) {
            console.debug("time: " + time.toISOString());
            var sched_html = "";
            sched_html += "<tr id=\"sched" + s.id + "\"><td>";
            sched_html += time.getHours() + ":" + time.getMinutes() + "</td><td>";
            sched_html += s.summary + "</td><td class=\"setting\">SETTING</td></tr>";
            sched_table += sched_html;
        }
    }
    sched_table += "</table>";
    document.getElementById('sched').innerHTML = sched_table;
    $(".setting").unbind();
    $(".setting").click(function(){
        var offset = $(this).offset();
        console.log("cord: (" + offset.left + ", " + offset.top + ")");
        var sched_id = $(this).parent().attr("id");
        console.log("parent id: " + sched_id);
        $(".popup-menu").attr("id", "pm" + sched_id);
        $(".popup-menu").css({
            "visibility" : "visible",
            "display" : "block",
            "top" : offset.top,
            "left" : offset.left,
            "z-index" : 5,
        });
        $(".popup-menu-close").one("click", closePopupMenu);
        $(".popup-menu-item").one("click", function(){
            var action = $(this).html();
            // strip first two characters "pm"
            var sched_id = $(this).parent().attr("id").substring(2);
            // FIXME
            // How to deal with L10N action messages?
            if (action == "Remove") {
                console.log("To remove " + sched_id);
                // remove the key-value pair in LocalStorage
                removeItem(sched_id);
                // remove the table row in current GUI
                $("#" + sched_id).remove();
                closePopupMenu();
            } else {
                console.warn("Not supported yet!");
                closePopupMenu();
            }
        });
    });
}

function closePopupMenu() {
    $(".popup-menu").css({
        "visibility" : "hidden",
        "display" : "none",
        "z-index" : -1,
    });
    $(".popup-menu-close").unbind('click');
    $(".popup-menu-item").unbind('click');
}