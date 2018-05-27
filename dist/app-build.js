"bundle";!function(){var a=System.amdDefine;a("app.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><!--<require from="bootstrap/dist/css/bootstrap.min.css"></require>--><require from="../styles/app.css"></require><!--Order is not 100% same here so move bs import to app.js--><div class="fixed-top"><nav class="navbar navbar-expand-lg navbar-dark"><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars" style="color:white;"></i></button> <span style="color:white;" class="ml-auto d-lg-none d-xl-none">${activeTitle}</span><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav text-center"><li class="nav-item" repeat.for="nav of router.navigation"><a class="nav-link ${nav.isActive ? \'font-weight-bold\' : \'\'}" href.bind="nav.href">${nav.title}</a></li></ul></div></nav></div><router-view></router-view></template>'})}(),System.register("app.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("App",(g=d(e),i=g(h=function(){function a(b){var d=this;c(this,a),this.activeTitle="home",this.EA=b,this.subscriptions=[],this.EA.subscribe("change_active_title",function(a){d.activeTitle=a})}return a.prototype.configureRouter=function(a,b){this.router=b,a.title="WWED";var c=function(a){return{route:"not-found",redirect:"home"}};a.mapUnknownRoutes(c),a.map([{route:"",redirect:"home"},{route:"home",name:"home",moduleId:"./pages/P01",nav:!0,title:"Home"},{route:"about",name:"about",moduleId:"./pages/P02",nav:!0,title:"About"},{route:"location",name:"location",moduleId:"./pages/P03",nav:!0,title:"Location"},{route:"rsvp",name:"rsvp",moduleId:"./pages/P04",nav:!0,title:"RSVP"},{route:"faq",name:"faq",moduleId:"./pages/P05",nav:!0,title:"FAQ"},{route:"contact",name:"contact",moduleId:"./pages/P06",nav:!0,title:"Contact"}])},a.prototype.activate=function(){},a.prototype.deactivate=function(){},a.prototype.attached=function(){f(".navbar-nav>li>a").on("click",function(){f(".navbar-collapse").collapse("hide")}),f(".navbar-collapse").on("show.bs.collapse",function(){f(".navbar").removeClass("nav-bg-hide"),f(".navbar").addClass("nav-bg-show")}),f(".navbar-collapse").on("hide.bs.collapse",function(){f(".navbar").addClass("nav-bg-hide"),f(".navbar").removeClass("nav-bg-show")})},a.prototype.detached=function(){},a}())||h)),a("App",i)}}}),function(){var a=System.amdDefine;a("components/footer.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div class="row mt-5"><div class="col-12 text-center"><img src="images/heart.png" width="20"> <img src="images/heart.png" width="20"> <img src="images/heart.png" width="20"></div></div></template>'})}(),System.register("main.js",["bootstrap/dist/css/bootstrap.min.css!","bootstrap"],function(a,b){"use strict";function c(a){a.use.standardConfiguration().developmentLogging(),a.start().then(function(){return a.setRoot("app")})}return a("configure",c),{setters:[function(a){},function(a){}],execute:function(){}}}),function(){var a=System.amdDefine;a("modals/S04M.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><style type="text/css">.big-checkbox {width: 30px; height: 30px;}\n\n\t\t .custom-ws-item {\n\t\t \tborder-bottom: 1px solid #BCBDBE;\n\t\t }</style><div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">RSVP</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"><div class="container-fluid pl-0 pr-0"><require from="./one.html"></require><one show.bind="c_step === 0" workshops.two-way="workshops" option5.two-way="option5"></one></div></div><div class="modal-footer"><button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary" click.trigger="next()">Next</button></div></div></div></div></template>'})}(),System.register("modals/S04M.js",["aurelia-framework"],function(a,b){"use strict";function c(a,b,c,d){c&&Object.defineProperty(a,b,{enumerable:c.enumerable,configurable:c.configurable,writable:c.writable,value:c.initializer?c.initializer.call(d):void 0})}function d(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function e(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}var f,g,h,i,j,k,l,m,n,o;return{setters:[function(a){f=a.inject,g=a.bindable,h=a.bindingMode,i=a.ObserverLocator}],execute:function(){a("S04M",(j=f(i),k=g({defaultBindingMode:h.oneWay}),o=j((m=function(){function a(b){var e=this;d(this,a),c(this,"workshops",n,this),this.observerLocator=b,this.option5=!1,this.c_step=0;this.observerLocator.getObserver(this,"option5").subscribe(function(a,b){e.onChange1(a,b)})}return a.prototype.attached=function(){var a=this;console.log(this.workshops),$("#exampleModal").on("hidden.bs.modal",function(){a.c_step=0})},a.prototype.onChange1=function(a,b){if(a===!0)for(var c=this.workshops,d=Array.isArray(c),e=0,c=d?c:c[Symbol.iterator]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{if(e=c.next(),e.done)break;f=e.value}var g=f;g.checked=!1}},a.prototype.next=function(){this.c_step++},a}(),n=e(m.prototype,"workshops",[k],{enumerable:!0,initializer:null}),l=m))||l)),a("S04M",o)}}}),function(){var a=System.amdDefine;a("modals/one.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template bindable="workshops, option5"><div class="row mb-3" repeat.for="ws of workshops"><div class="col-10"><div class="row"><div class="col-8">${ws.day}</div><div class="col-4 text-right">${ws.date}</div></div><div class="row"><div class="col-8">${ws.time.start} - ${ws.time.end}</div><div class="col-4 text-right">${ws.price}€</div></div></div><div class="col-2"><input type="checkbox" class="w-100 h-100" checked.bind="ws.checked"></div><div class="col-12"><div class="w-100 custom-ws-item"></div></div></div><div class="row mt-4 mb-4"><div class="col-12 text-center">Or</div></div><div class="row mb-3"><div class="col-8">All 4 sessions</div><div class="col-2">40€</div><div class="col-2"><input type="checkbox" class="w-100 h-100" checked.bind="option5"></div></div></template>'})}(),function(){var a=System.amdDefine;a("pages/P01.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P01" class="container-fluid first-route-element-top"><div class="row h-100"><div class="offset-1 col-10 text-center"><img class="img-fluid" src="images/logo3.png"></div></div><div class="row mt-5"><div class="offset-1 col-10 custom-bg-1 text-center"><p class="mt-3">There is something special about women coming together to connect, dance, be creative, and reflect.</p><p class="lead">Come find out for yourself!</p><p>All ages welcome.</p><p>Mothers & daughters,<br>aunties & nieces<br>encouraged.</p></div></div><div class="row mt-3"><div class="offset-1 col-10 custom-bg-1 text-center mb-2"><a href="#/rsvp" class="btn btn-block nav-link">Workshop dates</a></div><div class="offset-1 col-10 custom-bg-1 text-center mb-2"><a href="#/location" class="btn btn-block nav-link">Location</a></div><div class="offset-1 col-10 custom-bg-1 text-center"><a href="#/faq" class="btn btn-block nav-link">FAQ</a></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P01.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P01",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P01",i)}}}),function(){var a=System.amdDefine;a("pages/P02.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P02" class="container-fluid first-route-element-top"><div class="row"><div class="offset-1 col-10 custom-bg-1 text-center"><p class="mt-3">There is something special about women coming together to connect, dance, be creative, and reflect.</p><p class="lead">Come find out for yourself!</p><p>All ages welcome.</p><p>Mothers & daughters,<br>aunties & nieces<br>encouraged.</p></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P02.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P02",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P02",i)}}}),function(){var a=System.amdDefine;a("pages/P03.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P03" class="container-fluid first-route-element-top"><div class="row"><div class="offset-1 col-10 custom-bg-1 text-center pl-0 pr-0"><div class="embed-responsive embed-responsive-1by1"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d265.20104946791355!2d-6.266158996041439!3d53.33950648587629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e9e05c86b2f%3A0x4bb2d21f9d3ef7bb!2sYMCA+gym!5e0!3m2!1sen!2sie!4v1527082983321" allowfullscreen></iframe></div></div></div><div class="row mt-3"><div class="offset-1 col-10 custom-bg-1 text-center"><p class="mt-3">Dance Studio,<br>Third Space,<br>53 Aungier Street,<br>Dublin 2</p></div></div><div class="row mt-3"><div class="offset-1 col-10 custom-bg-1 text-center mb-2"><a href="#/rsvp" class="btn btn-block nav-link">Workshop dates</a></div><div class="offset-1 col-10 custom-bg-1 text-center"><a href="#/faq" class="btn btn-block nav-link">FAQ</a></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P03.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P03",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P03",i)}}}),function(){var a=System.amdDefine;a("pages/P04.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P04" class="container-fluid first-route-element-top"><div class="row"><div class="col-12 text-center mb-4"><h3 style="color: white;">Current options</h3></div></div><div class="row"><div class="col-6 text-center mb-2" repeat.for="ws of workshops" click.trigger="show_info(ws.id)"><div class="custom-bg-1 pt-2 pb-2"><p class="mt-2 mb-1">${ws.day.substring(0,3)} ${ws.date}</p><p class="mb-0 small">${ws.time.start} - ${ws.time.end}</p><p class="mb-0 small">***</p><p class="font-weight-light small mb-1">RSVP here</p></div></div></div><div class="row mt-3"><div class="col-12 text-center" click.trigger="show_info()"><div class="custom-bg-1 pt-2 pb-2"><h5 class="mt-2 mb-1">Special</h5><p class="mt-2 mb-1">All four saturday sessions</p><p class="mt-2 mb-1"><span repeat.for="ws of workshops">${ws.date}<span class="${$index > workshops.length-2 ? \'hide\' : \'\'}">,&nbsp</span></span></p><p class="mb-0 small">12:00 - 13:00</p><p class="mb-0 small">***</p><p class="font-weight-light small mb-1">RSVP here</p></div></div></div><require from="../modals/S04M"></require><s04-m workshops.bind="workshops"></s04-m><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P04.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P04",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b,this.events=[],this.workshops=[],this.events.push({id:"0",type:"workshop",day:"Saturday",date:"14.07.18",time:{start:"12:00",end:"13:00"},price:15}),this.events.push({id:"1",type:"workshop",day:"Saturday",date:"21.07.18",time:{start:"12:00",end:"13:00"},price:15}),this.events.push({id:"2",type:"workshop",day:"Saturday",date:"04.08.18",time:{start:"12:00",end:"13:00"},price:15}),this.events.push({id:"3",type:"workshop",day:"Saturday",date:"11.08.18",time:{start:"12:00",end:"13:00"},price:15}),this.workshops=this.events.filter(function(a){return"workshop"===a.type})}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a.prototype.attached=function(){this.modal=f("#exampleModal")},a.prototype.show_info=function(a){this.modal.modal("show")},a}())||h)),a("P04",i)}}}),function(){var a=System.amdDefine;a("pages/P05.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P05" class="container-fluid first-route-element-top"><div class="row mb-3" repeat.for="q of questions"><div class="offset-1 col-10 custom-bg-1"><p class="lead pl-0 pt-2 mb-1" data-toggle="collapse" data-target="#collapseExample${$index}" aria-expanded="true" aria-controls="collapseExample${$index}">${q}</p><p class="collapse" id="collapseExample${$index}">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P05.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P05",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b,this.questions=[],this.questions.push("What should I bring?"),this.questions.push("How long is each session?"),this.questions.push("What will we be doing?")}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P05",i)}}}),function(){var a=System.amdDefine;a("pages/P06.html!github:systemjs/plugin-text@0.0.11.js",[],function(){return'<template><div id="P06" class="container-fluid first-route-element-top"><div class="row"><div class="offset-2 col-8 text-center"><img src="images/headshot.png" class="img-fluid"></div></div><require from="../components/footer.html"></require><footer></footer></div></template>'})}(),System.register("pages/P06.js",["aurelia-framework","aurelia-event-aggregator","jquery"],function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var d,e,f,g,h,i;return{setters:[function(a){d=a.inject},function(a){e=a.EventAggregator},function(a){f=a.default}],execute:function(){a("P06",(g=d(e),i=g(h=function(){function a(b){c(this,a),this.EA=b}return a.prototype.activate=function(a,b){this.EA.publish("change_active_title",b.title)},a}())||h)),a("P06",i)}}});