(this["webpackJsonpfr-lessons"]=this["webpackJsonpfr-lessons"]||[]).push([[0],{126:function(e,t,n){e.exports={page:"AppStyle_page__1eeP1"}},135:function(e,t,n){},226:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(30),i=n.n(s),c=(n(135),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,231)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))}),o=n(11),l=n(83),u=n(117),d=n(9),j=n.n(d),b=n(15),m=n(6),h=n(50),p=n.n(h),f=p.a.create({baseURL:"http://localhost:7542/2.0",withCredentials:!0}),O=function(e){return f.post("/auth/login",Object(m.a)({},e))},_=function(){return f.delete("/auth/me")},g=function(e){return f.post("/auth/register",Object(m.a)({},e)).then((function(e){return e.data}))},x=function(){return f.post("/auth/me").then((function(e){return e.data}))},S=function(e){return f.post("/auth/forgot",Object(m.a)({},e))},v=function(e){return f.post("/auth/set-new-password",e).then((function(e){return e.data}))},w={isInitialize:!1,status:"idle",message:""},y=function(e,t){return{type:"STATUS-APP/SET-STATUS",payload:{status:e,message:t}}},N=function(e){return{type:"PROFILE/SET_USER_DATA",payload:Object(m.a)({},e)}},E={_id:"",email:"",name:"",avatar:"",publicCardPacksCount:0,created:"",updated:"",isAdmin:!1,rememberMe:!1,verified:!0},P={isAuth:!1},T=function(e){return{type:"LOGIN/SET_IS_AUTH",isAuth:e}},R=n(12),A=n(1),k={error:null},I={isSend:!1},C={setPasswordStatus:!1},F=function(e){return{type:"PASSWORD/SET_CHANGED_STATUS",status:e}},U=(p.a.create({baseURL:"http://localhost:7542/2.0",withCredentials:!0}),[]),L=n(67),D=n(129),G=(p.a.create({baseURL:"http://localhost:7542/2.0",withCredentials:!0}),{}),M=Object(l.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE/SET_USER_DATA":return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_IS_AUTH":return Object(m.a)(Object(m.a)({},e),{},{isAuth:t.isAuth});default:return e}},registrationInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTRATION/GET_REGISTERED_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{error:t.error});default:return e}},recovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECOVERY/SET_SEND_STATUS":return Object(m.a)(Object(m.a)({},e),{},{isSend:t.sendStatus});default:return e}},creatingPasswordInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PASSWORD/SET_CHANGED_STATUS":return Object(m.a)(Object(m.a)({},e),{},{setPasswordStatus:t.status});default:return e}},statusApp:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"STATUS-APP/SET_IS_INITIALIZE":return Object(m.a)(Object(m.a)({},e),{},{isInitialize:t.isInit});case"STATUS-APP/SET-STATUS":return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PACKS/SET-PACKS":return t.user_id?t.packs.filter((function(e){return e.user_id===t.user_id})):t.packs;default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CARDS/GET-CARDS":return Object(m.a)(Object(m.a)({},e),{},Object(L.a)({},t.packId,Object(D.a)(t.cards)));default:return e}}}),z=Object(l.c)(M,Object(l.a)(u.a)),H=n(33),q=r.a.memo((function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("h1",{children:"404 Not found"})})})),Y=n(39),J=n(228),B=n(40),Q=n.n(B),V=n(229),W=n(45),X=n.n(W),Z=function(e,t){return"email"===e?Object(A.jsx)(J.a.Item,{className:X.a.field,name:e,rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(A.jsx)(V.a,{placeholder:t,size:"large",className:X.a.input})}):"password"===e?Object(A.jsx)(J.a.Item,{className:X.a.field,name:e,rules:[{min:8,message:"Password should be more than 8 character"},{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(A.jsx)(V.a.Password,{placeholder:t,size:"large",className:X.a.input})}):"confirm"===e?Object(A.jsx)(J.a.Item,{className:X.a.field,name:e,dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(A.jsx)(V.a.Password,{placeholder:t,size:"large",className:X.a.input})}):void 0},K=n(46),$=n.n(K),ee=(n(225),n(96)),te=n.n(ee),ne=function(){return Object(A.jsx)("div",{className:te.a.preloader,children:Object(A.jsx)("div",{className:te.a.preloader__image_animate})})},ae={labelCol:{xs:{span:24},sm:{span:24}},wrapperCol:{xs:{span:24},sm:{span:24}}},re=function(e){var t=J.a.useForm(),n=Object(Y.a)(t,1)[0];return Object(A.jsxs)("div",{className:$.a.registration,children:[Object(A.jsx)("div",{className:$.a.title,children:"Cards"}),Object(A.jsx)("div",{className:$.a.titleName,children:Object(A.jsx)("h3",{children:"Sign Up"})}),Object(A.jsxs)(J.a,Object(m.a)(Object(m.a)({name:"register",className:$.a.form},ae),{},{form:n,onFinish:function(t){e.onSubmit(t)},children:[Z("email","E-mail"),Z("password","Password"),Z("confirm","Confirm Password"),Object(A.jsx)("div",{className:$.a.buttons,children:Object(A.jsx)("button",{className:$.a.btnReg,type:"submit",children:"Register"})})]}))]})},se=function(){var e=Object(o.b)();if("load"===Object(o.c)((function(e){return e.statusApp.status})))return Object(A.jsx)(ne,{});return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(re,{onSubmit:function(t){var n,a=t.email,r=t.password;e((n={email:a,password:r},function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y("load","")),e.prev=1,e.next=4,g(n);case 4:e.sent&&R.a,e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t(y("error",e.t0.message)),t({type:"REGISTRATION/GET_REGISTERED_REQUEST",error:e.t0.message});case 12:return e.prev=12,t(y("idle","")),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}()))}})})},ie=function(e){var t=J.a.useForm(),n=Object(Y.a)(t,1)[0];return Object(A.jsxs)("div",{className:Q.a.login,children:[Object(A.jsx)("div",{className:Q.a.title,children:"Cards"}),Object(A.jsx)("div",{className:Q.a.titleName,children:Object(A.jsx)("h3",{children:"Sign In"})}),Object(A.jsxs)(J.a,Object(m.a)(Object(m.a)({name:"login",className:Q.a.form},ae),{},{form:n,onFinish:function(t){e.onSubmit(t)},children:[Z("email","E-mail"),Z("password","Password"),Object(A.jsx)("div",{className:Q.a.forgot,children:Object(A.jsx)("span",{children:Object(A.jsx)(H.b,{to:"/recovery-password",children:"Forgot Password"})})}),Object(A.jsx)("div",{className:Q.a.buttons,children:Object(A.jsx)("button",{className:Q.a.btnLogin,type:"submit",children:"Login"})}),Object(A.jsxs)("div",{className:Q.a.signUp,children:[Object(A.jsx)("span",{children:"Don't have an account?"}),Object(A.jsx)(H.b,{to:"/registration",children:"Sign Up"})]})]}))]})},ce=Object(a.memo)((function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.login.isAuth})),n=Object(o.c)((function(e){return e.statusApp.status}));if(t)return Object(A.jsx)(R.a,{to:"/"});if("load"===n)return Object(A.jsx)(ne,{});return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(ie,{onSubmit:function(t){var n;e((n=Object(m.a)(Object(m.a)({},t),{},{rememberMe:!0}),function(e){e(y("load","")),O(n).then((function(t){e(N(t.data)),e(T(!0)),e(y("success","Success"))})).catch((function(t){e(y("error",t.message))})).finally((function(){e(y("idle",""))}))}))}})})})),oe=n(47),le=n.n(oe),ue=Object(a.memo)((function(e){var t=e.onSubmit,n=J.a.useForm(),a=Object(Y.a)(n,1)[0];return Object(A.jsxs)("div",{className:le.a.newPasswordMain,children:[Object(A.jsx)("div",{className:le.a.title,children:"Cards"}),Object(A.jsx)("div",{className:le.a.titleName,children:Object(A.jsx)("h3",{children:"Create new password"})}),Object(A.jsxs)(J.a,Object(m.a)(Object(m.a)({name:"newPassword",className:le.a.form,form:a,onFinish:function(e){t(e)}},ae),{},{children:[Z("password","Password"),Z("confirm","Confirm Password"),Object(A.jsx)("div",{className:le.a.buttons,children:Object(A.jsx)("button",{className:le.a.btnSetPass,type:"submit",children:"Create new password"})})]}))]})})),de=Object(a.memo)((function(){var e=Object(o.b)(),t=Object(R.h)().token,n=Object(o.c)((function(e){return e.statusApp.status}));if(Object(o.c)((function(e){return e.creatingPasswordInfo.setPasswordStatus})))return Object(A.jsx)(R.a,{to:"/login"});if("load"===n)return Object(A.jsx)(ne,{});return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(ue,{onSubmit:function(n){var a,r=n.password;e((a={password:r,resetPasswordToken:t},function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y("load","")),e.prev=1,e.next=4,v(a);case 4:t(F(!0)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),t(y("error",e.t0.message)),t(F(!1));case 11:return e.prev=11,t(F(!1)),t(y("idle","")),e.finish(11);case 15:case"end":return e.stop()}}),e,null,[[1,7,11,15]])})));return function(t){return e.apply(this,arguments)}}()))}})})})),je=n(42),be=n.n(je),me=function(e){var t=J.a.useForm(),n=Object(Y.a)(t,1)[0];return Object(A.jsxs)("div",{className:be.a.recoveryPassword,children:[Object(A.jsx)("div",{className:be.a.title,children:"Cards"}),Object(A.jsx)("div",{className:be.a.titleName,children:Object(A.jsx)("h3",{children:"Forgot your password?"})}),Object(A.jsxs)(J.a,Object(m.a)(Object(m.a)({name:"forgot password",className:be.a.form},ae),{},{form:n,onFinish:function(t){e.onSubmit(t)},children:[Z("email","E-mail"),Object(A.jsx)("div",{className:be.a.subtitle,children:"Enter your email address and we will send you future instructions"}),Object(A.jsx)("div",{className:be.a.buttons,children:Object(A.jsx)("button",{className:be.a.btnSend,type:"submit",children:"Send Instructions"})}),Object(A.jsxs)("div",{className:be.a.signUp,children:[Object(A.jsx)("span",{children:"Did you remember your password?"}),Object(A.jsx)(H.b,{to:"/login",children:"Try logging in"})]})]}))]})},he=Object(a.memo)((function(){var e=Object(a.useState)(""),t=Object(Y.a)(e,2),n=t[0],r=t[1],s=Object(o.c)((function(e){return e.recovery.isSend})),i=Object(o.c)((function(e){return e.statusApp.status})),c=Object(o.b)();if("load"===i)return Object(A.jsx)(ne,{});return s?Object(A.jsx)(R.a,{to:{pathname:"/chek-email",state:{userEmail:n}}}):Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(me,{onSubmit:function(e){var t;r(e.email),c((t={email:e.email,from:"test-front-admin <ai73a@yandex.by>",message:'<div>\n            <span>Follow the link to set a new password:</span>\n            <a href="https://kromos1.github.io/fryday-erik-roma-pasha/#/set-new-password/$token$">click on the link to confirm your mail</a>\n        </div>'},function(){var e=Object(b.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(y("load","")),e.prev=1,e.next=4,S(t);case 4:n({type:"RECOVERY/SET_SEND_STATUS",sendStatus:!0}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(y("error",e.t0.message));case 10:return e.prev=10,n(y("idle","")),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(t){return e.apply(this,arguments)}}()))}})})})),pe=function(e){var t="";return e.profile&&(t="Hello user"),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{children:t}),Object(A.jsx)("div",{children:Object(A.jsx)("button",{onClick:e.logOut,children:"Logout"})})]})},fe=Object(a.memo)((function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.profile})),n=Object(o.c)((function(e){return e.login.isAuth})),a=Object(o.c)((function(e){return e.statusApp.status}));if(!n)return Object(A.jsx)(R.a,{to:"/login"});if("load"===a)return Object(A.jsx)(ne,{});return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(pe,{profile:t,logOut:function(){e((function(e){_().then((function(t){t.data.info&&e(T(!1))}))}))}})})})),Oe=n(54),_e=n.n(Oe),ge=n.p+"static/media/checkEmail.37bcebbd.jpg",xe=function(){var e=Object(R.g)();return Object(A.jsxs)("div",{className:_e.a.chekMail,children:[Object(A.jsx)("div",{className:_e.a.title,children:"Cards"}),Object(A.jsx)("img",{src:ge,className:_e.a.authIcon,alt:"Check your Email page"}),Object(A.jsx)("div",{className:_e.a.titleName,children:Object(A.jsx)("h3",{children:"Check Email"})}),Object(A.jsxs)("div",{className:_e.a.subtitle,children:["We've sent an Email with instructions to ",e.state?e.state.userEmail:" your Email"]})]})},Se="/login",ve="/profile",we="/registration",ye="/set-new-password/:token?",Ne="/recovery-password",Ee="/chek-email",Pe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.statusApp.isInitialize}));return Object(a.useEffect)((function(){e(function(){var e=Object(b.a)(j.a.mark((function e(t){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:(n=e.sent)&&(t(N(n)),t(T(!0))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t(y("error",e.t0.message));case 10:return e.prev=10,t(y("idle","")),t({type:"STATUS-APP/SET_IS_INITIALIZE",isInit:!0}),e.finish(10);case 14:case"end":return e.stop()}}),e,null,[[0,7,10,14]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),t?Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)(R.d,{children:[Object(A.jsx)(R.b,{path:"/",exact:!0,render:function(){return Object(A.jsx)(R.a,{to:ve})}}),Object(A.jsx)(R.b,{path:Se,render:function(){return Object(A.jsx)(ce,{})}}),Object(A.jsx)(R.b,{path:ve,render:function(){return Object(A.jsx)(fe,{})}}),Object(A.jsx)(R.b,{path:we,render:function(){return Object(A.jsx)(se,{})}}),Object(A.jsx)(R.b,{path:ye,render:function(){return Object(A.jsx)(de,{})}}),Object(A.jsx)(R.b,{path:Ne,render:function(){return Object(A.jsx)(he,{})}}),Object(A.jsx)(R.b,{path:Ee,render:function(){return Object(A.jsx)(xe,{})}}),Object(A.jsx)(R.b,{render:function(){return Object(A.jsx)(q,{})}})]})}):Object(A.jsx)("div",{children:Object(A.jsx)(ne,{})})},Te=n(126),Re=n.n(Te),Ae=function(){return Object(A.jsx)("div",{className:Re.a.page,children:Object(A.jsx)(Pe,{})})};i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(H.a,{children:Object(A.jsx)(o.a,{store:z,children:Object(A.jsx)(Ae,{})})})}),document.getElementById("root")),c()},40:function(e,t,n){e.exports={login:"LoginStyle_login__37Vgh",title:"LoginStyle_title__2mMcN",titleName:"LoginStyle_titleName__OqHjZ",form:"LoginStyle_form__13ckJ",field:"LoginStyle_field__2gOYQ",input:"LoginStyle_input__3leUN",forgot:"LoginStyle_forgot__3BaTX",buttons:"LoginStyle_buttons__1-7Y1",btnLogin:"LoginStyle_btnLogin__1p5Mw",signUp:"LoginStyle_signUp__DEF_E"}},42:function(e,t,n){e.exports={recoveryPassword:"RecoveryPasswordStyle_recoveryPassword__xYhLm",title:"RecoveryPasswordStyle_title__1ZuTd",titleName:"RecoveryPasswordStyle_titleName__2Wqc2",subtitle:"RecoveryPasswordStyle_subtitle__3dA2Y",field:"RecoveryPasswordStyle_field__2XiRQ",input:"RecoveryPasswordStyle_input__2EJH6",buttons:"RecoveryPasswordStyle_buttons__1GTrv",btnSend:"RecoveryPasswordStyle_btnSend__3z9XX",signUp:"RecoveryPasswordStyle_signUp__3iakF"}},45:function(e,t,n){e.exports={field:"FieldComponentStyle_field__3wF6S",input:"FieldComponentStyle_input__2LPri"}},46:function(e,t,n){e.exports={registration:"RegistrationStyle_registration__3rCiu",title:"RegistrationStyle_title__3RuSE",titleName:"RegistrationStyle_titleName__26dRv",form:"RegistrationStyle_form__TM67Y",field:"RegistrationStyle_field__3SYzr",input:"RegistrationStyle_input__2UZ9B",buttons:"RegistrationStyle_buttons__3Ea0q",btnCan:"RegistrationStyle_btnCan__nUHyo",btnReg:"RegistrationStyle_btnReg__2aImk"}},47:function(e,t,n){e.exports={newPasswordMain:"NewPasswordStyle_newPasswordMain__58ssK",title:"NewPasswordStyle_title__7zPVW",titleName:"NewPasswordStyle_titleName__1TaD8",form:"NewPasswordStyle_form__2S2Sz",buttons:"NewPasswordStyle_buttons__3238X",btnSetPass:"NewPasswordStyle_btnSetPass__2jTms"}},54:function(e,t,n){e.exports={chekMail:"ChekEmail_chekMail__1_Eee",title:"ChekEmail_title__15mqp",authIcon:"ChekEmail_authIcon__3-Jfw",titleName:"ChekEmail_titleName__2hjUp",subtitle:"ChekEmail_subtitle__1Htxc"}},96:function(e,t,n){e.exports={preloader:"Preloader_preloader__2uLk-",preloader__image_animate:"Preloader_preloader__image_animate__3B3qF","up-down":"Preloader_up-down__dJ4Q5"}}},[[226,1,2]]]);
//# sourceMappingURL=main.5b3f056f.chunk.js.map