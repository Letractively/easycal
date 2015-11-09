
---

# EasyCal User Guide #


---

## About this User guide ##

### Outline ###
This document details the use of easycal, it will tell users how to use this
software to arrange your schedule.

### Reader ###
The guide is written for users of easycal. We suppose that users use Chrome as
web browser.


---



## How to use easycal ##
### Install easycal ###
Easycal is a Chrome extension. It's very easy to install it into Chrome.
And basically there are two ways.

#### The zip binary archive ####

  1. Download the featured zip archive from the "Downloads" Tab of Google Code.
  1. Then unzip it, you will get two files: `EasyCal.crx` and `EasyCal.pem`.
  1. Open Chrome Browser, and then in it open (with Ctrl+O) `EasyCal.crx`.
  1. You will be asked to give some permission to the extension, select "Accept".
  1. Then you have installed EasyCal. You can see an icon in the address bar.

#### The Developer's Way ####
You should first clone the project's repository using git.
Once you are done, the project should be located in some directory, with the name
easycal.

Now set up Chrome. Bring up the extensions management page by clicking the
wrench icon  and choosing **Tools -> Extensions**.  Select **Developer mode**  by
clicking the square and add developer information to the page. Then Click the
**Load unpacked extension** button. A file dialog appears.  In the file dialog,
navigate to your extension's folder and click OK.  Easycal has been installed
in your Chrome. Next, enjoy it.

### Main menu ###
Click the easycal icon on the wrench icon, and you will see the main menu.

The upper half of the main menu is a calendar. You can find that the date of
today has different background color. Also the dates which have schedules will
be displayed differently. (But if this is your first use, and you didn't add a
schedule, you cannot see it.) If you select another day by clicking, the list
of schedules of that day will appear at the bottom of the menu.  You can edit
or remove them. And you can add new ones too. (Just try it. It does not need
many finger moves.)

### Select words, and you get it! ###
Now comes the exciting part.

You often see some information on the Internet, like "A meeting will be on Nov
1st at The Main Building". It is boring to remember it by writing it elsewhere.
Now using easycal, it will be much easier.  Just select it (say, using left
button of your mouse), and click the right button.  Then you will find a popup
layer appear. You will be glad that the schedule's information (like the date,
content, remind time) has been filled.  Easycal is smart enough to recognize
the common notation of date.  Admittedly sometimes the information is not so
accurate that you should  correct some of them manually. After you feel the
schedule's information is ok, click "OK" button and you will be notified that
the schdule has been stored successfully. Then you are done. But if you are not
so sure, you can go to check the main menu (by clicking the icon) ;)


---

### Update ###
If you are using the zip archive, just download newer version and install it
again.

Another way is using git. You can clone the repository and pull the updates.
This way you do not have to install in again, just go to the Developr mode and
click the triangle on the left of the icon of easycal. Then you will see
'Reload' button, click it and you will be using the new version.

### Uninstall ###
If you do not want to use easycal again, you can uninstall it easily. Bring up
the extensions management page by clicking the wrench icon  and choosing
**Tools** -> **Extensions**. Select **Developer mode**  by clicking the square and
add developer information to the page. Then click the 'Remove' button, easycal
will be uninstalled.