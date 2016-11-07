!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@angular/core"),require("@angular/http"),require("rxjs/add/operator/toPromise")):"function"==typeof define&&define.amd?define(["exports","@angular/core","@angular/http","rxjs/add/operator/toPromise"],t):t(e.SijilModule=e.SijilModule||{},e.ng.core,e.ng.http,e.Rx)}(this,function(e,t,n,r){"use strict";function i(e,t){function n(){this.constructor=e}for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function o(e,t,n,r){var i,o=arguments.length,a=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var u=e.length-1;u>=0;u--)(i=e[u])&&(a=(o<3?i(a):o>3?i(t,n,a):i(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a}function a(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}var u=function(){function e(e){this.http=e}return e.prototype.load=function(e){return this.http.get(e).toPromise().then(function(e){return e.json()})},e=o([t.Injectable(),a("design:paramtypes",["function"==typeof(r="undefined"!=typeof n.Http&&n.Http)&&r||Object])],e);var r}(),s=function(){function e(){}return e}(),f=function(e){function t(t,n){e.call(this,t),this.message=t,this.fragment=n}return i(t,e),t}(Error),l=function(){function e(){}return e}(),p=function(){function e(){}return e.prototype.getParameter=function(e,t,n){var r=t.split(/\s+/);return 1===r.length?"$"===t[0]?e[t.substr(1)]:n?t:e[t]||t:t.split(/\s+/).reduce(function(t,n){return t.push("$"===n[0]?e[n.substr(1)]:n),t},[]).join(" ")},e.prototype.compileFragment=function(e,t){e=e.replace(/{{|}}/g,"");var n,r;if(!((n=e.indexOf("?"))>0&&(r=e.lastIndexOf(":"))>1))return e=e.trim(),t[e];var i=e.substring(0,n).trim(),o=e.substring(n+1,r).trim(),a=e.substring(r+1).trim(),u=this.getParameter(t,o),s=this.getParameter(t,a),l=i.split(/\s+/);if(1===l.length){var p=t[l[0]];return p?u:s}if(3!==l.length)throw new f("Invalid condition for fragment : "+e,e);var c=this.getParameter(t,l[0],t instanceof Array),d=this.getParameter(t,l[2],t instanceof Array),g=l[1];switch(g){case"==":return c==d?u:s;case">":return c>d?u:s;case">=":return c>=d?u:s;case"<":return c<d?u:s;case"<=":return c<=d?u:s;default:throw new f("Invalid conditional operator for fragment : "+e,e)}},e.prototype.compile=function(t,n,r){var i=t.split(e.delimRegexp),o=t.match(e.delimRegexp),a="";if(r||(r=e.defaultErrorCallback),o){for(var u=0;u<i.length;u++)if(a+=i[u],!(u>o.length-1))try{a+=this.compileFragment(o[u],n)}catch(e){a+=r(e)}}else a+=t;return a},e.delimiters=["{{","}}"],e.delimRegexp=new RegExp(e.delimiters[0]+"[^}]+"+e.delimiters[1],"gm"),e.defaultErrorCallback=function(e){return console.error(e),e.fragment},e}(),c=function(){function e(e,t,n){this.requireService=e,this.parser=t,this.bundles={},this.defaultLanguage=n.defaultLanguage,this.defaultLanguage||"undefined"==typeof window||(this.defaultLanguage=window.navigator.language.split("-")[0]),this.currentLanguage=this.defaultLanguage}return e.prototype.addToBundle=function(e,t){var n=t||this.currentLanguage||this.defaultLanguage||"en";this.bundles[n]||(this.bundles[n]={});for(var r in e)this.bundles[n][r]=e[r];this.currentLanguage||(this.currentLanguage=t)},e.prototype.loadBundle=function(e,t){var n=this;return this.requireService.load(e).then(function(e){n.addToBundle(e,t)})},e.prototype.loadBundles=function(e){var t=this;return Promise.all(e.map(function(e){return t.loadBundle(e.where,e.lang)}))},e.prototype.unloadBundle=function(e){delete this.bundles[e]},e.prototype.getLoadedLanguages=function(){return Object.keys(this.bundles)},e.prototype.translate=function(e,t,n){var r=n||this.currentLanguage,i=this.bundles[r]&&this.bundles[r][e]||this.defaultLanguage&&this.bundles[this.defaultLanguage]&&this.bundles[this.defaultLanguage][e]||e;return i!==e&&t?this.parser.compile(i,t,function(t){return console.error(t),e}):i},e}(),d=function(){function e(){}return e}(),g={defaultLanguage:"undefined"!=typeof window?window.navigator.language.split("-")[0]:void 0},h=function(){function e(e,t){this.bundlesService=e,this.changeDetectorRef=t}return e.prototype.refreshTranslation=function(){this.wrapperRef.nativeElement.innerHTML=this.bundlesService.translate(this.value,this.parameters,this.fixedLanguage)},e.prototype.ngAfterViewInit=function(){this.value=this.wrapperRef.nativeElement.innerHTML.trim(),this.loaded=!0},e.prototype.ngDoCheck=function(){this.loaded&&this.refreshTranslation()},o([t.ViewChild("wrapper"),a("design:type","function"==typeof(n="undefined"!=typeof t.ElementRef&&t.ElementRef)&&n||Object)],e.prototype,"wrapperRef"),o([t.Input("s5l-params"),a("design:type",Object)],e.prototype,"parameters"),o([t.Input("s5l-lang"),a("design:type",String)],e.prototype,"fixedLanguage"),e=o([t.Component({selector:"s5l",template:"\n    <span #wrapper>\n        <ng-content></ng-content>\n    </span>",changeDetection:t.ChangeDetectionStrategy.OnPush}),a("design:paramtypes",["function"==typeof(r="undefined"!=typeof c&&c)&&r||Object,"function"==typeof(i="undefined"!=typeof t.ChangeDetectorRef&&t.ChangeDetectorRef)&&i||Object])],e);var n,r,i}(),m=function(){function e(e){this.bundlesService=e}return e.prototype.transform=function(e,t,n){return this.bundlesService.translate(e,t,n)},e=o([t.Pipe({name:"translate",pure:!1}),a("design:paramtypes",["function"==typeof(n="undefined"!=typeof c&&c)&&n||Object])],e);var n}(),y=[{provide:c,useClass:c,deps:[s,l,d]},{provide:s,useClass:u},{provide:l,useClass:p},{provide:d,useValue:g}],v=function(){function e(){}return e.forRoot=function(t,n,r){return y[1].useClass=t||u,y[2].useClass=n||p,y[3].useValue=r||g,{ngModule:e,providers:y}},e=o([t.NgModule({imports:[n.HttpModule],declarations:[h,m],providers:y,exports:[h,m]}),a("design:paramtypes",[])],e)}();e.SijilModule=v,e.HttpRequireService=u,e.RequireService=s,e.FragmentsParser=p,e.ParserError=f,e.Parser=l,e.BundlesService=c,e.defaultSijilOpts=g,e.SijilOpts=d,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=sijil.module.umd.js.map