(this["webpackJsonpgithub-jobs"]=this["webpackJsonpgithub-jobs"]||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/loading.b87a4400.svg"},48:function(e,a,t){e.exports=t(88)},54:function(e,a,t){},65:function(e,a,t){e.exports=t.p+"static/media/arrow-up-thick.19459e6a.svg"},88:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(10),l=t.n(r),o=t(12),s=t.n(o),i=t(16),m=t(11);t(54);function u(e){var a=e.children,t=e.className+" secondary-text";return c.a.createElement("p",{className:t},a)}function d(e){var a=e.children,t=e.className+" primary-text";return c.a.createElement("h2",{className:t},a)}var E=t(42),b=t.n(E),p=function(e){var a=e.jobs;return c.a.createElement("div",{className:"jobs"},a&&a.map((function(e){var a=b()(e.created_at).fromNow(),t="/jobs/"+e.id;return c.a.createElement("a",{key:e.id,href:t},c.a.createElement("div",{className:"job"},c.a.createElement("div",{className:"image"},e.company_logo?c.a.createElement("img",{src:e.company_logo,alt:"logo",className:"company-logo"}):c.a.createElement("div",{className:"company-logo"},"n/a")),c.a.createElement("div",{className:"job-upper mt-4"},c.a.createElement(u,{className:"m-1"},a),c.a.createElement(u,{className:"m-1"},"\u2022"),c.a.createElement(u,{className:"m-1"},e.type)),c.a.createElement("div",{className:"job-main m-1"},c.a.createElement(d,{className:""},e.title),c.a.createElement(u,{className:""},e.company)),c.a.createElement("div",{className:"job-footer"},c.a.createElement(u,{className:"location-text"},e.location))))})))},v=t(43),f=t(46);function g(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),r=a[0],l=a[1];Object(n.useEffect)((function(){window.addEventListener("scroll",o)}),[]);var o=function(){window.pageYOffset<=1e3?l(!1):l(!0)};return c.a.createElement(f.a,{in:r,timeout:300,classNames:"scroll",unmountOnExit:!0},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return v.animateScroll.scrollToTop()},className:"scroll-to-top"},c.a.createElement("img",{src:t(65),alt:"scroll-to-top"}))))}function h(e){var a=e.title,t=e.onClick,n=e.className,r=(void 0===n?"":n)+" primary-button";return c.a.createElement("button",{onClick:t,className:r},a)}var N=t(25),j=t(26);function w(e){var a=e.handleSubmit;return c.a.createElement("form",null,c.a.createElement("div",{className:"filters row"},c.a.createElement("div",{className:"search col-5"},c.a.createElement(N.a,{size:40,color:"#26193d"}),c.a.createElement("input",{name:"search",id:"search",placeholder:"Filter by title, companies, expertise..."})),c.a.createElement("div",{className:"filter col"},c.a.createElement(j.a,{size:40,color:"#26193d"}),c.a.createElement("input",{name:"location",id:"location",placeholder:"Filter By Location..."})),c.a.createElement("div",{className:"search-button col"},c.a.createElement("input",{name:"full_time",id:"full-time",type:"checkbox"}),c.a.createElement("label",{htmlFor:"full-time",id:"full-time-label"},"Full Time Only"),c.a.createElement(h,{title:"Search",onClick:function(){return a()}}))))}function y(e){var a=e.jobs,r=e.loading,l=e.getJobs,o=e.jobsError;return Object(n.useEffect)((function(){l()}),[]),r&&a.length<=0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"loading"},c.a.createElement("img",{src:t(24),alt:"loading"}))):0===a.length?c.a.createElement(c.a.Fragment,null,c.a.createElement(d,{className:"text-center h1"},"There Are No Jobs")):c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),c.a.createElement("div",{className:"container"},c.a.createElement(w,null),c.a.createElement(p,{jobs:a}),r&&c.a.createElement("div",{className:"loading"},c.a.createElement("img",{src:t(24),alt:"loading"})),a.length<50||o?c.a.createElement(d,{className:"text-center"},"There Are No More Jobs"):c.a.createElement(h,{title:"Load More",onClick:l})))}function x(e){e.handleSubmit;return c.a.createElement("div",{className:"nav-background"},c.a.createElement("div",{className:"container"},c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"logo inverted"},c.a.createElement(d,{className:"h1 text-light"},c.a.createElement("a",{className:"dev-logo",href:"/"},"devjobs"))))))}var O=t(2),k=t(17),S=t.n(k),F=t(44),_=t.n(F);function J(e){var a=e.getJob,r=e.job;Object(n.useEffect)((function(){var e=window.location.pathname.split("/")[2];a(e)}),[]);if(r){var l=new _.a(r.company_url);return c.a.createElement("div",{className:"container custom-container"},c.a.createElement("div",{className:"upper"},r.company_logo&&c.a.createElement("img",{src:r.company_logo,className:"details-company-logo"}),c.a.createElement("div",{className:"company-details"},c.a.createElement(d,{className:"h2"},r.company),l&&c.a.createElement(u,null,l.host)),c.a.createElement(h,{title:"Company Site",className:"company-site-button",onClick:function(){return e=r.company_url,void(window.location.href=e);var e}})),c.a.createElement("div",{className:"job-body"},c.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:r.description}})))}return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"loading"},c.a.createElement("img",{src:t(24),alt:"loading"})))}function C(){return c.a.createElement("div",{className:"container text-center"},c.a.createElement(d,{className:"h1"},"Page Not Found"))}var T=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(),o=Object(m.a)(l,2),u=o[0],d=o[1],E=Object(n.useState)(1),b=Object(m.a)(E,2),p=b[0],v=b[1],f=Object(n.useState)(!1),g=Object(m.a)(f,2),h=g[0],N=g[1],j=Object(n.useState)(!1),w=Object(m.a)(j,2),k=w[0],F=w[1],_=function(){var e=Object(i.a)(s.a.mark((function e(){var a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(!0),!window.location.search){e.next=9;break}return 1===p&&r([]),n="https://jobs.github.com/positions.json?&page="+p+"&"+window.location.search,e.next=6,S.a.get(n);case 6:a=e.sent,e.next=12;break;case 9:return e.next=11,S.a.get("https://jobs.github.com/positions.json?&page="+p);case 11:a=e.sent;case 12:200!==a.status&&console.log("Error From Server Side"),N(!1),v(p+1),0===a.data.length?F(!0):(F(!1),window.location.search||window.scrollTo({x:0,y:window.pageYOffset}),r(t.concat(a.data)));case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(s.a.mark((function e(a){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.length<36&&(window.location.pathname="/not-found"),t=1,n=setInterval(Object(i.a)(s.a.mark((function e(){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.a.get("https://jobs.github.com/positions.json?&page="+t);case 2:c=e.sent,t++,c.data.forEach((function(e){e.id===a&&(d(e),clearInterval(n))})),0===c.data.length&&(window.location.pathname="/not-found",clearInterval(n));case 6:case"end":return e.stop()}}),e)}))),1e3);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(x,{handleSubmit:_}),c.a.createElement(O.d,null,c.a.createElement(O.b,{path:"/jobs/:id"},c.a.createElement(J,{getJob:T,job:u,loading:h})),c.a.createElement(O.b,{path:"/jobs"},c.a.createElement(y,{jobs:t,loading:h,jobsError:k,getJobs:_})),c.a.createElement(O.b,{exact:!0,path:"/"},c.a.createElement(y,{jobs:t,loading:h,jobsError:k,getJobs:_})),c.a.createElement(O.b,{path:"/not-found",exact:!0},c.a.createElement(C,null)),c.a.createElement(O.a,{from:"*",exact:!0,to:"/not-found"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(87);var I=t(15);l.a.render(c.a.createElement(I.a,null,c.a.createElement(c.a.StrictMode,null,c.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.22e5f027.chunk.js.map