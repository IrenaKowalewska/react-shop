(this["webpackJsonpshowcase-app"]=this["webpackJsonpshowcase-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(8),r=c.n(i),s=(c(13),c(0)),o=function(){return Object(s.jsx)("nav",{className:"indigo darken-4",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"#nav-mobile",className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/IrenaKowalewska",children:"MY GITHUB"})})})]})})},l=function(){return Object(s.jsx)("footer",{className:"page-footer blue darken-4",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:[(new Date).getFullYear(),Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/IrenaKowalewska",children:"My GitHub"})]})})})},d=c(6),j=c(1),u=c(3),b=function(){return Object(s.jsx)("div",{className:"preloader-wrapper big active",children:Object(s.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(s.jsx)("div",{className:"circle-clipper left",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"gap-patch",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"circle-clipper right",children:Object(s.jsx)("div",{className:"circle"})})]})})},m=function(e){var t=e.mainId,c=e.displayName,n=e.displayDescription,a=e.price,i=e.displayAssets,r=e.addToCart,o=void 0===r?Function.prototype:r,l=a.finalPrice;return Object(s.jsxs)("div",{className:"card hoverable",id:t,children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:i[0].background,alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:c}),Object(s.jsx)("p",{children:n})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{onClick:function(){return o({mainId:t,displayName:c,finalPrice:l})},className:"btn blue darken-2",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right price",children:[l," \u20bd"]})]})]})},h=function(e){var t=e.goods,c=void 0===t?[]:t,n=e.addToCart,a=void 0===n?Function.prototype:n;return c.length?Object(s.jsx)("div",{className:"goods",children:c.map((function(e){return Object(s.jsx)(m,Object(j.a)(Object(j.a)({},e),{},{addToCart:a}),e.mainId)}))}):Object(s.jsx)("h2",{children:"\u041d\u0435\u0442\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f"})},O=function(e){var t=e.order,c=void 0===t?0:t,n=e.handleCartShow,a=void 0===n?Function.prototype:n;return Object(s.jsxs)("div",{className:"cart blue darken-2 white-text",onClick:a,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),c?Object(s.jsx)("span",{className:"cart-quantity",children:c}):null]})};function p(e){var t=e.mainId,c=e.displayName,n=e.finalPrice,a=e.quantity,i=e.deleteFromCart,r=void 0===i?Function.prototype:i,o=e.removeProductCount,l=void 0===o?Function.prototype:o,d=e.addProductCount,j=void 0===d?Function.prototype:d;return Object(s.jsxs)("li",{className:"collection-item",children:[c," \xd7 ",a," =  ",n*a," \u20bd, price: ",n," \u20bd",Object(s.jsx)("span",{className:"secondary-content delete-btn blue-text",onClick:function(){return r(t)},children:Object(s.jsx)("i",{className:"material-icons",children:"delete_forever"})}),Object(s.jsx)("span",{className:"secondary-content delete-btn blue-text",onClick:function(){return l(t)},children:Object(s.jsx)("i",{className:"material-icons",children:"remove"})}),Object(s.jsx)("span",{className:"secondary-content delete-btn blue-text",onClick:function(){return j(t)},children:Object(s.jsx)("i",{className:"material-icons",children:"add"})})]})}function x(e){var t=e.order,c=void 0===t?[]:t,n=e.handleCartShow,a=void 0===n?Function.prototype:n,i=e.deleteFromCart,r=void 0===i?Function.prototype:i,o=e.removeProductCount,l=void 0===o?Function.prototype:o,d=e.addProductCount,u=void 0===d?Function.prototype:d,b=c.reduce((function(e,t){return e+t.finalPrice*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection cart-list",children:[Object(s.jsxs)("li",{className:"collection-item active blue darken-2",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u0437\u0430\u043a\u0430\u0437\u043e\u0432",Object(s.jsx)("span",{className:"secondary-content delete-btn",onClick:a,children:Object(s.jsx)("i",{className:"material-icons",children:"close"})})]}),c.length?c.map((function(e){return Object(s.jsx)(p,Object(j.a)(Object(j.a)({},e),{},{deleteFromCart:r,removeProductCount:l,addProductCount:u}),e.mainId)})):Object(s.jsx)("li",{className:"collection-item center-align",children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0435 \u043d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),Object(s.jsxs)("li",{className:"collection-item active blue darken-2 quantity-collection",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0437\u0430\u043a\u0430\u0437\u0430: ",b," \u20bd",Object(s.jsxs)("button",{className:"btn send-btn blue darken-2",children:["\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",Object(s.jsx)("i",{className:"material-icons",children:"offline_pin"})]})]})]})}function v(e){var t=e.name,c=void 0===t?" ":t,a=e.closeAlert,i=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[" ",c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)([]),r=Object(u.a)(i,2),o=r[0],l=r[1],m=Object(n.useState)(!0),p=Object(u.a)(m,2),f=p[0],N=p[1],y=Object(n.useState)(!1),g=Object(u.a)(y,2),C=g[0],k=g[1],w=Object(n.useState)(""),F=Object(u.a)(w,2),I=F[0],P=F[1],q=function(){k(!C)};return Object(n.useEffect)((function(){fetch(" https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"8a198bc5-ed58c0f4-e2e21af4-682d1d80"}}).then((function(e){return e.json()})).then((function(e){e.shop&&a(e.shop),N(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(O,{order:o.length,handleCartShow:q}),f?Object(s.jsx)(b,{}):Object(s.jsx)(h,{goods:c,addToCart:function(e){var t=o.findIndex((function(t){return t.mainId===e.mainId}));if(t<0){var c=Object(j.a)(Object(j.a)({},e),{},{quantity:1});l([].concat(Object(d.a)(o),[c]))}else{var n=o.map((function(e,c){return c===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));l(n)}P(e.displayName)}}),C&&Object(s.jsx)(x,{order:o,handleCartShow:q,deleteFromCart:function(e){var t=o.findIndex((function(t){return t.mainId===e})),c=o.slice(0,t),n=o.slice(t+1),a=[].concat(Object(d.a)(c),Object(d.a)(n));l(a)},removeProductCount:function(e){var t=o.map((function(t){if(t.mainId===e){var c=t.quantity-1;return Object(j.a)(Object(j.a)({},t),{},{quantity:c>=0?c:0})}return t}));l(t)},addProductCount:function(e){var t=o.map((function(t){if(t.mainId===e){var c=t.quantity+1;return Object(j.a)(Object(j.a)({},t),{},{quantity:c})}return t}));l(t)}}),I&&Object(s.jsx)(v,{name:I,closeAlert:function(){P("")}})]})};var N=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(f,{}),Object(s.jsx)(l,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9841dc98.chunk.js.map