(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{79526:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/(auth)/login/page",function(){return r(82098)}])},46734:function(e,s,r){"use strict";r.d(s,{Z:function(){return u}});var n=r(85893),a=r(67294),t=r(92547),l=r(79479),i=r(54633),c=r(45336),o=r(7311),d=r(87183),h=r(33738),x=r(778),m=r(7806);function u(){let[e,s]=a.useState(!1),r=[{name:"Home",slug:"/"},{name:"Form Page",slug:"/form"},{name:"contact us",slug:"/contact"},{name:"about us",slug:"/about"}];return(0,n.jsxs)(t.R,{onMenuOpenChange:s,children:[(0,n.jsxs)(l.U,{children:[(0,n.jsx)(i.L,{"aria-label":e?"Close menu":"Open menu",className:"sm:hidden "}),(0,n.jsx)(c.H,{children:(0,n.jsxs)("p",{className:"font-bold text-inherit",children:["Taekwondo",(0,n.jsx)("span",{className:"text-red-500",children:"zone"})]})})]}),(0,n.jsxs)(l.U,{className:"hidden sm:flex gap-4",justify:"center",children:[(0,n.jsx)(o.k,{children:(0,n.jsx)(d.O,{color:"foreground",href:"#",children:"Features"})}),(0,n.jsx)(o.k,{children:(0,n.jsx)(d.O,{href:"/","aria-current":"page",children:"Products"})}),(0,n.jsx)(o.k,{children:(0,n.jsx)(d.O,{color:"foreground",href:"/form",children:"Form page"})})]}),(0,n.jsxs)(l.U,{justify:"end",children:[(0,n.jsx)(o.k,{className:"hidden lg:flex",children:(0,n.jsx)(d.O,{href:"/login/login",children:"Login"})}),(0,n.jsx)(o.k,{children:(0,n.jsx)(h.A,{as:d.O,color:"primary",href:"/signup/signup",variant:"flat",children:"Sign Up"})})]}),(0,n.jsx)(x.$,{children:r.map((e,s)=>(0,n.jsx)(m.h,{children:(0,n.jsx)(d.O,{color:2===s?"primary":s===r.length-1?"danger":"foreground",className:"w-full ",href:e.slug,size:"lg",children:e.name})},"".concat(e,"-").concat(s)))})]})}},26771:function(e,s,r){"use strict";r.d(s,{Z:function(){return l}});var n=r(85893);r(67294);var a=r(9540),t=r(95953);function l(){return(0,n.jsxs)("footer",{className:"bg-gray-900 text-gray-300 py-8",children:[(0,n.jsxs)("div",{className:"container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)("h2",{className:"text-xl font-bold text-white mb-4",children:["Taekwondo",(0,n.jsx)("span",{className:"text-red-500",children:"zone"})]}),(0,n.jsx)("p",{className:"text-sm",children:"Taekwondozone is a leading provider of web solutions, offering services in web design, development, and digital marketing."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xl font-bold text-white mb-4",children:"Quick Links"}),(0,n.jsxs)("ul",{className:"space-y-2",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",className:"hover:text-white",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",className:"hover:text-white",children:"About Us"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",className:"hover:text-white",children:"Services"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",className:"hover:text-white",children:"Blog"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#",className:"hover:text-white",children:"Contact"})})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{className:"text-xl font-bold text-white mb-4 ",children:"Follow Us"}),(0,n.jsxs)("div",{className:"flex space-x-6 ",children:[(0,n.jsx)("a",{href:"https://facebook.com",className:"text-white-800 hover:text-blue-600 transition-colors duration-300",children:(0,n.jsx)(a.tBk,{})}),(0,n.jsx)("a",{href:"https://twitter.com",className:"text-gray-300 hover:text-blue-400 transition-colors duration-300",children:(0,n.jsx)(t.LCd,{})}),(0,n.jsx)("a",{href:"https://instagram.com",className:"text-gray-300 hover:text-pink-500 transition-colors duration-300",children:(0,n.jsx)(a.Zf_,{})}),(0,n.jsx)("a",{href:"https://linkedin.com",className:"text-gray-300 hover:text-blue-700 transition-colors duration-300",children:(0,n.jsx)(t.nTm,{})})]})]})]}),(0,n.jsx)("div",{className:"mt-8 border-t border-gray-700 pt-4",children:(0,n.jsxs)("p",{className:"text-center text-sm",children:["\xa9 2024 Taekwondo",(0,n.jsx)("span",{className:"text-red-500",children:"zone"}),". All rights reserved."]})})]})}},82098:function(e,s,r){"use strict";r.r(s);var n=r(85893),a=r(67294),t=r(46734),l=r(26771);r(48256),s.default=()=>{let[e,s]=(0,a.useState)({email:"",password:""}),[r,i]=(0,a.useState)(""),[c,o]=(0,a.useState)(""),d=r=>{s({...e,[r.target.name]:r.target.value})},h=async r=>{if(r.preventDefault(),i(""),!e.email||!e.password){i("Email and password are required!");return}try{o("Login successful!"),s({email:"",password:""})}catch(e){i("Login failed!")}};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Z,{}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mb-4",children:"Login"}),(0,n.jsxs)("form",{onSubmit:h,className:"bg-white shadow-md rounded-lg p-6 mb-4 w-full max-w-md",children:[r&&(0,n.jsx)("div",{className:"text-red-500 mb-2",children:r}),(0,n.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:d,className:"w-full p-2 border border-gray-300 rounded-md mb-4",required:!0}),(0,n.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:e.password,onChange:d,className:"w-full p-2 border border-gray-300 rounded-md mb-4",required:!0}),(0,n.jsx)("button",{type:"submit",className:"w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600",children:"Login"})]}),c&&(0,n.jsx)("div",{className:"text-green-500 mt-4",children:c})]}),(0,n.jsx)(l.Z,{})]})}},48256:function(){}},function(e){e.O(0,[396,365,298,449,888,774,179],function(){return e(e.s=79526)}),_N_E=e.O()}]);