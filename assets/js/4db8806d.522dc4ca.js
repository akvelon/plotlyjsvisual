"use strict";(self.webpackChunkplotlyjs_visual=self.webpackChunkplotlyjs_visual||[]).push([[4874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),A=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=A(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=A(n),d=r,y=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(y,s(s({ref:t},c),{},{components:n})):a.createElement(y,s({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var A=2;A<o;A++)s[A]=n[A];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>A});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},s="Tutorials",i={unversionedId:"tutorials",id:"tutorials",title:"Tutorials",description:"Chart Studio in the visual and Dash website have the same bases, and users can use official tutorials of Chart Studio from the web site. The main difference is connecting data and exporting charts. Visual users in Power BI just need to assign columns to the visuals from a Power BI data model.",source:"@site/docs/tutorials.md",sourceDirName:".",slug:"/tutorials",permalink:"/plotlyjsvisual/docs/tutorials",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"PlotlyJS visual overview",permalink:"/plotlyjsvisual/docs/overview"},next:{title:"Visual properties",permalink:"/plotlyjsvisual/docs/category/visual-properties"}},l={},A=[{value:"Adopting JS code samples to JSON chart schema in PlotlyJS Visual",id:"adopting-js-code-samples-to-json-chart-schema-in-plotlyjs-visual",level:2}],c={toc:A},p="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorials"},"Tutorials"),(0,r.kt)("p",null,"Chart Studio in the visual and Dash website have the same bases, and users can use ",(0,r.kt)("a",{parentName:"p",href:"https://plotly.com/chart-studio-help/tutorials/#basic"},"official tutorials of Chart Studio from the web site"),". The main difference is connecting data and exporting charts. Visual users in Power BI just need to assign columns to the visuals from a Power BI data model."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tutorials web site page",src:n(1426).Z,width:"828",height:"406"})),(0,r.kt)("p",null,"On the website with tutorials, users can find examples of configuring different basic and complex types of charts. Users should skip the \u201cAdd Data\u201d section in those tutorials."),(0,r.kt)("p",null,"The Plotly.js library is behind the visuals, which also has ",(0,r.kt)("a",{parentName:"p",href:"https://plotly.com/javascript/#basic-charts"},"its own documentation, where described properties")," and features aren\u2019t available if you use only Chart Studio capabilities and ignore JSON editor to configure your own chart."),(0,r.kt)("h2",{id:"adopting-js-code-samples-to-json-chart-schema-in-plotlyjs-visual"},"Adopting JS code samples to JSON chart schema in PlotlyJS Visual"),(0,r.kt)("p",null,"Let\u2019s use an example of configuring the Scatter Plot from Plotly.js documentation on this page:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://plotly.com/javascript/line-and-scatter/"},"https://plotly.com/javascript/line-and-scatter/")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var trace1 = {\n  x: [1, 2, 3, 4],\n  y: [10, 15, 13, 17],\n  mode: 'markers',\n  type: 'scatter'\n};\n\nvar trace2 = {\n  x: [2, 3, 4, 5],\n  y: [16, 5, 11, 9],\n  mode: 'lines',\n  type: 'scatter'\n};\n\nvar trace3 = {\n  x: [1, 2, 3, 4],\n  y: [12, 9, 15, 12],\n  mode: 'lines+markers',\n  type: 'scatter'\n};\n\nvar data = [trace1, trace2, trace3];\n\nPlotly.newPlot('myDiv', data);\n")),(0,r.kt)("p",null,"as well as the result of the chart below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simple chart from official tutorial",src:n(5087).Z,width:"726",height:"436"})),(0,r.kt)("p",null,"There, we see three trace objects to configure three different scatter charts."),(0,r.kt)("p",null,"In JSON editor of Chart studio, users can see an ",(0,r.kt)("inlineCode",{parentName:"p"},'"empty"')," JSON document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "data": [],\n    "layout": {},\n    "frames": {}\n}\n')),(0,r.kt)("p",null,"The Plotly.js JSON document has three roots that are ",(0,r.kt)("a",{parentName:"p",href:"https://plotly.com/javascript/reference/index/#scatter-x"},"described declaratively as JSON objects"),": data, frame, layout."),(0,r.kt)("p",null,"To reuse the code above in the visual, we need to put three traces into the data array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "x": [1,2,3,4],\n      "y": [10,15,13,17],\n      "mode": "markers",\n      "type": "scatter"\n    },\n    {\n      "x": [2,3,4,5],\n      "y": [16,5,11,9],\n      "mode": "lines",\n      "type": "scatter"\n    },\n    {\n      "x": [1,2,3,4],\n      "y": [12,9,15,12],\n      "mode": "lines+markers",\n      "type": "scatter"\n    }\n  ],\n  "layout": {\n  },\n  "frames": []\n}\n')),(0,r.kt)("p",null,"There, we need to add quotes to property names because it is JSON. After saving the chart, you will see the result:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Simple chart from official tutorial after applying to the visual",src:n(752).Z,width:"828",height:"549"})),(0,r.kt)("p",null,"Plotly.js adds a default config for layout property according to values in the data property."))}u.isMDXComponent=!0},5087:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},752:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial2-759470e9dbdbd0da9c622e02c5f99edf.webp"},1426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorials-5aee3a70290850c6f1461c9ffc62de29.webp"}}]);