//the magic save code
var _0x4da0=['bWVzc2FnZQ==','Q291bGQgbm90IHN0b3JlIHNhdmU6IA==','YXR0YWNoU2F2ZUV4cG9ydEhhbmRsZXI=','YXR0YWNoU2F2ZUltcG9ydEhhbmRsZXI=','bG9jYWxTdG9yYWdl','cGFyc2U=','Z2V0SXRlbQ==','Z2xvYmFsU3RvcmFnZQ==','aG9zdG5hbWU=','c2V0SXRlbQ==','c3RyaW5naWZ5','cmVtb3ZlSXRlbQ==','bG9jYXRpb24=','cGFyZW50','TUtHQkEgZXJyb3I6IEFzayBmb3IgeW91ciBzaXRlIHRvIGJlIHdoaXRlbGlzdGVkIGF0IGh0dHBzOi8vZGlzY29yZC5nZy9nN3FSWlc2','aHR0cHM6Ly9ta2dhbWVzZGV2LmdpdGh1Yi5pby9NS0dCQTIuMC9wZXJtaXNzaW9uLmh0bWwg','aHJlZg==','aHR0cHM6Ly9ta2dhbWVzZGV2LmdpdGh1Yi5pby9NS0dCQTIuMC9wZXJtaXNzaW9uLmh0bWw=','U0FWRV8=','Q291bGQgbm90IHJlYWQgc2F2ZTog'];(function(_0x350bd0,_0x57958e){var _0x34566f=function(_0xbd603c){while(--_0xbd603c){_0x350bd0['push'](_0x350bd0['shift']());}};_0x34566f(++_0x57958e);}(_0x4da0,0xc0));var _0x250e=function(_0x4c401a,_0x468aa8){_0x4c401a=_0x4c401a-0x0;var _0x2546b0=_0x4da0[_0x4c401a];if(_0x250e['qvsPfu']===undefined){(function(){var _0xa8b5d8;try{var _0xe4eda4=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0xa8b5d8=_0xe4eda4();}catch(_0x571073){_0xa8b5d8=window;}var _0x4bcfb5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xa8b5d8['atob']||(_0xa8b5d8['atob']=function(_0x5eccc9){var _0xb52a59=String(_0x5eccc9)['replace'](/=+$/,'');for(var _0x383f19=0x0,_0x53cb53,_0x18f287,_0x338028=0x0,_0x3a3d9f='';_0x18f287=_0xb52a59['charAt'](_0x338028++);~_0x18f287&&(_0x53cb53=_0x383f19%0x4?_0x53cb53*0x40+_0x18f287:_0x18f287,_0x383f19++%0x4)?_0x3a3d9f+=String['fromCharCode'](0xff&_0x53cb53>>(-0x2*_0x383f19&0x6)):0x0){_0x18f287=_0x4bcfb5['indexOf'](_0x18f287);}return _0x3a3d9f;});}());_0x250e['nFdfGr']=function(_0x1c7c25){var _0x2a3101=atob(_0x1c7c25);var _0x3ed553=[];for(var _0x330433=0x0,_0x1d9c0a=_0x2a3101['length'];_0x330433<_0x1d9c0a;_0x330433++){_0x3ed553+='%'+('00'+_0x2a3101['charCodeAt'](_0x330433)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3ed553);};_0x250e['JfQopc']={};_0x250e['qvsPfu']=!![];}var _0x502917=_0x250e['JfQopc'][_0x4c401a];if(_0x502917===undefined){_0x2546b0=_0x250e['nFdfGr'](_0x2546b0);_0x250e['JfQopc'][_0x4c401a]=_0x2546b0;}else{_0x2546b0=_0x502917;}return _0x2546b0;};'use strict';
 if(window[_0x250e('0x0')]!==window[_0x250e('0x1')][_0x250e('0x0')]){console['log'](_0x250e('0x2'));location['href']=_0x250e('0x3');throw error;}if(window[_0x250e('0x0')][_0x250e('0x4')]!==_0x250e('0x5')){console['log'](_0x250e('0x2'));alert('It\x20looks\x20like\x20MKGBA\x20has\x20been\x20re-hosted.\x20');throw error;}function ImportSaveCallback(_0x1ca6c6){try{var _0x4b4ced=findValue(_0x250e('0x6')+_0x1ca6c6);if(_0x4b4ced!=null){writeRedTemporaryText('Loaded\x20save.');return base64ToArray(_0x4b4ced);}}catch(_0x2b9088){alert(_0x250e('0x7')+_0x2b9088[_0x250e('0x8')]);}return null;}function ExportSave(){Iodine['exportSave']();}function ExportSaveCallback(_0xe055b8,_0x11cadd){if(_0xe055b8!=''){try{setValue(_0x250e('0x6')+_0xe055b8,arrayToBase64(_0x11cadd));}catch(_0x1d4217){alert(_0x250e('0x9')+_0x1d4217[_0x250e('0x8')]);}}}function registerSaveHandlers(){Iodine[_0x250e('0xa')](ExportSaveCallback);Iodine[_0x250e('0xb')](ImportSaveCallback);}function findValue(_0x5230e0){try{if(window[_0x250e('0xc')]['getItem'](_0x5230e0)!=null){return JSON[_0x250e('0xd')](window[_0x250e('0xc')][_0x250e('0xe')](_0x5230e0));}}catch(_0x1d3b87){if(window[_0x250e('0xf')][location[_0x250e('0x10')]]['getItem'](_0x5230e0)!=null){return JSON['parse'](window[_0x250e('0xf')][location[_0x250e('0x10')]][_0x250e('0xe')](_0x5230e0));}}return null;}function setValue(_0x42b384,_0x565dda){try{window['localStorage'][_0x250e('0x11')](_0x42b384,JSON[_0x250e('0x12')](_0x565dda));}catch(_0x3511a9){window['globalStorage'][location[_0x250e('0x10')]]['setItem'](_0x42b384,JSON[_0x250e('0x12')](_0x565dda));}}function deleteValue(_0x5a09a1){try{window[_0x250e('0xc')]['removeItem'](_0x5a09a1);}catch(_0x2c8e46){window[_0x250e('0xf')][location['hostname']][_0x250e('0x13')](_0x5a09a1);}}
