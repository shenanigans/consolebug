Reproducing the Bug
===================
A copy of nw.js 0.13-b6 is expected to be present at `./nw`.

 * enter the `./dep` directory and execute `npm link`
 * return to repo root and execute `npm link consoleTest`
 * run with `launch.vbs` or as appropriate for your system

It Should
---------
Log the following to console:
```
start
hello, world!
secondary hello, world!
end
```

Instead It
----------
Logs the following to console:
```
start
secondary hello, world!
end
```
