"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[484],{80652:function(p,E,n){var s=n(67294),l=n(62230),v=n(11924),d=n(79360),u=n(24770),D=n(79642),o=function(e,t){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(i[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(i[r[a]]=e[r[a]]);return i},P=(0,s.forwardRef)(function(e,t){var i=e.chartRef,r=e.style,a=r===void 0?{height:"inherit"}:r,f=e.className,j=e.loading,C=e.loadingTemplate,M=e.errorTemplate,h=o(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),O=(0,v.Z)(l.x1,h),c=O.chart,x=O.container;return(0,s.useEffect)(function(){(0,d.J)(i,c.current)},[c.current]),(0,s.useImperativeHandle)(t,function(){return{getChart:function(){return c.current}}}),s.createElement(u.Z,{errorTemplate:M},j&&s.createElement(D.Z,{loadingTemplate:C,theme:e.theme}),s.createElement("div",{className:f,style:a,ref:x}))});E.Z=P},34934:function(p,E,n){n.r(E);var s=n(97857),l=n.n(s),v=n(5574),d=n.n(v),u=n(80652),D=n(61842),o=n(12094),P=n(4334),e=n(67294),t=n(85893),i=function(){var a=(0,e.useState)(.25),f=d()(a,2),j=f[0],C=f[1],M=(0,e.useState)([]),h=d()(M,2),O=h[0],c=h[1],x=(0,e.useState)(!1),T=d()(x,2),g=T[0],y=T[1],S={percent:j,range:{color:"#30BF78"},axis:{label:{formatter:function(_){return Number(_)*100}}},statistic:{content:{formatter:function(_){var B=_.percent;return" ".concat((B*100).toFixed(0),"%")},style:{color:"rgba(0,0,0,0.65)"}}}},R=function(){fetch("https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json").then(function(_){return _.json()}).then(function(_){return c(_)}).catch(function(_){console.log("fetch data failed",_)})},m={data:O,padding:"auto",xField:"Date",yField:"scales",xAxis:{tickCount:5}};return(0,e.useEffect)(function(){R()},[]),(0,t.jsx)(D._z,{children:(0,t.jsxs)(P.Z,{onResize:function(_){y(_.width<596)},children:[(0,t.jsx)(o.Z,{title:"\u5E73\u5747\u8D1F\u8F7D",children:(0,t.jsx)(u.Z,l()({},m))}),(0,t.jsxs)(o.Z,{title:"\u7CFB\u7EDF\u4FE1\u606F",split:g?"horizontal":"vertical",bordered:!0,children:[(0,t.jsx)(o.Z,{title:"CPU",colSpan:"50%",bordered:!0,children:(0,t.jsx)(u.Z,l()({},m))}),(0,t.jsx)(o.Z,{title:"\u5185\u5B58",colSpan:"50%",bordered:!0,children:(0,t.jsx)(u.Z,l()({},m))})]}),(0,t.jsxs)(o.Z,{title:"\u7CFB\u7EDF\u4FE1\u606F",split:g?"horizontal":"vertical",bordered:!0,children:[(0,t.jsx)(o.Z,{title:"\u78C1\u76D8IO",colSpan:"50%",bordered:!0,children:(0,t.jsx)(u.Z,l()({},m))}),(0,t.jsx)(o.Z,{title:"\u7F51\u7EDCIO",colSpan:"50%",bordered:!0,children:(0,t.jsx)(u.Z,l()({},m))})]})]},"resize-observer")})};E.default=i}}]);