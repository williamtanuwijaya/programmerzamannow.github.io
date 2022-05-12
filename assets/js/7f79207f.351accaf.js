"use strict";(self.webpackChunkprogrammer_zaman_now=self.webpackChunkprogrammer_zaman_now||[]).push([[9802],{3905:function(a,e,n){n.d(e,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function t(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,r)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){t(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a,e){if(null==a)return{};var n,r,t=function(a,e){if(null==a)return{};var n,r,t={},i=Object.keys(a);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(t[n]=a[n]);return t}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(t[n]=a[n])}return t}var u=r.createContext({}),l=function(a){var e=r.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},s=function(a){var e=l(a.components);return r.createElement(u.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,u=a.parentName,s=m(a,["components","mdxType","originalType","parentName"]),k=l(n),p=t,c=k["".concat(u,".").concat(p)]||k[p]||d[p]||i;return n?r.createElement(c,o(o({ref:e},s),{},{components:n})):r.createElement(c,o({ref:e},s))}));function p(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,o=new Array(i);o[0]=k;var m={};for(var u in e)hasOwnProperty.call(e,u)&&(m[u]=e[u]);m.originalType=a,m.mdxType="string"==typeof a?a:t,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},8105:function(a,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return m},metadata:function(){return l},toc:function(){return d}});var r=n(7462),t=n(3366),i=(n(7294),n(3905)),o=["components"],m={sidebar_position:5},u="Komentar",l={unversionedId:"dasar/komentar",id:"dasar/komentar",title:"Komentar",description:"Setiap bahasa pemrograman pasti memiliki fitur yang namanya komentar. Komentar adalah kode program yang tidak akan dieksekusi ketika dijalankan. Biasanya komentar digunakan untuk memberi informasi tambahan pada kode program kita agar mudah dimengerti.",source:"@site/articles/pemrograman/java/01-dasar/05-komentar.md",sourceDirName:"01-dasar",slug:"/dasar/komentar",permalink:"/pemrograman/java/dasar/komentar",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Program Hello World",permalink:"/pemrograman/java/dasar/program-hello-world"},next:{title:"Tipe Data Number",permalink:"/pemrograman/java/dasar/tipe-data-number"}},s={},d=[{value:"Komentar Satu Baris",id:"komentar-satu-baris",level:2},{value:"Komentar Lebih dari Satu Baris",id:"komentar-lebih-dari-satu-baris",level:2}],k={toc:d};function p(a){var e=a.components,n=(0,t.Z)(a,o);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"komentar"},"Komentar"),(0,i.kt)("p",null,"Setiap bahasa pemrograman pasti memiliki fitur yang namanya komentar. Komentar adalah kode program yang tidak akan dieksekusi ketika dijalankan. Biasanya komentar digunakan untuk memberi informasi tambahan pada kode program kita agar mudah dimengerti."),(0,i.kt)("h2",{id:"komentar-satu-baris"},"Komentar Satu Baris"),(0,i.kt)("p",null,"Untuk memberi komentar di Java, sangatlah mudah, kita bisa menggunakan tanda // lalu diikuti dengan isi komentar. Tanda // menandakan bahwa satu baris kode tersebut dianggap sebagai komentar. Komentar bisa ditambahkan dibaris kode manapun, tidak ada ketentuan harus di posisi mana menambahkan komentar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Ini adalah komentar\npublic class ProgramHelloWorld { // komentar juga bisa disini\n\n  public static void main(String[] args) {\n    // kita boleh menambahkan komentar dimanapun yang kita mau, asal satu baris\n    \n    System.out.println("Hello World"); // komentar setelah kode program\n\n  } // ini komentar\n\n}\n\n// komentar juga bisa disini\n')),(0,i.kt)("h2",{id:"komentar-lebih-dari-satu-baris"},"Komentar Lebih dari Satu Baris"),(0,i.kt)("p",null,"Selain komentar satu baris, kita juga bisa membuat komentar yang lebih dari satu baris, caranya komentar harus diawali dengan tanda /",(0,i.kt)("em",{parentName:"p"}," dan diakhiri dengan "),"/"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class ProgramHelloWorld {\n\n  /*\n  Ini adalah komentar lebih dari satu baris\n  kita bisa menambahkan apapun disini\n  terserah kita\n   */\n\n  public static void main(String[] args) {\n\n    System.out.println("Hello World"); /*\n     bisa juga disini,\n     tidak ada yang melarang\n    */\n\n  }\n  \n  /*\n  bebas ya :D\n   */\n\n}\n')),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Namun komentar terbaik sebenarnya adalah kode program kita sendiri. Jika kode program kita butuh banyak sekali komentar untuk memberi tahu programmer lain ketika membaca kode program kita, berarti ada masalah dengan kode program kita. Kode program yang baik itu mudah dimengerti dan dibaca oleh programmer lain."))}p.isMDXComponent=!0}}]);