(this["webpackJsonpreact-native"]=this["webpackJsonpreact-native"]||[]).push([[0],{106:function(e,t,n){e.exports=n(140)},110:function(e,t){},140:function(e,t,n){"use strict";n.r(t);var r=n(145),a=n(1),c=n.n(a),o=n(3),i=n(38),s=n(0),l=n.n(s),u=n(85),f=n(7),d=n(144),p=n(142),m=n(14),g=function(){var e=Object(o.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("dis");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=n(104),b=n(55),h=Object.freeze({data:[],error:void 0,loading:!0}),w=n(105),j=n(143);function O(){var e,t,n=Object(s.useState)(!1),r=Object(i.a)(n,2),a=r[0],f=r[1],O=Object(s.useState)(!1),k=Object(i.a)(O,2),x=k[0],y=k[1],S=Object(s.useRef)(null),C=Object(s.useCallback)(Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new v.a({bridge:"https://bridge.walletconnect.org",qrcodeModal:{open:function(){return f(!0)},close:function(){return f(!1)}}}),S.current=t,f(!0),t.connected||t.createSession(),t.on("connect",(function(e,t){if(e)throw e;y(!0),console.log(t.params[0])}));case 5:case"end":return e.stop()}}),e)}))),[]),P=(Object(s.useCallback)((function(){g(),f(!1)}),[]),function(){var e=l.a.useState(h),t=Object(i.a)(e,2),n=t[0],r=t[1];return l.a.useEffect((function(){Object(o.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://registry.walletconnect.org/data/wallets.json");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r({data:Object.values(n),error:void 0,loading:!1}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0),r(Object(b.a)(Object(b.a)({},h),{},{error:e.t0,loading:!1}));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[r]),n}().data),A=function(e,t){window.ReactNativeWebView&&window.ReactNativeWebView.postMessage("".concat(t,"@:@").concat(e))},z=function(){S.current||console.log("we lost our connection");var e=["Coinbase message - Lets go",S.current.accounts[0]];S.current.signPersonalMessage(e).then((function(e){console.log({result:e}),A(JSON.stringify(e),"sign"),y(!1)})).catch((function(e){console.error({error:e})}))};return l.a.createElement(m.a,{style:E.app},l.a.createElement(j.a,null,l.a.createElement(m.a,{style:E.header},l.a.createElement(u.a,{style:E.title},"Connect Self hosted wallet"))),(null===(e=S.current)||void 0===e?void 0:e.connected)?l.a.createElement(p.a,{onPress:function(){return S.current.killSession()},title:"disconnect"}):l.a.createElement(p.a,{onPress:C,title:"Connect"}),(null===(t=S.current)||void 0===t?void 0:t.connected)&&l.a.createElement(d.a,{visible:a},l.a.createElement(p.a,{onPress:z,title:"Sign Message"})),a&&!x&&function(e){return l.a.createElement(d.a,{visible:a},l.a.createElement(p.a,{onPress:function(){return f(!1)},title:"close"}),e.filter((function(e){return!!e.mobile.universal})).map((function(e){var t=e.name,n=e.mobile;return l.a.createElement(w.a,{key:t,style:{width:100},onPress:function(){return function(e){var t=S.current.uri;A("".concat(function(e){var t=e.universal;e.native;return"".concat(t)}(e),"/wc?uri=").concat(encodeURIComponent(t),"&redirectUrl=").concat("coinbase://"),"connect"),f(!1)}(n)}},l.a.createElement(u.a,{style:{padding:10}},t))})))}(P))}var E=f.a.create({app:{marginHorizontal:"auto",maxWidth:500},logo:{height:80},header:{padding:20},title:{fontWeight:"bold",fontSize:"1.5rem",marginVertical:"1em",textAlign:"center"},text:{lineHeight:"1.5em",fontSize:"1.125rem",marginVertical:"1em",textAlign:"center"},link:{color:"#1B95E0"},code:{fontFamily:"monospace, monospace"}});r.a.registerComponent("App",(function(){return O})),r.a.runApplication("App",{rootTag:document.getElementById("root")})}},[[106,1,2]]]);
//# sourceMappingURL=main.629c26d7.chunk.js.map