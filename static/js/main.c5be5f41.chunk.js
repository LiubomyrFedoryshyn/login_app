(this.webpackJsonplogin_app=this.webpackJsonplogin_app||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},28:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),s=a.n(i),l=a(7),o=a(8),c=a(10),m=a(9),d=a(11),g=a(4),h=a.n(g),u=a(37),p=(a(28),a(5)),f=a(13),v=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={signUoForm:{firstName:"",lastName:"",email:"",password:""},typeSwitcher:!1,formTriggered:!1},a.onSubmit=function(){a.setState({formTriggered:!0})},a.validateOnChange=function(e){var t=e.target,n=t.form,r=t.value;a.setState(Object(p.a)({},n.name,Object(f.a)({},a.state[n.name],Object(p.a)({},t.name,r))))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sign-up-wrapper"},this.signUp)}},{key:"heading",get:function(){return r.a.createElement("div",{className:"heading"},r.a.createElement("h2",null,"Sign Up for Free"))}},{key:"signUp",get:function(){var e=this,t=this.state.signUoForm,a=t.firstName,n=t.lastName,i=t.email,s=t.password;return r.a.createElement("div",{className:"form-wrapper"},this.heading,r.a.createElement("form",{name:"signUoForm",onSubmit:this.onSubmit},r.a.createElement("div",{className:"field flexed"},r.a.createElement("div",{className:"with-icon"},r.a.createElement("input",{required:!0,className:h()("firstName",{"is-danger":!a&&this.state.formTriggered}),placeholder:"First Name *",name:"firstName",id:"firstName",type:"text",value:a,onChange:this.validateOnChange}),r.a.createElement("i",{className:"fas fa-user-md"})),r.a.createElement("input",{required:!0,className:h()("lastName",{"is-danger":!n&&this.state.formTriggered}),name:"lastName",id:"lastName",type:"text",placeholder:"Last Name *",value:n,onChange:this.validateOnChange})),r.a.createElement("div",{className:"field"},r.a.createElement("input",{className:h()("email",{"is-danger":!i&&this.state.formTriggered}),required:!0,name:"email",id:"email",type:"email",placeholder:"Email Address *",value:i,onChange:this.validateOnChange})),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"with-icon"},r.a.createElement("input",{required:!0,className:h()("password",{"is-danger":!s&&this.state.formTriggered}),name:"password",id:"password",type:this.state.typeSwitcher?"text":"password",placeholder:"Set A Password *",value:s,onChange:this.validateOnChange}),r.a.createElement("i",{onClick:function(){return e.setState({typeSwitcher:!e.state.typeSwitcher})},className:this.state.typeSwitcher?"fas fa-lock-open":"fas fa-lock"}))),r.a.createElement("button",{onClick:this.onSubmit,className:"large active"},"GET STARED")))}}]),t}(n.Component),E=a(17),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={loginForm:{email:"",password:""},typeSwitcher:!1,formTriggered:!1},a.onSubmit=function(){a.setState({formTriggered:!0})},a.validateOnChange=function(e){var t=e.target,n=t.form,r=t.value;a.setState(Object(p.a)({},n.name,Object(f.a)({},a.state[n.name],Object(p.a)({},t.name,r))))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"log-in-wrapper"},this.loginForm)}},{key:"heading",get:function(){return r.a.createElement("div",{className:"heading"},r.a.createElement("h2",null,"Welcome Back!"))}},{key:"loginForm",get:function(){var e=this,t=this.state.loginForm,a=t.email,n=t.password;return r.a.createElement("div",{className:"form-wrapper"},this.heading,r.a.createElement("form",{name:"loginForm",onSubmit:this.onSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("input",{autoComplete:"off",required:!0,className:h()("email",{"is-danger":!a&&this.state.formTriggered}),type:"email",name:"email",id:"email",placeholder:"Email Address *",value:a,onChange:this.validateOnChange})),r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"with-icon"},r.a.createElement("input",{required:!0,className:h()("password",{"is-danger":!n&&this.state.formTriggered}),name:"password",id:"password",type:this.state.typeSwitcher?"text":"password",placeholder:"Set A Password *",value:n,onChange:this.validateOnChange}),r.a.createElement("i",{onClick:function(){return e.setState({typeSwitcher:!e.state.typeSwitcher})},className:this.state.typeSwitcher?"fas fa-lock-open":"fas fa-lock"}))),r.a.createElement("div",{className:"forgot-description"},r.a.createElement(E.a,null,r.a.createElement(E.b,{to:"#",href:"#"},"Forgot Password?"))),r.a.createElement("button",{onClick:this.onSubmit,className:"large active"},"LOG IN")))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={signUpFormActive:!0},a.toggleForm=function(){a.setState({signUpFormActive:!a.state.signUpFormActive})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",{className:"login-wrapper"},this.formToggler,this.state.signUpFormActive&&r.a.createElement(u.a,{in:!0,appear:!0,timeout:300,classNames:"fade"},r.a.createElement(v,null)),!this.state.signUpFormActive&&r.a.createElement(u.a,{in:!0,appear:!0,timeout:300,classNames:"fade"},r.a.createElement(w,null))))}},{key:"formToggler",get:function(){return r.a.createElement("div",{className:"toggler-wrapper"},r.a.createElement("button",{onClick:this.toggleForm,className:h()("medium",{active:this.state.signUpFormActive})},"Sign Up"),r.a.createElement("button",{onClick:this.toggleForm,className:h()("medium",{active:!this.state.signUpFormActive})},"Log in"))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(34);s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.c5be5f41.chunk.js.map