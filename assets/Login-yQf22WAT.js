import{r as a,j as e}from"./react--XRl7haj.js";import{A as f,a as N}from"./index-CuK6BhY5.js";import{a as y}from"./firebase-jztzg6lO.js";import"./@firebase-CJcwsLHv.js";import{a as w}from"./react-router-B4NpJaNW.js";import"./prop-types-BiVUseAU.js";import"./react-dom-CIG6_WAD.js";import"./scheduler-CzFDRTuY.js";import"./react-router-dom-6adBjQk5.js";import"./@remix-run-D3bQaVdt.js";import"./tslib-BGVaTf34.js";import"./idb-BXWtuYvb.js";const U=()=>{const{user:o,login:l}=a.useContext(f),[n,x]=a.useState(""),[u,j]=a.useState(""),[c,m]=a.useState(null),[d,g]=a.useState(null),[r,p]=a.useState(!1),t=w();a.useEffect(()=>{o&&t("/")},[o,t]);const b=async s=>{s.preventDefault(),m(null),g(null),p(!0);try{const h=(await y(N,n,u)).user;l({email:h.email,name:h.displayName||"Firebase User"}),g("Innlogging var vellykket!"),t("/")}catch(i){console.error("Error logging in with Firebase:",i.message),m("Kunne ikke logge inn. Vennligst sjekk e-post og passord og prøv igjen.")}finally{p(!1)}},v=s=>{s.preventDefault(),l({email:n,name:"Test User"}),t("/")};return e.jsx("div",{className:"login-wrapper",children:e.jsxs("div",{className:"login-box",children:[e.jsx("h2",{className:"login-title",children:"Logg inn"}),c&&e.jsx("p",{className:"error-message",children:c}),d&&e.jsx("p",{className:"success-message",children:d}),e.jsxs("form",{onSubmit:b,className:"login-form",children:[e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"email",children:"E-post:"}),e.jsx("input",{type:"email",id:"email",value:n,onChange:s=>x(s.target.value),required:!0,disabled:r})]}),e.jsxs("div",{className:"input-group",children:[e.jsx("label",{htmlFor:"password",children:"Passord:"}),e.jsx("input",{type:"password",id:"password",value:u,onChange:s=>j(s.target.value),required:!0,disabled:r})]}),e.jsx("button",{type:"submit",className:"primary-button",disabled:r,children:r?"Logger inn...":"Logg inn"})]}),e.jsx("div",{className:"separator",children:"eller"}),e.jsx("button",{onClick:v,className:"secondary-button",children:"Logg inn med testbruker"})]})})};export{U as default};