# Git #
We use git as our source code management(or version control) system.
It is a nice distributed version control tool, making it easy to branch
and merge, and allowing local commits. Common usage of git can be found
at HowtoUseGit page.

# Google Code #
Our project is hosted on Google code. The project homepage is at
http://code.google.com/p/easycal/ .
A source code repository is at Google code, and it was our original central
repository. But now we prefer GitHub. Anyway Google code still holds a
repository mirror.

You can clone the git repository by:
```
git clone https://code.google.com/p/easycal/
```

We use [wiki](http://code.google.com/p/easycal/w/list) pages on Google code to write our documents. The wiki pages
are also in git repository. So you can clone to your machine by:
```
git clone https://code.google.com/p/easycal.wiki/
```

We use ["Issues"](http://code.google.com/p/easycal/issues/list) of Google code to track bug reports and
feature requests. Sometimes tasks are also assigned there.

Archived released version can be found at the ["Downloads"](http://code.google.com/p/easycal/downloads/list) tab of
our project on Google code.

# GitHub #
We have the central source code repository at github.
You can clone it with the following command:

```
git clone git://github.com/alick9188/easycal.git
```

# HTML Tidy #
To validate the conformance of our HTML pages to XHTML, we use
'HTML Tidy'. It is a command line tool to validate HTML/XHTML/XML
files. It can also pretty-print them. Common usage is as follows.

Tidy need a config file to specify several variable options.
Our config file is 'tidy.conf' with the following content:
```
output-xhtml: yes
doctype: strict
char-encoding: utf8
indent: auto
indent-spaces: 4
wrap: 78
```

Use the following command to validate html file 'input.html':
```
tidy -config tidy.conf -e input.html
```
Fix the errors and warnings till they disappear.

To get the pretty-printed version in 'new.html', use:
```
tidy -config tidy.conf -o new.html background.html
```
Alternatively, you can directly modify the input file by:
```
tidy -config tidy.conf -m  background.html
```

# JSLint #
We use JSLint at http://www.jslint.com/ to do static analysis of our
JavaScript code.

# jQuery #
jQuery is a Javascript Library with the motto "write less, do more".
We heavily use it to ease the programming about event-driven, DOM
manipulation, dynamic CSS operation and so on. More info can be found
at http://jquery.com.

# jsDatePick #
jsDatePick is a free calendar in JavaScript. It is licensed under GPL.
We primarily use it in the popup html page. We made some modifications
and translations to suit our needs.