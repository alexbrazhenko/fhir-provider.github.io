(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{39:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(34),u=n.n(c),i=n(36),l=n(5),o=n(13),s=n(14),p=n(17),m=n(15),f=n(18),h=n(16),d=n.n(h),b=function(e){function t(){return Object(o.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){d.a.oauth2.authorize({client_id:"cbd26b18-7c13-4db8-8d9f-6793d199c5ab",redirect_uri:"./app",scope:["patient/*.*"].join(" ")}).then((function(e){console.log(e)}))}},{key:"render",value:function(){return"Launching..."}}]),t}(r.a.Component),v=n(6),E=n.n(v),j=n(35);function O(e){var t=e.name,n=void 0===t?[]:t,a=n.find((function(e){return"official"===e.use}))||n[0];return a?r.a.createElement("h1",null,a.given.join(" ")+" "+a.family):r.a.createElement("h1",null,"No Name")}function g(e){return r.a.createElement("div",null,r.a.createElement(O,{name:e.name}),r.a.createElement("span",null,"Gender: ",r.a.createElement("b",null,e.gender),","," "),r.a.createElement("span",null,"DOB: ",r.a.createElement("b",null,e.birthDate)))}var y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(p.a)(this,Object(m.a)(t).call(this,e))).state={loading:!0,patient:null,error:null},n}return Object(f.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(E.a.mark((function e(){var t,n,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.oauth2.ready();case 2:return t=e.sent,e.next=5,t.request("Patient");case 5:return n=e.sent,e.next=8,t.getFhirRelease();case 8:return e.sent,console.log(n),e.next=12,t.patient.read();case 12:a=e.sent,this.setState({patient:a,loading:!1,error:null});case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=(e.error,e.loading,e.patient);return r.a.createElement(g,t)}}]),t}(r.a.Component);function k(){return r.a.createElement(y,null)}u.a.render(r.a.createElement((function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{path:"/app",component:k}),r.a.createElement(l.a,{path:"/",component:b,exact:!0}))}),null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0b45cd8c.chunk.js.map