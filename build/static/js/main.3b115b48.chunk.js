(this.webpackJsonphashiru=this.webpackJsonphashiru||[]).push([[0],{141:function(e,t,a){},142:function(e,t,a){},164:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},284:function(e,t){},286:function(e,t){},299:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),s=a(21),o=a.n(s),i=(a(141),a(142),a(5)),l=a(35),u=a.n(l),d=a(126);function b(){var e=Object(r.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(r.useRef)(null),o=Object(r.useState)(!1),l=Object(i.a)(o,2),b=l[0],j=l[1],p=Object(r.useState)(!1),f=Object(i.a)(p,2),O=f[0],h=f[1],x=Object(r.useState)(),m=Object(i.a)(x,2),g=m[0],v=m[1],y=Object(r.useState)(0),C=Object(i.a)(y,2),S=C[0],w=C[1],D=Object(r.useState)(),k=Object(i.a)(D,2),F=k[0],N=k[1],B=Object(r.useState)(0),L=Object(i.a)(B,2),E=L[0],M=L[1],H=Object(r.useState)(0),T=Object(i.a)(H,2),R=T[0],I=T[1],_=Object(r.useState)({type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[]}}]}),A=Object(i.a)(_,2),P=A[0];A[1];return Object(r.useEffect)((function(){a||function(e){var t=e.setMap,a=e.mapContainer,n=new u.a.Map({container:a.current,style:"mapbox://styles/mapbox/streets-v11",center:[1,46],zoom:5});n.on("load",(function(){t(n),n.resize(),n.addSource("route",{type:"geojson",data:P}),n.addLayer({id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":" #dc3545 ","line-width":4}})}))}({setMap:c,mapContainer:s})}),[b]),Object(r.useEffect)((function(){if(b&&!O){var e=[];navigator.geolocation.watchPosition((function(t){e=[t.coords.longitude,t.coords.latitude]}));var t=window.setInterval((function(){var t=P.features[0].geometry.coordinates.length;if(0!==e.length&&e!==P.features[0].geometry.coordinates[t-1]&&(P.features[0].geometry.coordinates.push(e),t>=1)){var n={latitude:P.features[0].geometry.coordinates[t-1][1],longitude:P.features[0].geometry.coordinates[t-1][0]},r={latitude:P.features[0].geometry.coordinates[t-0][1],longitude:P.features[0].geometry.coordinates[t-0][0]},c=Object(d.getDistance)(n,r);M((function(e){return e+c}))}w((function(e){return e+1e3})),a.getSource("route").setData(P)}),1e3);a.getSource("route").setData(P),v(t)}else b&&O?window.clearInterval(g):b||(window.clearInterval(g),P.features[0].geometry.coordinates.length=0,h(!1),w(0),M(0))}),[b,O]),Object(r.useEffect)((function(){N(new Date(S).toISOString().substr(11,8)),I(E/1e3)}),[S,E]),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{ref:function(e){return s.current=e},className:"mapContainer"}),!b&&Object(n.jsx)("button",{className:"btn btn-outline-danger m-1",onClick:function(){j(!b)},children:"D\xe9marrer"}),b&&!O&&Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"btn btn-outline-danger m-1",onClick:function(){h(!O)},children:"Mettre en pause"}),Object(n.jsx)("button",{className:"btn btn-outline-danger m-1",onClick:function(){j(!b)},children:"Arr\xeater"})]}),b&&O&&Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"btn btn-outline-danger active m-1",onClick:function(){h(!O)},children:"Reprendre la course"}),Object(n.jsx)("button",{className:"btn btn-outline-danger m-1",onClick:function(){j(!b)},children:"Arr\xeater"})]}),Object(n.jsx)("div",{class:"card",children:Object(n.jsx)("div",{class:"card-body p-3",children:Object(n.jsxs)("ul",{class:"fa-ul",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{class:"fa-li",children:Object(n.jsx)("i",{class:"fas fa-map-marker-alt"})}),Object(n.jsxs)("p",{children:["Distance : ",R," km"]})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{class:"fa-li",children:Object(n.jsx)("i",{class:"far fa-hourglass"})}),Object(n.jsxs)("p",{children:["Dur\xe9e : ",F]})]})]})})})]})}u.a.accessToken="pk.eyJ1Ijoicm90b3RvZ3JpbCIsImEiOiJja2Y1anFlYTAwbmxrMnlwOTZmNmd3OGxzIn0.wpkEfgXt-XFfU_yWUgx7BA";var j=a(22),p=(a(164),a(317)),f=a(321),O=a(130),h=a.n(O),x=a(129),m=a.n(x),g=a(128),v=a.n(g),y=a(319),C=a(320),S=a(89),w=a.n(S);function D(){var e=Object(r.useState)(),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(w.a,{maxDeviceWidth:1e3,children:Object(n.jsxs)(p.a,{value:a,onChange:function(e,t){c(t)},showLabels:!0,className:"fixed-bottom",children:[Object(n.jsx)(f.a,{label:"Run",icon:Object(n.jsx)(v.a,{}),component:j.b,to:"/run"}),Object(n.jsx)(f.a,{label:"Home",icon:Object(n.jsx)(m.a,{}),component:j.b,to:"/"}),Object(n.jsx)(f.a,{label:"Analyse",icon:Object(n.jsx)(h.a,{}),component:j.b,to:"/upload"})]})}),Object(n.jsx)(w.a,{minDeviceWidth:1e3,children:Object(n.jsxs)(y.a,{className:"navbar navbar-dark ",children:[Object(n.jsxs)(C.a,{className:"mr-auto",children:[Object(n.jsx)(C.a.Link,{as:j.b,to:"/"}),Object(n.jsx)(C.a.Link,{as:j.b,to:"/",className:"navText",children:"Accueil"}),Object(n.jsx)(C.a.Link,{as:j.b,to:"/run",className:"navText ",children:"Course"}),Object(n.jsx)(C.a.Link,{as:j.b,to:"/upload",className:"navText",children:"Analyse"})]}),Object(n.jsx)(y.a.Brand,{className:"justify-content-end",children:Object(n.jsx)(y.a.Brand,{children:Object(n.jsx)("img",{src:"bluebody.png",height:"40",alt:"Hashiru"})})}),Object(n.jsx)(y.a.Brand,{className:"justify-content-end",children:Object(n.jsx)(y.a.Brand,{children:Object(n.jsx)("img",{src:"bluetxt.png",height:"40",alt:"Hashiru"})})})]})})]})}var k=a(92),F=a(322);a(271),a(277);function N(e){var t=Object(r.useState)(null),a=Object(i.a)(t,2),c=a[0],s=a[1],o=Object(r.useState)(!1),l=Object(i.a)(o,2),d=l[0],b=l[1];Object(r.useEffect)((function(){var t=JSON.parse(e.history.location.state.data);s(t),b(!0)}),[e.history.location.state.data]);var j={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[]}}]},p={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]},properties:{title:"D\xe9but de la course"}},{type:"Feature",geometry:{type:"Point",coordinates:[2,2]},properties:{title:"Fin de la course"}}]},f=Object(r.useState)(null),O=Object(i.a)(f,2),h=O[0],x=O[1],m=Object(r.useRef)(null),g=Object(r.useState)(j),v=Object(i.a)(g,2),y=v[0],C=v[1];if(Object(r.useEffect)((function(){if(d){h||function(e){var t=e.setMap,a=e.mapContainer,n=new u.a.Map({container:a.current,style:"mapbox://styles/mapbox/streets-v11",center:[1,46],zoom:5});n.on("load",(function(){t(n),n.resize(),n.addSource("route",{type:"geojson",data:y}),n.addLayer({id:"route",type:"line",source:"route",layout:{"line-join":"round","line-cap":"round"},paint:{"line-color":" #dc3545 ","line-width":4}}),n.addSource("parcours-points",{type:"geojson",data:{type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-121.415061,40.506229]}},{type:"Feature",geometry:{type:"Point",coordinates:[-121.505184,40.488084]}},{type:"Feature",geometry:{type:"Point",coordinates:[-121.354465,40.488737]}}]}}),n.addLayer({id:"points",type:"circle",source:"parcours-points",paint:{"circle-radius":6,"circle-color":"#18182F"}})}))}({setMap:x,mapContainer:m}),h&&fe()}}),[d,h,fe,y]),d){var S=c.TrainingCenterDatabase.Activities.Activity.Lap[0].Track[0].Trackpoint;S.forEach((function(e){var t=[parseFloat(e.Position.LongitudeDegrees._text),parseFloat(e.Position.LatitudeDegrees._text)];j.features[0].geometry.coordinates.push(t)}))}var w=[],D=[],N=[],B=[],L=Object(r.useState)([0,1e3]),E=Object(i.a)(L,2),M=E[0],H=E[1],T=Object(r.useState)(!1),R=Object(i.a)(T,2),I=R[0],_=R[1],A=Object(r.useState)(0),P=Object(i.a)(A,2),J=P[0],W=P[1],z=Object(r.useState)(),q=Object(i.a)(z,2),U=q[0],Y=q[1],X=Object(r.useState)(),Z=Object(i.a)(X,2),G=Z[0],V=Z[1],Q=Object(r.useState)(),K=Object(i.a)(Q,2),$=K[0],ee=K[1],te=Object(r.useRef)(null);d&&(S.forEach((function(e){w.push(Math.round(e.DistanceMeters._text))})),S.forEach((function(e){D.push(new Date(e.Time._text).toTimeString().split(" ")[0])})),S.forEach((function(e){N.push(e.HeartRateBpm.Value._text)})));var ae=[],ne=[];d&&(N.forEach((function(e){ne.push(e)})),w.forEach((function(e){ae.push(e)}))),Object(r.useEffect)((function(){d&&(W(ae[ae.length-1]),V(D[0]),ee(D[D.length-1]),Y(function(e,t){var a=e.split(":"),n=new Date(0,0,0,a[0],a[1],a[2]);a=t.split(":");var r=new Date(new Date(0,0,0,a[0],a[1],a[2])-n);return 0!==r.getHours()?r.getHours()+":"+r.getMinutes()+":"+r.getSeconds():r.getMinutes()+":"+r.getSeconds()}(D[D.length-1],D[0])))}));var re=[];if(d)for(var ce=0;ce<3;ce++){for(var se=1+N.length/3*ce,oe=N.length/3+N.length/3*ce,ie=99999,le="",ue=se;ue<oe;ue++)N[ue]<ie&&(ie=N[ue],le=ue);re.push(le)}var de={labels:ae,datasets:[{label:"Fr\xe9quence cardiaque",fill:!1,backgroundColor:"rgba(210,0,0,0.4)",borderColor:"rgba(255,0,0,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(210,0,0,0.4)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(210,0,0,0.4)",pointHoverBorderColor:"rgba(255,0,0,1)",pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:10,data:ne}]},be=[];re.forEach((function(e){return be.push({type:"line",mode:"vertical",scaleID:"x-axis-0",value:e,borderColor:"#2984c5",borderWidth:2})}));var je={annotation:{annotations:be}},pe={labels:w,datasets:[{label:"Fr\xe9quence cardiaque",fill:!1,backgroundColor:"rgba(210,0,0,0.4)",borderColor:"rgba(255,0,0,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(210,0,0,0.4)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(210,0,0,0.4)",pointHoverBorderColor:"rgba(255,0,0,1)",pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:10,data:N}]};function fe(){var e=j.features[0].geometry.coordinates,t=e.reduce((function(e,t){return e.extend(t)}),new u.a.LngLatBounds(e[0],e[0]));h.fitBounds(t,{padding:20})}Object(r.useEffect)((function(){d&&(N=[],S.forEach((function(e){e.DistanceMeters._text<M[1]&&e.DistanceMeters._text>M[0]&&N.push(e.HeartRateBpm.Value._text)})),w=[],S.forEach((function(e){e.DistanceMeters._text<M[1]&&e.DistanceMeters._text>M[0]&&w.push(Math.round(e.DistanceMeters._text))})),B=[],S.forEach((function(e){var t=[e.Position.LongitudeDegrees._text,e.Position.LatitudeDegrees._text];e.DistanceMeters._text<M[1]&&e.DistanceMeters._text>M[0]&&B.push(t)})),pe.labels=w,pe.datasets[0].data=N,p.features[0].geometry.coordinates=B[0],p.features[1].geometry.coordinates=B[B.length-1],h&&h.getSource("parcours-points").setData(p))})),Object(r.useEffect)((function(){h&&(C(j),h.getSource("route").setData(y))}),[h]);return d?Object(n.jsxs)("div",{className:"px-5 pb-2",children:[Object(n.jsx)("div",{ref:function(e){return m.current=e},className:"mapContainer border border-danger  my-2"}),Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-md-4",children:Object(n.jsxs)("div",{class:"card bg-white",children:[Object(n.jsx)("h5",{className:"card-header",children:"R\xe9sum\xe9 du parcours"}),Object(n.jsxs)("div",{class:"card-body p-3",children:[Object(n.jsxs)("ul",{class:"fa-ul",children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{class:"fa-li",children:Object(n.jsx)("i",{class:"fas fa-map-marker-alt"})}),Object(n.jsxs)("p",{children:["Distance : ",J/1e3," km"]})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{class:"fa-li",children:Object(n.jsx)("i",{class:"far fa-hourglass"})}),Object(n.jsxs)("p",{children:["Dur\xe9e : ",U]})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{class:"fa-li",children:Object(n.jsx)("i",{class:"fas fa-clock"})}),Object(n.jsxs)("p",{children:["Heure de d\xe9part : ",G]})]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("span",{class:"fa-li",children:Object(n.jsx)("i",{class:"far fa-clock"})}),Object(n.jsxs)("p",{children:["Heure d'arriv\xe9e : ",$]})]})]}),Object(n.jsx)("button",{onClick:function(){return fe()},className:"btn btn-outline-danger m-1",children:"Recentrer"})]})]})}),Object(n.jsxs)("div",{class:"col-md-8 ",children:[I&&Object(n.jsx)("div",{class:"card",children:Object(n.jsxs)("div",{class:"card-body p-3",children:[Object(n.jsx)("button",{onClick:function(){_(!1)},className:"btn btn-outline-danger m-1",children:"Tout le parcours"}),Object(n.jsx)("button",{onClick:function(){_(!0)},className:"btn btn-outline-danger m-1 active",children:"Portion du parcours"}),Object(n.jsx)("p",{children:"Choisir la portion de parcours sur laquelle vous voulez analyser la FQ : "}),Object(n.jsx)(F.a,{value:M,onChange:function(e,t){H(t)},valueLabelDisplay:"auto","aria-labelledby":"range-slider",min:0,max:w[w.length-1],className:"slider"}),Object(n.jsx)(k.Line,{ref:function(e){return te.current=e},redraw:!0,data:pe})]})}),!I&&Object(n.jsx)("div",{class:"card ",children:Object(n.jsxs)("div",{class:"card-body p-3",children:[Object(n.jsx)("button",{onClick:function(){_(!1)},className:"btn btn-outline-danger m-1 active",children:"Tout le parcours"}),Object(n.jsx)("button",{onClick:function(){_(!0)},className:"btn btn-outline-danger m-1",children:"Portion du parcours"}),Object(n.jsx)(k.Line,{ref:function(e){return te.current=e},data:de,options:je})]})})]})]})]}):Object(n.jsx)("div",{children:Object(n.jsx)("p",{children:"Loading..."})})}u.a.accessToken="pk.eyJ1Ijoicm90b3RvZ3JpbCIsImEiOiJja2Y1anFlYTAwbmxrMnlwOTZmNmd3OGxzIn0.wpkEfgXt-XFfU_yWUgx7BA";a(278);var B=function(e){var t="",c=Object(r.useState)(1),s=Object(i.a)(c,2),o=s[0],l=s[1];return Object(n.jsx)("div",{className:"container py-5",children:Object(n.jsxs)("div",{class:"card bg-white",children:[Object(n.jsx)("h5",{className:"card-header",children:"Importer votre propre parcours"}),Object(n.jsxs)("div",{class:"card-body p-3",children:[Object(n.jsx)("input",{type:"file",onChange:function(){if(window.File&&window.FileReader&&window.FileList&&window.Blob){var e=document.querySelector("input[type=file]").files[0],n=new FileReader;n.onload=function(e){!function(e){t=e;var n=a(279).xml2json(t,{compact:!0,ignoreDeclaration:!0,instructionHasAttributes:!1,spaces:4});l(n)}(e.target.result)},n.readAsText(e,"UTF-8")}else alert("Your browser is too old to support HTML5 File API")},className:"form-control-file m-1"}),Object(n.jsx)("form",{onSubmit:function(t){t.preventDefault(),e.history.push({pathname:"/analysis",state:{data:o}})},children:Object(n.jsx)("input",{type:"submit",value:"Envoyer",className:"btn btn-outline-danger m-1"})})]})]})})},L=a(8);a(298);var E=function(){return Object(n.jsx)(j.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(D,{}),Object(n.jsxs)(L.c,{children:[Object(n.jsx)(L.a,{path:"/upload",component:B}),Object(n.jsx)(L.a,{path:"/analysis",component:N}),Object(n.jsx)(L.a,{path:"/run",component:b})]})]})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,324)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),M()}},[[299,1,2]]]);
//# sourceMappingURL=main.3b115b48.chunk.js.map