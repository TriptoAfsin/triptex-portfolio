import{u as e,V as t,R as a,L as l,r as n,H as r,S as c,a as s,b as m,c as i,d as o,F as d,e as p,f as h,g as E,h as u,i as f,j as g,k as b,l as N,I as x,m as v,C as w,n as k,o as S,p as y,T as F,q as T,s as L,t as A,v as C,w as P,x as I,y as B}from"./vendor.07c3da78.js";function z(){const{pathname:a}=e();return t.exports.useEffect((()=>{window.scrollTo({top:10,behavior:"smooth"})}),[a]),null}let j={pageTitle:"Afshin Nahian Tripto",devName:"Afshin Nahian Tripto ",showParticles:!0,typeWriterStringsArr:["a Freelance Webdeveloper","an Engineering Student","a Learner","a Teacher"],aboutMe:'I’m Afshin Nahian Tripto , I’m a freelance web developer and an engineering student who is passionate about tech and loves to learn. \n    I love to share my knowledge and experiences. I\'m a firm believer of "Change starts from you"',educationalSection:['👨‍🎓 Bsc: Industrial & Production Engineering(<a href="https://www.butex.edu.bd/">BUTEX</a>)',"🙍‍♂️ HSC: Science (GPA: 5.00)","👦 SSC: Science (GPA: 5.00)"],socialLinks:{socialFacebook:"https://www.facebook.com/Tripto.Afsin",socialLinkedin:"https://www.linkedin.com/in/triptoafsin/",socialGithub:"https://github.com/TriptoAfsin",socialMail:"mailto:AfsinTripto@gmail.com"},navbar:{logoName:"Afshin Nahian Tripto",colorClassName:"neonBlue"},footer:{siteMoto:"✅ Be the change",footerTitle:"Afshin Nahian Tripto",footerAdrress:"Dhaka, Bangladesh",colorClassName:"purpleGradient"}};const G=`nav-container ${j.navbar.colorClassName}`;var M=a.memo((function(){return a.createElement(a.Fragment,null,a.createElement("nav",{className:G},a.createElement(l,{to:"/",className:"logo bold"},j.navbar.logoName),a.createElement("input",{className:"menu-btn",type:"checkbox",id:"menu-btn"}),a.createElement("label",{className:"menu-icon",htmlFor:"menu-btn"},a.createElement("span",{className:"navicon"})),a.createElement("ul",{className:"menu"},a.createElement("li",null,a.createElement(l,{to:"/"},"Home")),a.createElement("li",null,a.createElement("a",{href:"../../cv/Afshin Nahian Tripto-WebDev.pdf",target:"_blank",rel:"noreferrer"},"CV ",a.createElement("sup",{className:"lightRed rounded pad1"},"PDF"))),a.createElement("li",null,a.createElement(l,{to:"/projects"},"Projects")),a.createElement("li",null,a.createElement("a",{href:"https://blog.triptex.me/",target:"_blank",rel:"noreferrer"},"Blog")),a.createElement("li",null,a.createElement(l,{to:"/contact"},"Contact")))))}));let $=()=>{const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}};function _(){const[e,a]=t.exports.useState($());return t.exports.useEffect((()=>{function e(){a($())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}const W=j.socialLinks.socialGithub,D=j.socialLinks.socialFacebook,H=j.socialLinks.socialLinkedin,U=j.socialLinks.socialMail;var O=a.memo((function(){const{height:e,width:t}=_();return a.createElement(a.Fragment,null,t<=600?a.createElement("a",{href:W,className:"pad2"},a.createElement("img",{src:"./imgs/git-new.png",alt:"github",width:"80%"})):a.createElement("p",null),a.createElement("div",{className:"row-force mt5 fade center-self"},a.createElement(n.SocialIcon,{url:W,bgColor:"#ffff",className:"hide-on-mobile mr2"}),a.createElement(n.SocialIcon,{url:H,bgColor:"#ffff",className:"hide-on-mobile mr2"}),a.createElement(n.SocialIcon,{url:D,bgColor:"#ffff",className:"hide-on-mobile mr2"}),a.createElement(n.SocialIcon,{url:U,bgColor:"#ffff",className:"hide-on-mobile"})))}));let R=(new Date).getFullYear();const X=j.socialLinks.socialGithub,q=j.socialLinks.socialFacebook,J=j.socialLinks.socialLinkedin,V=`shadow ${j.footer.colorClassName}`;var K=a.memo((function(){const{height:e,width:t}=_();return a.createElement(a.Fragment,null,a.createElement("footer",{className:V},a.createElement("div",{className:"column"},a.createElement("p",{className:"txt-xl bold"},j.footer.footerTitle),a.createElement("p",{className:"txt-med"},j.footer.siteMoto),a.createElement("p",null,"All rights reserved by: ",j.devName," ©",R)),a.createElement("div",{className:"column"},a.createElement("p",{className:"txt-lg"},"🏡 Address"),a.createElement("p",null,j.footer.footerAdrress)),t<=600?a.createElement("div",null,a.createElement("p",{className:"txt-lg mt2"},"Find Me On"),a.createElement("div",{className:"row-force center-self"},a.createElement("a",{href:X,className:"grey pad2"},"Github ||"),a.createElement("a",{href:J,className:"grey"},"Linkedin"),a.createElement("a",{href:q,className:"grey pad2"}," || Facebook"))):a.createElement("p",null),a.createElement("div",{className:"hide-on-mobile"},a.createElement("p",{className:"txt-lg"},"Follow Me"),a.createElement(O,null))))}));let Q=[{id:1,title:"🟢 Github/TriptoAfsin",link:"https://github.com/TriptoAfsin"},{id:2,title:"🔵 Linkedin/triptoafsin",link:"https://www.linkedin.com/in/triptoafsin/"},{id:3,title:"🟠 Facebook/Tripto.Afsin",link:"https://www.facebook.com/Tripto.Afsin"},{id:4,title:"🟣 AfsinTripto@gmail.com",link:"mailto:AfsinTripto@gmail.com"}];const Y={noUnderline:{textDecoration:"none"}};var Z=a.memo((function(){return a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,"Contact Me - TriptoAfsin")),a.createElement("div",{className:"content"},a.createElement("h1",{className:"fade"},"Get in touch"),a.createElement("div",{className:"center-self"},a.createElement("p",{className:"txt-lg fade"},"I'm available on github, facebook, linkedin or you can get in touch with me through mail"),Q.map((e=>a.createElement("div",{className:"row-force center-self mt4 darkBg rounded fade width50",key:e.id,style:{maxWidth:"90%"}},a.createElement("a",{href:e.link,className:"white-txt pad3 txt-lg bold",style:Y.noUnderline},e.title)))))),a.createElement(K,null))}));function ee(){return a.createElement(a.Fragment,null,a.createElement("h1",null,"CV"))}let te;const ae={};function le(){return a.createElement("div",{className:"mb4"},a.createElement("p",{className:"bold txt-xxl mt2"},"Educational Background"),a.createElement("div",{className:"ml2 txt-lg mt4"},a.createElement("p",{className:"mt1 mb1"},"👨‍🎓 Bsc: Industrial & Production Engineering(",a.createElement("a",{href:"https://www.butex.edu.bd/"},"BUTEX"),")"),a.createElement("p",{className:"mt1 mb1"},j.educationalSection[1]),a.createElement("p",{className:"mt1 mb4"},j.educationalSection[2])))}function ne(){return a.createElement("div",{className:"mb4 pad2"},a.createElement("p",{className:"bold txt-xxl mt2"},"About Me"),a.createElement("p",{className:"txt-lg mt4 mb4"},j.aboutMe))}var re=a.memo((function(){return a.createElement("div",{className:"column"},a.createElement("div",{className:"center-self mt4 pad4 aquaGradient"},a.createElement("p",{className:"txt-xxxl bold"},"Skills")),a.createElement("div",{className:"row pad4 center-self hide-on-mobile mt4"},a.createElement("p",{className:"txt-xl bold pad4 hide-on-mobile"},"Frontend: "),a.createElement("a",{href:"https://en.wikipedia.org/wiki/HTML5",className:"mr1 hide-on-mobile"},a.createElement(c,{size:"48",color:"#f64e2d"})),a.createElement("a",{href:"https://www.w3schools.com/css/css_intro.asp",className:"mr1 hide-on-mobile"},a.createElement(s,{size:"48",color:"#2196f3"})),a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",className:"mr1 hide-on-mobile"},a.createElement(m,{size:"48",color:"#f0db4f"})),a.createElement("a",{href:"https://reactjs.org/",className:"mr1 hide-on-mobile",title:"React"},a.createElement(i,{size:"48",color:"#00dffe"})),a.createElement("a",{href:"https://nextjs.org/",className:"mr1 hide-on-mobile",title:"Next JS"},a.createElement(o,{size:"48",color:"#FFFFFF"})),a.createElement("a",{href:"https://en.wikipedia.org/wiki/WordPress",className:"mr1 hide-on-mobile"},a.createElement(d,{size:"48",color:"#4575f8"}))),a.createElement("div",{className:"row  pad4 center-self"},a.createElement("p",{className:"txt-xl bold pad4 hide-on-mobile"},"Backend: "),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Node.js",className:"mr1 hide-on-mobile"},a.createElement(p,{size:"48",color:"#6aa05c"}))),a.createElement("div",{className:"row  pad4 center-self"},a.createElement("p",{className:"txt-xl bold pad4 hide-on-mobile"},"Database: "),a.createElement("a",{href:"https://www.postgresql.org/",className:"mr1 hide-on-mobile"},a.createElement(h,{size:"48",color:"#336791"})),a.createElement("a",{href:"https://www.mysql.com/",className:"mr1 hide-on-mobile"},a.createElement(E,{size:"56",color:"#dc8400"}))),a.createElement("div",{className:"row  pad4 center-self"},a.createElement("p",{className:"txt-xl bold pad4 hide-on-mobile"},"Mobile: "),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Android_software_development",className:"mr1 hide-on-mobile"},a.createElement(u,{size:"48"})),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Flutter_(software)",className:"mr1 hide-on-mobile"},a.createElement(f,{size:"48",color:"#44d1fd"}))),a.createElement("div",{className:"row  pad4 center-self"},a.createElement("p",{className:"txt-xl bold pad4 hide-on-mobile"},"CI/CD: "),a.createElement("a",{href:"https://github.com/",className:"mr1 hide-on-mobile"},a.createElement(g,{size:"48",color:"#FFFFFF"})),a.createElement("a",{href:"https://en.wikipedia.org/wiki/CPanel",className:"mr1 hide-on-mobile"},a.createElement(b,{size:"56",color:"#ff712d"})),a.createElement("a",{href:"https://www.heroku.com/",className:"mr1 hide-on-mobile"},a.createElement(N,{size:"56",color:"#8868ad"}))),a.createElement("div",{className:"row pad4 center-self"},a.createElement("p",{className:"txt-xl bold pad4 hide-on-mobile"},"Others: "),a.createElement("a",{href:"https://www.npmjs.com/",className:"mr1 hide-on-mobile"},a.createElement(x,{size:"48",color:"#c80000"})),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Linux",className:"mr1 hide-on-mobile"},a.createElement(v,{size:"48"})),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Command-line_interface",className:"mr1 hide-on-mobile"},a.createElement(w,{size:"48"})),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Firebase",className:"mr1 hide-on-mobile"},a.createElement(k,{size:"48",color:"#ffcb2b"})),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Microsoft_PowerPoint",className:"mr1 hide-on-mobile"},a.createElement(S,{size:"48",color:"#c43e1c"})),a.createElement("a",{href:"https://en.wikipedia.org/wiki/Adobe_Illustrator",className:"mr1 hide-on-mobile"},a.createElement(y,{size:"48",color:"#f07000"}))))}));const ce=j.typeWriterStringsArr;function se(){return a.createElement("div",null,a.createElement(F,{onInit:e=>{e.typeString(`I'm ${ce[0]}`).callFunction((()=>{console.log("String typed out!")})).pauseFor(2e3).deleteChars(ce[0].length).typeString(`${ce[1]}`).pauseFor(2e3).deleteChars(ce[1].length).typeString(`${ce[2]}`).pauseFor(2e3).deleteChars(ce[2].length).deleteAll().typeString("Webdeveloper || Student || Learner").callFunction((()=>{})).start()}}))}function me(){return a.createElement(a.Fragment,null,a.createElement("div",{className:"column"},a.createElement("div",{className:"center-self mt4 pad4 blueGradient"},a.createElement("p",{className:"txt-xxxl bold"},"Skills")),a.createElement("div",{className:"left-txt mt2 pad2"},a.createElement("p",{className:"pad1 txt-lg"},"🎨 HTML, CSS ,Next JS,React, Wordpress"),a.createElement("p",{className:"pad1 txt-lg"},"🚧 Node "),a.createElement("p",{className:"pad1 txt-lg"},"📚 PostgreSQL, MySQL "),a.createElement("p",{className:"pad1 txt-lg"},"📱 Android Native, Flutter"),a.createElement("p",{className:"pad1 txt-lg"},"💾 Linux,Firebase,Heroku, cPanel, NPM"),a.createElement("p",{className:"pad1 txt-lg"},"🪐 Powerpoint, Adobe Illustrator"))))}function ie(){return a.createElement(a.Fragment,null,a.createElement("div",{className:"column"},a.createElement("div",{className:"center-self mt4 pad4 orange"},a.createElement("p",{className:"txt-xxxl bold"},"Projects")),a.createElement("div",{className:"column pad4 center-self"},a.createElement("div",{className:"card greyGradient"},a.createElement("p",{className:"card-title txt-xxl"},"Cloud lib"),a.createElement("p",{className:"card-txt"},"Cloud lib is an open collaborative project for better educational content distribution"),a.createElement("a",{className:"card-btn pad2 right",href:"https://triptoafsin.github.io/Cloud-Lib-React/#/"},"Learn more")),a.createElement("div",{className:"card greyGradient"},a.createElement("p",{className:"card-title txt-xxl"},"BUTEX NoteBOT"),a.createElement("p",{className:"card-txt"},"This is a messenger chatbot made for BUTEX(Bangladesh University of Textiles) to deliver study materials 24x7"),a.createElement("a",{className:"card-btn pad2 right",href:"https://github.com/TriptoAfsin/notebot-engine-v1"},"Learn more")),a.createElement("div",{className:"card greyGradient"},a.createElement("p",{className:"card-title txt-xxl"},"CountKoto-Android-App"),a.createElement("p",{className:"card-txt"},"Versatile Textile Count Calculation Tool"),a.createElement("a",{className:"card-btn pad2 right",href:"https://play.google.com/store/apps/details?id=newcampusa.newproject.countkoto"},"Learn more")),a.createElement("div",{className:"row pad4"},a.createElement(l,{to:"/projects",className:"button center-self txt-lg bold blueGradient"},"Other Projects 👉")))))}function oe(){return a.createElement(a.Fragment,null,a.createElement("div",{className:"center-self mt4 pad4 lightRed"},a.createElement("p",{className:"txt-xxxl bold"},"Experiences")),a.createElement("div",{className:"card-container"},a.createElement("div",{className:"pad4 mt4"},a.createElement("p",{className:"txt-xxl center-txt orangeGradient pad2"},"Delivery Hobe"),a.createElement("div",{className:"center-self"},a.createElement("img",{src:"https://i.imgur.com/Z6AXJy0.png",alt:"delivery hobe",srcSet:"",width:"75px",height:"70px"})),a.createElement("p",{className:"txt-lg center-txt"},"JavaScript Developer"),a.createElement("p",{className:"card-txt italic mt2 center-txt"},'I\'ve been working as a junior js developer at "Delivery Hobe" since October, 2021',a.createElement("br",null),"It's a hyper local e-commerce platform focused on 1hr deliveries"),a.createElement("a",{className:"card-btn pad2 center orangeGradient",href:"https://www.deliveryhobe.com/"},"Learn more")),a.createElement("div",{className:"pad4 mt4"},a.createElement("p",{className:"txt-xxl center-txt blueGradient pad2"},"Bondi Pathshsala"),a.createElement("div",{className:"center-self"},a.createElement("img",{src:"https://i.imgur.com/FKoppLB.png",alt:"Bondi Pathshala",srcSet:"",width:"75px",height:"75px"})),a.createElement("p",{className:"txt-lg center-txt"},"Web Developer"),a.createElement("p",{className:"card-txt italic mt2 center-txt"},'I\'m the main web developer at "Bondi Pathshsala" since September, 2020 ',a.createElement("br",null),"It has helped more than 2 million students with their studies"),a.createElement("a",{className:"card-btn pad2 center blueGradient",href:"https://bondipathshala.net/"},"Learn more")),a.createElement("div",{className:"pad4 mt4"},a.createElement("p",{className:"txt-xxl center-txt green pad2"},"BUTEX NoteBOT"),a.createElement("div",{className:"center-self"},a.createElement("img",{src:"https://i.imgur.com/BClXTdM.png",alt:"notebot",srcSet:"",width:"75px",height:"70px"})),a.createElement("p",{className:"txt-lg center-txt"},"Founder"),a.createElement("p",{className:"card-txt italic mt2 center-txt"},"I've founded BUTEX NoteBOT in 2018, it's a 24x7 educational content delivery chatbot",a.createElement("br",null),"Through this time it has served thousands of students with their studies"),a.createElement("a",{className:"card-btn pad2 center green",href:"https://www.messenger.com/t/103148557940299"},"Learn more"))))}const de=t.exports.lazy((()=>function(e,t){if(!t)return e();if(void 0===te){const e=document.createElement("link").relList;te=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in ae)return;ae[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const l=document.createElement("link");return l.rel=t?"stylesheet":te,t||(l.as="script",l.crossOrigin=""),l.href=e,document.head.appendChild(l),t?new Promise(((e,t)=>{l.addEventListener("load",e),l.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./index.35b8bcb3.js").then((function(e){return e.i}))),["/assets/index.35b8bcb3.js","/assets/vendor.07c3da78.js"]))),pe=j.pageTitle,he=j.devName;var Ee=a.memo((function(){const{height:e,width:l}=_(),[n,c]=t.exports.useState(!0);return a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,pe)),a.createElement("div",{className:"content"},a.createElement(t.exports.Suspense,{fallback:a.createElement("p",null)},a.createElement(de,{className:"particleCss",params:{particles:{number:{value:l>=600?25:8}},interactivity:{events:{onclick:{enable:!0,mode:"repulse"}}}}})),a.createElement("div",{className:"row mt4 center-self"},a.createElement("div",{className:"column float-left center-self"},n&&l<600?a.createElement(T,{color:"#cbdbf5",highlightColor:"#616469",baseColor:"#1e1e1e"},a.createElement(L,{circle:!0,width:l<600?320:180,height:l<600?320:180,duration:1})):"",a.createElement("picture",null,a.createElement("source",{srcSet:"/assets/dev.3de00fb9.webp",className:"rounded-img shadow",onLoad:()=>c(!1)}),a.createElement("img",{src:"/assets/dev.38f4d646.jpg",className:"rounded-img shadow",alt:"TriptoAfsin",width:"180px",height:"180px",onLoad:()=>c(!1)}))),a.createElement("div",{className:"column float-right pad4"},a.createElement("p",{className:"txt-xxl left-txt bold center-txt"},he),a.createElement("div",{className:"txt-xl"},a.createElement(se,null)),a.createElement("div",{className:"hide-on-mobile"},a.createElement(O,null)))),a.createElement("div",{className:"row"},a.createElement("div",{className:"width50 mt5 mb5 center-txt border-white",style:{maxWidth:"99vw",marginLeft:l<600?"1px":""}},a.createElement(ne,null)),a.createElement("div",{className:"width50 mt5 mb5 center-self border-white",style:{maxWidth:"99vw",marginLeft:l<600?"1px":""}},a.createElement(le,null))),a.createElement("div",{className:l>900?"row":"column"},a.createElement("div",{className:l>900?"width50 mb4":""},l>=810?a.createElement(re,null):a.createElement(me,null)),a.createElement("div",{className:l>900?"width50 mb4":""},a.createElement(ie,null)))),a.createElement(oe,null),a.createElement(K,null))}));var ue=a.memo((function(){return a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,"404 Not Found - TriptoAfsin")),a.createElement("div",{className:"centerPage column "},a.createElement("img",{src:"/assets/404.f0a19eb6.svg",alt:"",srcset:"",width:"512"}),a.createElement("p",{className:"title2 bold"},"Not Found"),a.createElement("a",{href:"./",className:"button txt-xl mt3"},"🏠 Home")))}));function fe(){return a.createElement(a.Fragment,null,a.createElement("a",null,a.createElement("div",{className:"lds-roller"},a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null),a.createElement("div",null))))}var ge=a.memo((function(){const{height:e,width:l}=_(),[n,c]=t.exports.useState(!0),[s,m]=t.exports.useState(""),[i,o]=t.exports.useState(""),[d,p]=t.exports.useState(!0),h=function(e){console.log("DataProvider Called");const[a,l]=t.exports.useState(null);return t.exports.useEffect((()=>{A.get(e).then((e=>(l(e.data),console.log("Axios called"),a))).catch((e=>console.log(e)))}),[e]),a}("https://triptoafsin.github.io/API-Host/myProjects.json");console.log(h),t.exports.useEffect((()=>{null!==h&&(c(!1),console.log("setLoading false now"),u(h),console.log(s))}),[h,s]);const E=document.getElementById("card-container"),u=e=>{let t=e.filter((e=>{const t=new RegExp(`${s}`,"gi");return e.name.match(t)||e.about.match(t)||e.terms.match(t)}));s.length>0&&(f(t),o(t.length),console.log(t))},f=e=>{if(e.length>0){const t=e.map((e=>`\n            <div class="card-vertical greyGradient floatIn" key={${e.id}}>\n                    <img src=${e.img} alt="" class="card-img"/>\n                    <p class="card-title txt-xl">${e.name}</p>\n                    <p class="card-txt">${e.about}</p>\n                    ${e.techUsed.map((t=>`<p class="green rounded tag mt1 ml1" key={${e.id}+${t}}>${t}</p>`))}\n                    <a class="card-btn pad2 right blue" href=${e.link} target="_blank">Learn more...</a>\n                </div>\n            `)).join("");console.log(t),E.innerHTML=t}else try{E.innerHTML="<h1>No results 😭</h1>"}catch(t){return}};return n?a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,"Projects - TriptoAfsin")),a.createElement("div",{className:"center-self mt4"},a.createElement(fe,null))):a.createElement(a.Fragment,null,a.createElement(r,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,"Projects - TriptoAfsin")),a.createElement("div",null,a.createElement("div",{className:"center-self mb4 mt2 pad2"},a.createElement("input",{className:"rounded shadow txt-lg pad10",placeholder:"Search...",onChange:e=>m(e.target.value),value:s,style:{width:"320px",maxWidth:"90%"}})),a.createElement("div",{className:"card-container",id:"card-container"},h.map((e=>a.createElement("div",{className:"card-vertical floatIn greyGradient",key:e.id},d?a.createElement(T,{color:"#cbdbf5",highlightColor:"#616469",baseColor:"#1e1e1e"},a.createElement(L,{width:l<600?"95%":"94%",height:180,duration:1,className:"mt1 mr1 ml1"})):"",a.createElement("img",{src:e.img,alt:"",className:"card-img",onLoad:()=>p(!1)}),a.createElement("p",{className:"card-title txt-xl"},e.name),a.createElement("div",{className:"mt4"},a.createElement("p",{className:"card-txt"},e.about),e.techUsed.map((t=>a.createElement("p",{className:"green rounded tag mt1 ml1",key:`${e.id}-${t}`},t))),a.createElement("a",{className:"card-btn pad2 right blue",href:e.link,target:"_blank"},"Learn more..."))))))),a.createElement("div",{className:"row pad4 center-self mt4"},a.createElement("a",{href:"https://github.com/TriptoAfsin",className:"button center-self txt-lg bold blueGradient",target:"_blank"},"👉 Github")))}));function be(){return a.createElement(C,null,a.createElement(M,null),a.createElement(z,null),a.createElement(P,null,a.createElement(I,{path:"/",exact:!0,element:a.createElement(Ee,null)}),a.createElement(I,{path:"/cv",exact:!0,element:a.createElement(ee,null)}),a.createElement(I,{path:"/projects",exact:!0,element:a.createElement(ge,null)}),a.createElement(I,{path:"/contact",exact:!0,element:a.createElement(Z,null)}),a.createElement(I,{path:"/chatraChatExpanded",element:a.createElement(Ee,null)}),"/*404 route*/ */",a.createElement(I,{path:"*",element:a.createElement(ue,null)})))}B.render(a.createElement(a.StrictMode,null,a.createElement(be,null)),document.getElementById("root"));