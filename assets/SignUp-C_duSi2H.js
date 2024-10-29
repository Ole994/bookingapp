import{r as u,j as e}from"./react-B1wZPQ-K.js";import{a as C,f as N}from"./index-BUuibi2J.js";import{c as q,a as S}from"./firebase-D2mvULzg.js";import{D as b,z as E}from"./@firebase-CvUDpUTK.js";import{c as A,a as c,b as $}from"./yup-D0TjtoPv.js";import{P as w}from"./prop-types-BiVUseAU.js";import{a as D}from"./react-router-CQggbiSl.js";import"./react-dom-DmBrwDFL.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-Ds01oWgm.js";import"./@remix-run-D3bQaVdt.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";import"./property-expr-DEi1ZLzV.js";import"./tiny-case-BJ7jYKNY.js";import"./toposort-CMgDFqWq.js";const U=A({name:c().required("Name is required"),phone:c().matches(/^[0-9]{8,15}$/,"Phone number must be between 8 and 15 digits").required("Phone number is required"),address:c().required("Address is required"),postalCode:c().matches(/^[0-9]{4}$/,"Postal code must be exactly 4 digits").required("Postal code is required"),postalPlace:c().required("Postal place is required"),city:c().required("City is required"),email:c().email("Please enter a valid email address").required("Email is required"),password:c().min(8,"Password must be at least 12 characters long").matches(/[A-Z]/,"Password must contain at least one uppercase letter").matches(/[a-z]/,"Password must contain at least one lowercase letter").matches(/[0-9]/,"Password must contain at least one number").required("Password is required"),confirmPassword:c().oneOf([$("password"),null],"Passwords must match").required("Confirm password is required")}),f=({onCitySelect:g})=>{const[s,l]=u.useState(""),[a,n]=u.useState([]),p=async r=>{const t=r.target.value;if(l(t),t.length<3){n([]);return}try{const x=await(await fetch(`https://api.datamuse.com/sug?s=${t}&max=5`)).json();if(x){const y=x.map(j=>({city:j.word}));n(y)}else n([])}catch(o){console.error("Error fetching city suggestions:",o),n([])}},m=r=>{l(r.city),n([]),g(r.city)};return e.jsxs("div",{className:"autocomplete",children:[e.jsx("input",{type:"text",placeholder:"Enter city",value:s,onChange:p,className:"autocomplete-input"}),a.length>0&&e.jsx("ul",{className:"autocomplete-suggestions",children:a.map((r,t)=>e.jsx("li",{onClick:()=>m(r),children:r.city},t))})]})};f.propTypes={onCitySelect:w.func.isRequired};const P=({onCountrySelect:g})=>{const[s,l]=u.useState(""),[a,n]=u.useState([]),p=async r=>{const t=r.target.value;if(l(t),t.length<1){n([]);return}try{const y=(await(await fetch(`https://restcountries.com/v3.1/name/${t}`)).json()).map(j=>({name:j.name.common}));n(y.slice(0,5))}catch(o){console.error("Error fetching country suggestions:",o),n([])}},m=r=>{l(r.name),n([]),g(r.name)};return e.jsxs("div",{className:"autocomplete",children:[e.jsx("input",{type:"text",placeholder:"Enter country",value:s,onChange:p,className:"autocomplete-input"}),a.length>0&&e.jsx("ul",{className:"autocomplete-suggestions",children:a.map((r,t)=>e.jsx("li",{onClick:()=>m(r),children:r.name},t))})]})};P.propTypes={onCountrySelect:w.func.isRequired};const L=()=>{const g=D(),[s,l]=u.useState({name:"",phone:"",address:"",postalCode:"",postalPlace:"",city:"",country:"",email:"",password:"",confirmPassword:""}),[a,n]=u.useState({}),[p,m]=u.useState(null),[r,t]=u.useState(null),o=d=>{const{name:i,value:h}=d.target;l({...s,[i]:h})},x=d=>{l(i=>({...i,city:d}))},y=d=>{l(i=>({...i,country:d}))},j=async d=>{d.preventDefault(),n({}),t(null),m(null);try{await U.validate(s,{abortEarly:!1});const h=(await q(C,s.email,s.password)).user;await b(E(N,"users"),{uid:h.uid,name:s.name,email:s.email,phone:s.phone,address:s.address,postalCode:s.postalCode,postalPlace:s.postalPlace,city:s.city,country:s.country}),m("User registered successfully!"),await S(C,s.email,s.password),g("/dashboard")}catch(i){if(i.name==="ValidationError"){const h={};i.inner.forEach(v=>{h[v.path]=v.message}),n(h)}else console.error("Error signing up:",i.message),t(i.message)}};return e.jsx("div",{className:"signup-page",children:e.jsxs("div",{className:"signup-box",children:[e.jsx("h2",{children:"Create Account"}),r&&e.jsx("p",{className:"message error",children:r}),p&&e.jsx("p",{className:"message success",children:p}),e.jsxs("form",{onSubmit:j,className:"signup-form",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",placeholder:"Name",name:"name",value:s.name,onChange:o,required:!0}),a.name&&e.jsx("div",{className:"input-error",children:a.name})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"tel",placeholder:"Phone",name:"phone",value:s.phone,onChange:o,required:!0}),a.phone&&e.jsx("div",{className:"input-error",children:a.phone})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",placeholder:"Address",name:"address",value:s.address,onChange:o,required:!0}),a.address&&e.jsx("div",{className:"input-error",children:a.address})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",placeholder:"Postal Code",name:"postalCode",value:s.postalCode,onChange:o,required:!0}),a.postalCode&&e.jsx("div",{className:"input-error",children:a.postalCode})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"text",placeholder:"Postal Place",name:"postalPlace",value:s.postalPlace,onChange:o,required:!0}),a.postalPlace&&e.jsx("div",{className:"input-error",children:a.postalPlace})]}),e.jsxs("div",{className:"input-group",children:[e.jsx(f,{onCitySelect:x}),a.city&&e.jsx("div",{className:"input-error",children:a.city})]}),e.jsxs("div",{className:"input-group",children:[e.jsx(P,{onCountrySelect:y}),a.country&&e.jsx("div",{className:"input-error",children:a.country})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"email",placeholder:"Email",name:"email",value:s.email,onChange:o,required:!0}),a.email&&e.jsx("div",{className:"input-error",children:a.email})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"password",placeholder:"Password",name:"password",value:s.password,onChange:o,required:!0}),a.password&&e.jsx("div",{className:"input-error",children:a.password})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("input",{type:"password",placeholder:"Confirm Password",name:"confirmPassword",value:s.confirmPassword,onChange:o,required:!0}),a.confirmPassword&&e.jsx("div",{className:"input-error",children:a.confirmPassword})]}),e.jsx("button",{type:"submit",className:"submit-button",children:"Sign Up"})]})]})})};export{L as default};
