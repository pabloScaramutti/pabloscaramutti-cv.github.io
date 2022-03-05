import{j as h,u as s,T as c,r as m,i as g,a as p,R as v,b as f}from"./vendor.cf73e7c3.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function l(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=l(i);fetch(i.href,o)}};b();var y="/cv/assets/yo.593216d0.jpg";const e=h.exports.jsx,a=h.exports.jsxs;function N(){return a("header",{className:"profile-container",children:[e("img",{src:y,className:"profile-picture"}),a("div",{className:"title",children:[e("h1",{children:"Scaramutti Pablo Martin"}),e("p",{className:"font-light",children:"Multimedia Designer / Front-end Web Developer"})]})]})}var I="/cv/assets/mail.ee439e57.svg",P="/cv/assets/phone.980902fc.svg",w="/cv/assets/github.8c4aa423.svg",x="/cv/assets/linkedin.6c8896bf.svg",k="/cv/assets/instagram.33855527.svg";function L(){return s(),a("div",{children:[e("h1",{children:e(c,{children:"contact"})}),a("ul",{children:[e("li",{children:a("a",{href:"mailto:pabloscaramutti@gmail.com",children:[e("img",{src:I,alt:"Mail",className:"icon"}),e("h4",{children:"pabloscaramutti@gmail.com"})]})}),e("li",{children:a("a",{href:"tel:+5492215718024",children:[e("img",{src:P,alt:"phone",className:"icon"}),e("h4",{children:"+54 221 571-8024"})]})}),e("li",{children:a("a",{href:"https://github.com/pabloScaramutti",target:"_blank",children:[e("img",{src:w,alt:"Github",className:"icon"}),e("h4",{children:"/pabloScaramutti"})]})}),e("li",{children:a("a",{href:"https://www.linkedin.com/in/pabloscaramutti/",target:"_blank",children:[e("img",{src:x,alt:"Linkedin",className:"icon"}),e("h4",{children:"/in/pabloscaramutti/"})]})}),e("li",{children:a("a",{href:"https://www.instagram.com/pabloscaramutti/",target:"_blank",children:[e("img",{src:k,alt:"Instagram",className:"icon"}),e("h4",{children:"/pabloscaramutti/"})]})})]})]})}var j="/cv/assets/html-5.1930bbab.svg",A="/cv/assets/css3.d7708542.svg",S="/cv/assets/javascript.9790e648.svg",E="/cv/assets/react.5cdae4bc.svg",M="/cv/assets/vuejs.24edb04c.svg",R="/cv/assets/next-js.40f02dfc.svg",D="/cv/assets/adobe-illustrator.51e492ed.svg",F="/cv/assets/adobe-lightroom.b20a0176.svg",T="/cv/assets/adobe-photoshop.65bdee88.svg",C="/cv/assets/adobe-after-effects.ea940b86.svg",O="/cv/assets/adobe-premiere-pro.eb8eaa7c.svg";const U=[{name:"HTML",icon:j},{name:"CSS",icon:A},{name:"Javascript",icon:S},{name:"React",icon:E},{name:"NextJs",icon:R},{name:"Vuejs",icon:M}],B=[{name:"Illustrator",icon:D},{name:"Lightroom",icon:F},{name:"AfterEffects",icon:C},{name:"PremirePro",icon:O},{name:"Photoshop",icon:T}];function J(){return s(),a("div",{children:[e("h1",{children:e(c,{children:"toolbox"})}),a("div",{className:"skills-container",children:[a("div",{children:[e("h2",{children:"IT"}),e("ul",{className:"skill-list",children:U.map(t=>a("li",{children:[e("img",{src:t.icon,className:"icon"}),e("p",{children:t.name})]},t.name))})]}),a("div",{children:[e("h2",{children:"Visual"}),e("ul",{className:"skill-list",children:B.map(t=>a("li",{children:[e("img",{src:t.icon,className:"icon"}),e("p",{children:t.name})]},t.name))})]})]})]})}function V(){const{t}=s();return a("div",{className:"languages",children:[e("h1",{children:e(c,{children:"languages.sectionTitle"})}),t("languages.content",{returnObjects:!0}).map(n=>a("p",{className:"font-bold flex justify-between",children:[n.language,":",e("span",{className:"font-light",children:n.level})]},n.language))]})}function q(){const{t}=s();return a("div",{className:"container",children:[e("h1",{className:"line-separator",children:e(c,{children:"workExperience.title"})}),t("workExperience.content",{returnObjects:!0}).map(n=>a("div",{children:[e("h3",{children:n.company}),e("h4",{children:n.jobPosition}),e("p",{className:"font-light",children:n.description})]},n.company))]})}function G(){const{t}=s();return a("div",{className:"container",children:[e("h1",{className:"line-separator",children:e(c,{children:"education.title"})}),t("education.content",{returnObjects:!0}).map(n=>a("div",{children:[a("div",{className:"flex align-center no-margin wrap",children:[e("h3",{className:"mr-1",children:n.title}),e("p",{className:"font-light font-small",children:n.status?n.status:""})]}),e("h4",{children:n.university}),e("p",{className:"font-light",children:n.faculty}),e("p",{className:"font-light",children:n.location})]},n.title))]})}var H="/cv/assets/PabloScaramutti-cv.3a929c03.pdf",W="/cv/assets/download.32b1d33c.svg",_="/cv/assets/sun.b277c78f.svg",$="/cv/assets/moon.d5e60848.svg",K="/cv/assets/mail-solid.2b9a3eee.svg";const u={dark:"light",light:"dark"};function z({actualTheme:t,setTheme:n}){const{i18n:l}=s();function r(){localStorage.setItem("theme",u[t]),n(u[t])}function i(o){l.changeLanguage(o),localStorage.setItem("lang",o)}return a("nav",{className:"menu-bar",children:[l.language==="en"?e("button",{type:"button",onClick:()=>i("es"),title:"Ver en epa\xF1ol",children:"ES"}):e("button",{type:"button",onClick:()=>i("en"),title:"Read in english",children:"EN"}),e("button",{type:"button",onClick:()=>r(),title:"Change theme",children:t=="dark"?e("img",{src:_,className:"icon"}):e("img",{src:$,className:"icon",width:"18px",height:"18px"})}),e("a",{href:"mailto:pabloscaramutti@gmail.com",children:e("img",{src:K,alt:"mail-icon",title:"Send me an email",className:"icon"})}),e("a",{href:H,download:!0,children:e("img",{src:W,alt:"download-icon",title:"Download PDF",className:"icon"})})]})}function Q(){const[t,n]=m.exports.useState(localStorage.getItem("theme")||"dark"),{t:l,i18n:r}=s();return m.exports.useEffect(()=>{const i=localStorage.getItem("lang");i&&r.changeLanguage(i)},[]),e("div",{className:"App","data-theme":t,children:a("div",{className:"main-container",children:[e(z,{actualTheme:t,setTheme:n}),e(N,{}),e("p",{className:"bio font-light",children:e(c,{children:"bio"})}),a("div",{className:"content",children:[a("div",{className:"contact",children:[e(L,{}),e(J,{}),e(V,{})]}),a("div",{className:"curriculum",children:[e(q,{}),e(G,{})]})]})]})})}g.use(p).init({debug:!1,fallbackLng:"en",interpolation:{escapeValue:!1},resources:{en:{translation:{bio:"I\u2019m 27 years old based in La Plata, Argentina. I've lernt a lot of tools and skills in my years as student and expanded this knowledge working in startups and as a freelancer. I love new challenges, finding solutions for problems and helping others to have a better life. With my background on multimedia design and programming, I can ideate solutions and bring them to life. <br/> I\u2019m currently working with Reactjs and I'm searching for new experience to apply and develope my skills and learn from team work.",workExperience:{title:"Work Experience",content:[{company:"Cheers smart contracts",jobPosition:"Front-end developer",description:"I participated with the elicitation of requirements, the app design and developed the front end of the MVP app with ReactJS and Tailwind"},{company:"DevGoblins",jobPosition:"Front-end developer",description:"Made a landing page for the startup company with ReactJS"},{company:"Panorama - Digital agency",jobPosition:"Visual designer",description:"Gained experience about digital marketing, graphic design, web design, event photography and videography."}]},education:{title:"Education",content:[{title:"Degree on Multimedia Design",status:void 0,university:"National University of La Plata",faculty:"Faculty of arts",location:"La Plata, Buenos Aires, Argentina"},{title:"Professorship in Multimedia Design",status:"(Ongoing - 95.65%)",university:"National University of La Plata",faculty:"Faculty of arts",location:"La Plata, Buenos Aires, Argentina"},{title:"University Programmer Analyst",status:"(Ongoing - 52.17%)",university:"National University of La Plata",faculty:"Computer Science Faculty",location:"La Plata, Buenos Aires, Argentina"}]},contact:"Contact",toolbox:"Toolbox",languages:{sectionTitle:"Languages",content:[{language:"Spanish",level:"Native"},{language:"English",level:"Intermediate"}]}}},es:{translation:{bio:"Tengo 27 a\xF1os y vivo en La Plata, Argentina. Aprend\xED muchas habilidades en mi carrera universitaria y expand\xED mi conocimiento trabajando en startups y como freelancer. Me gustan los desafios y ayudar a las personas buscando soluciones a distintos problemas. Con mis conocimientos en dise\xF1o multimedia y programaci\xF3n, puedo idear soluciones y luego llevarlas a cabo. <br /> Actualmente estoy trabajando con Reactjs y estoy buscando nuevas experiencias para aplicar y desarrollar todos los conocimientos que fui aprendiendo a lo largo de los a\xF1os y seguir aprendiendo y formarmandome.",workExperience:{title:"Experiencia laboral",content:[{company:"Cheers smart contracts",jobPosition:"Front-end developer",description:"Particip\xE9 de la elicitacion de requerimientos, el dise\xF1o de la aplicaci\xF3n y el desarrollo front end del MVP con ReactJS y Tailwind"},{company:"DevGoblins",jobPosition:"Front-end developer",description:"Realice la pagina principal de la startup con ReactJS"},{company:"Panorama - Agencia digital",jobPosition:"Dise\xF1ador visual",description:"Realic\xE9 tareas vinculadas con el marketing digital, community managment, dise\xF1o gr\xE1fico, dise\xF1o web, fotograf\xEDa de eventos y videograf\xEDa."}]},education:{title:"Educaci\xF3n",content:[{title:"Lic. Dise\xF1o Multimedial",status:void 0,university:"Universidad Nacional de La Plata",faculty:"Facultad de Artes",location:"La Plata, Buenos Aires, Argentina"},{title:"Prof. Dise\xF1o Multimedial",status:"(En curso - 95.65%)",university:"Universidad Nacional de La Plata",faculty:"Facultad de Artes",location:"La Plata, Buenos Aires, Argentina"},{title:"Analista Programador Universitario",status:"(En curso - 52.17%)",university:"Universidad Nacional de La Plata",faculty:"Facultad de Inform\xE1tica",location:"La Plata, Buenos Aires, Argentina"}]},contact:"Contacto",toolbox:"Herramientas",languages:{sectionTitle:"Idiomas",content:[{language:"Espa\xF1ol",level:"Nativo"},{language:"Ingles",level:"Intermedio"}]}}}}});v.render(e(f.StrictMode,{children:e(Q,{})}),document.getElementById("root"));
