"use strict";(self.webpackChunkplotlyjs_visual=self.webpackChunkplotlyjs_visual||[]).push([[6619],{3905:(t,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>N});var e=n(7294);function l(t,a,n){return a in t?Object.defineProperty(t,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[a]=n,t}function r(t,a){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),n.push.apply(n,e)}return n}function i(t){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){l(t,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))}))}return t}function p(t,a){if(null==t)return{};var n,e,l=function(t,a){if(null==t)return{};var n,e,l={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||(l[n]=t[n]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=e.createContext({}),u=function(t){var a=e.useContext(d),n=a;return t&&(n="function"==typeof t?t(a):i(i({},a),t)),n},o=function(t){var a=u(t.components);return e.createElement(d.Provider,{value:a},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var a=t.children;return e.createElement(e.Fragment,{},a)}},g=e.forwardRef((function(t,a){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),m=u(n),g=l,N=m["".concat(d,".").concat(g)]||m[g]||k[g]||r;return n?e.createElement(N,i(i({ref:a},o),{},{components:n})):e.createElement(N,i({ref:a},o))}));function N(t,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=g;var p={};for(var d in a)hasOwnProperty.call(a,d)&&(p[d]=a[d]);p.originalType=t,p[m]="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return e.createElement.apply(null,i)}return e.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5224:(t,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>u});var e=n(7462),l=(n(7294),n(3905));const r={sidebar_position:4},i="Sankey tutorial",p={unversionedId:"snakey",id:"snakey",title:"Sankey tutorial",description:"The visuals allows the creation of Sankey charts. This is creating a sample chart and preparing data in Power BI Desktop for rendering Sankey chart by PlotlyJS Visual.",source:"@site/docs/snakey.md",sourceDirName:".",slug:"/snakey",permalink:"/plotlyjsvisual/docs/snakey",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Plotly.js documentation",permalink:"/plotlyjsvisual/docs/tutorials"},next:{title:"Visual properties",permalink:"/plotlyjsvisual/docs/category/visual-properties"}},d={},u=[{value:"Prepare data",id:"prepare-data",level:2},{value:"Configure Sankey chart in PlotlyJS chart",id:"configure-sankey-chart-in-plotlyjs-chart",level:2}],o={toc:u},m="wrapper";function k(t){let{components:a,...r}=t;return(0,l.kt)(m,(0,e.Z)({},o,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sankey-tutorial"},"Sankey tutorial"),(0,l.kt)("p",null,"The visuals allows the creation of Sankey charts. This is creating a sample chart and preparing data in Power BI Desktop for rendering Sankey chart by PlotlyJS Visual."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Snakey chart view",src:n(6661).Z,width:"587",height:"441"})),(0,l.kt)("p",null,"In this tutorial ",(0,l.kt)("a",{parentName:"p",href:"https://appsource.microsoft.com/en-US/product/power-bi-visuals/WA104380777?exp=ubp8&tab=Overview"},(0,l.kt)("inlineCode",{parentName:"a"},"SankeyMicrosoftSample"))," report was used for data imported from Microsoft Sankey visual sample report."),(0,l.kt)("h2",{id:"prepare-data"},"Prepare data"),(0,l.kt)("p",null,"To set node labels on the chart correctly, you have to transform your table to the next state:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Source"),(0,l.kt)("th",{parentName:"tr",align:null},"Destination"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"SourceIndex"),(0,l.kt)("th",{parentName:"tr",align:null},"DestinationIndex"),(0,l.kt)("th",{parentName:"tr",align:null},"NodeLabel"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Angola"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"Angola")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Angola"),(0,l.kt)("td",{parentName:"tr",align:null},"India"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"Brazil")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Angola"),(0,l.kt)("td",{parentName:"tr",align:null},"Japan"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},"Canada")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Brazil"),(0,l.kt)("td",{parentName:"tr",align:null},"England"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"England")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Brazil"),(0,l.kt)("td",{parentName:"tr",align:null},"France"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"England South")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Brazil"),(0,l.kt)("td",{parentName:"tr",align:null},"Portugal"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"France")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Brazil"),(0,l.kt)("td",{parentName:"tr",align:null},"Spain"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"France South")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Canada"),(0,l.kt)("td",{parentName:"tr",align:null},"England"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Mali")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Canada"),(0,l.kt)("td",{parentName:"tr",align:null},"France"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Mexico")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Canada"),(0,l.kt)("td",{parentName:"tr",align:null},"Portugal"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"Morocco")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"England"),(0,l.kt)("td",{parentName:"tr",align:null},"Angola"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Portugal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"England"),(0,l.kt)("td",{parentName:"tr",align:null},"Morocco"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"Portugal South")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"England"),(0,l.kt)("td",{parentName:"tr",align:null},"Senegal"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"Senegal")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"England South"),(0,l.kt)("td",{parentName:"tr",align:null},"South Africa"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"South Africa")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"France"),(0,l.kt)("td",{parentName:"tr",align:null},"Angola"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Spain")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"France"),(0,l.kt)("td",{parentName:"tr",align:null},"Mali"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"Spain South")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"France"),(0,l.kt)("td",{parentName:"tr",align:null},"Morocco"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"USA")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"France"),(0,l.kt)("td",{parentName:"tr",align:null},"Senegal"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"China")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"France South"),(0,l.kt)("td",{parentName:"tr",align:null},"South Africa"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"6"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"India")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mali"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null},"Japan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mali"),(0,l.kt)("td",{parentName:"tr",align:null},"India"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null},"France1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mali"),(0,l.kt)("td",{parentName:"tr",align:null},"Japan"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"7"),(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null},"Africa China")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mexico"),(0,l.kt)("td",{parentName:"tr",align:null},"England"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Africa India")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mexico"),(0,l.kt)("td",{parentName:"tr",align:null},"France"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"Africa Japan")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mexico"),(0,l.kt)("td",{parentName:"tr",align:null},"Portugal"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Mexico"),(0,l.kt)("td",{parentName:"tr",align:null},"Spain"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"8"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Morocco"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Morocco"),(0,l.kt)("td",{parentName:"tr",align:null},"France1"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Morocco"),(0,l.kt)("td",{parentName:"tr",align:null},"India"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Morocco"),(0,l.kt)("td",{parentName:"tr",align:null},"Japan"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Portugal"),(0,l.kt)("td",{parentName:"tr",align:null},"Angola"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Portugal"),(0,l.kt)("td",{parentName:"tr",align:null},"Morocco"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Portugal"),(0,l.kt)("td",{parentName:"tr",align:null},"Senegal"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Portugal South"),(0,l.kt)("td",{parentName:"tr",align:null},"South Africa"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"11"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Senegal"),(0,l.kt)("td",{parentName:"tr",align:null},"China"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"17"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Senegal"),(0,l.kt)("td",{parentName:"tr",align:null},"India"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"18"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Senegal"),(0,l.kt)("td",{parentName:"tr",align:null},"Japan"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null},"19"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"South Africa"),(0,l.kt)("td",{parentName:"tr",align:null},"Africa China"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"South Africa"),(0,l.kt)("td",{parentName:"tr",align:null},"Africa India"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"22"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"South Africa"),(0,l.kt)("td",{parentName:"tr",align:null},"Africa Japan"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null},"23"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spain"),(0,l.kt)("td",{parentName:"tr",align:null},"Morocco"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spain"),(0,l.kt)("td",{parentName:"tr",align:null},"Senegal"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null},"12"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Spain South"),(0,l.kt)("td",{parentName:"tr",align:null},"South Africa"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"13"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USA"),(0,l.kt)("td",{parentName:"tr",align:null},"England"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USA"),(0,l.kt)("td",{parentName:"tr",align:null},"France"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USA"),(0,l.kt)("td",{parentName:"tr",align:null},"Portugal"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USA"),(0,l.kt)("td",{parentName:"tr",align:null},"Spain"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"16"),(0,l.kt)("td",{parentName:"tr",align:null},"14"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("p",null,"There is 'NodeLabel' column with labels for a node with unique values on top (it\u2019s crucial to build Sankey properly)."),(0,l.kt)("p",null,"We need to add an Index column to the source table 'SankeyMicrosoftSample'; the index will use as a foreign key to join with the source column."),(0,l.kt)("p",null,"To add node names, we need to apply a query to 'SankeyMicrosoftSample'.\nLet\u2019s overview each row step by step to understand it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dax"},'let\n    // We use \u201cSankeyMicrosoftSample\u201d table as a source\n    Source = SankeyMicrosoftSample,\n    // Then we create two tables, one for source nodes, and another for destination nodes\n    // Remove all columns except the \u201cSource\u201d column\n    DestinationNodes = Table.RemoveColumns(Source,{"Source", "Value", "NodeLink"}),\n    // Then rename it to the \u201cNodes\u201d column.\n    DestinationNodesRanmed = Table.RenameColumns(DestinationNodes, {{"Destination", "Nodes"}}),\n    \n    // Do the same for Destination nodes. \n    // Remove all columns except the \u201cDestination\u201d columns.\n    SourceNodes = Table.RemoveColumns(Source,{"Destination", "Value", "NodeLink"}),\n    // Then also, rename it to the \u201cNodes\u201d column.\n    SourceNodesRenamed = Table.RenameColumns(SourceNodes,{{"Source", "Nodes"}}),\n    \n    // Because we need only one column with all node labels, combine those two tables with \u201cNode\u201d columns\n    Combination = Table.Combine({SourceNodesRenamed, DestinationNodesRanmed}),\n    // Then get distinct values by applying Table.Distinct function\n    DistinctNodes = Table.Distinct(Combination),\n    // To join with the  source column, \n    // Add an Index column to our Table with distinct \u201cNodes\u201d table\n    NodesList = Table.AddIndexColumn(DistinctNodes, "Index", 0, 1, Int64.Type),\n    \n    // The last step is to join two tables (SankeyMicrosoftSample, NodesList)\n    LeftJoin = Table.AddJoinColumn(SankeyMicrosoftSample, "NodeLink", NodesList, "Index", "NodeLabel"),\n    // Expand the NodeLabel column. It doesn\u2019t need an index column from the NodesList table.\n    Expand = Table.ExpandTableColumn(LeftJoin, "NodeLabel", {"Nodes"}, {"NodeLabel"}),\n    \n    // Add IDs for source and destination node because PlotlyJS expects numbers instead of string\n    // Add SourceID\n    SourceID = Table.AddJoinColumn(Expand, "Source", NodesList, "Nodes", "SourceID"),\n    // Expand the table to get SourceID column only\n    ExpandedSourceID = Table.ExpandTableColumn(SourceID, "SourceID", {"Index"}, {"SourceID"}),\n\n    // Add DestinationID\n    DestinationID = Table.AddJoinColumn(ExpandedSourceID, "Destination", NodesList, "Nodes", "DestinationID"),\n    // Expand the  table to get DestinationID column only\n    ExpandedDestinationID = Table.ExpandTableColumn(DestinationID, "DestinationID", {"Index"}, {"DestinationID"})\n\n    // Return result\nin\n    ExpandedDestinationID\n')),(0,l.kt)("h2",{id:"configure-sankey-chart-in-plotlyjs-chart"},"Configure Sankey chart in PlotlyJS chart"),(0,l.kt)("p",null,"When data is ready, create the visual instance on a report page and assign ",(0,l.kt)("inlineCode",{parentName:"p"},"NodeLink"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"NodeLabel"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"SourceID"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DestinationID"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Value")," columns to the visual instance:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"PlotlyJS visual with data columns for Sankey",src:n(9381).Z,width:"649",height:"599"})),(0,l.kt)("p",null,"Enter edit mode by clicking on ",(0,l.kt)("inlineCode",{parentName:"p"},"Edit")," in the visual menu and click ",(0,l.kt)("inlineCode",{parentName:"p"},"+Trace"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Add trace",src:n(2970).Z,width:"631",height:"229"})),(0,l.kt)("p",null,"Then switch trace type ",(0,l.kt)("inlineCode",{parentName:"p"},"Sankey")," by selecting trace on the list."),(0,l.kt)("p",null,"The last step is assigning columns to properties:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"NodeLabel")," to Labels"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"SourceID")," to Sources"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DestinationID")," to Target"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Value")," to Values"),(0,l.kt)("p",null,"and save the chart in the ",(0,l.kt)("inlineCode",{parentName:"p"},"Save/Load")," tab:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Save/Load chart",src:n(6288).Z,width:"631",height:"496"})),(0,l.kt)("p",null,"The final result is:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"The final result of Sankey chart",src:n(3525).Z,width:"644",height:"417"})))}k.isMDXComponent=!0},6661:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/sankey-eb0994332cdfab1aab8117bf56300c9b.png"},9381:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/sankey_tutorial1-5d673cb1b3bed536deb84281e3b2d926.png"},2970:(t,a,n)=>{n.d(a,{Z:()=>e});const e="data:image/png;base64,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"},6288:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/sankey_tutorial3-d6953fe1215e13a4b948cebc4f4546cb.png"},3525:(t,a,n)=>{n.d(a,{Z:()=>e});const e=n.p+"assets/images/sankey_tutorial4-6cca0dc53f4f4b7b17252cc2093d3e6f.png"}}]);