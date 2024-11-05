import{r as m,j as s}from"./react--XRl7haj.js";import{H as y,I as v,J as C,z as h,M as g}from"./@firebase-CJcwsLHv.js";import{s as w,d as x}from"./index-CafFRUbc.js";import{P as t}from"./prop-types-BiVUseAU.js";import"./idb-BXWtuYvb.js";import"./react-dom-CIG6_WAD.js";import"./scheduler-CzFDRTuY.js";import"./firebase-jztzg6lO.js";import"./tslib-BGVaTf34.js";import"./react-router-B4NpJaNW.js";import"./@remix-run-D3bQaVdt.js";import"./react-router-dom-6adBjQk5.js";const P=({onClose:r,profileData:e,profileImageUrl:o})=>{const[n,a]=m.useState({name:(e==null?void 0:e.name)||"",email:(e==null?void 0:e.email)||"",phone:(e==null?void 0:e.phone)||"",address:(e==null?void 0:e.address)||"",postalCode:(e==null?void 0:e.postalCode)||"",postalPlace:(e==null?void 0:e.postalPlace)||"",city:(e==null?void 0:e.city)||"",uid:(e==null?void 0:e.uid)||"",country:(e==null?void 0:e.country)||"",gender:(e==null?void 0:e.gender)||"",birthDate:(e==null?void 0:e.birthDate)||""}),[u,j]=m.useState(null);m.useEffect(()=>{e&&a({name:e.name||"",email:e.email||"",phone:e.phone||"",address:e.address||"",postalCode:e.postalCode||"",postalPlace:e.postalPlace||"",city:e.city||"",uid:e.uid||"",country:e.country||"",birthDate:e.birthDate||"",gender:e.gender||""})},[e]);const c=l=>{const{name:d,value:i}=l.target;a({...n,[d]:i})},p=l=>{l.target.files[0]&&j(l.target.files[0])},b=async()=>{if(!(!u||!n.uid))try{const l=y(w,`profileImages/${n.uid}`);await v(l,u);const d=await C(l),i=h(x,"users",n.uid);await g(i,{profileImage:d},{merge:!0}),r()}catch(l){console.error("Error uploading image:",l)}},N=async()=>{try{const l=h(x,"users",n.uid);await g(l,n),console.log("Saved:",n),r()}catch(l){console.error("Error saving profile:",l)}};return s.jsxs("div",{className:"profile-edit-container",children:[o&&s.jsx("img",{src:o,alt:"Profile",className:"profile-image"}),s.jsx("h1",{children:"Rediger Profil"}),s.jsxs("div",{className:"profile-row",children:[s.jsx("label",{className:"profile-label",children:"Last opp nytt profilbilde:"}),s.jsx("input",{type:"file",accept:"image/*",onChange:p,className:"profile-input"}),s.jsx("button",{onClick:b,children:"Last opp"})]}),s.jsxs("div",{className:"profile-row",children:[s.jsx("label",{className:"profile-label",children:"Navn:"}),s.jsx("input",{type:"text",name:"name",value:n.name,onChange:c,className:"profile-input"})]}),s.jsxs("div",{className:"profile-row",children:[s.jsx("label",{className:"profile-label",children:"E-post:"}),s.jsx("input",{type:"email",name:"email",value:n.email,onChange:c,className:"profile-input"})]}),s.jsxs("div",{className:"profile-row",children:[s.jsx("label",{className:"profile-label",children:"Telefon:"}),s.jsx("input",{type:"text",name:"phone",value:n.phone,onChange:c,className:"profile-input"})]}),s.jsxs("div",{className:"profile-row",children:[s.jsx("label",{className:"profile-label",children:"addresse:"}),s.jsx("input",{type:"text",name:"address",value:n.address,onChange:c,className:"profile-input"})]}),s.jsxs("div",{className:"profile-row",children:[s.jsx("label",{className:"profile-label",children:"Postnummer:"}),s.jsx("input",{type:"text",name:"address",value:n.postalCode,onChange:c,className:"profile-input"})]}),s.jsxs("div",{className:"profile-row",children:[s.jsx("label",{className:"profile-label",children:"By:"}),s.jsx("input",{type:"date",name:"birthDate",value:n.city,onChange:c,className:"profile-input"})]}),s.jsxs("div",{className:"profile-row",children:[s.jsx("label",{className:"profile-label",children:"Kjønn:"}),s.jsx("input",{type:"text",name:"gender",value:n.gender,onChange:c,className:"profile-input"})]}),s.jsxs("div",{className:"button-group",children:[s.jsx("button",{className:"save-button",onClick:N,children:"Lagre"}),s.jsx("button",{className:"cancel-button",onClick:r,children:"Avbryt"})]})]})};P.propTypes={onClose:t.func.isRequired,profileData:t.object.isRequired,profileImageUrl:t.string.isRequired};export{P as default};
