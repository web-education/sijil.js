var Sijil=function(){"use strict";function e(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var t=function(){function e(e,t,n){this.requireService=e,this.parser=t,this.bundles={},this.defaultLanguage=n.defaultLanguage,this.defaultLanguage||"undefined"==typeof window||(this.defaultLanguage=window.navigator.language.split("-")[0]),this.currentLanguage=this.defaultLanguage}return e.prototype.addToBundle=function(e,t){var n=t||this.currentLanguage||this.defaultLanguage||"en";this.bundles[n]||(this.bundles[n]={});var r={},a={};for(var i in e)r[i]=e[i];for(var i in a)r[i]=a[i];this.bundles[n]=r,this.currentLanguage||(this.currentLanguage=t)},e.prototype.loadBundle=function(e,t){var n=this;return this.requireService.load(e).then(function(e){n.addToBundle(e,t)})},e.prototype.loadBundles=function(e){var t=this;return Promise.all(e.map(function(e){return t.loadBundle(e.where,e.lang)}))},e.prototype.unloadBundle=function(e){delete this.bundles[e]},e.prototype.getLoadedLanguages=function(){return Object.keys(this.bundles)},e.prototype.translate=function(e,t,n){var r=n||this.currentLanguage,a=this.bundles[r]&&this.bundles[r][e]||this.defaultLanguage&&this.bundles[this.defaultLanguage]&&this.bundles[this.defaultLanguage][e]||e;return a!==e&&t?this.parser.compile(a,t,function(t){return console.error(t),e}):a},e}(),n=function(t){function n(e,n){t.call(this,e),this.message=e,this.fragment=n}return e(n,t),n}(Error),r=function(){function e(){}return e.prototype.getParameter=function(e,t,n){var r=t.split(/\s+/);return 1===r.length?"$"===t[0]?e[t.substr(1)]:n?t:void 0!==e[t]?e[t]:t:t.split(/\s+/).reduce(function(t,n){return t.push("$"===n[0]?e[n.substr(1)]:n),t},[]).join(" ")},e.prototype.compileFragment=function(e,t){e=e.replace(/{{|}}/g,"");var r,a;if(!((r=e.indexOf("?"))>0&&(a=e.lastIndexOf(":"))>1))return e=e.trim(),t[e];var i=e.substring(0,r).trim(),o=e.substring(r+1,a).trim(),u=e.substring(a+1).trim(),s=this.getParameter(t,o),l=this.getParameter(t,u),c=i.split(/\s+/);if(1===c.length){var g=t[c[0]];return g?s:l}if(3!==c.length)throw new n("Invalid condition for fragment : "+e,e);var d=this.getParameter(t,c[0],t instanceof Array),f=this.getParameter(t,c[2],t instanceof Array),p=c[1];switch(p){case"==":return d==f?s:l;case">":return d>f?s:l;case">=":return d>=f?s:l;case"<":return d<f?s:l;case"<=":return d<=f?s:l;default:throw new n("Invalid conditional operator for fragment : "+e,e)}},e.prototype.compile=function(t,n,r){var a=t.split(e.delimRegexp),i=t.match(e.delimRegexp),o="";if(r||(r=e.defaultErrorCallback),i){for(var u=0;u<a.length;u++)if(o+=a[u],!(u>i.length-1))try{o+=this.compileFragment(i[u],n)}catch(e){o+=r(e)}}else o+=t;return o},e.delimiters=["{{","}}"],e.delimRegexp=new RegExp(e.delimiters[0]+"[^}]+"+e.delimiters[1],"gm"),e.defaultErrorCallback=function(e){return console.error(e),e.fragment},e}(),a=function(){function e(){}return e.prototype.load=function(e,t){return new Promise(function(n,r){var a=new XMLHttpRequest;a.open("GET",e,!t),a.responseType="json",a.onload=function(e){if(200===a.status){var t=a.response;n(t)}else console.log("Unsupported language.")},a.onerror=function(e){console.error(e)},a.send()})},e}(),i={defaultLanguage:window?window.navigator.language.split("-")[0]:void 0},o=new t(new a,new r,i);return o.factory=function(e,n,o){return new t(e||new a,n||new r,o||i)},o}();
//# sourceMappingURL=sijil.js.map
