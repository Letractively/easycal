# Unit/Integrated/System Tests #

## Unit Tests ##
### Time Extraction Tests ###
`TimeTest.htm` offers a lot of tests for time extraction.

### Message Passing Tests ###
We have used a temporal `test.html` to test the messaging passing
between tabs.

### Popup Layer tests ###
The editcal popup should be available and good on every possible webpages/URLs. Below is a list of useful test cases.
  * http://www.the-art-of-web.com/css/radial-gradients/

### Firefox specific ###
The `test/` directory serves as the container of unit tests of
modules/functions defined under `lib/`.

## Integrated/System Tests ##
These two are no so different for our light-weight EasyCal. The
procedures are talked in details below in the black box tests section.

# White/Black Box Tests #
## White Box Tests ##
### console object ###
Use `console` object in JavaScript:
```
console.log(...);
console.debug(...);
console.warn(...);
console.error(...);
console.info(...);
```

Of course the classic way still works:
```
alert("A popup alert!");
```

Note that we should not let production release print out lots of debug
messages.

### Chrome Dev Tool ###
Use shortkey F12 to open Inspector window to inspect the function flow.

Keep eyes on some important stuff/tab:
  * Resources
  * Local Storage
  * Scripts. (We can set breakpoints, do step in, etc)
  * Console. See output of `console.log()`...

### Firefox Dev Tools ###
It seems there is no similar tools to inspect HTML of content scripts.
Open the static html page in an ordinary Firefox tab, and Firebug can
help.

## Black Box Tests ##
We do a lot of black box tests of EasyCal:
  1. Reload the extension, turn off debug tools(use F12 to toggle)
  1. Randomly open a web page/local html page: HTTP, HTTPS, file...
  1. Select words/sentences/paragraphs at will, and add into schedule.
  1. Check whether the popup layer contains pre-filled form.
  1. Click OK/Cancel/Grey out area to see if they work as expected.
  1. Click the easycal icon on address bar.
  1. Check the tiny popup page: is the UI OK or bad? Do schedules of today are all listed? Are they sorted in order?
  1. Click for some other dates, check the stuff mentioned above.

# Standard Compatibility Tests #

See HTML Tidy and JSLint section of DevTools page.