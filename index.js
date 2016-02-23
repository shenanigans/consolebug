
global.consul = console;
console.log ('start');
require ('consoleTest');
console.log ('end');

var winnder = require('nw.gui').Window.get();
winnder.on ('loaded', function(){
    winnder.showDevTools();
});
