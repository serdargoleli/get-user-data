(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{150:function(n,t,e){"use strict";e.r(t);e(26),e(96),e(12);var r=e(151),o=e(152),l=e(213),d={props:["selectThemee","themee"],components:{lightMode:r.default,darkMode:o.default,CountryFlag:l.a},computed:{getCurrentLanguage:function(){var n=this;return this.$i18n.locales.find((function(i){return i.code===n.$i18n.locale}))}}},c=(e(283),e(33)),component=Object(c.a)(d,(function(){var n=this,t=n._self._c;return t("header",{staticClass:"header"},[t("nav",{staticClass:"nav border-gray-200 dark:border-gray-600"},[t("div",{staticClass:"nav-container"},[t("a",{staticClass:"nav-logo",attrs:{href:"https://serdargoleli.github.io/",target:"_blank"}},[t("span",{staticClass:"logo"},[n._v("SERDAR GÖLELİ")]),n._v(" "),t("span",[n._v(n._s(n.$t("HomeCardTitle"))+" ")])]),n._v(" "),t("div",{staticClass:"nav-menu",attrs:{id:"navbar-default"}},[t("ul",{staticClass:"nav-menu-list"},[n._m(0),n._v(" "),n._m(1),n._v(" "),t("li",{staticClass:"pr-0"},[t("button",{staticClass:"btn-dark-mode",on:{click:n.selectThemee}},["dark"===n.themee?[t("light-mode")]:[t("dark-mode")]],2)]),n._v(" "),n._m(2)]),n._v(" "),t("button",{staticClass:"btn-dropdown-language"},[t("country-flag",{staticClass:"transition-none rounded",attrs:{country:n.getCurrentLanguage.flag,size:"normal"}}),n._v(" "),t("span",[n._v(n._s(n.getCurrentLanguage.name))]),n._v(" "),t("svg",{staticClass:"ml-2 w-4 h-4",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"}})])],1),n._v(" "),t("div",{staticClass:"dropdown-language",attrs:{id:"dropdown"}},[t("ul",{staticClass:"py-1 text-sm text-gray-700 dark:text-gray-200"},n._l(n.$i18n.locales,(function(e){return t("li",{key:e.code},[t("nuxt-link",{staticClass:"select-language",class:n.getCurrentLanguage.code===e.code?" active":"",attrs:{to:n.switchLocalePath(e.code)}},[t("country-flag",{staticClass:"rounded",attrs:{country:e.flag,size:"normal"}}),n._v(" "),t("span",[n._v(n._s(e.name))])],1)],1)})),0)])])])])])}),[function(){var n=this._self._c;return n("li",{staticClass:"nav-menu-list-item"},[n("a",{attrs:{href:"https://github.com/serdargoleli/sgiphy",target:"_blank"}},[this._v("sgiphy")])])},function(){var n=this._self._c;return n("li",{staticClass:"nav-menu-list-item"},[n("a",{attrs:{href:"https://vue3-yenilikler.vercel.app/#/",target:"_blank"}},[this._v("Vue 3")])])},function(){var n=this._self._c;return n("li",{staticClass:"cs-divide"},[n("span")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{LightMode:e(151).default,DarkMode:e(152).default,Nav:e(150).default})},151:function(n,t,e){"use strict";e.r(t);var r={},o=e(33),component=Object(o.a)(r,(function(){var n=this._self._c;return n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}})])}),[],!1,null,null,null);t.default=component.exports},152:function(n,t,e){"use strict";e.r(t);var r=e(33),component=Object(r.a)({},(function(){var n=this._self._c;return n("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);t.default=component.exports},199:function(n,t,e){var content=e(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(78).default)("3e43b8b6",content,!0,{sourceMap:!1})},214:function(n){n.exports=JSON.parse('{"CardSubtitle":"Benim Adım","Email":"E-Posta","Phone":"Telefon","Gender":"Cinsiyet","Nationality":"Milliyet","Country":"Ülke","City":"Şehir","State":"Eyalet","Street":"Sokak","Code":"Posta Kodu","GetNewPerson":"Yeni Kişi","HomeCardTitle":"Random User Data","HomeCardContent":"Bu uygulama <a href=\'https://randomuser.me\' target=\'_blank\'>randomuser.me</a> kullanılarak geliştirilmiştir. Herhangi bir kâr amacı gütmemektedir."}')},215:function(n){n.exports=JSON.parse('{"CardSubtitle":"My Name is","Email":"E-Mail","Phone":"Phone","Gender":"Gender","Nationality":"Nationality","Country":"Country","City":"City","State":"State","Street":"Street","Code":"Code","GetNewPerson":"Get New Person","HomeCardTitle":"Random User Data","HomeCardContent":" This app is developed using <a href=\'https://randomuser.me\' target=\'_blank\'>randomuser.me</a> this not for any profit purpose."}')},216:function(n){n.exports=JSON.parse('{"CardSubtitle":"Mon Nom","Email":"E-Mail","Phone":"Téléphoner","Gender":"Le genre","Nationality":"Nationalité","Country":"Pays","City":"Ville","State":"Etat","Street":"Rue","Code":"Code Postal","GetNewPerson":"Nouvelle Personne","HomeCardTitle":"Random User Data","HomeCardContent":"Cette application est développée à l\'aide de <a href=\'https://randomuser.me\' target=\'_blank\'>randomuser.me</a> Pas de but lucratif"}')},217:function(n){n.exports=JSON.parse('{"CardSubtitle":"Меня зовут","Email":"Эл. адрес","Phone":"телефон","Gender":"Пол","Nationality":"Национальность","Country":"Страна","City":"Город","State":"Состояние","Street":"Улица","Code":"Почтовый индекс","GetNewPerson":"Новый человек","HomeCardTitle":"Случайные пользовательские данные","HomeCardContent":"Это приложение разработано с использованием  <a href=\'https://randomuser.me\' target=\'_blank\'>randomuser.me</a> Это не для любого мотива прибыли."}')},218:function(n){n.exports=JSON.parse('{"CardSubtitle":"Il Mio Nome","Email":"E-mail","Phone":"Telefono","Gender":"Genere","Nationality":"Nazionalità","Country":"Paese","City":"Città","State":"Stato","Street":"Strada","Code":"Codice postale","GetNewPerson":"Ylarghezza Persona","HomeCardTitle":"Random User Data","HomeCardContent":"Questa app è stata sviluppata utilizzando <a href=\'https://randomuser.me\' target=\'_blank\'>randomuser.me</a> Non è per alcun motivo di lucro."}')},221:function(n,t,e){"use strict";var r={name:"default",components:{Navbar:e(150).default},data:function(){return{getCookieThemee:this.$cookiz.get("themee"),themee:"dark"}},created:function(){this.getCookieThemee?this.themee=this.getCookieThemee:this.$cookiz.set("themee",this.themee,{path:"/",maxAge:31536e3})},methods:{selectThemee:function(){this.themee="dark"===this.themee?"light":"dark",this.$cookiz.set("themee",this.themee,{path:"/",maxAge:31536e3})}}},o=e(33),component=Object(o.a)(r,(function(){var n=this,t=n._self._c;return t("header",{class:n.themee},[t("navbar",{attrs:{selectThemee:n.selectThemee,themee:n.themee}}),n._v(" "),t("nuxt-child")],1)}),[],!1,null,null,null);t.a=component.exports},222:function(n,t,e){e(223),n.exports=e(224)},281:function(n,t,e){var content=e(282);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(78).default)("9d54a558",content,!0,{sourceMap:!1})},282:function(n,t,e){var r=e(77)((function(i){return i[1]}));r.push([n.i,"/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.container{\n  width:100%;\n}\n\n@media (min-width: 640px){\n  .container{\n    max-width:640px;\n  }\n}\n\n@media (min-width: 768px){\n  .container{\n    max-width:768px;\n  }\n}\n\n@media (min-width: 1024px){\n  .container{\n    max-width:1024px;\n  }\n}\n\n@media (min-width: 1280px){\n  .container{\n    max-width:1280px;\n  }\n}\n\n@media (min-width: 1536px){\n  .container{\n    max-width:1536px;\n  }\n}\n\n.static{\n  position:static;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.-top-16{\n  top:-4rem;\n}\n\n.right-0{\n  right:0px;\n}\n\n.z-10{\n  z-index:10;\n}\n\n.m-auto{\n  margin:auto;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-28{\n  margin-top:7rem;\n}\n\n.mr-1{\n  margin-right:0.25rem;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mb-2{\n  margin-bottom:0.5rem;\n}\n\n.mb-3{\n  margin-bottom:0.75rem;\n}\n\n.mb-4{\n  margin-bottom:1rem;\n}\n\n.ml-2{\n  margin-left:0.5rem;\n}\n\n.block{\n  display:block;\n}\n\n.inline-block{\n  display:inline-block;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.h-2{\n  height:0.5rem;\n}\n\n.h-4{\n  height:1rem;\n}\n\n.h-5{\n  height:1.25rem;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-8{\n  height:2rem;\n}\n\n.h-24{\n  height:6rem;\n}\n\n.w-4{\n  width:1rem;\n}\n\n.w-5{\n  width:1.25rem;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-24{\n  width:6rem;\n}\n\n.w-1\\/3{\n  width:33.333333%;\n}\n\n.w-2\\/4{\n  width:50%;\n}\n\n.w-11\\/12{\n  width:91.666667%;\n}\n\n.w-full{\n  width:100%;\n}\n\n.max-w-sm{\n  max-width:24rem;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.animate-pulse{\n  -webkit-animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.space-y-8 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(2rem * var(--tw-space-y-reverse));\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-lg{\n  border-radius:0.5rem;\n}\n\n.rounded-xl{\n  border-radius:0.75rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border-gray-200{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.dark .dark\\:border-gray-600{\n  --tw-border-opacity:1;\n  border-color:rgba(75, 85, 99, var(--tw-border-opacity));\n}\n\n.bg-gray-200{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n\n.bg-gray-300{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n\n.bg-yellow-500{\n  --tw-bg-opacity:1;\n  background-color:rgba(245, 158, 11, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-yellow-600:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(217, 119, 6, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-700{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-800{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-gray-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n\n.dark .dark\\:bg-yellow-400{\n  --tw-bg-opacity:1;\n  background-color:rgba(251, 191, 36, var(--tw-bg-opacity));\n}\n\n.bg-cover{\n  background-size:cover;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-3{\n  padding:0.75rem;\n}\n\n.p-6{\n  padding:1.5rem;\n}\n\n.p-7{\n  padding:1.75rem;\n}\n\n.py-1{\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n}\n\n.py-20{\n  padding-top:5rem;\n  padding-bottom:5rem;\n}\n\n.pr-0{\n  padding-right:0px;\n}\n\n.pr-1{\n  padding-right:0.25rem;\n}\n\n.pl-1{\n  padding-left:0.25rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.font-normal{\n  font-weight:400;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.tracking-tight{\n  letter-spacing:-0.025em;\n}\n\n.text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-700{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity));\n}\n\n.text-gray-900{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-900:hover{\n  --tw-text-opacity:1;\n  color:rgba(17, 24, 39, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-100{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-200{\n  --tw-text-opacity:1;\n  color:rgba(229, 231, 235, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-300{\n  --tw-text-opacity:1;\n  color:rgba(209, 213, 219, var(--tw-text-opacity));\n}\n\n.dark .dark\\:text-gray-500{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity));\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.filter{\n  --tw-blur:var(--tw-empty,/*!*/ /*!*/);\n  --tw-brightness:var(--tw-empty,/*!*/ /*!*/);\n  --tw-contrast:var(--tw-empty,/*!*/ /*!*/);\n  --tw-grayscale:var(--tw-empty,/*!*/ /*!*/);\n  --tw-hue-rotate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-invert:var(--tw-empty,/*!*/ /*!*/);\n  --tw-saturate:var(--tw-empty,/*!*/ /*!*/);\n  --tw-sepia:var(--tw-empty,/*!*/ /*!*/);\n  --tw-drop-shadow:var(--tw-empty,/*!*/ /*!*/);\n  filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.blur{\n  --tw-blur:blur(8px);\n}\n\n.transition-none{\n  transition-property:none;\n}\n\n*{\n  transition:all .3s\n}\n\n::-webkit-scrollbar{\n  width:8px\n}\n\n::-webkit-scrollbar-track{\n  background:#111827\n}\n\n::-webkit-scrollbar-thumb{\n  background:#1f2937\n}\n\n::-webkit-scrollbar-thumb:hover{\n  background:#374151\n}\n\n@media (min-width: 640px){\n}\n\n@media (min-width: 768px){\n  .md\\:mt-0{\n    margin-top:0px;\n  }\n\n  .md\\:h-32{\n    height:8rem;\n  }\n\n  .md\\:w-32{\n    width:8rem;\n  }\n\n  .md\\:w-3\\/4{\n    width:75%;\n  }\n\n  .md\\:w-full{\n    width:100%;\n  }\n\n  .md\\:space-x-8 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse:0;\n    margin-right:calc(2rem * var(--tw-space-x-reverse));\n    margin-left:calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse:0;\n    margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom:calc(0px * var(--tw-space-y-reverse));\n  }\n}\n\n@media (min-width: 1024px){\n}\n\n@media (min-width: 1280px){\n}\n\n@media (min-width: 1536px){\n}",""]),r.locals={},n.exports=r},283:function(n,t,e){"use strict";e(199)},284:function(n,t,e){var r=e(77)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.nav{\n  position:relative;\n  z-index:50;\n  border-bottom-width:2px;\n  --tw-border-opacity:1;\n  border-color:rgba(209, 213, 219, var(--tw-border-opacity))\n}\n.dark .nav{\n  --tw-border-opacity:1;\n  border-color:rgba(17, 24, 39, var(--tw-border-opacity))\n}\n.nav{\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity))\n}\n.dark .nav{\n  --tw-bg-opacity:1;\n  background-color:rgba(17, 24, 39, var(--tw-bg-opacity))\n}\n.nav{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n  padding-top:0.625rem;\n  padding-bottom:0.625rem\n}\n@media (min-width: 640px){\n.nav{\n    padding-left:1rem;\n    padding-right:1rem\n}\n}\n.nav-container{\n  width:100%\n}\n@media (min-width: 640px){\n.nav-container{\n    max-width:640px\n}\n}\n@media (min-width: 768px){\n.nav-container{\n    max-width:768px\n}\n}\n@media (min-width: 1024px){\n.nav-container{\n    max-width:1024px\n}\n}\n@media (min-width: 1280px){\n.nav-container{\n    max-width:1280px\n}\n}\n@media (min-width: 1536px){\n.nav-container{\n    max-width:1536px\n}\n}\n.nav-container{\n  margin-left:auto;\n  margin-right:auto;\n  display:flex;\n  flex-direction:column;\n  flex-wrap:wrap;\n  align-items:center;\n  justify-content:center;\n  text-align:center\n}\n@media (min-width: 768px){\n.nav-container{\n    flex-direction:row;\n    justify-content:space-between;\n    text-align:left\n}\n}\n.nav-logo{\n  margin-bottom:1.5rem;\n  display:flex;\n  flex-direction:column\n}\n@media (min-width: 768px){\n.nav-logo{\n    margin-bottom:auto\n}\n}\n.nav-logo .logo{\n  font-size:1.5rem;\n  line-height:2rem;\n  font-weight:700;\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.dark .nav-logo .logo{\n  --tw-text-opacity:1;\n  color:rgba(249, 250, 251, var(--tw-text-opacity))\n}\n.nav-logo .logo+span{\n  font-size:0.875rem;\n  line-height:1.25rem;\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.nav-menu{\n  display:block;\n  width:auto\n}\n.nav-menu-list{\n  margin-top:0px;\n  display:flex;\n  flex-direction:row;\n  align-items:center\n}\n.nav-menu-list > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(1rem * var(--tw-space-x-reverse));\n  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)))\n}\n.nav-menu-list{\n  padding-right:0.75rem;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:500\n}\n.nav-menu-list-item a{\n  display:block;\n  border-radius:0.25rem\n}\n.dark .nav-menu-list-item a:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\n.nav-menu-list-item a{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n  padding-right:1rem;\n  padding-left:0.75rem;\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.dark .nav-menu-list-item a{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.dark .nav-menu-list-item a:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n@media (min-width: 768px){\n.nav-menu-list-item a{\n    border-width:0px\n}\n.nav-menu-list-item a:hover{\n    background-color:transparent\n}\n.dark .nav-menu-list-item a:hover{\n    background-color:transparent\n}\n.nav-menu-list-item a{\n    padding:0px\n}\n.nav-menu-list-item a:hover{\n    --tw-text-opacity:1;\n    color:rgba(29, 78, 216, var(--tw-text-opacity))\n}\n.dark .nav-menu-list-item a:hover{\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n}\n.nav-menu-list .cs-divide{\n  display:none;\n  height:1.5rem;\n  width:1px;\n  border-radius:0.25rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity))\n}\n@media (min-width: 768px){\n.nav-menu-list .cs-divide{\n    display:block\n}\n}\n.nav-menu .btn-dark-mode{\n  width:36px;\n  height:36px;\n  background-color:#3e4350;\n  color:#bdbdbd;\n  display:flex;\n  align-items:center;\n  border-radius:0.375rem\n}\n.nav-menu .btn-dark-mode:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\n.nav-menu .btn-dark-mode{\n  padding:0.5rem;\n  transition-duration:300ms\n}\n.nav-menu .btn-dark-mode:hover{\n  background-color:hsla(0,0%,71.4%,.5411764705882353);\n  color:#bdbdbd\n}\n.nav-menu{\n  position:relative;\n  display:flex;\n  flex-direction:column;\n  align-items:center\n}\n@media (min-width: 768px){\n.nav-menu{\n    flex-direction:row\n}\n}\n.btn-dropdown-language{\n  display:inline-flex;\n  align-items:center;\n  border-radius:0.25rem;\n  border-radius:0.5rem;\n  background-color:transparent\n}\n.btn-dropdown-language:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity))\n}\n.dark .btn-dropdown-language:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(31, 41, 55, var(--tw-bg-opacity))\n}\n.btn-dropdown-language{\n  padding:0.25rem;\n  padding-right:0.75rem;\n  text-align:center;\n  font-size:0.875rem;\n  line-height:1.25rem;\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.dark .btn-dropdown-language{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity))\n}\n.dark .btn-dropdown-language:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n@media (min-width: 768px){\n.dark .btn-dropdown-language:hover{\n    --tw-text-opacity:1;\n    color:rgba(255, 255, 255, var(--tw-text-opacity))\n}\n}\n.nav-menu .dropdown-language{\n  position:absolute;\n  right:0px;\n  display:none;\n  width:11rem;\n  transform:none;\n  border-radius:0.25rem;\n  --tw-bg-opacity:1;\n  background-color:rgba(229, 231, 235, var(--tw-bg-opacity))\n}\n.dark .nav-menu .dropdown-language{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity))\n}\n.nav-menu .dropdown-language{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}\n.btn-dropdown-language:hover+.dropdown-language, .dropdown-language:hover{\n  top:3rem;\n  display:block\n}\n.select-language{\n  display:flex;\n  align-items:center\n}\n.select-language:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(209, 213, 219, var(--tw-bg-opacity))\n}\n.dark .select-language:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(75, 85, 99, var(--tw-bg-opacity))\n}\n.select-language{\n  padding-left:1rem;\n  padding-right:1rem;\n  padding-top:0.25rem;\n  padding-bottom:0.25rem;\n  font-weight:400;\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.select-language:hover{\n  --tw-text-opacity:1;\n  color:rgba(55, 65, 81, var(--tw-text-opacity))\n}\n.dark .select-language{\n  --tw-text-opacity:1;\n  color:rgba(107, 114, 128, var(--tw-text-opacity))\n}\n.dark .select-language:hover{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity))\n}\n.select-language{\n  opacity:0.75\n}\n.select-language:hover{\n  opacity:1\n}\n.select-language.active{\n  font-weight:500;\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity))\n}\n.dark .select-language.active{\n  --tw-text-opacity:1;\n  color:rgba(243, 244, 246, var(--tw-text-opacity))\n}\n.select-language.active{\n  opacity:1\n}\n.normal-flag,.small-flag{\n  margin:0!important\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r}},[[222,5,1,6]]]);