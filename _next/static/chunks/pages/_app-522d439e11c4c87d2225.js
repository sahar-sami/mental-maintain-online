_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{2:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"5k/A":function(e,t,n){"use strict";!function(e){e.forEach((function(e){!function(e,t){t.default&&(t=t.default);var n="@font-face { src: url("+t+"); font-family: "+e+";}",a=e+"FontFace";if(!document.getElementById(a)){var r=document.createElement("style");r.type="text/css",r.id=a,r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n)),document.head.appendChild(r)}}(e.fontFamily,e.file)}))}(n("X5Jd").default)},"8jHu":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return g}));var a=n("pVnL"),r=n.n(a),o=n("z627"),c=n("uA0P"),s=n("gkRw"),i=n("vAiY"),u=n("0I6U"),l=n("qJ9u"),d=n("wd/R"),p=n("LvDl"),f=function(t){var n=e._INTERNALS_.DEPRECATEDcontextCache[t];n?n.refreshData():o.default.warn("refreshData: Context with ContextID "+t+" does not exist!")},g=function(){var t=s.getAppVariable,n=s.setAppVariable,a=s.setPageVariable,g=s.getParameter,m=s.getResource,h=s.setResource,E=s.getComponentState,I=s.setComponentState,C=s.getInstanceStatesAsArray,P=s.getInstanceStatesAsObject,b=s.listPageDataReferences,v=s.listPageParameters,O=s.listPageComponents,S=s.getContext,x=s.setContextState,A=s.setSelfProperty,R={context:s,api:i.d,resource:c.a,init:function(){return e._INTERNALS_.DEPRECATEDcontextState.init()},setComponentState:I,setSelfProperty:A,setParameter:a,setResource:h,setStorage:n,getComponentState:E,getInstanceStatesAsArray:C,getInstanceStatesAsObject:P,listPageDataReferences:b,listPageParameters:v,listPageComponents:O,getParameter:g,getResource:m,refreshData:f,getStorage:t,current:function(e,t){return S(t).s[e]},setContextState:x,rtc:u.a,references:{resolve:function(){return{}}},event:{dispatch:function(t,n,a){var c=r()({},a,n);Object(o.logWarning)("DEPRECATED: supersonic.event.dispatch",t,new Error);var s=e.red.nodes.getNode(t);if(s){var i=s.z&&s.z.match(/^page:[0-9]+:component:(.*?)$/),u=i&&i[1];if(u){var l,d=null==(l=c.componentInstanceId.match(/\/(\d+)\/(\d+)$/))?void 0:l.splice(1,3);c.componentInstanceIdPath||(c.componentInstanceIdPath=[]),c.componentInstanceIdPath.push(c.componentInstanceId),c.eventOutComponentInstanceId=c.componentInstanceId,c.componentInstanceId=u,d&&d.length>=1&&(c.componentInstanceId+="/"+d[0]),"currentIndex"in c&&void 0!==c.currentIndex&&null!==c.currentIndex&&(c.componentInstanceId+="/"+c.currentIndex)}}e.red.emit(t,c)},triggerDirectEvent:l.a},auth:{users:{getCurrentUser:function(){return{then:function(){}}}}}};return e.moment=d,e._=p,R}}).call(this,n("3r9c"))},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("e81P")}])},RrFB:function(e,t,n){"use strict";(function(e){var a=n("pVnL"),r=n.n(a),o=n("J4zp"),c=n.n(o),s=n("q1tI"),i=n.n(s),u=n("17x9"),l=n.n(u),d=n("/MKj"),p=n("8jHu"),f=n("vAiY"),g=n("d7XD"),m=n("7lo0"),h=n("OHa5"),E=n("zNpC"),I=n("hsWS"),C=n("nOHt"),P=n("6gcT"),b=n("qJ9u"),v=n("o3/o"),O=n("EgF3"),S=n("OnR0"),x=n("SOBC"),A=(n("Enq4"),n("ExIq"),n("5k/A"),n("HQJC")),R=n("JpYW"),j=n("r5xH");e.LOCAL_DOLAN=n("/JH9"),e.PAGE_COMPONENT_MAP={PageDolan:R.a},e.supersonic=Object(p.a)();var D=function(t){var n=t.showSpinner,a=t.spinnerMessage,o=t.isAuthenticated,u=t.navConfig,l=t.Component,d=t.pageProps,p=Object(C.useRouter)(),S=Object(s.useState)(void 0!==e.DOLAN),x=c()(S,2),A=x[0],R=x[1];if(Object(s.useEffect)((function(){Object(m.k)(d,u),R(!0)}),[]),Object(s.useEffect)((function(){var e=p.asPath.replace("/","");A&&u.authenticationEnabled&&!o&&!j[e]&&g.a.replaceToStack({route:""})}),[p.asPath,A]),Object(s.useEffect)((function(){A&&(Object(I.b)(d.flows,e.supersonic).then((function(){e.STORE.dispatch({type:P.a})})),Object(f.f)(),Object(f.e)(),Object(b.c)())}),[A]),A){var D=p.asPath.replace("/",""),_=Object(v.b)(u.blueprint,u.authenticationEnabled&&!o&&!j[D],"landscape");return i.a.createElement(i.a.Fragment,null,i.a.createElement(_,r()({},d,{navConfig:u,Component:l,selector:!1}),n?i.a.createElement(O.a,{backgroundColor:Object(m.j)(h.J),text:a}):null,i.a.createElement(E.g,null),i.a.createElement(E.a,null)))}return null};D.propTypes={isLoading:l.a.bool.isRequired,isDolanReady:l.a.bool.isRequired,isAuthenticated:l.a.bool.isRequired,dispatch:l.a.func.isRequired};var _=Object(x.a)((function(e){return{isDolanReady:e.isDolanReady,isLoading:e.isLoading,spinnerMessage:e.spinnerMessage,showSpinner:e.showSpinner,spinnerBackgroundColor:e.spinnerBackgroundColor,isAuthenticated:e.isAuthenticated,navConfig:e.navConfig,timestamp:e.dolanTimestamp}}))(D);t.a=A.a.withRedux((function(t){return i.a.createElement(d.a,{store:e.STORE,context:S.a},i.a.createElement(_,t))}))}).call(this,n("3r9c"))},X5Jd:function(e,t,n){"use strict";n.r(t),t.default=[]},e81P:function(e,t,n){"use strict";n.r(t);var a=n("RrFB");t.default=a.a},r5xH:function(e){e.exports=JSON.parse("{}")}},[[2,0,1,9,7,8,5,6,10,2,3,4,18]]]);