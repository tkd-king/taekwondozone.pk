(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[129],{85268:function(e,r,t){Promise.resolve().then(t.bind(t,58428))},58428:function(e,r,t){"use strict";t.r(r);var o=t(57437),s=t(2265),l=t(16449);t(47960);var n=t(88382),a=t(17578),i=t(27586),c=t(59681);r.default=e=>{var r;let{selectedUniform:t}=e,[d,u]=(0,s.useState)({company:"",size:"",category:"",imageUrl:"",upperColor:"",trowserColor:"",seneiority:"",style:"",uniformNumberFormat:"",neckStyle:"",poomseOrNot:""}),[m,p]=(0,s.useState)(!1),[h,x]=(0,s.useState)(!1),[g,f]=(0,s.useState)(null);(0,s.useEffect)(()=>{t&&u({company:t.company||"",size:t.size||"",category:t.category||"A",imageUrl:t.imageUrl||"https://res.cloudinary.com/drcuzf46e/image/upload/v1726993449/uniforms/fmzdovinimfizfiufqsn.jpg",upperColor:t.upperColor||"White",trowserColor:t.trowserColor||"White",seneiority:t.seneiority||"Poom",style:t.style||"Full-Sleeve",uniformNumberFormat:t.uniformNumberFormat||"",neckStyle:t.neckStyle||"",poomseOrNot:t.poomseOrNot||""})},[t]);let b=e=>{"imageUrl"===e.target.name?u({...d,[e.target.name]:e.target.files[0]}):u({...d,[e.target.name]:e.target.value})},j=async e=>{e.preventDefault();try{x(!1),p(!0);let e=new FormData;Object.keys(d).forEach(r=>{e.append(r,d[r])}),t?await (0,l.ll)(t._id,e):await (0,l.MG)(e),f("Uniform submitted successfully!"),setTimeout(()=>f(null),500),u({company:"",size:"",category:"",imageUrl:"",upperColor:"",trowserColor:"",seneiority:"",style:"",uniformNumberFormat:"",neckStyle:"",poomseOrNot:""}),p(!1)}catch(e){x(!0),p(!0),f("Error submitting form!",e),console.error("Error submitting form",e)}finally{p(!1)}},y=e=>e.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" ");return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.UniformContextProvider,{children:[(0,o.jsx)(n.default,{}),(0,o.jsx)(c.Z,{page:"Form"}),g?(0,o.jsxs)("div",{className:"flex flex-col items-center jusitify-center my-[100px] gap-2",children:[(0,o.jsx)("h1",{className:"w-[400px] ".concat(h?"bg-red-500":"bg-green-500"," text-white flex items-center justify-center   py-2 px-4 rounded-lg shadow-lg transition duration-300 ").concat(g?"opacity-100":"opacity-0"),children:g}),h&&(0,o.jsx)("button",{onClick:()=>{setTimeout(()=>f(null),500),x(!1)},className:"px-8 py-[5px] bg-red-500 text-white rounded hover:bg-red-400 hover:rounded-full transition-all ".concat(h?"block":"hiddne"," "),children:"Close"})]}):(0,o.jsx)("div",{className:"flex justify-center items-center py-[50px] min-h-screen bg-gray-100",children:(0,o.jsxs)("div",{className:"w-full max-w-md p-4 bg-white shadow-lg rounded-lg",children:[(0,o.jsx)("h2",{className:"text-2xl text-center mb-6",children:"Uniform Form"}),(0,o.jsxs)("form",{onSubmit:j,className:"space-y-4",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"uniformNumberFormat",className:"block mb-1 text-sm",children:"Number"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"number",name:"uniformNumberFormat",id:"uniformNumberFormat",placeholder:"Number...",value:d.uniformNumberFormat,onChange:b,required:!0,disabled:m})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"company",className:"block mb-1 text-sm",children:"Company Name"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Compony Name...",name:"company",id:"company",value:3==(r=d.company).length||4==r.length||2==r.length?r.toUpperCase():r.split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()).join(" "),onChange:b,disabled:m,required:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"size",className:"block mb-1 text-sm",children:"Size"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Size in cm...",name:"size",id:"size",value:d.size,onChange:b,disabled:m,required:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"category",className:"block mb-1 text-sm",children:"Category"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Category...",name:"category",id:"category",value:d.category.toUpperCase(),onChange:b,list:"categoryOptions",disabled:m,required:!0}),(0,o.jsxs)("datalist",{id:"categoryOptions",children:[(0,o.jsx)("option",{value:"A"}),(0,o.jsx)("option",{value:"A+"}),(0,o.jsx)("option",{value:"B"}),(0,o.jsx)("option",{value:"C"}),(0,o.jsx)("option",{value:"D"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"upperColor",className:"block mb-1 text-sm",children:"Upper Color"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Upper Color...",name:"upperColor",id:"upperColor",value:y(d.upperColor),onChange:b,disabled:m,required:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"trowserColor",className:"block mb-1 text-sm",children:"Trowser Color"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Add Trouser Color...",name:"trowserColor",id:"trowserColor",value:y(d.trowserColor),onChange:b,disabled:m,required:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"seneiority",className:"block mb-1 text-sm",children:"Collar Color"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Add Senriority...",name:"seneiority",id:"seneiority",value:d.seneiority,onChange:b,disabled:m,required:!0})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"style",className:"block mb-1 text-sm",children:"Sleeve-Style"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Add Style...",name:"style",id:"style",list:"sleeve",value:d.style,onChange:b,disabled:m,required:!0}),(0,o.jsxs)("datalist",{id:"sleeve",children:[(0,o.jsx)("option",{value:"Full Sleeve"}),(0,o.jsx)("option",{value:"Short Sleeve"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"neckStyle",className:"block mb-1 text-sm",children:"Neck Style"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"Add NeckStyle...",name:"neckStyle",list:"collar-style",id:"neckStyle",value:y(d.neckStyle),onChange:b,disabled:m,required:!0}),(0,o.jsxs)("datalist",{id:"collar-style",children:[(0,o.jsx)("option",{value:"Close"}),(0,o.jsx)("option",{value:"Open"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"poomseOrNot",className:"block mb-1 text-sm",children:"Poomse or not"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"text",placeholder:"ENTER poomseOrNot...",name:"poomseOrNot",id:"poomseOrNot",list:"poomseOrNot",value:y(d.poomseOrNot),disabled:m,onChange:b}),(0,o.jsxs)("datalist",{id:"poomseOrNot",children:[(0,o.jsx)("option",{value:"fighter"}),(0,o.jsx)("option",{value:"poomse"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{htmlFor:"imageUrl",className:"block mb-1 text-sm",children:"Image"}),(0,o.jsx)("input",{className:"w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500",type:"file",name:"imageUrl",id:"imageUrl",disabled:m,onChange:b})]}),m?(0,o.jsx)("button",{type:"button",className:"w-full p-2 bg-blue-500/80 text-white cursor-progress rounded hover:bg-blue-600/80",disabled:!0,children:"Submiting..."}):(0,o.jsx)("button",{type:"submit",className:"w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600",children:t?"Update Uniform":"Add Uniform"})]})]})}),(0,o.jsx)(a.default,{})]})})}},59681:function(e,r,t){"use strict";var o=t(57437);t(2265);var s=t(27648);r.Z=function(e){let{page:r}=e;return(0,o.jsxs)("div",{className:"ml-[15%] flex items-center justify-center gap-2  text-center w-[200px] mt-[2%] font-bolder p-2 bg-white rounded-md",children:[(0,o.jsx)(s.default,{href:"/",children:"Home "})," \\ ",(0,o.jsx)("p",{children:r})]})}},88382:function(e,r,t){"use strict";t.d(r,{default:function(){return p}});var o=t(57437),s=t(2265),l=t(39843),n=t(80532),a=t(60426),i=t(31314),c=t(43398),d=t(8114),u=t(93467),m=t(27586);function p(){let{showWhatsApp:e}=(0,s.useContext)(m.j);console.log(e);let[r,t]=s.useState(!1);return(0,o.jsxs)(l.R,{className:"rounded-b-[30px] shadow-md",onMenuOpenChange:t,children:[(0,o.jsxs)(n.U,{children:[(0,o.jsx)(a.L,{"aria-label":r?"Close menu":"Open menu",className:"sm:hidden "}),(0,o.jsx)(i.H,{children:(0,o.jsxs)("p",{className:"font-bold text-inherit",children:["Taekwondo",(0,o.jsx)("span",{className:"text-red-500",children:"zone"})]})})]}),(0,o.jsxs)(n.U,{justify:"end",children:[(0,o.jsx)(c.k,{className:"hidden lg:flex",children:(0,o.jsx)(d.O,{href:"/login",children:"Login"})}),(0,o.jsx)(c.k,{children:(0,o.jsx)(u.A,{as:d.O,color:"primary",href:"/signup",variant:"flat",children:"Sign Up"})})]}),e&&(0,o.jsx)("div",{className:"watsapp-image absolute xl:w-[12%] xl:top-[520px] xl:right-[-150px] lg:w-[10%] lg:top-[520px] lg:right-[-150px] md:w-[15%] md:top-[520px] sm:w-[15%] sm:top-[500px] w-[20%] top-[500px] right-2 scale-[0.9] hover:scale-[1] transition-all duraiton-300 fixed",children:(0,o.jsx)("a",{href:"https://api.whatsapp.com/send/?phone=923099414135&text=Hi%2C+I+need+help%21&type=phone_number&app_absent=0",children:(0,o.jsx)("img",{src:"/images/wattsapp image.webp",alt:"WhatsApp image"})})})]})}},17578:function(e,r,t){"use strict";t.d(r,{default:function(){return i}});var o=t(57437),s=t(2265),l=t(49089),n=t(61273),a=t(27586);function i(){let{setShowWhatsApp:e}=(0,s.useContext)(a.j),r=(0,s.useRef)(null);return(0,s.useEffect)(()=>{let t=new IntersectionObserver(r=>{let[t]=r;e(!t.isIntersecting)},{threshold:.1});return r.current&&t.observe(r.current),()=>{r.current&&t.unobserve(r.current)}},[]),(0,o.jsxs)("footer",{ref:r,className:"bg-gray-900 text-gray-300 px-4 py-8 relative rounded-t-[30px] shadow-md",children:[(0,o.jsxs)("div",{className:"container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("h2",{className:"text-xl font-bold text-white mb-4",children:["Taekwondo",(0,o.jsx)("span",{className:"text-red-500",children:"zone"})]}),(0,o.jsx)("p",{className:"text-sm",children:"Taekwondozone is a leading provider of web solutions, offering services in web design, development, and digital marketing."})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"text-xl font-bold text-white mb-4",children:"Follow Us"}),(0,o.jsxs)("div",{className:"flex space-x-6",children:[(0,o.jsx)("a",{href:"https://facebook.com",className:"text-white-800 hover:text-blue-600 transition-colors duration-300",children:(0,o.jsx)(l.tBk,{})}),(0,o.jsx)("a",{href:"https://twitter.com",className:"text-gray-300 hover:text-blue-400 transition-colors duration-300",children:(0,o.jsx)(n.LCd,{})}),(0,o.jsx)("a",{href:"https://instagram.com",className:"text-gray-300 hover:text-pink-500 transition-colors duration-300",children:(0,o.jsx)(l.Zf_,{})}),(0,o.jsx)("a",{href:"https://linkedin.com",className:"text-gray-300 hover:text-blue-700 transition-colors duration-300",children:(0,o.jsx)(n.nTm,{})})]})]})]}),(0,o.jsx)("div",{className:"mt-8 border-t border-gray-700 pt-4",children:(0,o.jsxs)("p",{className:"text-center text-sm",children:["\xa9 2024 Taekwondo",(0,o.jsx)("span",{className:"text-red-500",children:"zone"}),". All rights reserved."]})}),(0,o.jsx)("div",{className:"watsapp-image-footer absolute xl:w-[10%] lg:w-[10%] md:w-[15%] sm:w-[15%] w-[20%] bottom-16 right-6 scale-[0.9] hover:scale-[1] transition-all duraiton-300",children:(0,o.jsx)("a",{href:"https://api.whatsapp.com/send/?phone=923099414135&text=Hi%2C+I+need+help%21&type=phone_number&app_absent=0",children:(0,o.jsx)("img",{src:"/images/wattsapp image.webp",alt:"WhatsApp image"})})})]})}},27586:function(e,r,t){"use strict";t.d(r,{UniformContextProvider:function(){return n},j:function(){return l}});var o=t(57437),s=t(2265);let l=(0,s.createContext)(),n=e=>{let{children:r}=e,[t,n]=(0,s.useState)(null),[a,i]=(0,s.useState)(!1);return(0,o.jsx)(l.Provider,{value:{product:t,setProduct:n,showWhatsApp:a,setShowWhatsApp:i},children:r})}},16449:function(e,r,t){"use strict";t.d(r,{HX:function(){return c},MG:function(){return a},az:function(){return l},dS:function(){return n},ll:function(){return i}});var o=t(83464);let s="/api/v1",l=async(e,r)=>{try{let t=new URLSearchParams({...e,page:r,limit:10});return(await o.Z.get("".concat(s,"/uniforms/find-uniform?").concat(t.toString()))).data}catch(e){throw console.error("Error fetching uniforms api.js",e),e}},n=async e=>{try{return(await o.Z.get("".concat(s,"/uniforms/find-one/").concat(e))).data}catch(e){throw console.error("Error fetching one uniform api.js",e),e}},a=async e=>{try{let r=await o.Z.post("".concat(s,"/uniforms/post-uniform"),e);return console.log("added product::",r.data),r.data}catch(e){throw console.error("Error adding uniform",e),e}},i=async(e,r)=>{try{let t=await o.Z.put("".concat(s,"/uniforms/update-one/").concat(e),r);return console.log(r),t.data}catch(e){throw console.error("Error updating uniform",e),e}},c=async e=>{try{return(await o.Z.delete("".concat(s,"/uniforms/delete-uniform/").concat(e))).data}catch(e){throw console.error("Error deleting uniform",e),e}}},47960:function(){}},function(e){e.O(0,[587,240,699,870,855,648,971,117,744],function(){return e(e.s=85268)}),_N_E=e.O()}]);