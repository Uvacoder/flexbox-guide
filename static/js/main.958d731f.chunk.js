(this["webpackJsonpflexbox-guide"]=this["webpackJsonpflexbox-guide"]||[]).push([[0],{15:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i(0),s=i.n(n),o=i(3),r=i.n(o),c=(i(15),i(8)),l=i(2),u=i.n(l);var d=function(e){var t=Object(n.useRef)();return Object(a.jsxs)("div",{className:u.a.rootFlexCode,children:[document.queryCommandSupported("copy")&&Object(a.jsxs)("div",{onClick:function(){return console.log(t.current.innerText),void navigator.clipboard.writeText(t.current.innerText)},className:u.a.copyIcon,children:[Object(a.jsx)("i",{className:"material-icons",children:"content_copy"}),Object(a.jsx)("span",{className:u.a.tooltiptext,children:"Click to Copy"})]}),Object(a.jsxs)("div",{ref:t,children:[Object(a.jsxs)("div",{children:[".Container ","{"]}),Object(a.jsx)("div",{children:"display : flex;"}),Object.keys(e.attributes).map((function(t,i){return""!==e.attributes[t]?Object(a.jsxs)("div",{children:[t.split(/(?=[A-Z])/)[0].toLowerCase()+"-"+t.split(/(?=[A-Z])/)[1].toLowerCase()," : ",e.attributes[t],";"]},i):null})),Object(a.jsx)("div",{children:"}"})]})]})};var p=function(e){var t={};Object.keys(e.attributes).forEach((function(i){t["".concat(i)]=e.attributes[i]}));for(var i=[],n=0;n<e.count;n++)i.push(Object(a.jsx)("div",{className:u.a.singleItem,children:n+1},n));return Object(a.jsx)("div",{style:t,className:u.a.hoverStyle,children:i})},b=i(4),j=i(7),x=i(5);i(16);function h(e){return Object(a.jsx)("div",{className:u.a.value,style:e.attributes["".concat(e.attributeName)]===e.value?{backgroundColor:"#ffa500",color:"#fff"}:{},onClick:function(){e.setattributes(Object(j.a)(Object(j.a)({},e.attributes),{},Object(b.a)({},"".concat(e.attributeName),e.attributes["".concat(e.attributeName)]===e.value?"":e.value)))},children:e.value})}var m=function(e){var t={flexDirection:["row","row-reverse","column","column-reverse"],flexWrap:["nowrap","wrap","wrap-reverse"],justifyContent:["flex-start","flex-end","center","space-between","space-around","space-evenly"],alignItems:["flex-start","flex-end","center","stretch","baseline"],alignContent:["flex-start","flex-end","center","space-between","space-around","stretch"]};return Object(a.jsxs)("div",{className:u.a.rootFlexAttributes,children:[Object(a.jsx)(x.a,{position:"top-center",autoClose:3e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!1,pauseOnHover:!1}),Object(a.jsx)("div",{className:u.a.heading,children:"Attributes"}),Object(a.jsxs)("div",{className:u.a.attributesContainer,children:[Object.keys(e.attributes).map((function(i,n){return Object(a.jsxs)("div",{className:u.a.eachAttributeColumn,children:[Object(a.jsx)("div",{className:u.a.attribute,children:i.split(/(?=[A-Z])/)[0].toLowerCase()+"-"+i.split(/(?=[A-Z])/)[1].toLowerCase()}),t["".concat(i)].map((function(t,n){return Object(a.jsx)(h,{value:t,attributes:e.attributes,attributeName:i,setattributes:e.setattributes},n)}))]},n)})),Object(a.jsx)("div",{})]}),Object(a.jsxs)("div",{className:u.a.itemOperationsContainer,children:[Object(a.jsx)("div",{className:u.a.attribute,children:"Flex Items"}),Object(a.jsx)("div",{className:u.a.itemOperations,onClick:function(){e.count<24?e.setcount(e.count+1):Object(x.b)("Maximum of 24 items can be added!",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0})},children:"add item"}),Object(a.jsx)("div",{className:u.a.itemOperations,onClick:function(){e.count>1?e.setcount(e.count-1):Object(x.b)("Cannot remove anymore items!",{position:"top-center",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!1,progress:void 0})},children:"remove item"})]})]})};var _=function(e){return Object(a.jsxs)("div",{className:u.a.rootFlexHeading,children:[Object(a.jsx)("div",{className:u.a.pageHeading,children:"FlexBox-Guide"}),Object(a.jsxs)("div",{className:u.a.pageSubHeading,children:["By ",Object(a.jsx)("a",{className:u.a.link,href:"https://github.com/Souravdey777",children:"Sourav Dey"})]}),Object(a.jsx)("div",{className:u.a.pageDescription,children:"CSS Flexible Box Layout is a module of CSS that defines a CSS box model optimized for user interface design, and the layout of items in one dimension."}),Object(a.jsx)("div",{className:u.a.githublink,children:Object(a.jsx)("a",{href:"https://github.com/Souravdey777/flexbox-guide",children:Object(a.jsx)("img",{title:"FlexBox-Guide Github Repo",alt:"FlexBox-Guide Github Repo",src:"https://img.shields.io/badge/-Github-333?style=flat&logo=github&logoColor=fff"})})})]})};var O=function(){var e=Object(n.useState)({flexDirection:"",flexWrap:"",justifyContent:"",alignItems:"",alignContent:""}),t=Object(c.a)(e,2),i=t[0],s=t[1],o=Object(n.useState)(5),r=Object(c.a)(o,2),l=r[0],b=r[1];return Object(a.jsxs)("div",{className:u.a.root,children:[Object(a.jsxs)("div",{className:u.a.containerSection,children:[Object(a.jsx)(p,{count:l,attributes:i}),Object(a.jsx)(_,{})]}),Object(a.jsxs)("div",{className:u.a.otherSection,children:[Object(a.jsx)(m,{attributes:i,setattributes:s,count:l,setcount:b}),Object(a.jsx)(d,{attributes:i})]})]})},v=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,22)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;i(e),a(e),n(e),s(e),o(e)}))};r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root")),v()},2:function(e,t,i){e.exports={root:"App_root__2QjaE",containerSection:"App_containerSection__1d2A_",hoverStyle:"App_hoverStyle__pansl",singleItem:"App_singleItem__3cNs-",otherSection:"App_otherSection__gHFWz",hLine:"App_hLine__2dH3Y",rootFlexAttributes:"App_rootFlexAttributes__-U5r6",heading:"App_heading__3I1U5",pageHeading:"App_pageHeading__1Suhq",pageSubHeading:"App_pageSubHeading__2Hn5R",link:"App_link__3VkJt",pageDescription:"App_pageDescription__2i069",githublink:"App_githublink__3l8Ed",attributesContainer:"App_attributesContainer__1_VqQ",eachAttributeColumn:"App_eachAttributeColumn__1ItT5",itemOperationsContainer:"App_itemOperationsContainer__15GcZ",attribute:"App_attribute__3OBR_",value:"App_value__2ylly",itemOperations:"App_itemOperations__2pwCJ",rootFlexCode:"App_rootFlexCode__vxurB",copyIcon:"App_copyIcon__1oAgt",tooltiptext:"App_tooltiptext__10GoP",rootFlexHeading:"App_rootFlexHeading__2xjGc"}}},[[19,1,2]]]);
//# sourceMappingURL=main.958d731f.chunk.js.map