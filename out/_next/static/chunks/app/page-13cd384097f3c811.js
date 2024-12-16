(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{97344:function(e,r,o){Promise.resolve().then(o.bind(o,88382)),Promise.resolve().then(o.bind(o,86346))},88382:function(e,r,o){"use strict";o.d(r,{default:function(){return h}});var t=o(57437),n=o(2265),s=o(39843),l=o(80532),a=o(60426),i=o(31314),c=o(43398),d=o(8114),u=o(93467),m=o(1530),x=o(93597);function h(){let[e,r]=n.useState(!1),o=[{name:"Home",slug:"/"},{name:"Form Page",slug:"/form"},{name:"contact us",slug:"/contact"},{name:"about us",slug:"/about"}];return(0,t.jsxs)(s.R,{onMenuOpenChange:r,children:[(0,t.jsxs)(l.U,{children:[(0,t.jsx)(a.L,{"aria-label":e?"Close menu":"Open menu",className:"sm:hidden "}),(0,t.jsx)(i.H,{children:(0,t.jsxs)("p",{className:"font-bold text-inherit",children:["Taekwondo",(0,t.jsx)("span",{className:"text-red-500",children:"zone"})]})})]}),(0,t.jsxs)(l.U,{className:"hidden sm:flex gap-4",justify:"center",children:[(0,t.jsx)(c.k,{children:(0,t.jsx)(d.O,{color:"foreground",href:"#",children:"Features"})}),(0,t.jsx)(c.k,{children:(0,t.jsx)(d.O,{href:"/","aria-current":"page",children:"Products"})}),(0,t.jsx)(c.k,{children:(0,t.jsx)(d.O,{color:"foreground",href:"/form",children:"Form page"})})]}),(0,t.jsxs)(l.U,{justify:"end",children:[(0,t.jsx)(c.k,{className:"hidden lg:flex",children:(0,t.jsx)(d.O,{href:"/login/login",children:"Login"})}),(0,t.jsx)(c.k,{children:(0,t.jsx)(u.A,{as:d.O,color:"primary",href:"/signup/signup",variant:"flat",children:"Sign Up"})})]}),(0,t.jsx)(m.$,{children:o.map((e,r)=>(0,t.jsx)(x.h,{children:(0,t.jsx)(d.O,{color:2===r?"primary":r===o.length-1?"danger":"foreground",className:"w-full ",href:e.slug,size:"lg",children:e.name})},"".concat(e,"-").concat(r)))})]})}},86346:function(e,r,o){"use strict";o.d(r,{default:function(){return g}});var t=o(57437),n=o(2265),s=o(83464);let l="/api/v1",a=async(e,r)=>{try{let o=new URLSearchParams({...e,page:r,limit:10});return(await s.Z.get("".concat(l,"/uniforms/find-uniform?").concat(o.toString()))).data}catch(e){throw console.error("Error fetching uniforms api.js",e),e}},i=async e=>{try{return(await s.Z.delete("".concat(l,"/uniforms/delete-uniform/").concat(e))).data}catch(e){throw console.error("Error deleting uniform",e),e}};var c=o(33145),d=e=>{let{uniform:r,onEdit:o,onClick:s,hide:l}=e,[a,d]=(0,n.useState)(!1),u=async()=>{try{d(!0),window.confirm("Are you sure you want to delete ".concat(r.uniformNumberFormat))&&(await i(r._id),window.location.reload()),d(!1)}catch(e){d(!1),console.error("Error deleting uniform",e)}};return(0,t.jsxs)("div",{className:"bg-white shadow-md rounded-lg p-[5px]  flex-shrink-0",onClick:()=>s(r.imageUrl),children:[(0,t.jsxs)("div",{className:"h-48 w-full overflow-hidden cursor-pointer ",children:[" ",(0,t.jsx)(c.default,{src:r.imageUrl,alt:r.company,width:500,height:200,className:"rounded-md object-cover scale-100 hover:scale-105 transition-all",priority:!1})]}),(0,t.jsx)("h2",{className:" font-semibold xl:mt-4 xl:text-xl md:mt-[2px] md:text-md",children:r.company}),(0,t.jsxs)("p",{className:"text-gray-600",children:["Size: ",r.size,"cm"]}),(0,t.jsxs)("p",{className:"text-gray-600",children:["Category: ",r.category]}),(0,t.jsxs)("p",{className:"text-gray-600",children:["Product no. ",r.uniformNumberFormat]}),(0,t.jsxs)("div",{className:"mt-2 flex space-x-2",children:[(0,t.jsx)("button",{onClick:e=>{e.stopPropagation(),o(r)},className:"px-4 py-2 ".concat(l," bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"),children:"Edit"}),a?(0,t.jsx)("button",{className:"bg-red-500/80 ".concat(l," text-white rounded-md hover:bg-red-600/80 cursor-progress tronsform transition-all duration-300 focus:outline-none xl:px-4 xl:py-2 xl:text-md md:text-md sm:text-sm text-[12px] md:px-[5px] md:py-[5px] sm:px-[2px] sm:py-[2px] px-[2px] py-[2px]"),children:"Deleting..."}):(0,t.jsx)("button",{onClick:e=>{e.stopPropagation(),u()},className:"bg-red-500 ".concat(l," text-white rounded-md hover:bg-red-600 focus:outline-none xl:px-4 xl:py-2 xl:text-md md:text-md sm:text-sm text-[12px] md:px-[5px] md:py-[5px] sm:px-[2px] sm:py-[2px] px-[2px] py-[2px]"),children:"Delete"})]})]})},u=o(34381),m=o(9482);let x=[{id:1,width1:"w-3/5",width2:"w-4/5",width3:"w-2/5"},{id:2,width1:"w-2/5",width2:"w-3/5",width3:"w-4/5"},{id:3,width1:"w-4/5",width2:"w-2/5",width3:"w-3/5"},{id:4,width1:"w-4/5",width2:"w-2/5",width3:"w-3/5"},{id:5,width1:"w-4/5",width2:"w-2/5",width3:"w-3/5"},{id:6,width1:"w-4/5",width2:"w-2/5",width3:"w-3/5"},{id:7,width1:"w-4/5",width2:"w-2/5",width3:"w-3/5"},{id:8,width1:"w-4/5",width2:"w-2/5",width3:"w-3/5"}];function h(){return(0,t.jsx)("div",{className:"flex flex-wrap space-x-4 space-y-4 p-4",children:x.map(e=>(0,t.jsxs)(u.w,{className:"w-[200px] h-[250px] space-y-5 p-4 m-2",radius:"lg",children:[(0,t.jsx)(m.X,{className:"rounded-lg",children:(0,t.jsx)("div",{className:"h-24 rounded-lg bg-default-300"})}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsx)(m.X,{className:"".concat(e.width1," rounded-lg"),children:(0,t.jsx)("div",{className:"h-3 ".concat(e.width1," rounded-lg bg-default-200")})}),(0,t.jsx)(m.X,{className:"".concat(e.width2," rounded-lg"),children:(0,t.jsx)("div",{className:"h-3 ".concat(e.width2," rounded-lg bg-default-200")})}),(0,t.jsx)(m.X,{className:"".concat(e.width3," rounded-lg"),children:(0,t.jsx)("div",{className:"h-3 ".concat(e.width3," rounded-lg bg-default-300")})})]})]},e.id))})}o(47960);var p=o(27648),f=o(45202),g=()=>{let[e,r]=(0,n.useState)(!1),[o,s]=(0,n.useState)([]),[l,i]=(0,n.useState)([]),[c,u]=(0,n.useState)({company:"",size:"",upperColor:"",trowserColor:"",seneiority:"",category:"",uniformNumberFormat:""}),[m,x]=(0,n.useState)(!1),[g,b]=(0,n.useState)(!1),[w,y]=(0,n.useState)(1),[j,N]=(0,n.useState)(0),[v,C]=(0,n.useState)(0),k=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;try{x(!0);let r=await a(c,e);s(r.uniforms),console.log("data in fetching func",o),y(r.currentPage),N(r.totalPages),C(r.totalUniforms),i(r.uniforms)}catch(e){console.error("Error fetching uniforms:",e.message)}finally{x(!1)}},F=async()=>{await k(w)};(0,n.useEffect)(()=>{k(w)},[w,e]);let S=0;w===j&&(S="hidden");let E=e=>{let{name:r,value:o}=e.target,t={...c,[r]:o};console.log("look at this point :)->",t),u(t)},z=()=>{x(!0),r(!0),console.log("loading data start...");let e=o.filter(e=>{var r,o,t,n,s;return(""===c.company||e.company.toLowerCase().includes(c.company.toLowerCase()))&&(""===c.size||e.size.toLowerCase().includes(c.size.toLowerCase()))&&(""===c.upperColor||(null===(r=e.upperColor)||void 0===r?void 0:r.includes(c.upperColor)))&&(""===c.trowserColor||(null===(o=e.trowserColor)||void 0===o?void 0:o.includes(c.trowserColor)))&&(""===c.seneiority||(null===(t=e.seneiority)||void 0===t?void 0:t.includes(c.seneiority)))&&(""===c.uniformNumberFormat||(null===(n=e.uniformNumberFormat)||void 0===n?void 0:n.includes(c.uniformNumberFormat)))&&(""===c.category||(null===(s=e.category)||void 0===s?void 0:s.includes(c.category)))});console.log(e,"from filter func"),i(e),x(!1),console.log("Loading data end."),F()},P=e=>{e>0&&e<=j&&y(e)};return(0,t.jsxs)("div",{className:"container p-4 flex flex-col md:flex-row ",children:[(0,t.jsx)("button",{onClick:()=>{b(e=>!e)},className:"md:hidden bg-blue-500 text-white p-2 rounded mb-4",children:g?"Hide Filters":"Show Filters"}),(0,t.jsxs)("div",{className:"w-full md:w-1/4 p-4 bg-gray-200 transition-transform duration-300 ".concat(g?"block":"hidden"," xl:block lg:block"),children:[(0,t.jsxs)("div",{className:"flex gap-2 items-center justify-between",children:[(0,t.jsx)("h2",{className:"font-bold mb-4",children:"Filters"}),(0,t.jsxs)("button",{onClick:F,onKeyDown:z,className:" bg-blue-500 text-white p-2 rounded mb-4 flex items-center justify-between ",children:[(0,t.jsx)(f.wNS,{className:"".concat(m?"rotate":" "," mr-2")})," ","Refresh"]})]}),(0,t.jsxs)("form",{className:"space-y-4",onSubmit:e=>e.preventDefault(),children:[(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"company",className:"font-medium mb-1",children:"Company:"}),(0,t.jsx)("input",{type:"text",id:"company",name:"company",value:c.company,onChange:E,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",placeholder:"Enter company name"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"size",className:"font-medium mb-1",children:"Size:"}),(0,t.jsx)("input",{type:"text",name:"size",id:"size",value:c.size,onChange:E,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",placeholder:"Enter size"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"upperColor",className:"font-medium mb-1",children:"Upper Color:"}),(0,t.jsx)("input",{type:"text",name:"upperColor",id:"upperColor",value:c.upperColor,onChange:E,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",placeholder:"Enter upper color"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"trowserColor",className:"font-medium mb-1",children:"Trouser Color:"}),(0,t.jsx)("input",{type:"text",name:"trowserColor",id:"trowserColor",value:c.trowserColor,onChange:E,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",placeholder:"Enter trouser color"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"seneiority",className:"font-medium mb-1",children:"Seniority:"}),(0,t.jsx)("input",{type:"text",name:"seneiority",id:"seneiority",value:c.seneiority,onChange:E,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",placeholder:"Enter seniority"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"category",className:"font-medium mb-1",children:"Category:"}),(0,t.jsx)("input",{type:"text",name:"category",id:"category",value:c.category,onChange:E,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",placeholder:"Enter category"})]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("label",{htmlFor:"uniformNumberFormat",className:"font-medium mb-1",children:"Uniform Number Format:"}),(0,t.jsx)("input",{type:"text",name:"uniformNumberFormat",id:"uniformNumberFormat",value:c.uniformNumberFormat,onChange:E,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black",placeholder:"Enter uniform number format"})]}),(0,t.jsx)("button",{className:"w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none",type:"button",onClick:z,children:m?"Applying Filters...":"Apply Filters"})]})]}),(0,t.jsx)("div",{className:"w-full md:w-3/4",children:m?(0,t.jsx)(h,{}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("h1",{className:"text-center",children:["Total: (",l.length,") of (",v,")"," "]}),(0,t.jsx)("div",{className:"grid grid-cols-4 gap-2",children:l.map(e=>(0,t.jsx)(p.default,{href:"/product/".concat(e._id),children:(0,t.jsx)(d,{uniform:e,hide:"hidden"})},e._id))}),(0,t.jsxs)("div",{className:"flex items-center justify-center px-8 py-8",children:[(0,t.jsx)("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none",disabled:1===w,onClick:()=>P(w-1),children:"Previous"}),(0,t.jsxs)("span",{children:["Page ",w," of ",j]}),(0,t.jsxs)("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none",disabled:w===j,onClick:()=>P(w+1),children:["Next",(0,t.jsx)("span",{className:"".concat(S),children:"..."})]})]})]})})]})}},47960:function(){}},function(e){e.O(0,[587,212,399,15,971,117,744],function(){return e(e.s=97344)}),_N_E=e.O()}]);