(this.webpackJsonppomodorox=this.webpackJsonppomodorox||[]).push([[0],{34:function(e,t,n){},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),i=n(11),o=n.n(i),c=(n(34),n(16)),r=n(17),l=n(20),d=n(18),b=(n(35),n(36),n(50)),j=n(1);var u=function(){return Object(j.jsx)(b.a,{bg:"dark",variant:"dark",children:Object(j.jsx)(b.a.Brand,{href:"#home",children:"PomodoroX"})})},h=n(28);var O=function(e){var t=e.setDebugMode;return Object(j.jsxs)(b.a,{bg:"light",variant:"light",children:["PomidoroX \xa9 2021",Object(j.jsx)(h.a,{variant:"link",onClick:function(){return t(!0)},size:"sm",children:"."})]})},g=n(10),f=n(26),m=n(47),x=n(48),p=n(54),v=n(49),S=n(53),k=n(7),y=n(52),N=n(27),w=n(46),T=n(8),E=function(e){var t=e.index,n=e.label,s=e.deleteHook,a=e.upHook,i=e.downHook,o=e.minusPointHook,c=e.plusPointHook,r=e.toggleDone,l=e.select,d=e.selected;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("style",{type:"text/css",children:"\n            .card-body {\n              padding: 0.1rem 0.1rem;\n             }\n            "}),Object(j.jsx)(y.a,{className:"m-2",border:n.done?"success":d?"primary":"",bg:n.done?"success":"",children:Object(j.jsxs)(y.a.Body,{children:[Object(j.jsxs)("div",{className:"float-left",children:[Object(j.jsx)(f.a,{className:"mb-2",id:"toggle-check",type:"checkbox",variant:"light-outline",checked:n.done,value:"1",onChange:function(e){return r(t)}}),Object(j.jsx)(h.a,{variant:"secondary",size:"sm",disabled:n.done,onClick:function(e){return l(t)},children:Object(j.jsx)(T.c,{})})," ",Object(j.jsxs)(N.a,{vertical:!0,children:[Object(j.jsx)(h.a,{variant:"secondary",onClick:function(){return c(t)},size:"sm",disabled:n.done,children:Object(j.jsx)(T.g,{})}),Object(j.jsx)(h.a,{variant:"secondary",onClick:function(){return o(t)},size:"sm",disabled:n.done,children:Object(j.jsx)(T.d,{})})]})," ",Object(j.jsx)(w.a,{pill:!0,variant:"secondary",children:n.points})," ",Object(j.jsx)("strong",{children:n.label})]}),Object(j.jsxs)("div",{className:"float-right",children:[Object(j.jsxs)(N.a,{vertical:!0,children:[Object(j.jsx)(h.a,{variant:"secondary",onClick:function(){return a(t)},size:"sm",children:Object(j.jsx)(T.b,{})}),Object(j.jsx)(h.a,{variant:"secondary",onClick:function(){return i(t)},size:"sm",children:Object(j.jsx)(T.a,{})})]})," ",Object(j.jsx)(h.a,{variant:"danger",onClick:function(){return s(t)},size:"sm",children:Object(j.jsx)(T.i,{})})]})]})})]})};var R=function(){return Object(j.jsx)(y.a,{className:"m-2",children:Object(j.jsx)(y.a.Body,{children:"Choose period."})})},C=n(22),M=function(e){var t=e.timerSeconds,n=e.showNotifications,a=e.reminderSeconds,i=void 0===a?300:a,o=e.debug,c=void 0!==o&&o,r="https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",l=function(e){var t=new Date;return t.setSeconds(t.getSeconds()+e),t},d=Object(C.useTimer)({expiryTimestamp:l(t),onExpire:function(){return k(v,"https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg",!1)}}),b=d.seconds,u=d.minutes,O=d.start,g=d.pause,f=d.restart,p=d.isRunning,v=Object(C.useTimer)({expiryTimestamp:l(i),onExpire:function(){return k(S,r,!0)},autoStart:!1}),S=Object(C.useTimer)({expiryTimestamp:l(i),onExpire:function(){return k(v,r,!0)},autoStart:!1}),k=function(e,t,s){e.restart(l(i)),new Audio(t).play(),n(s)},N=function(e){return e>=10?e:"0"+e},E=c?Object(j.jsx)(m.a,{children:Object(j.jsxs)(x.a,{children:[Object(j.jsxs)("h1",{children:[N(v.minutes),":",N(v.seconds)]}),Object(j.jsxs)("h1",{children:[N(S.minutes),":",N(S.seconds)]})]})}):null,R=p?null:Object(j.jsx)("h1",{children:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("style",{type:"text/css",children:"\n                    .blinking {\n                        animation: 2.0s linear infinite blinking;\n                    }\n                    \n                    @keyframes blinking {\n                        0% {opacity: 0;}\n                        50% {opacity: 1;}\n                        100% {opacity: 0;}\n                    }\n                    "}),Object(j.jsx)(w.a,{variant:"danger",className:"blinking",children:"Timer Stopped!"})]})});return Object(j.jsx)(s.Fragment,{children:Object(j.jsx)(y.a,{className:"m-2",children:Object(j.jsxs)(y.a.Body,{children:[Object(j.jsx)(m.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsx)("code",{children:Object(j.jsxs)("h1",{children:[N(u),":",N(b)]})})})}),Object(j.jsx)(m.a,{children:Object(j.jsx)(x.a,{children:R})}),Object(j.jsx)(m.a,{children:Object(j.jsx)(x.a,{children:E})}),Object(j.jsx)(m.a,{children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(h.a,{onClick:O,children:Object(j.jsx)(T.f,{})}),Object(j.jsx)(h.a,{onClick:g,children:Object(j.jsx)(T.e,{})}),Object(j.jsx)(h.a,{variant:"success",onClick:function(){g(),v.pause(),S.pause()},children:Object(j.jsx)(T.e,{})}),Object(j.jsx)(h.a,{onClick:function(){var e=new Date;e.setSeconds(e.getSeconds()+300),f(e)},children:Object(j.jsx)(T.h,{})})]})})]})})})};var A=function(e){var t=e.showNotifications,n=e.debugMode;return Object(j.jsx)(M,{timerSeconds:600,showNotifications:t,reminderSeconds:300,debug:n})};var L=function(e){var t=e.showNotifications,n=e.debugMode;return Object(j.jsx)(M,{timerSeconds:1500,showNotifications:t,reminderSeconds:300,debug:n})};var B=function(e){var t=e.showNotifications,n=e.debugMode;return Object(j.jsx)(M,{timerSeconds:300,showNotifications:t,reminderSeconds:120,debug:n})};var I=function(e){var t=e.showNotifications,n=e.debugMode;return Object(j.jsx)(M,{timerSeconds:10,showNotifications:t,reminderSeconds:10,debug:n})},_=function(e){var t,n=e.show,s=e.showNotifications,a=e.debugMode;return(t=n)===k.LONG_BREAK?Object(j.jsx)(A,{showNotifications:s,debugMode:a}):t===k.SHORT_BREAK?Object(j.jsx)(B,{showNotifications:s,debugMode:a}):t===k.REGULAR?Object(j.jsx)(L,{showNotifications:s,debugMode:a}):t===k.TEST_BREAK?Object(j.jsx)(I,{showNotifications:s,debugMode:a}):Object(j.jsx)(R,{showNotifications:s})},K=n(12),H=n.n(K),P=n(51),D=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={labels:[],mode:[],numTask:1,label:"",selected:null,notificationsState:{title:"Yep!",body:"Time is up!"},version:k.VERSION},e.handleChange=function(t){e.setState({labels:t}),localStorage.setItem("state",JSON.stringify(e.state))},e.messageLabels={timeUp:{title:"Yep!",body:"Time is up!"},reminder:{title:"Reminder!!!",body:"You should run the timer!!!!"}},e.updateLabels=function(t,n){return e.setState({notificationsState:{title:t,body:n}})},e.handleChangeMode=function(t){e.setState({mode:t}),localStorage.setItem("state",JSON.stringify(e.state))},e.handleChangeLabel=function(t){e.setState({label:t})},e.genId=function(){return Object(P.a)()},e.addTask=function(t){null!=t&&""!==t&&(e.setState((function(n){return{labels:n.labels.concat([{id:e.genId(),label:t,done:!1,points:0}]),label:""}})),localStorage.setItem("state",JSON.stringify(e.state)))},e.showNotifications=function(t){t?e.setupRemider():e.setupTimesUp(),H.a.n.supported()&&H.a.n.show()},e.setupRemider=function(){return e.updateLabels(e.messageLabels.reminder.title,e.messageLabels.reminder.body)},e.setupTimesUp=function(){return e.updateLabels(e.messageLabels.timeUp.title,e.messageLabels.timeUp.body)},e.handleNotificationClick=function(e){H.a.n.close(e.target.tag)},e.removeTask=function(t){if(e.state.labels.length>0&&t>=0&&e.state.labels.length>t){var n=Object(g.a)(e.state.labels);n.splice(t,1),e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.moveUpTask=function(t){if(e.state.labels.length>1&&t>0&&e.state.labels.length>t){var n=Object(g.a)(e.state.labels),s=n[t];n[t]=n[t-1],n[t-1]=s,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.moveDownTask=function(t){if(e.state.labels.length>1&&t>=0&&e.state.labels.length>t+1){var n=Object(g.a)(e.state.labels),s=n[t];n[t]=n[t+1],n[t+1]=s,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.toggleDone=function(t){if(e.state.labels.length>=0&&t>=0&&e.state.labels.length>t){var n=Object(g.a)(e.state.labels);n[t].done=!n[t].done,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.select=function(t){if(e.state.labels.length>=0&&t>=0&&e.state.labels.length>t){var n=e.state.labels[t];n.done||(e.setState({selected:n.id}),localStorage.setItem("state",JSON.stringify(e.state)))}},e.plusPoints=function(t){if(e.state.labels.length>0&&t>=0&&e.state.labels.length>t){var n=Object(g.a)(e.state.labels);n[t].points=n[t].points+1,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state))}},e.minusPoints=function(t){if(e.state.labels.length>0&&t>=0&&e.state.labels.length>t){var n=Object(g.a)(e.state.labels);n[t].points>0&&(n[t].points=n[t].points-1,e.setState({labels:n}),localStorage.setItem("state",JSON.stringify(e.state)))}},e.debugElement=function(t){if(e.props.debugMode)return Object(j.jsx)(f.a,{value:k.TEST_BREAK,disabled:""===e.state.selected,children:"Test break"})},e.currentTask=function(){var t=e.state.labels.filter((function(t){return t.id===e.state.selected})).map((function(e){return e.label}));return Object(j.jsx)(m.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsxs)("h3",{children:["Current: ",t]})})})},e.handleEnterKeyPress=function(t){13===t.charCode&&e.addTask(e.state.label)},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("state");if(null!=e){var t=JSON.parse(e);t.version>=k.VERSION&&this.setState(t)}}},{key:"render",value:function(){var e=this,t=0,n=this.state.labels.map((function(n){return Object(j.jsx)(E,{index:t++,label:n,deleteHook:e.removeTask,plusPointHook:e.plusPoints,minusPointHook:e.minusPoints,upHook:e.moveUpTask,downHook:e.moveDownTask,toggleDone:e.toggleDone,select:e.select,selected:n.id===e.state.selected},n.id)}));return Object(j.jsxs)("div",{className:"m-2",children:[this.currentTask(),Object(j.jsx)(m.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsxs)(p.a,{className:"flex-wrap",type:"radio",name:"options",value:this.state.mode,onChange:this.handleChangeMode,children:[Object(j.jsx)(f.a,{value:k.REGULAR,disabled:""===this.state.selected,children:"Regular"}),Object(j.jsx)(f.a,{value:k.SHORT_BREAK,disabled:""===this.state.selected,children:"Short break"}),Object(j.jsx)(f.a,{value:k.LONG_BREAK,disabled:""===this.state.selected,children:"Long break"}),this.debugElement(this.props.debugMode)]})})}),Object(j.jsx)(m.a,{children:Object(j.jsxs)(x.a,{children:[Object(j.jsx)(_,{show:this.state.mode,showNotifications:function(t){return e.showNotifications(t)},debugMode:this.props.debugMode}),Object(j.jsx)(H.a,{onRef:function(e){return H.a.n=e},title:this.state.notificationsState.title,body:this.state.notificationsState.body,icon:"icon.png",timeout:"5000",onClick:function(t){return e.handleNotificationClick(t)}})]})}),Object(j.jsx)(m.a,{children:Object(j.jsx)(x.a,{children:n})}),Object(j.jsx)(m.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsxs)(v.a,{className:"mb-3",children:[Object(j.jsx)(S.a,{value:this.state.label,"aria-label":this.state.label,"aria-describedby":"basic-addon2",onChange:function(t){return e.handleChangeLabel(t.target.value)},onKeyPress:this.handleEnterKeyPress}),Object(j.jsx)(v.a.Append,{children:Object(j.jsx)(h.a,{onClick:function(){return e.addTask(e.state.label)},children:"+"})})]})})})]})}}]),n}(a.a.Component),J=D,U=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={debugMode:!1},e.setDebugMode=function(t){e.setState({debugMode:t})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{name:"PomodoroX"}),Object(j.jsx)(J,{debugMode:this.state.debugMode}),Object(j.jsx)(O,{setDebugMode:this.setDebugMode})]})}}]),n}(a.a.Component),G=U;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(G,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t){e.exports={REGULAR:"REGULAR",SHORT_BREAK:"SHORT_BREAK",LONG_BREAK:"LONG_BREAK",TEST_BREAK:"TEST_BREAK",NONE:"NONE",VERSION:3}}},[[43,1,2]]]);
//# sourceMappingURL=main.183e359c.chunk.js.map