(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{236:function(t,e,n){},237:function(t,e,n){},238:function(t,e,n){},239:function(t,e,n){},240:function(t,e){},243:function(t,e,n){(function(n){var o,i,a;i=[],void 0===(a="function"==typeof(o=function(){"use strict";function e(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){r(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function o(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,r=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype?function(t,n,r){var s=a.URL||a.webkitURL,c=document.createElement("a");n=n||t.name||"download",c.download=n,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):o(c.href)?e(t,n,r):i(c,c.target="_blank")):(c.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,n,a){if(n=n||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}(t,a),n);else if(o(t))e(t,n,a);else{var r=document.createElement("a");r.href=t,r.target="_blank",setTimeout((function(){i(r)}))}}:function(t,n,o,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return e(t,n,o);var r="application/octet-stream"===t.type,s=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||r&&s)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},l.readAsDataURL(t)}else{var u=a.URL||a.webkitURL,d=u.createObjectURL(t);i?i.location=d:location.href=d,i=null,setTimeout((function(){u.revokeObjectURL(d)}),4e4)}});a.saveAs=r.saveAs=r,t.exports=r})?o.apply(e,i):o)||(t.exports=a)}).call(this,n(31))},244:function(t,e,n){"use strict";var o=n(236);n.n(o).a},245:function(t,e,n){"use strict";var o=n(237);n.n(o).a},246:function(t,e,n){"use strict";var o=n(238);n.n(o).a},247:function(t,e,n){"use strict";var o=n(239);n.n(o).a},248:function(t,e,n){"use strict";var o=n(240),i=n.n(o);e.default=i.a},249:function(t,e,n){"use strict";n.r(e);n(153),n(45),n(13),n(22),n(101),n(100);var o=n(243),i=n.n(o),a=n(99),r={props:{record:{type:Object,required:!0}},data:function(){return{isFavorite:!1}},computed:{computedWikidataLink:function(){return"https://www.wikidata.org/wiki/"+this.record.item}},methods:{toggleFavorite:function(t){this.isFavorite=!this.isFavorite,this.$eventBus.$emit(a.c,t)},download:function(){var t=this.record.image.src,e=t.split("/").pop().split("?")[0];e=decodeURI(e).replace(/%2C/g,","),i.a.saveAs(t,e)}}},s=(n(244),n(12)),c=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"action-bar"},[n("div",{staticClass:"action-bar__left"},[n("button",{staticClass:"action-bar__button",attrs:{role:"button","aria-label":"Toggle favorite","is-favorite":t.isFavorite},on:{click:function(e){return e.preventDefault(),t.toggleFavorite(t.record.item)}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}})])]),n("g-link",{staticClass:"action-bar__button",attrs:{to:t.computedWikidataLink}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}})])])],1),n("div",{staticClass:"action-bar__right"},[n("button",{staticClass:"action-bar__button",attrs:{role:"button","aria-label":"Download image"},on:{click:function(e){return e.preventDefault(),t.download()}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"}})])])])])}),[],!1,null,null,null).exports,l={props:{event:{type:String,required:!0},tags:{type:Array,required:!0}},methods:{emitEvent:function(t){this.$eventBus.$emit(this.event,t)}}},u=(n(245),Object(s.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-filter"},t._l(t.tags,(function(e,o){return n("button",{key:o,staticClass:"tag-filter__button",attrs:{role:"button","aria-label":"Tag"},on:{click:function(n){return n.preventDefault(),t.emitEvent(e)}}},[n("span",[t._v("# "+t._s(e))])])})),0)}),[],!1,null,null,null).exports),d={components:{ActionBar:c,TagCloud:u},props:{record:{type:Object,required:!0}},computed:{computedWikidataLink:function(){return"https://www.wikidata.org/wiki/"+this.record.item}},methods:{__getAddTag:function(){return a.a}}},f=(n(246),Object(s.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-layout content-box"},[n("div",{staticClass:"card-layout__header"},[t.record.cover_image?n("g-image",{attrs:{src:t.record.cover_image,alt:"Cover image"}}):t._e()],1),n("div",{staticClass:"card-layout__content"},[n("h2",{staticClass:"card-layout__title"},[t._v(t._s(t.record.painting))]),n("div",[t._v("Year: "+t._s(t.record.year))]),n("div",[t._v("Collection: "+t._s(t.record.location))]),n("div",[t._v("Material: "+t._s(t.record.materials.join(", ")))]),n("TagCloud",{staticClass:"card-layout__tags",attrs:{event:t.__getAddTag(),tags:t.record.tags}}),n("ActionBar",{staticClass:"card-layout__actions",attrs:{record:t.record}})],1),n("g-link",{staticClass:"card-layout__link_to_record",attrs:{to:t.record.path}})],1)}),[],!1,null,null,null).exports),v=n(98),h={components:{CardLayout:f,TagCloud:u},data:function(){return{view:v.a,filter:[],favorites:[]}},metaInfo:function(){return{title:this.$page.metadata.siteName,meta:[{name:"description",content:this.$page.metadata.siteDescription}]}},created:function(){this.$eventBus.$on(a.a,this.onAddTag),this.$eventBus.$on(a.b,this.onRemoveTag),this.$eventBus.$on(a.c,this.onChangeFavorite),this.$eventBus.$on(a.d,this.onToggleView),this.$page.records.edges.forEach((function(t){t.node.tags=_.union([t.node.year,t.node.location],t.node.depicts),_.remove(t.node.tags,(function(t){return 0===t.length}))}))},beforeDestroy:function(){this.$eventBus.$off()},computed:{computedCards:function(){var t=this;return this.view===v.b&&this.favorites.length>0?this.$page.records.edges.filter((function(e){return _.indexOf(t.favorites,e.node.item)>-1})):this.$page.records.edges.filter((function(e){return _.intersection(e.node.tags,t.filter).length===t.filter.length}))}},methods:{onAddTag:function(t){this.filter=_.union(this.filter,[t])},onRemoveTag:function(t){this.filter=_.without(this.filter,t)},onChangeFavorite:function(t){var e=_.indexOf(this.favorites,t);-1!=e?(this.favorites.splice(e,1),0===this.favorites.length&&(this.view=v.a)):this.favorites.push(t)},onToggleView:function(t){this.view=t},showToggleView:function(){return this.favorites.length>0},__getRemoveTag:function(){return a.b}}},g=(n(247),n(248)),p=Object(s.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("Layout",{attrs:{"show-back-link":!1,"toggle-view":this.showToggleView()}},[e("div",[e("TagCloud",{attrs:{event:this.__getRemoveTag(),tags:this.filter}}),e("div",{staticClass:"grid"},this._l(this.computedCards,(function(t){return e("div",{key:t.node.id},[e("CardLayout",{attrs:{record:t.node}})],1)})),0)],1)])}),[],!1,null,null,null);"function"==typeof g.default&&Object(g.default)(p);e.default=p.exports}}]);