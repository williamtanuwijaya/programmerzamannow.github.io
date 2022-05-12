"use strict";(self.webpackChunkprogrammer_zaman_now=self.webpackChunkprogrammer_zaman_now||[]).push([[5304],{3905:function(a,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function l(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function s(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var u=t.createContext({}),o=function(a){var e=t.useContext(u),n=e;return a&&(n="function"==typeof a?a(e):l(l({},e),a)),n},d=function(a){var e=o(a.components);return t.createElement(u.Provider,{value:e},a.children)},k={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},m=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,u=a.parentName,d=s(a,["components","mdxType","originalType","parentName"]),m=o(n),p=i,c=m["".concat(u,".").concat(p)]||m[p]||k[p]||r;return n?t.createElement(c,l(l({ref:e},d),{},{components:n})):t.createElement(c,l({ref:e},d))}));function p(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=a,s.mdxType="string"==typeof a?a:i,l[1]=s;for(var o=2;o<r;o++)l[o]=n[o];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},711:function(a,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return k}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],s={sidebar_position:2},u="Menginstall Java",o={unversionedId:"dasar/menginstall-java",id:"dasar/menginstall-java",title:"Menginstall Java",description:"Sebelum belajar pemrograman Java, kita perlu menginstall compiler dan runtime untuk Java nya terlebih dahulu. Dimana terdapat dua jenis aplikasi Java",source:"@site/tutorial/java/01-dasar/02-menginstall-java.md",sourceDirName:"01-dasar",slug:"/dasar/menginstall-java",permalink:"/tutorial-java/dasar/menginstall-java",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Pengenalan Java",permalink:"/tutorial-java/dasar/pengenalan-java"},next:{title:"Integrated Development Environment",permalink:"/tutorial-java/dasar/integrated-development-environment"}},d={},k=[{value:"Download OpenJDK",id:"download-openjdk",level:2},{value:"Isi JDK",id:"isi-jdk",level:2},{value:"Setting Path",id:"setting-path",level:2},{value:"Cara Setting Path Java di Windows",id:"cara-setting-path-java-di-windows",level:3},{value:"Cara Setting Path Java di Mac",id:"cara-setting-path-java-di-mac",level:3},{value:"Cara Setting Path Java di Linux",id:"cara-setting-path-java-di-linux",level:3},{value:"Mencoba JDK dan JRE",id:"mencoba-jdk-dan-jre",level:2}],m={toc:k};function p(a){var e=a.components,s=(0,i.Z)(a,l);return(0,r.kt)("wrapper",(0,t.Z)({},m,s,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"menginstall-java"},"Menginstall Java"),(0,r.kt)("p",null,"Sebelum belajar pemrograman Java, kita perlu menginstall compiler dan runtime untuk Java nya terlebih dahulu. Dimana terdapat dua jenis aplikasi Java"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK (Java Development Kit), yaitu aplikasi yang digunakan untuk melakukan kompilasi kode program Java menjadi file binary Java"),(0,r.kt)("li",{parentName:"ul"},"JRE (Java Runtime Environment), yaitu aplikasi yang digunakan untuk menjalankan file binary Java yang telah di compile oleh JDK")),(0,r.kt)("p",null,"Namun saat kita menginstall JDK, kita tidak perlu lagi menginstall JRE, karena di dalam JDK sudah terdapat juga JRE nya. Oleh karena itu untuk menginstall Java, kita cukup download aplikasi JDK"),(0,r.kt)("h2",{id:"download-openjdk"},"Download OpenJDK"),(0,r.kt)("p",null,"Saya akan menggunakan OpenJDK sebagai JDK yang akan saya gunakan, karena OpenJDK salah salah satu compiler dan runtime Java yang OpenSource dan juga Free. Untuk download nya, kita bisa mengunjungi halaman website OpenJDK di : ",(0,r.kt)("a",{parentName:"p",href:"http://jdk.java.net/"},"http://jdk.java.net/")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Website JDK",src:n(1278).Z,width:"893",height:"583"})),(0,r.kt)("p",null,"Pada saat saya buat artikel ini, versi yang sudah rilis adalah versi JDK 15. Jadi saya akan download versi JDK 15."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JDK Download",src:n(1692).Z,width:"891",height:"558"})),(0,r.kt)("p",null,"JDK bisa digunakan di sistem operasi apapun, Linux, Windows maupun Mac. Dan file JDK itu merupakan file archive, jadi kita tidak perlu menginstallnya, cukup download file JDK nya, lalu extract di hardrive kita."),(0,r.kt)("h2",{id:"isi-jdk"},"Isi JDK"),(0,r.kt)("p",null,"Setelah kita ekstrak file zip atau tar.gz yang sudah kita download. Kurang lebih isi file nya sebagai berikut (saya menggunakan Mac, mungkin di sistem operasi lain isi folder nya berbeda)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JDK Folder",src:n(8062).Z,width:"776",height:"466"})),(0,r.kt)("h2",{id:"setting-path"},"Setting Path"),(0,r.kt)("p",null,"Sebelum kita menggunakan Java, kita perlu melakukan setting Path terlebih dahulu. Tujuannya adalah agar kita bisa mengakses program JDK dan JRE dari mana saja menggunakan terminal / command line. Tanpa melakukan pengaturan Path, maka secara otomatis sistem operasi kita tidak akan mengerti dimana harus menemukan program JDK dan JRE nya."),(0,r.kt)("h3",{id:"cara-setting-path-java-di-windows"},"Cara Setting Path Java di Windows"),(0,r.kt)("p",null,"Untuk melakukan setting di Windows, kita bisa membuka pengaturan Environment Variables. Kita lakukan search di windows menu, lalu ketikkan Environment Variable. Lalu klik menu Edit the system environment variablesb."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Setting JDK di Windows",src:n(6859).Z,width:"738",height:"1250"})),(0,r.kt)("p",null,"Selanjutnya setelah keluar menu System Properties, silahkan pilih tombol Environment Variables."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"System Properties",src:n(8676).Z,width:"418",height:"473"})),(0,r.kt)("p",null,"Selanjutnya, pada bagian System Variables, silahkan cari Variable dengan nama Path, lalu klik tombol Edit untuk mengubah variable tersebut."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Environment Variable",src:n(5692).Z,width:"621",height:"592"})),(0,r.kt)("p",null,"Selanjutnya tambahkan direktori lokasi kita mengekstrak file OpenJDK lalu dibelakangnya tambahkan folder bin, sehingga terlihat seperti pada gambar dibawah ini"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Edit Environment Variable",src:n(3503).Z,width:"536",height:"511"})),(0,r.kt)("p",null,"Sekarang kita sudah selesai menambah OpenJDK ke Path sistem operasi Windows"),(0,r.kt)("h3",{id:"cara-setting-path-java-di-mac"},"Cara Setting Path Java di Mac"),(0,r.kt)("p",null,"Untuk setting Path di Mac silahkan cari di home kita file .bashrc, atau .profile atau .zshrc. Buka salah satunya saja, lalu setelah itu tambahkan code dibawah ini pada bagian file tersebut. Jika semua file tersebut belum ada, kita bisa membuat file baru .bashrc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Sesuaikan dengan lokasi JDK di komputer kita\nexport PATH="/Users/khannedy/App/jdk15/Contents/Home/bin:$PATH"\n')),(0,r.kt)("h3",{id:"cara-setting-path-java-di-linux"},"Cara Setting Path Java di Linux"),(0,r.kt)("p",null,"Untuk setting Path di Linux hampir mirip dengan Mac, silahkan cari di home kita file .bashrc, atau .profile atau .zshrc. Buka salah satunya saja, lalu setelah itu tambahkan code dibawah ini pada bagian file tersebut. Jika semua file tersebut belum ada, kita bisa membuat file baru .bashrc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Sesuaikan dengan lokasi JDK di komputer kita\nexport PATH="/Users/khannedy/App/jdk15/bin:$PATH"\n')),(0,r.kt)("h2",{id:"mencoba-jdk-dan-jre"},"Mencoba JDK dan JRE"),(0,r.kt)("p",null,"Untuk memastikan bahwa kita telah benar melakukan pengaturan JDK dan JRE, kita bisa mencoba menjalankannya menggunakan terminal / command line. Silahkan buka terminal / command line di sistem operasi kita. Untuk memastikan bahwa JDK terinstall dengan baik, kita bisa mengetikkan perintah javac (Java Compiler) lalu diikuti dengan -version (untuk melihat versi JDK nya). Jika keluar versi JDK nya, berarti kita susah sukses menginstall JDK OpenJDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"javac -version\njavac 15.0.1\n")),(0,r.kt)("p",null,"Selanjutnya, untuk memastikan bahwa JRE nya terinstall dengan baik. Kita bisa menggunakan perintah java -version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'java -version\nopenjdk version "15.0.1" 2020-10-20\nOpenJDK Runtime Environment (build 15.0.1+9)\nOpenJDK 64-Bit Server VM (build 15.0.1+9, mixed mode, sharing)\n')),(0,r.kt)("p",null,"Jika sudah sukses, berarti sekarang kita sudah siap untuk melanjutkan belajar Java"))}p.isMDXComponent=!0},3503:function(a,e,n){e.Z=n.p+"assets/images/edit-environment-variable-a81b613a772e0adb10cf504cbae84950.png"},5692:function(a,e,n){e.Z=n.p+"assets/images/environment-variable-a280b26692dbd14c7c37c51f4dfc1fbb.png"},1692:function(a,e,n){e.Z=n.p+"assets/images/jdk-download-50a806c7a05725e4e3e9d8c3b2abb217.png"},8062:function(a,e,n){e.Z=n.p+"assets/images/jdk-folder-825a8318d131f1c7092bdf9388d335da.png"},1278:function(a,e,n){e.Z=n.p+"assets/images/jdk-website-446263be8840041f07b8921b762c4113.png"},8676:function(a,e,n){e.Z=n.p+"assets/images/system-properties-5186b1a2356e93ef0ae17cc94708cf54.png"},6859:function(a,e,n){e.Z=n.p+"assets/images/windows-path-ad7eaa826eea9aea21eb1ecd305ddd74.png"}}]);