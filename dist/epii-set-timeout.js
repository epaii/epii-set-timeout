!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.EpiiSetTimeout=n():e.EpiiSetTimeout=n()}(this,(function(){return e={138:e=>{function n(e,n,t){let l=e,o=[],r=[],i=!1;function s(){r.length>0&&r.forEach((n=>n(e)))}n&&r.push(n),t&&o.push(t),s();let u=setInterval((()=>{i||(--e>=0&&s(),0===e&&(clearInterval(u),o.length>0&&o.forEach((e=>e()))))}),1e3);return{onTime(e){return o.push(e),this},onFinish(e){return o.push(e),this},removeFinishCallback(e){if(null!=e){var n=o.indexOf(e);n>-1&&o.splice(n,1)}else o=[]},reset(n=null){e=null==n?l:n},onOnce(e){return r.push(e),this},removeOnceCallback(e){if(null!=e){var n=r.indexOf(e);n>-1&&r.splice(n,1)}else r=[]},stop(){u&&(clearInterval(u),o=[],r=[],u=null)},pause(){i=!0},continue(){i=!1}}}let t=null;e.exports={EpiiSetInterval:n,start:(e=6e4,l=null,o=null)=>(t=n(e,o,l),t),onTime(e){return t&&t.onTime(e),this},onFinish(e){return t&&t.onFinish(e),this},removeFinishCallback(e){t&&t.removeFinishCallback(e)},reset(e=null){t&&t.reset(callback)},onOnce(e){t&&t.onOnce(e)},removeOnceCallback(e){t&&t.removeOnceCallback(e)},stop(){t&&t.stop(callback)},pause(){t&&t.pause(callback)},continue(){t&&t.continue(callback)}}}},n={},function t(l){var o=n[l];if(void 0!==o)return o.exports;var r=n[l]={exports:{}};return e[l](r,r.exports,t),r.exports}(138);var e,n}));