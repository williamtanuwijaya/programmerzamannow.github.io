"use strict";(self.webpackChunkprogrammer_zaman_now=self.webpackChunkprogrammer_zaman_now||[]).push([[7377],{3905:function(a,e,n){n.d(e,{Zo:function(){return k},kt:function(){return p}});var r=n(7294);function l(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function i(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,r)}return n}function t(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){l(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function o(a,e){if(null==a)return{};var n,r,l=function(a,e){if(null==a)return{};var n,r,l={},i=Object.keys(a);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(l[n]=a[n]);return l}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(l[n]=a[n])}return l}var m=r.createContext({}),s=function(a){var e=r.useContext(m),n=e;return a&&(n="function"==typeof a?a(e):t(t({},e),a)),n},k=function(a){var e=s(a.components);return r.createElement(m.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(a,e){var n=a.components,l=a.mdxType,i=a.originalType,m=a.parentName,k=o(a,["components","mdxType","originalType","parentName"]),d=s(n),p=l,g=d["".concat(m,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(g,t(t({ref:e},k),{},{components:n})):r.createElement(g,t({ref:e},k))}));function p(a,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof a||l){var i=n.length,t=new Array(i);t[0]=d;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=a,o.mdxType="string"==typeof a?a:l,t[1]=o;for(var s=2;s<i;s++)t[s]=n[s];return r.createElement.apply(null,t)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1105:function(a,e,n){n.r(e),n.d(e,{assets:function(){return k},contentTitle:function(){return m},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(7462),l=n(3366),i=(n(7294),n(3905)),t=["components"],o={sidebar_position:4},m="Program Hello World",s={unversionedId:"dasar/program-hello-world",id:"dasar/program-hello-world",title:"Program Hello World",description:"Saat belajar bahasa pemrograman, biasanya kita akan membuat sebuah program Hello World. Program Hello World adalah sebuah program sederhana yang hanya menampilkan tulisan Hello World. Dan pada tutorial ini, kita akan mencoba membuat program Hello World menggunakan Java",source:"@site/articles/pemrograman/java/01-dasar/04-program-hello-world.md",sourceDirName:"01-dasar",slug:"/dasar/program-hello-world",permalink:"/pemrograman/java/dasar/program-hello-world",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Integrated Development Environment",permalink:"/pemrograman/java/dasar/integrated-development-environment"},next:{title:"Komentar",permalink:"/pemrograman/java/dasar/komentar"}},k={},u=[{value:"File Java",id:"file-java",level:2},{value:"Program Hello World",id:"program-hello-world-1",level:2},{value:"Kompilasi Kode Java",id:"kompilasi-kode-java",level:2},{value:"Error Saat Kompilasi Kode Java",id:"error-saat-kompilasi-kode-java",level:2},{value:"Error : File Tidak Ditemukan",id:"error--file-tidak-ditemukan",level:3},{value:"Error : Nama Class Salah",id:"error--nama-class-salah",level:3},{value:"Error : Lupa Titik Koma",id:"error--lupa-titik-koma",level:3},{value:"Menjalankan Program Java",id:"menjalankan-program-java",level:2},{value:"Error Saat Menjalankan Program Java",id:"error-saat-menjalankan-program-java",level:2},{value:"Error : Class Tidak Ditemukan",id:"error--class-tidak-ditemukan",level:3},{value:"Error : Main Method Tidak Ditemukan",id:"error--main-method-tidak-ditemukan",level:3}],d={toc:u};function p(a){var e=a.components,n=(0,l.Z)(a,t);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"program-hello-world"},"Program Hello World"),(0,i.kt)("p",null,"Saat belajar bahasa pemrograman, biasanya kita akan membuat sebuah program Hello World. Program Hello World adalah sebuah program sederhana yang hanya menampilkan tulisan Hello World. Dan pada tutorial ini, kita akan mencoba membuat program Hello World menggunakan Java"),(0,i.kt)("h2",{id:"file-java"},"File Java"),(0,i.kt)("p",null,"Sebelum kita membuat kode program Java, kita perlu tahu beberapa hal tentang tata cara pembuatan file Java."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"File kode program Java disimpan dalam file dengan ekstensi .java, misal Eko.java, Kurniawan.java, Programmer.java dan lain-lain"),(0,i.kt)("li",{parentName:"ul"},"Penamaan file Java itu biasanya mengikuti format PascalCase (tiap awal kata selalu hurup kapital). Misal, EkoKurniawan.java, ProgramHelloWorld.java, ProgrammerZamanNow.java, AplikasiPenjualan.java, AplikasiOjekOnline.java dan lain-lain"),(0,i.kt)("li",{parentName:"ul"},"Dilarang ada spasi dalam penamaan file Java")),(0,i.kt)("h2",{id:"program-hello-world-1"},"Program Hello World"),(0,i.kt)("p",null,"Sekarang saatnya membuat program Hello World. Dimulai dengan membuat file Java, silahkan buat file Java dengan nama ProgramHelloWorld.java (INGAT JANGAN BUAT FILE BERBEDA), pastikan hurup besar kecilnya harus sama."),(0,i.kt)("p",null,"Selanjutnya, setelah membuat file ProgramHelloWorld.java, silahkan buka menggunakan IDE atau Text Editor. Isi kode Java nya dengan kode sebagai berikut."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ProgramHelloWorld.java"',title:'"ProgramHelloWorld.java"'},"public class ProgramHelloWorld {\n\n}\n")),(0,i.kt)("p",null,"Pada kode diatas kita membuat sebuah public class bernama ProgramHelloWorld. Bentar, apa itu public class? Teman-teman tidak perlu tahu dulu untuk sekarang, ini akan kita bahas nanti di materi Java Object Oriented Programming. Untuk sekarang tinggal diikuti dulu saja."),(0,i.kt)("p",null,"Nama public class nya harus sama dengan nama file. Jika nama file sebelumnya yang kita buat adalah ProgramHelloWorld, maka nama public class nya harus ProgramHelloWorld. Besar kecilnya harus sama karena Java adalah bahasa pemrograman yang case sensitive (artinya huruf besar dan kecil dianggap berbeda)."),(0,i.kt)("p",null,"Selanjutnya kita akan menambahkan sebuah main method. Main adalah sebuah bagian kode program yang akan dieksekusi oleh Java ketika pertama kali program Java berjalan."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ProgramHelloWorld.java"',title:'"ProgramHelloWorld.java"'},"public class ProgramHelloWorld {\n\n  public static void main(String[] args) {\n\n    \n\n  }\n\n}\n")),(0,i.kt)("p",null,"Ada banyak istilah diatas mungkin yang asing, seperti apa itu static? void? main? String[] args? dan lain-lain. Sampai saat ini teman-teman cukup ikuti saja. Nanti sambil berjalan teman-teman akan tiap istilah yang kita ketikkan diatas."),(0,i.kt)("p",null,"Di dalam kurung kurawal buka dan kurung kurawal tutup main method diatas lah. Kode program kita perlu kita tempatkan. Jadi selanjutnya setiap teman-teman membuat program Java, teman-teman akan selalu melakukan hal diatas."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Membuat public class yang sama dengan nama file Java, dan"),(0,i.kt)("li",{parentName:"ul"},"Membuat main method seperti pada kode diatas")),(0,i.kt)("p",null,'Selanjutnya jika kita ingin membuat tulisan, kita bisa menggunakan kode System.out.println("Isi Kode"); Dimana "Isi Kode" bisa kita ganti dengan tulisan yang akan kita keluarkan, misal "Hello World".'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="ProgramHelloWorld.java"',title:'"ProgramHelloWorld.java"'},'public class ProgramHelloWorld {\n\n  public static void main(String[] args) {\n\n    System.out.println("Hello World");\n\n  }\n\n}\n')),(0,i.kt)("p",null,"Kode program Java selalu diakhiri dengan ; (titik koma). Mirip seperti bahasa pemrograman C, PHP dan JavaScript. Jika kita tidak menambah titik koma, maka secara otomatis akan Error"),(0,i.kt)("p",null,"Sekarang kita sudah selesai membuat program Hello World. Selanjutnya kita perlu lakukan kompilasi agar menjadi binary file Java menggunakan JDK, baru nanti file binary file Java tersebut bisa kita jalankan menggunakan JRE."),(0,i.kt)("h2",{id:"kompilasi-kode-java"},"Kompilasi Kode Java"),(0,i.kt)("p",null,"Setelah membuat program Hello World, selanjutnya kita perlu melakukan kompilasi menggunakan JDK. Untuk melakukan kompilasi, teman-teman bisa buka terminal / command line. Lalu silahkan masuk ke folder dimana kita menyimpan kode program Java nya."),(0,i.kt)("p",null,"Untuk melakukan kompilasi, kita bisa menggunakan perintah javac lalu diikuti dengan nama file Java nya, misalnya : javac ProgramHelloWorld.java"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"javac ProgramHelloWorld.java\n")),(0,i.kt)("p",null,"Jika sukses, maka akan ada file baru dengan nama file sama, namun extensinya adalah .class, misal ProgramHelloWorld.class. Ini adalah binary file Java. File ini tidak akan bisa dibuka oleh Text Editor, hanya bisa dijalankan oleh JRE."),(0,i.kt)("h2",{id:"error-saat-kompilasi-kode-java"},"Error Saat Kompilasi Kode Java"),(0,i.kt)("p",null,"Jika teman-teman tidak mengalamahi error, berarti bagus. Teman-teman susah mengikuti tutorialnya dengan baik. Namun jika ternyata ada error, berarti teman-teman kurang jeli mengikuti tutorial nya. Berikut saya bahas beberapa error yang sering terjadi."),(0,i.kt)("h3",{id:"error--file-tidak-ditemukan"},"Error : File Tidak Ditemukan"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"javac ProgramHelloWorld.java\nerror: file not found: ProgramHelloWorld.java\nUsage: javac <options> <source files>\nuse --help for a list of possible options\n")),(0,i.kt)("p",null,"Jika terjadi error seperti diatas, berarti file Java yang dikompilasi tidak ditemukan. Kemungkinannya antara nama file yang teman-teman ketik salah. Atau teman-teman tidak berada di folder yang sama dengan file Java nya. Silahkan perbaiki nama file Java nya, atau silahkan pindah ke folder dimana teman-teman menyimpan file java nya dengan menggunakan perintah cd diikuti folder lokasinya, misal : cd /Users/khannedy/Projects/BelajarJava/"),(0,i.kt)("h3",{id:"error--nama-class-salah"},"Error : Nama Class Salah"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"javac ProgramHelloWorld.java\nProgramHelloWorld.java:1: error: class ProgramHelloworld is public, should be declared in a file named ProgramHelloworld.java\npublic class ProgramHelloworld {\n       ^\n1 error\n")),(0,i.kt)("p",null,"Jika teman-teman mengalami error seperti diatas, artinya nama class nya berbeda dengan nama file Java nya. Saya sudah jelaskan diatas kalo nama class harus sama dengan nama file, dan juga besar kecil huruf nya harus sama, karena di Java case sensitive. Jadi jika nama file nya ProgramHelloWorld.java, nama nama class nya harus ProgramHelloWorld. Silahkan diperbaiki lagi"),(0,i.kt)("h3",{id:"error--lupa-titik-koma"},"Error : Lupa Titik Koma"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"javac ProgramHelloWorld.java\nProgramHelloWorld.java:5: error: ';' expected\n    System.out.println(\"Hello World\")\n                                     ^\n1 error\n")),(0,i.kt)("p",null,"Jika mengalami error seperti diatas. Berarti kita lupa menambahkan tanda ; (titik koma). Di Java semua kode program harus diakhiri dengan ; (titik koma). Silahkan tambahkan titik koma."),(0,i.kt)("h2",{id:"menjalankan-program-java"},"Menjalankan Program Java"),(0,i.kt)("p",null,"Jika sudah sukses melakukan kompilasi, saatnya menjalankan file hasil kompilasinya dengan extensi .class menggunakan JRE. Untuk menjalankan file binary tersebut, kita bisa menggunakan perintah java diikuti dengan nama file nya, namun tidak perlu menambahkan ekstensi .class nya, misal : java ProgramHelloWorld"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java ProgramHelloWorld \nHello World\n")),(0,i.kt)("p",null,"Jika setelah di ENTER keluar tulisan Hello World, selamat, berarti kita sudah berhasil membuat program Hello World menggunakan Java."),(0,i.kt)("h2",{id:"error-saat-menjalankan-program-java"},"Error Saat Menjalankan Program Java"),(0,i.kt)("p",null,"Jika teman-teman gagal menjalankan program Java, berarti ada yang salah dengan file binary nya. Berikut saya jelaskan beberapa error yang sering dihadapi."),(0,i.kt)("h3",{id:"error--class-tidak-ditemukan"},"Error : Class Tidak Ditemukan"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java ProgramHelloworld\nError: Could not find or load main class ProgramHelloworld\nCaused by: java.lang.NoClassDefFoundError: ProgramHelloWorld (wrong name: ProgramHelloworld)\n")),(0,i.kt)("p",null,"Jika kita mendapatkan error seperti diatas, artinya kita salah mengetikkan nama file nya. Ingat di Java itu case sensitive, pastikan mengetikkan nama file yang benar dengan file binary .class yang sudah terbuat"),(0,i.kt)("h3",{id:"error--main-method-tidak-ditemukan"},"Error : Main Method Tidak Ditemukan"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"java ProgramHelloWorld \nError: Main method not found in class ProgramHelloWorld, please define the main method as:\n   public static void main(String[] args)\nor a JavaFX application class must extend javafx.application.Application\n")),(0,i.kt)("p",null,"Jika kita mendapat error diatas, itu artinya main method tidak ditemukan. Biasanya ini karena kita salah membuat nama method nya. Ingat harus sama, silahkan ubah lagi kode program nya, dan pastikan nama method nya harus : public static void main(String[] args). Hurup besar kecil nya harus sama. Setelah dirubah, JANGAN LUPA LAKUKAN KOMPILASI ULANG."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Demikianlah tutorial tentang program Hello World di Java. Jika teman-teman masih mendapat error, namun berbeda errornya dari yang saya jelaskan. Silahkan masukkan di komentar."))}p.isMDXComponent=!0}}]);