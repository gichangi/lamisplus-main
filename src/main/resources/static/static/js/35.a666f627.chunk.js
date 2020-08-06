(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1937:function(e,t,n){"use strict";n.d(t,"d",function(){return l}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"b",function(){return s}),n.d(t,"c",function(){return d});var a=n(86),o=n.n(a),r=n(101),c=n(6),l=function(){return function(e){o.a.get("".concat(r.b,"programs")).then(function(t){console.log(t),e({type:c.N,payload:t.data})}).catch(function(t){console.log(t),e({type:c.K,payload:"Something went wrong"})})}},i=function(e){return function(t){console.log(e),o.a.post("".concat(r.b,"forms/"),e).then(function(e){t({type:c.J,payload:e.data}),console.log(e)}).catch(function(e){t({type:c.K,payload:"please try again"})})}},u=function(e,t){return function(n){o.a.put("".concat(r.b,"forms/").concat(e),t).then(function(e){n({type:c.O,payload:e.data})}).catch(function(e){n({type:c.K,payload:"Something went wrong, please try again"})})}},s=function(e){return function(t){o.a.get("".concat(r.b,"programs/").concat(e,"/forms")).then(function(e){console.log(e),t({type:c.M,payload:e.data})}).catch(function(e){console.log(e),t({type:c.K,payload:"Something went wrong"})})}},d=function(){return function(e){o.a.get("".concat(r.b,"programs/1/forms")).then(function(t){console.log(t),e({type:c.L,payload:t.data})}).catch(function(t){console.log(t),e({type:c.K,payload:"Something went wrong"})})}}},1981:function(e,t,n){"use strict";n.r(t);var a=n(47),o=n(1),r=n.n(o),c=n(453),l=n(821),i=n(644),u=n(645),s=n(264),d=n(98),f=(n(101),n(1937)),p=n(461),m=n(817),b=n(818),g=n(291),y=n(292),h=n(293),E=n(288),v=Object(s.a)(function(e){return{root2:{width:"100%",height:100,overflow:"auto"}}}),w={fetchService:f.d,fetchById:f.b,updateForm:f.e,fetchPatientByHospitalNumber:p.d,fetchForms:f.c};t.default=Object(d.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{form:{}};return console.log(e.forms),{patient:e.patients.patient,services:e.formReducers.services,formList:e.formReducers.form}},w)(function(e){var t,n=r.a.useState(""),s=Object(a.a)(n,2),d=s[0],f=s[1],p=r.a.useState(""),w=Object(a.a)(p,2),S=w[0],O=w[1],j=r.a.useState(""),N=Object(a.a)(j,2),F=N[0],C=N[1],k=r.a.useState(),P=Object(a.a)(k,2),J=P[0],L=P[1],R=r.a.useState(),q=Object(a.a)(R,2),B=q[0],K=q[1],x=(v(),e.patient,Object(o.useRef)(null));Object(o.useEffect)(function(){e.fetchService(),e.fetchForms()},[]),Object(o.useEffect)(function(){e.fetchPatientByHospitalNumber("P123189",null,null)},[]);var D=function(e){console.log(JSON.parse(e.target.value));var t=JSON.parse(e.target.value);L(t.code),K(t)};return r.a.createElement(c.a,{title:"Form Renderer"},r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("h4",null,"View Form"),r.a.createElement("hr",null),r.a.createElement(l.Errors,{errors:e.errors}),d?r.a.createElement(l.Form,{form:JSON.parse(d),ref:function(e){return t=e},submission:{data:{patient:e.patient}},hideComponents:e.hideComponents,onSubmit:function(e){return console.log(e),fetch("https://lp-base-app.herokuapp.com/api/",{body:JSON.stringify(e),headers:{"content-type":"application/json"},method:"POST",mode:"cors"}).then(function(n){console.log(n),t.emit("submitDone",e)})}}):"",r.a.createElement("br",null))),r.a.createElement("hr",null),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("h4",null,"Edit Form"),r.a.createElement(m.a,null,r.a.createElement(b.a,{md:4}," ",r.a.createElement(g.a,null,r.a.createElement(y.a,{class:"sr-only"},"Display Type"),r.a.createElement(h.a,{type:"select",id:"displayType",value:S,onChange:function(e){return O(e.target.value)}},r.a.createElement("option",{value:"form"},"Form"),r.a.createElement("option",{value:"wizard"},"Wizard")))),r.a.createElement(b.a,{md:4}," ",r.a.createElement(g.a,null,r.a.createElement(y.a,{class:"sr-only"},"Program Area"),e.services.length&&e.services.length>0?r.a.createElement(h.a,{type:"select",class:"form-control",id:"programId",required:!0,value:F,onChange:function(t){return function(t){C(t.target.value),e.fetchById(t.target.value)}(t)}},e.services.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)})):r.a.createElement(h.a,{type:"select",class:"form-control",id:"programId",required:!0,value:F,onChange:function(e){return C(e.target.value)}},r.a.createElement("option",null,"No program found")))),r.a.createElement(b.a,{md:4}," ",r.a.createElement(g.a,null,r.a.createElement(y.a,{class:"sr-only"},"Form Name"),e.formList.length&&e.formList.length>0?r.a.createElement(h.a,{type:"select",class:"form-control",id:"formCode",required:!0,value:J,onChange:function(e){return D(e)}},r.a.createElement("option",{value:""},"Select One"),e.formList.map(function(e){return r.a.createElement("option",{value:JSON.stringify(e)},e.name)})):r.a.createElement(h.a,{type:"select",class:"form-control",id:"formCode",required:!0,value:J,onChange:function(e){return L(e.target.value)}})))),r.a.createElement(m.a,null,r.a.createElement(b.a,{md:2}," ",r.a.createElement(g.a,null,r.a.createElement("label",{class:"sr-only"}),r.a.createElement(E.a,{color:"primary",className:" mt-4",onClick:function(){return D()}},"Load Form"))),r.a.createElement(b.a,{md:2}," ",r.a.createElement(g.a,null,r.a.createElement("label",{class:"sr-only"}),r.a.createElement("button",{type:"button",class:"form-control btn btn-primary mt-4",onClick:function(){e.updateForm(B.id,B)}},"Update Form")))),B?r.a.createElement(l.FormBuilder,Object.assign({form:B.resourceObject},e,{onChange:function(e){f(JSON.stringify(e))}})):"",r.a.createElement("br",null))),r.a.createElement("hr",null),r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement("h4",null,"Json Form"),r.a.createElement("div",null,r.a.createElement("textarea",{cols:"100",ref:x,value:d})))))})},452:function(e,t,n){"use strict";n.d(t,"h",function(){return a}),n.d(t,"p",function(){return o}),n.d(t,"g",function(){return r}),n.d(t,"l",function(){return c}),n.d(t,"d",function(){return l}),n.d(t,"a",function(){return i}),n.d(t,"e",function(){return u}),n.d(t,"o",function(){return s}),n.d(t,"c",function(){return d}),n.d(t,"n",function(){return f}),n.d(t,"b",function(){return p}),n.d(t,"i",function(){return m}),n.d(t,"j",function(){return b}),n.d(t,"m",function(){return g}),n.d(t,"k",function(){return y}),n.d(t,"f",function(){return h});var a="25216afc-d158-4696-ada6-00df609b9a4c",o="bc5d44b8-8ed1-4de0-85de-c3c6f2c91cd0",r="4ab293ff-6837-41e8-aa85-14f25ce59ef0",c="87cb9bc7-ea0d-4c83-a70d-b57a5fb7769e",l="d157d4e2-4031-499d-b32b-7562208a10cf",i="f47b2db9-cf1b-4972-8c22-3f353b5fa222",u="8e07eb78-0449-42bd-bd21-9ef9b489ad7d",s="4c0db2ee-7916-4ea6-b24d-42234c8ac0a7",d="ec84dd9a-9493-4b73-b501-6201a06982a6",f="796f2a0f-1e76-42af-a24a-e6f09dfedbe7",p="22ec08bd-eeae-4f5e-9041-44461d511e90",m=3,b=2,g="0",y=[{name:"Sample Collected",id:1},{name:"Sample Transfer",id:2},{name:"Sample Verified",id:3},{name:"Sample Rejected",id:4},{name:"Result Available",id:5},{name:"Pending",id:0}],h=[{name:"Not Dispensed",id:0},{name:"Dispensed",id:1}]},453:function(e,t,n){"use strict";var a=n(20),o=n(1),r=n.n(o),c=(n(31),n(55)),l=n(747),i=n(748),u=n(65),s=n(10),d=n.n(s),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"},p=function(e){var t,n=e.tag,o=e.className,c=e.type,l=Object(a.a)(e,["tag","className","type"]),i=d()(Object(u.a)({},c,!!c),o);return t=n||(!n&&f[c]?f[c]:"p"),r.a.createElement(t,Object.assign({},l,{className:i}))};p.defaultProps={type:"p"};var m=p,b=c.a.create("page"),g=function(e){var t=e.title,n=e.breadcrumbs,o=e.tag,c=e.className,u=e.children,s=Object(a.a)(e,["title","breadcrumbs","tag","className","children"]),d=b.b("px-5","p-5",c);return r.a.createElement(o,Object.assign({className:d},s),r.a.createElement("div",{className:b.e("header")},t&&"string"===typeof t?r.a.createElement(m,{type:"h4",className:b.e("title")},t):t,n&&r.a.createElement(l.a,{className:b.e("breadcrumb")},r.a.createElement(i.a,null,"Home"),n.length&&n.map(function(e,t){var n=e.name,a=e.active;return r.a.createElement(i.a,{key:t,active:a},n)}))),u)};g.defaultProps={tag:"div",title:""};t.a=g},461:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"e",function(){return s}),n.d(t,"b",function(){return d}),n.d(t,"l",function(){return f}),n.d(t,"a",function(){return p}),n.d(t,"f",function(){return m}),n.d(t,"i",function(){return b}),n.d(t,"k",function(){return g}),n.d(t,"j",function(){return y}),n.d(t,"h",function(){return h}),n.d(t,"d",function(){return E}),n.d(t,"g",function(){return v});var a=n(86),o=n.n(a),r=n(101),c=n(6),l=n(452),i=n(432),u=function(e,t){return function(n){o.a.get("".concat(r.b,"patients/")).then(function(t){console.log(t.data),e&&e(),n({type:c.cb,payload:t.data}),e()}).catch(function(e){t&&t(),n({type:c.bb,payload:"Something went wrong, please try again"}),t()})}},s=function(e,t,n){return function(a){e&&o.a.get("".concat(r.b,"patients/").concat(e)).then(function(e){a({type:c.db,payload:e.data}),t&&t()}).catch(function(e){a({type:c.bb,payload:e}),n&&n()})}},d=function(e,t,n){return function(a){console.log(e),o.a.post("".concat(r.b,"patients/"),e).then(function(e){a({type:c.ab,payload:e.data}),t&&t(),i.b.success("Patient Register Save Successfully!")}).catch(function(e){a({type:c.bb,payload:"Something went wrong"}),n(),null===e.response.data.apierror.message||""===e.response.data.apierror.message?i.b.error("Something went wrong"):i.b.error(e.response.data.apierror.message)})}},f=function(e,t,n,a){return function(l){console.log("".concat(r.b,"patients/").concat(t)),o.a.put("".concat(r.b,"patients/").concat(t),e).then(function(e){l({type:c.eb,payload:e.data}),n(),i.b.success("Patient record was updated successfully!")}).catch(function(e){l({type:c.bb,payload:e.response.data}),console.log(e.response.data),a(),null===e.response.data.apierror.message||""===e.response.data.apierror.message?i.b.error("Something went wrong"):i.b.error(e.response.data.apierror.message)})}},p=function(e){return function(t){console.log("".concat(r.b,"patients/").concat(e)),o.a.delete("".concat(r.b,"patients/").concat(e)).then(function(n){t({type:c.gb,payload:e}),i.b.success("Patient record was deleted successfully!")}).catch(function(e){t({type:c.bb,payload:e.response.data}),null===e.response.data.apierror.message||""===e.response.data.apierror.message?i.b.error("Something went wrong"):i.b.error(e.response.data.apierror.message)})}},m=function(e,t,n){return function(a){o.a.get("".concat(r.b,"patients/").concat(e,"/encounters/").concat(l.n,"/")).then(function(e){t&&t(),a({type:c.fb,payload:e.data})}).catch(function(e){a({type:c.bb,payload:"Something went wrong, please try again"}),n&&n()})}},b=function(e,t,n){return function(a){o.a.get("".concat(r.b,"patients/").concat(e,"/encounters/").concat(l.p),{limit:1,sortField:"dateEncounter",sortOrder:"desc"}).then(function(e){t&&t(),e.data.length>0&&a({type:c.lb,payload:e.data[0]})}).catch(function(e){a({type:c.bb,payload:"Something went wrong, please try again"}),n&&n()})}},g=function(e,t,n){return function(a){e&&o.a.get("".concat(r.b,"patients/").concat(e,"/encounters/").concat(l.p)).then(function(e){a({type:c.nb,payload:e.data}),t&&t()}).catch(function(e){a({type:c.bb,payload:"Something went wrong, please try again"}),n&&n()})}},y=function(e,t,n){return function(a){e&&o.a.get("".concat(r.b,"patients/").concat(e,"/encounters/").concat(l.l),{limit:5,sortField:"dateEncounter",sortOrder:"desc"}).then(function(e){a({type:c.jb,payload:e.data}),t&&t()}).catch(function(e){a({type:c.bb,payload:"Something went wrong, please try again"}),n&&n()})}},h=function(e,t,n){return function(a){e&&o.a.get("".concat(r.b,"patients/").concat(e,"/encounters/").concat(l.g),{limit:5,sortField:"dateEncounter",sortOrder:"desc"}).then(function(e){t&&t(),a({type:c.kb,payload:e.data})}).catch(function(e){n&&n(),a({type:c.bb,payload:"Something went wrong, please try again"})})}},E=function(e,t,n){return function(a){o.a.get("".concat(r.b,"patients/").concat(e)).then(function(e){a({type:c.db,payload:e.data}),t&&t()}).catch(function(e){a({type:c.bb,payload:"Something went wrong, please try again"}),n&&n()})}},v=function(e,t,n){return function(a){if(e){var i=[l.h];o.a.get("".concat(r.b,"patients/").concat(e,"/encounters/programCodeExclusionList?programCodeExclusionList=").concat(i)).then(function(e){a({type:c.ib,payload:e.data}),t&&t()}).catch(function(e){a({type:c.bb,payload:"Something went wrong, please try again"}),n&&n()})}}}}}]);
//# sourceMappingURL=35.a666f627.chunk.js.map