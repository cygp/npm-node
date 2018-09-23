var os = require('os');
var colors = require('colors');
var Converttime = require('./Converttime');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
    var cpu = os.cpus()[0].model;
    var uptime = Converttime.formattime();
    var userInfo = os.userInfo();
    console.log('System:'.green, type);
    console.log('Release:'.yellow, release);
    console.log('CPU model:'.blue, cpu);
    console.log('Uptime:'.grey, uptime);
    console.log('User name:'.red, userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

exports.print = getOSinfo;