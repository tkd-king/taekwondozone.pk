(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{50439:function(e,o,r){Promise.resolve().then(r.bind(r,62598))},62598:function(e,o,r){"use strict";r.r(o);var l=r(57437),n=r(2265),s=r(16449),t=r(9770),i=r(73226);r(47960);var a=r(88382),c=r(17578);o.default=()=>{let[e,o]=(0,n.useState)(0),[r,u]=(0,n.useState)(1),[d,m]=(0,n.useState)([]),[x,f]=(0,n.useState)([]),[b,g]=(0,n.useState)({company:"",size:"",upperColor:"",trowserColor:"",seneiority:"",category:"",uniformNumberFormat:""}),[p,h]=(0,n.useState)(!1),[y,j]=(0,n.useState)(!1);(0,n.useEffect)(()=>{!async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;try{h(!0);let r=await (0,s.az)(b,e);m(r.uniforms),f(r.uniforms),u(r.currentPage),o(r.totalPages),setTimeout(()=>{h(!1)},2e3)}catch(e){console.error("Error fetching uniforms:",e.message)}finally{h(!1)}}(r)},[r,b]);let v=o=>{o>0&&o<=e&&u(o)},N=e=>{setSelectedUniform(e)},C=e=>{let{name:o,value:r}=e.target;g(e=>({...e,[o]:r}))};return(0,n.useEffect)(()=>{f(d.filter(e=>{var o,r,l,n,s;let t=""===b.company||e.company.includes(b.company),i=""===b.size||e.size.includes(b.size),a=""===b.upperColor||(null===(o=e.upperColor)||void 0===o?void 0:o.includes(b.upperColor)),c=""===b.trowserColor||(null===(r=e.trowserColor)||void 0===r?void 0:r.includes(b.trowserColor)),u=""===b.seneiority||(null===(l=e.seneiority)||void 0===l?void 0:l.includes(b.seneiority)),d=""===b.uniformNumberFormat||(null===(n=e.uniformNumberFormat)||void 0===n?void 0:n.includes(b.uniformNumberFormat)),m=""===b.category||(null===(s=e.category)||void 0===s?void 0:s.includes(b.category));return t&&i&&a&&c&&u&&d&&m}))},[b,d]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.default,{}),(0,l.jsxs)("div",{className:"container p-4 flex flex-col md:flex-row ",children:[(0,l.jsx)("button",{onClick:()=>{j(e=>!e)},className:"md:hidden bg-blue-500 text-white p-2 rounded mb-4",children:y?"Hide Filters":"Show Filters"}),(0,l.jsxs)("div",{className:"w-full md:w-1/4 p-4 bg-gray-200 transition-transform duration-300\n             ".concat(y?"block":"hidden"," xl:block lg:block "),children:[(0,l.jsx)("h2",{className:"font-bold mb-4",children:"Filters"}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{children:"Company:"}),(0,l.jsx)("input",{type:"text",name:"company",value:b.company,onChange:C,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{children:"Size:"}),(0,l.jsx)("input",{type:"text",name:"size",value:b.size,onChange:C,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{htmlFor:"uniformNumberFormat",children:"Product No."}),(0,l.jsx)("input",{type:"text",name:"uniformNumberFormat",value:b.uniformNumberFormat,onChange:C,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{children:"Upper Color:"}),(0,l.jsx)("input",{type:"text",name:"upperColor",value:b.upperColor,onChange:C,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{children:"Trowser Color:"}),(0,l.jsx)("input",{type:"text",name:"trowserColor",value:b.trowserColor,onChange:C,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{children:"category:"}),(0,l.jsx)("input",{type:"text",name:"category",value:b.category,onChange:C,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("label",{children:"Seniority:"}),(0,l.jsx)("input",{type:"text",name:"seneiority",value:b.seneiority,onChange:C,className:"p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"})]})]}),(0,l.jsx)("div",{className:"w-full md:w-3/4",children:p?(0,l.jsx)(i.Z,{}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h1",{className:"text-center",children:["Total: (",x.length,")"]}),(0,l.jsx)("div",{className:"grid grid-cols-4 gap-2",children:x.map(e=>(0,l.jsx)("div",{children:(0,l.jsx)(t.Z,{uniform:e,onEdit:N,hide:"block"})},e._id))}),(0,l.jsx)("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none",disabled:1===r,onClick:()=>v(r-1),children:"Previous"}),(0,l.jsxs)("span",{children:["Page ",r," of ",e]}),(0,l.jsx)("button",{className:"px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none",disabled:r===e,onClick:()=>v(r+1),children:"Next"})]})})]}),(0,l.jsx)(c.default,{})]})}}},function(e){e.O(0,[587,240,699,870,855,145,665,971,117,744],function(){return e(e.s=50439)}),_N_E=e.O()}]);