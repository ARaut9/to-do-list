!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}([function(e,t,n){var r=n(6),o=n(2),u=36e5,a=6e4,c=2,i=/[T ]/,s=/:/,l=/^(\d{2})$/,d=[/^([+-]\d{2})$/,/^([+-]\d{3})$/,/^([+-]\d{4})$/],f=/^(\d{4})/,m=[/^([+-]\d{4})/,/^([+-]\d{5})/,/^([+-]\d{6})/],p=/^-(\d{2})$/,g=/^-?(\d{3})$/,h=/^-?(\d{2})-?(\d{2})$/,y=/^-?W(\d{2})$/,v=/^-?W(\d{2})-?(\d{1})$/,D=/^(\d{2}([.,]\d*)?)$/,S=/^(\d{2}):?(\d{2}([.,]\d*)?)$/,x=/^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,M=/([Z+-].*)$/,T=/^(Z)$/,b=/^([+-])(\d{2})$/,w=/^([+-])(\d{2}):?(\d{2})$/;function L(e,t,n){t=t||0,n=n||0;var r=new Date(0);r.setUTCFullYear(e,0,4);var o=7*t+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+o),r}e.exports=function(e,t){if(o(e))return new Date(e.getTime());if("string"!=typeof e)return new Date(e);var n=(t||{}).additionalDigits;n=null==n?c:Number(n);var C=function(e){var t,n={},r=e.split(i);if(s.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1]),t){var o=M.exec(t);o?(n.time=t.replace(o[1],""),n.timezone=o[1]):n.time=t}return n}(e),Y=function(e,t){var n,r=d[t],o=m[t];if(n=f.exec(e)||o.exec(e)){var u=n[1];return{year:parseInt(u,10),restDateString:e.slice(u.length)}}if(n=l.exec(e)||r.exec(e)){var a=n[1];return{year:100*parseInt(a,10),restDateString:e.slice(a.length)}}return{year:null}}(C.date,n),I=Y.year,E=function(e,t){if(null===t)return null;var n,r,o,u;if(0===e.length)return(r=new Date(0)).setUTCFullYear(t),r;if(n=p.exec(e))return r=new Date(0),o=parseInt(n[1],10)-1,r.setUTCFullYear(t,o),r;if(n=g.exec(e)){r=new Date(0);var a=parseInt(n[1],10);return r.setUTCFullYear(t,0,a),r}if(n=h.exec(e)){r=new Date(0),o=parseInt(n[1],10)-1;var c=parseInt(n[2],10);return r.setUTCFullYear(t,o,c),r}if(n=y.exec(e))return u=parseInt(n[1],10)-1,L(t,u);if(n=v.exec(e)){u=parseInt(n[1],10)-1;var i=parseInt(n[2],10)-1;return L(t,u,i)}return null}(Y.restDateString,I);if(E){var k,q=E.getTime(),H=0;if(C.time&&(H=function(e){var t,n,r;if(t=D.exec(e))return(n=parseFloat(t[1].replace(",",".")))%24*u;if(t=S.exec(e))return n=parseInt(t[1],10),r=parseFloat(t[2].replace(",",".")),n%24*u+r*a;if(t=x.exec(e)){n=parseInt(t[1],10),r=parseInt(t[2],10);var o=parseFloat(t[3].replace(",","."));return n%24*u+r*a+1e3*o}return null}(C.time)),C.timezone)A=C.timezone,k=((B=T.exec(A))?0:(B=b.exec(A))?(U=60*parseInt(B[2],10),"+"===B[1]?-U:U):(B=w.exec(A))?(U=60*parseInt(B[2],10)+parseInt(B[3],10),"+"===B[1]?-U:U):0)*a;else{var F=q+H,j=new Date(F);k=r(j);var $=new Date(F);$.setDate(j.getDate()+1);var O=r($)-r(j);O>0&&(k+=O)}return new Date(q+H+k)}var A,B,U;return new Date(e)}},function(e,t,n){var r=n(11);e.exports=function(e){return r(e,{weekStartsOn:1})}},function(e,t){e.exports=function(e){return e instanceof Date}},function(e,t,n){var r=n(0),o=n(1);e.exports=function(e){var t=r(e),n=t.getFullYear(),u=new Date(0);u.setFullYear(n+1,0,4),u.setHours(0,0,0,0);var a=o(u),c=new Date(0);c.setFullYear(n,0,4),c.setHours(0,0,0,0);var i=o(c);return t.getTime()>=a.getTime()?n+1:t.getTime()>=i.getTime()?n:n-1}},function(e,t,n){var r=n(5),o=n(10),u=n(3),a=n(0),c=n(13),i=n(14);var s={M:function(e){return e.getMonth()+1},MM:function(e){return d(e.getMonth()+1,2)},Q:function(e){return Math.ceil((e.getMonth()+1)/3)},D:function(e){return e.getDate()},DD:function(e){return d(e.getDate(),2)},DDD:function(e){return r(e)},DDDD:function(e){return d(r(e),3)},d:function(e){return e.getDay()},E:function(e){return e.getDay()||7},W:function(e){return o(e)},WW:function(e){return d(o(e),2)},YY:function(e){return d(e.getFullYear(),4).substr(2)},YYYY:function(e){return d(e.getFullYear(),4)},GG:function(e){return String(u(e)).substr(2)},GGGG:function(e){return u(e)},H:function(e){return e.getHours()},HH:function(e){return d(e.getHours(),2)},h:function(e){var t=e.getHours();return 0===t?12:t>12?t%12:t},hh:function(e){return d(s.h(e),2)},m:function(e){return e.getMinutes()},mm:function(e){return d(e.getMinutes(),2)},s:function(e){return e.getSeconds()},ss:function(e){return d(e.getSeconds(),2)},S:function(e){return Math.floor(e.getMilliseconds()/100)},SS:function(e){return d(Math.floor(e.getMilliseconds()/10),2)},SSS:function(e){return d(e.getMilliseconds(),3)},Z:function(e){return l(e.getTimezoneOffset(),":")},ZZ:function(e){return l(e.getTimezoneOffset())},X:function(e){return Math.floor(e.getTime()/1e3)},x:function(e){return e.getTime()}};function l(e,t){t=t||"";var n=e>0?"-":"+",r=Math.abs(e),o=r%60;return n+d(Math.floor(r/60),2)+t+d(o,2)}function d(e,t){for(var n=Math.abs(e).toString();n.length<t;)n="0"+n;return n}e.exports=function(e,t,n){var r=t?String(t):"YYYY-MM-DDTHH:mm:ss.SSSZ",o=(n||{}).locale,u=i.format.formatters,l=i.format.formattingTokensRegExp;o&&o.format&&o.format.formatters&&(u=o.format.formatters,o.format.formattingTokensRegExp&&(l=o.format.formattingTokensRegExp));var d=a(e);return c(d)?function(e,t,n){var r,o,u,a=e.match(n),c=a.length;for(r=0;r<c;r++)o=t[a[r]]||s[a[r]],a[r]=o||((u=a[r]).match(/\[[\s\S]/)?u.replace(/^\[|]$/g,""):u.replace(/\\/g,""));return function(e){for(var t="",n=0;n<c;n++)a[n]instanceof Function?t+=a[n](e,s):t+=a[n];return t}}(r,u,l)(d):"Invalid Date"}},function(e,t,n){var r=n(0),o=n(7),u=n(8);e.exports=function(e){var t=r(e);return u(t,o(t))+1}},function(e,t){e.exports=function(e){var t=new Date(e.getTime()),n=t.getTimezoneOffset();return t.setSeconds(0,0),6e4*n+t.getTime()%6e4}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}},function(e,t,n){var r=n(9),o=6e4,u=864e5;e.exports=function(e,t){var n=r(e),a=r(t),c=n.getTime()-n.getTimezoneOffset()*o,i=a.getTime()-a.getTimezoneOffset()*o;return Math.round((c-i)/u)}},function(e,t,n){var r=n(0);e.exports=function(e){var t=r(e);return t.setHours(0,0,0,0),t}},function(e,t,n){var r=n(0),o=n(1),u=n(12),a=6048e5;e.exports=function(e){var t=r(e),n=o(t).getTime()-u(t).getTime();return Math.round(n/a)+1}},function(e,t,n){var r=n(0);e.exports=function(e,t){var n=t&&Number(t.weekStartsOn)||0,o=r(e),u=o.getDay(),a=(u<n?7:0)+u-n;return o.setDate(o.getDate()-a),o.setHours(0,0,0,0),o}},function(e,t,n){var r=n(3),o=n(1);e.exports=function(e){var t=r(e),n=new Date(0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),o(n)}},function(e,t,n){var r=n(2);e.exports=function(e){if(r(e))return!isNaN(e);throw new TypeError(toString.call(e)+" is not an instance of Date")}},function(e,t,n){var r=n(15),o=n(16);e.exports={distanceInWords:r(),format:o()}},function(e,t){e.exports=function(){var e={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};return{localize:function(t,n,r){var o;return r=r||{},o="string"==typeof e[t]?e[t]:1===n?e[t].one:e[t].other.replace("{{count}}",n),r.addSuffix?r.comparison>0?"in "+o:o+" ago":o}}}},function(e,t,n){var r=n(17);e.exports=function(){var e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],t=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Su","Mo","Tu","We","Th","Fr","Sa"],o=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],u=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=["AM","PM"],c=["am","pm"],i=["a.m.","p.m."],s={MMM:function(t){return e[t.getMonth()]},MMMM:function(e){return t[e.getMonth()]},dd:function(e){return n[e.getDay()]},ddd:function(e){return o[e.getDay()]},dddd:function(e){return u[e.getDay()]},A:function(e){return e.getHours()/12>=1?a[1]:a[0]},a:function(e){return e.getHours()/12>=1?c[1]:c[0]},aa:function(e){return e.getHours()/12>=1?i[1]:i[0]}};return["M","D","DDD","d","Q","W"].forEach(function(e){s[e+"o"]=function(t,n){return function(e){var t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"st";case 2:return e+"nd";case 3:return e+"rd"}return e+"th"}(n[e](t))}}),{formatters:s,formattingTokensRegExp:r(s)}}},function(e,t){var n=["M","MM","Q","D","DD","DDD","DDDD","d","E","W","WW","YY","YYYY","GG","GGGG","H","HH","h","hh","m","mm","s","ss","S","SS","SSS","Z","ZZ","X","x"];e.exports=function(e){var t=[];for(var r in e)e.hasOwnProperty(r)&&t.push(r);var o=n.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+o.join("|")+"|.)","g")}},function(e,t,n){"use strict";n.r(t);let r=[];const o=e=>{let t=[];return{title:e,toDoItems:t,addToDoItem:e=>{t.push(e)}}},u=(e,t,n,r,o)=>({title:e,discription:t,dueDate:n,isUrgent:r,isCompleted:o});function a(){const e=document.querySelector(".project-list-container"),t=function(e){const t=document.querySelector("#project-list");if(t.children.length>0)for(;0!==t.children.length;)t.removeChild(t.lastChild);for(let n=0;n<e.length;n++){const r=document.createElement("li");r.setAttribute("id",`${n+1}`),r.innerHTML=e[n].title,r.style.fontSize="2.2rem",r.style.padding="20px",r.style.marginBottom="10px",t.appendChild(r)}return t}(r);e.appendChild(t)}function c(e){document.querySelector("#project-name-heading").innerHTML=e}function i(e){const t=document.querySelector("#todo-list");if(t.children.length>0)for(;0!==t.children.length;)t.removeChild(t.lastChild);for(let n=0;n<e.length;n++){const r=document.createElement("li");r.setAttribute("id",`${n+1}`);const o=document.createElement("div");o.classList.add("taskCompleteChbx"),e[n].isCompleted?o.style.backgroundImage="url('icons/checked.png')":o.style.backgroundImage="url('icons/not-checked.png')",o.style.backgroundRepeat="no-repeat",o.style.backgroundPosition="center",o.style.flex=1;const u=document.createElement("div");u.classList.add("priorityStatus"),e[n].isUrgent?u.style.backgroundImage="url('icons/important.png')":u.style.backgroundImage="url('icons/not-important.png')",u.style.backgroundRepeat="no-repeat",u.style.backgroundPosition="center",u.style.flex=1;const a=document.createElement("span");a.innerHTML=e[n].title,a.style.flex=5;const c=document.createElement("date");c.innerHTML=e[n].dueDate,c.style.flex=5;const i=document.createElement("div");i.style.flex=1;const s=document.createElement("button");s.innerHTML="&#x25BC",s.style.backgroundColor="inherit",s.style.border="0",s.style.cursor="pointer",i.appendChild(s),s.classList.add("expandBtn"),r.appendChild(o),r.appendChild(u),r.appendChild(a),r.appendChild(c),r.appendChild(i),t.appendChild(r)}if(0===t.children.length){const e=document.createElement("li");e.innerHTML="Click on <strong> Add To Do </strong> Button to add a new To Do Item",e.style.padding="30px",t.appendChild(e)}document.querySelector(".todo-items-container").appendChild(t),f(),m(),p()}n.d(t,"addEventListenerToCheckBox",function(){return f}),n.d(t,"addEventListenerToPrioritykBox",function(){return m}),n.d(t,"addEventListenerToExpandOption",function(){return p});let s=n(4),l=o("Default");function d(){const e=document.querySelectorAll("#project-list > li");for(let t=0;t<e.length;t++)e[t].addEventListener("click",t=>{c(t.target.innerText);for(let t=0;t<e.length;t++)e[t].classList.contains("selected")&&e[t].classList.remove("selected");t.target.classList.add("selected"),i(r[t.target.id-1].toDoItems)})}function f(){const e=document.querySelectorAll(".taskCompleteChbx");for(let t=0;t<e.length;t++)e[t].addEventListener("click",e=>{let t=document.querySelector(".selected"),n=r[t.id-1],o=n.toDoItems[e.target.parentNode.id-1];o.isCompleted?o.isCompleted=!1:o.isCompleted=!0,t&&i(n.toDoItems)})}function m(){const e=document.querySelectorAll(".priorityStatus");for(let t=0;t<e.length;t++)e[t].addEventListener("click",e=>{let t=document.querySelector(".selected"),n=r[t.id-1],o=n.toDoItems[e.target.parentNode.id-1];o.isUrgent?o.isUrgent=!1:o.isUrgent=!0,t&&i(n.toDoItems)})}function p(){const e=document.querySelectorAll(".expandBtn");for(let t=0;t<e.length;t++)e[t].addEventListener("click",e=>{let t=document.querySelector(".selected"),n=e.target.parentNode.parentNode;n.style.borderBottom="0";let o=r[t.id-1].toDoItems[n.id-1];const u=document.createElement("li"),a=document.createElement("p");a.innerHTML=o.discription,a.style.paddingLeft="22px",u.appendChild(a),n.parentNode.insertBefore(u,n.nextSibling)})}r.push(l),l.addToDoItem(u("Buy Milk","Buy Milk from store","16/5/2019",!0,!0)),l.addToDoItem(u("Buy Chesse","Buy Chesse from store","16/5/2019",!0,!1)),a(),d(),c("Default"),i(l.toDoItems),document.querySelector("#project-list li").classList.add("selected"),document.querySelector("#new-project-btn").addEventListener("click",()=>{const e=document.querySelector(".new-project-form-container");e.classList.remove("hidden"),e.classList.add("show")}),document.querySelector("#new-project-form").addEventListener("submit",e=>{const t=document.querySelector("#project-name").value;r.push(o(t)),a(),d();const n=document.querySelector(".new-project-form-container");n.classList.remove("show"),n.classList.add("hidden"),e.preventDefault()}),document.querySelector("#project-cancel-btn").addEventListener("click",()=>{const e=document.querySelector(".new-project-form-container");e.classList.remove("show"),e.classList.add("hidden")}),document.querySelector("#new-todo-btn").addEventListener("click",()=>{const e=document.querySelector(".new-todo-form-container");e.classList.remove("hidden"),e.classList.add("show")}),document.querySelector("#new-todo-form").addEventListener("submit",e=>{const t=document.querySelector("#todo-title").value,n=document.querySelector("#todo-description").value;let o=document.querySelector("#todo-due-date").value.split("-"),a=new Date(o[0],o[1]-1,o[2]);const c=s(a,"DD/MM/YYYY"),l=document.querySelector("#importance").checked;let d=document.querySelector(".selected");if(d){let e=r[d.id-1];e.addToDoItem(u(t,n,c,l,!1)),i(e.toDoItems)}const f=document.querySelector(".new-todo-form-container");f.classList.remove("show"),f.classList.add("hidden"),e.preventDefault()}),document.querySelector("#todo-cancel-btn").addEventListener("click",()=>{const e=document.querySelector(".new-todo-form-container");e.classList.remove("show"),e.classList.add("hidden")})}]);