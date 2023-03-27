"use strict";(self.webpackChunkplotlyjs_visual=self.webpackChunkplotlyjs_visual||[]).push([[8960],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var o=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),y=l(r),g=i,f=y["".concat(s,".").concat(g)]||y[g]||u[g]||n;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[y]="string"==typeof e?e:i,a[1]=p;for(var l=2;l<n;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2863:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var o=r(7462),i=(r(7294),r(3905));const n={sidebar_position:4},a="Display mode bar",p={unversionedId:"properties/display-mode",id:"properties/display-mode",title:"Display mode bar",description:"The property controls the visibility of the Plotly.js control buttons at top right corner of chart:",source:"@site/docs/properties/display-mode.md",sourceDirName:"properties",slug:"/properties/display-mode",permalink:"/plotlyjsvisual/docs/properties/display-mode",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Rest range on column mapping",permalink:"/plotlyjsvisual/docs/properties/reset-range"},next:{title:"Import and export chart JSON",permalink:"/plotlyjsvisual/docs/properties/import-export"}},s={},l=[],c={toc:l},y="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"display-mode-bar"},"Display mode bar"),(0,i.kt)("p",null,"The property controls the visibility of the Plotly.js control buttons at top right corner of chart:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Display mode bar",src:r(5969).Z,width:"291",height:"63"})))}u.isMDXComponent=!0},5969:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASMAAAA/CAYAAACrQ655AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAyySURBVHhe7Z3JbxXLFYePbTxgwNjYYAM2HjBmHo0YBSEmhE0IiViySMQ/AAgWYREpErBjFSWLRGJBpCySLSCBEBFDpCAWiCBAYZ7MYDMPZh7SX9Hl11x8fW9Ppvw4Hyrd28Pt6qo653dOVbffK/jkIYqiKN+YQv9TURTlm6JipCiKE6gYKYriBCpGiqI4gYqRoihOoGKkKIoTqBgpiuIEKkaKojiBipGiKE6gYqQoihOoGCmK4gQqRoqiOIGKkaIoTqBipCiKE6gYKYriBCpGiqI4gYqRoihOoGKkKIoTqBgpiuIEKkaKojiBipGiKE6gYqQoihOoGCmK4gQqRoqiOEEq/xPHzEsWFBT43xRXCY5ZvuNlf6PjOzhgvD5+/OhvhaewsDDVsU5UjN6/fy+PHz+Wzs5O6enpkQ8fPsiYMWNMqaqqMo1JA+p9+fKllJSUSFlZmb83XaJ2W9jBjDM8+dT17t07efr0qbx69cpsDxkyRIYPHy4jRoww233x9u1befLkibx588ZsFxcXy8iRI2Xo0KFmW3EPfPH06dOyZ88euXXrlr83P4qKiqS1tVXWrVsn8+fPT02QEhEjxKC7u1vOnDkj586d8/f+AAY+YcIEWbVqlTH0JMGZ7t+/b+rn2uPGjZPy8nL/aDrguI8ePTLtDguCiTDnI5oIeldXl78VDvocgaD0B20hgCAoiAkBg3vk99mg3a9fv/7i+7Bhw/oVsMFAf64w2LO/U6dOyc6dO81nVJYuXSrbt2+X5uZmf0+yxBYjjPHKlSuyf/9+s51t0FBXhGLZsmVSW1vr742HFUHrsDiSFaQ0o/SzZ8/kxo0bkcQIoRw/fnxeovzixQsTxazjh4H2jx07Ni8xIjPifqIECrKk58+fGwGLK0ZEb6YRCCOfZF70MdtpZ7z0A2NqM0QL9ozQYrMVFRX+3gT5lGPaVJDMbOLgwYOyadMmY0t4aIH377PjfzJt5DtSYP239zvH/Knd1KlTZevWrdLR0WG2k6boDx7+90g8fPhQjh49ar5zsy0tLVJfX/9VYSCvXr1qon1bW1tvo+OAoTI9Q+gwXIy2srLSXJt9lDSgLhw4yvybe6QvcN5c4OgIXxTRox7EIZcTc23aw/0g5rSLTAmBoW+BY9wL2SDHOcY2+zFavtPXpaWl5vywkN0SVAhqtJesjH3Xrl0z29STZrZLXdgxU8++QCSxqVzCHprX3SI3/yHS9S+RB//JKCdEXnaKVM7wT44HfXvgwAEz3i3FFbJuWItUFZXIi9Ii+VnjbJkwoka63r2U9lmLpLV5stzu7pTm+Ytl6k9WSvfVS/LBG+PRo0fL4sWLjY+nQSzZxVgvXrxoDAmDQXTq6uqMEwRLTU2NNDU1mY64ffu2nDx50r9CPKgzGLHsNkaDMw40ODNRtLq62rR7MICIIFgIAOODQ5Jp4pyIrc2WOM657Of4gwcPTJSlzYhQ1P4mOF2/ft1cz9Z17949U08UEc4X2ob9Ug8ii+gFCQZLxAgRtvdFHyFgsXnn1Xn3kMjlv35druz2ROqwf2KyVBWWSHtptTR7ojSiuEymVTdIS2WdlHvZdGtTm7S1TJWKqhqpnz5TWhculYqaMf4v0yXWNI1BISu6fPmyWQeZM2eOMSwimgUjbmxslGnTpsnevXvNNsq6Zs0a/4x4YCgYE4vmGPOkSZP8I58Jpp5JkW2aZsVw1KhR5p76Wih0bZoWhHru3r1rxhWBIrAwrhYyIvqZ88K0Ixv2evQjGS1BhSyLdtssxfYpAS0pyAQJighMJggubaL9nIdYZgoPAkywaWhoiBf0Pn3wUtOez+UrPJv1RENKR/nb8cicppnrMzkL+EbQVzK/AzOfLVu2yMqVK8120sTKjDAcFo/DgOExwFGw6XRmFLNk6irGdOfOnd7phpIbggXCgDOSCTBlo1+tcABiG8cJyUrsU1cgk2RsmcaTISFACJOtI3Nc44IN0p4gCAx1EswIlgg5QZTFWu4PcE5EmP7B9gmE0UEIPPcr9jLooXV9lFpPiH4IBElSW1Quq8vrZbaXHdG21atXy/Lly6W0pNRM0WZPn2/sAPHhGOMxEKTzrD0HDGJYgcBYET4iNyITLDZyYbSZx4iyaQqSnaZkTlWy7Y8KEZtsB2fIVjgex3AwQNYFcECc0QoS2RnCwT2QDVB4SMD5YUEImOaRQfN7Mh6yIJulELnJKqmLrIwxZTtTPJKGcaJNfFIXbSbw2czMLgVgu5mL3KEhE3r2v9ylJ9wj+Hxp8gTwN8PbZEXZOJPdrl+/XtauXStVldWyYslq+enSn8uEhkYze9mwYYN5rD8QxBIjDIY1kjAQXTBCnCdfMGAMAyNGeHCM8+fPm3LhwoXep2kIjt1PYdGOfQgSTmVFK0lwWF5bYBrKwjzOhRCRPbCPwvEojhsEQWPaNHny5KwFw4ozJeUeaQ/wSX180ve0CWdlCsN39ttz84VxtK9hMH3kWmwTNIJwHuJE9oE42jEnm0oD2o3w0cfYCcsOtJmpHPWynwzCBrtYYvTam0lc+KPIkV/0X479WuTcdv9HyXLyTbf89sFR+fOzL1/Dudd9R/72z7/I7r//SV70pCv+fRFLjIgaGIsFR8BQESlb2A46CJGHlyDDwjXsdez3YLH0tZ9P7iOJDKUvMFJbgmTbH5Xg9foqSYMomDUGr//4Hjcj4BoUhJosDsfPFCILUzkyJgpCEFb4woCdcj+IXnAJgD61GXZitlPsBe/aDpFpv+u/TNkiMv5X/o+SZaQ3zZwxd7Y0NDf5ez6DKNeNrZWmlsZe3xlIYj3at9H+0qVLxlimTJkiCxcu/KIsWLDApHlENZ68sfA3d+7cLxZGc2EjsXUK5vIUIjdiiKFgRETa6dOnm/0Uoi+ZEdkbT/OSAuMkcuMwGDDTCByLT3uvRFbay37azrnAvZLy5zOdIjOgXdaJcUyul61Qv13HoB76OowT28VjnJN+s1Mzpik4JvUzBlwTYeL8MNNC7IUxISBxLYQuCNfOdAK26S+yPgQjCeyYWQG3YkS7WM8MCiTtQwzpf35joX9ZO7I+kDeFnqiV14uMas9dKtr8H8Un+Gi/vb1dtm3bZuyD/UuWLDHjjb1u3LjRrB/xciT+TDZ85MgRk8Hia5zr5KN9BpGbRXAw4sOHD8vu3bv7LPv27TO/wVk4N2wkZ9DpDBwjXxAGDCZJIfoxY7MRpilWiBhfpp6sITG1ZorFQjPHk4JxQnCYzpI1h3bwmNh1IATGBjdEECGi7XzP9tAkfzx7//Q+ZImzQD74iL2AjYHOmjXLqCgiw+IfA2cL26iujXrsO3HihJw9ezaSIJHi28XEXBCBw4hXEtAmWwYjCJLNWHBM++ierIG+xEEZ5yRBjLAjO7bfQozIdMl8aO/EiRNN9CfLJisiUwpmRaH5+Fak+98iR3+ZfznmTdH++3v/At8HiTxNI93j3QP+kA6DxbhsIcoQVUkNORZXkPrjW4sAKTCPppm2Mm0aDDDVypwyMUZMZQgktAkQKYIK0xgbWIDjnBf1dQ1XoL2MGdNrMkJs2o4n781xPDpeX/EYv8CbouVdPEEuTOcvCPARxtP6S3DbfgbPGygS/at9IMpgmHxi4KwREPXY5unE8ePHzdMvqiUKLlq0SGbOnOn/On/4PfXYN4FJs4moTMuoj4iWFojpj/Fv08h+EBzbLoIJ+yh2PclCX9MWjBUxImPCgfOBazHdY+yAazFe3K9ts123sRlZmDXGXNCfN2/ezCqgtBtB6k+AaDvZE8F2MBB86ZGpN399zysvvGIxb948M+78Vf+MGTOM7Rw7dsy8c8VrHKwZ0Rdpv/SYuBj1R6YgAR1DRhVlUHEaFtasuGFEOF/aa0SIEcYcJVqymE6bXRMj7itfMQmCaHCfYcQIELGgmDN2iFK2/UmCHTKG2E6UgGLFM82AlzSHDh2SzZs3x8pgmbbyh7IrVqzw9yTLgIoRBAUJZ6ZhccTDCpJ9d2UgFquJ7BhzFDHCkHFaIn4uEIqoaxU4MQKTa32NOug/xoV7yuf+aD8CRt/bNJ56ooiZMjDw3t2uXbt6/6g9LNhTR0eH7Nixw6wlpsGAixFgwDgBDpDvYnR/cB0cJKlHv98TCAopuhVW+5ibxf9scC7ZkBUiBIxpy2CZsnyvMCXj70OZnoUBm+CtfP57ZDzxTItvIkaKoiiZJPI0TVEUJS4qRoqiOIGKkaIoTqBipCiKE6gYKYriBCpGiqI4gYqRoihOoGKkKIoTqBgpiuIEKkaKojiBipGiKE6gYqQoihOoGCmK4gQqRoqiOIGKkaIoTqBipCiKE6gYKYriBCpGiqI4gMj/AXUopJe6fHi7AAAAAElFTkSuQmCC"}}]);