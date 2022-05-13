"use strict";(self.webpackChunkprogrammer_zaman_now=self.webpackChunkprogrammer_zaman_now||[]).push([[4029],{3905:function(a,n,r){r.d(n,{Zo:function(){return s},kt:function(){return g}});var t=r(7294);function e(a,n,r){return n in a?Object.defineProperty(a,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[n]=r,a}function i(a,n){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),r.push.apply(r,t)}return r}function l(a){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){e(a,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(r,n))}))}return a}function u(a,n){if(null==a)return{};var r,t,e=function(a,n){if(null==a)return{};var r,t,e={},i=Object.keys(a);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(e[r]=a[r]);return e}(a,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(a,r)&&(e[r]=a[r])}return e}var m=t.createContext({}),d=function(a){var n=t.useContext(m),r=n;return a&&(r="function"==typeof a?a(n):l(l({},n),a)),r},s=function(a){var n=d(a.components);return t.createElement(m.Provider,{value:n},a.children)},y={inlineCode:"code",wrapper:function(a){var n=a.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(a,n){var r=a.components,e=a.mdxType,i=a.originalType,m=a.parentName,s=u(a,["components","mdxType","originalType","parentName"]),p=d(r),g=e,k=p["".concat(m,".").concat(g)]||p[g]||y[g]||i;return r?t.createElement(k,l(l({ref:n},s),{},{components:r})):t.createElement(k,l({ref:n},s))}));function g(a,n){var r=arguments,e=n&&n.mdxType;if("string"==typeof a||e){var i=r.length,l=new Array(i);l[0]=p;var u={};for(var m in n)hasOwnProperty.call(n,m)&&(u[m]=n[m]);u.originalType=a,u.mdxType="string"==typeof a?a:e,l[1]=u;for(var d=2;d<i;d++)l[d]=r[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},588:function(a,n,r){r.r(n),r.d(n,{assets:function(){return s},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return y}});var t=r(7462),e=r(3366),i=(r(7294),r(3905)),l=["components"],u={sidebar_position:13},m="Tipe Data Array",d={unversionedId:"dasar/tipe-data-array",id:"dasar/tipe-data-array",title:"Tipe Data Array",description:"Array atau dalam bahasa indonesia bernama Larik, adalah sebuah tipe data yang berisikan kumpulan tipe data yang sama. Hampir di semua bahasa pemrograman memiliki fitur Array. Tanpa Array, akan sulit menyimpan data dalam jumlah banyak, apalagi dalam variable, maka kita harus membuat banyak sekali variable.",source:"@site/articles/pemrograman/java/01-dasar/13-tipe-data-array.md",sourceDirName:"01-dasar",slug:"/dasar/tipe-data-array",permalink:"/pemrograman/java/dasar/tipe-data-array",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Null",permalink:"/pemrograman/java/dasar/null"},next:{title:"Operator Matematika",permalink:"/pemrograman/java/dasar/operator-matematika"}},s={},y=[{value:"Cara Kerja Array",id:"cara-kerja-array",level:2},{value:"Membuat Array Kosong",id:"membuat-array-kosong",level:2},{value:"Mengubah Isi Data Array",id:"mengubah-isi-data-array",level:2},{value:"Mengakses Data Array",id:"mengakses-data-array",level:2},{value:"Mendapat Panjang Array",id:"mendapat-panjang-array",level:2},{value:"Membuat Array dengan Data-nya",id:"membuat-array-dengan-data-nya",level:2},{value:"Error Array Index Out Of Bounds",id:"error-array-index-out-of-bounds",level:2},{value:"Array Multidimensional",id:"array-multidimensional",level:2},{value:"Menyalin Data Array ke Array Lain",id:"menyalin-data-array-ke-array-lain",level:2}],p={toc:y};function g(a){var n=a.components,u=(0,e.Z)(a,l);return(0,i.kt)("wrapper",(0,t.Z)({},p,u,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tipe-data-array"},"Tipe Data Array"),(0,i.kt)("p",null,"Array atau dalam bahasa indonesia bernama Larik, adalah sebuah tipe data yang berisikan kumpulan tipe data yang sama. Hampir di semua bahasa pemrograman memiliki fitur Array. Tanpa Array, akan sulit menyimpan data dalam jumlah banyak, apalagi dalam variable, maka kita harus membuat banyak sekali variable."),(0,i.kt)("p",null,"Seandainya tidak ada tipe data Array, maka jika kita ingin membuat kumpulan data (misal kumpulan data Nama), maka kita harus membuat banyak sekali variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    // Tanda Array\n    String name1 = "Eko";\n    String name2 = "Kurniawan";\n    String name3 = "Khannedy";\n    String name4 = "Budi";\n    String name5 = "Nugraha";\n    String name6 = "Joko";\n    \n  }\n}\n')),(0,i.kt)("p",null,"Solusi ini tidak bisa bertahan dalam waktu lama, apalagi jika jumlahnya dinamis. Maka membuat banyak variable tidak bisa menjadi solusi. Solusi untuk permasalahan ini adalah tipe data Array."),(0,i.kt)("h2",{id:"cara-kerja-array"},"Cara Kerja Array"),(0,i.kt)("p",null,"Array adalah kumpulan data dengan tipe yang sama. Dan array memiliki panjang, dimana panjangnya harus ditentukan di awal ketika pembuatan Array. Setelah panjangnya di tentukan, panjang Array tidak bisa berubah lagi."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Array",src:r(9226).Z,width:"1035",height:"254"})),(0,i.kt)("p",null,"Contoh gambar diatas adalah Array dengan panjang 7. Artinya Array diatas bisa menampung total 7 data."),(0,i.kt)("p",null,"Selain itu, Array memiliki informasi yang bernama index. Index yaitu nomor posisi letak data di Array. Data pertama dimulai dengan index nomor 0 (nol), data kedua adalah index 1, data ketiga adalah index 2, dan seterusnya. Index digunakan untuk mengakses data di dalam Array dan juga mengubah data di dalam Array."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Array Index",src:r(1129).Z,width:"1180",height:"459"})),(0,i.kt)("h2",{id:"membuat-array-kosong"},"Membuat Array Kosong"),(0,i.kt)("p",null,"Setelah kita tahu cara kerja Array, sekarang saatnya kita mencoba membuat Array. Array adalah tipe data Object, jadi kita bisa mengisi data Array dengan null jika kita ingin. Untuk membuat Array, kita bisa menggunakan beberapa perintah. Kita mulai dengan membuat array kosong (tidak memiliki isi data)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"TipeData[] namaVariable = new TipeData[panjang];\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},"public class Array {\n  public static void main(String[] args) {\n\n    // Membuat array dengan tipe string dan panjang 3\n    String[] arrayName = new String[3];\n    \n    // Membuat array dengan tipe int dan panjang 10\n    int[] arrayScore = new int[10];\n\n  }\n}\n")),(0,i.kt)("h2",{id:"mengubah-isi-data-array"},"Mengubah Isi Data Array"),(0,i.kt)("p",null,"Setelah membuat Array, hal yang biasa kita lakukan adalah mengubah isi data Array-nya. Proses mengubah data array sangat sederhana, kita tinggal menggunakan posisi index nya, kita bisa gunakan perintah sebagai berikut :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"variableArray[index] = data;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    String[] arrayName = new String[3];\n    arrayName[0] = "Eko";\n    arrayName[1] = "Kurniawan";\n    arrayName[2] = "Khannedy";\n\n    int[] arrayScore = new int[10];\n    arrayScore[0] = 100;\n    arrayScore[1] = 100;\n    arrayScore[2] = 100;\n    arrayScore[3] = 100;\n    arrayScore[4] = 100;\n    arrayScore[5] = 100;\n    arrayScore[6] = 100;\n    arrayScore[7] = 100;\n    arrayScore[8] = 100;\n    arrayScore[9] = 100;\n\n  }\n}\n')),(0,i.kt)("p",null,"Tak ada batasan mengubah data Array, kita bisa mengubah data Array berkali-kali. Selain itu tidak ada proses menghapus data Array, jika kita ingin menghapus data array, tinggal ubah saja datanya menjadi null jika tipe data array adalah tipe data Object"),(0,i.kt)("h2",{id:"mengakses-data-array"},"Mengakses Data Array"),(0,i.kt)("p",null,"Untuk mengakses data di Array pun sama seperti dengan mengubah data di Array, yaitu membutuhkan index. Cara mengakses data di Array bisa menggunakan perintah sebagai berikut :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"variableArray[index];\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    String[] arrayName = new String[3];\n    arrayName[0] = "Eko";\n    arrayName[1] = "Kurniawan";\n    arrayName[2] = "Khannedy";\n\n    // Mengakses data di array dan menyimpannya di variable\n    String firstName = arrayName[0]; // Eko\n    String lastName = arrayName[2]; // Khannedy\n\n    // Mengakses langsung data di array\n    System.out.println(arrayName[1]); // Kurniawan\n\n  }\n}\n')),(0,i.kt)("h2",{id:"mendapat-panjang-array"},"Mendapat Panjang Array"),(0,i.kt)("p",null,"Kadang kita butuh mendapatkan informasi panjang sebuah Array. Panjang array adalah bukan informasi jumlah data yang terdapat di Array. Jadi jangan sampai salah, walaupun isi data Array masih kosong, panjang tetap akan selalu menghitung total kapasitas Array."),(0,i.kt)("p",null,"Untuk mendapatkan informasi panjang atau kapasitas Array, kita bisa gunakan perintah :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"variableArray.length\n")),(0,i.kt)("p",null,"Hasil dari .length pada Array adalah int panjang atau kapasitas Array nya."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    String[] arrayName = new String[3];\n\n    // Panjang array tetap 3 walaupun data array kosong semua\n    int panjangArray = arrayName.length; // 3\n    System.out.println(panjangArray);\n\n    arrayName[0] = "Eko";\n    arrayName[1] = "Kurniawan";\n    arrayName[2] = "Khannedy";\n\n    // Panjang array tetap 3, walaupun data array penuh semua\n    System.out.println(arrayName.length); // 3\n\n  }\n}\n')),(0,i.kt)("h2",{id:"membuat-array-dengan-data-nya"},"Membuat Array dengan Data-nya"),(0,i.kt)("p",null,"Secara default, membuat Array selalu dimulai dengan isi Array yang kosong. Namun di Java kita bisa membuat Array secara langsung, dengan isi datanya. Hal ini bermanfaat jika memang kita ingin membuat Array dan datanya pada saat melakukan deklarasi variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    String[] arrayName = {\n        "Eko",\n        "Kurniawan",\n        "Khannedy",\n    };\n    System.out.println(arrayName[0]); // Eko\n    System.out.println(arrayName[1]); // Kurniawan\n    System.out.println(arrayName[2]); // Khannedy\n\n  }\n}\n')),(0,i.kt)("p",null,"Untuk membuat array secara langsung dengan datanya, kita bisa langsung menggunakan tanda kurung kurawal lalu didalamnya tinggal kita masukkan datanya. Posisi data akan otomatis mengikuti posisi index."),(0,i.kt)("p",null,"Namun jika kita membuat variable Array dengan kata kunci var, maka saat membuat Array tidak bisa langsung menggunakan kurung kurawal saja, kita wajib menyebutkan tipe array nya. Seperti pada contoh dibawah ini."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    // variable dengan kata kunci var\n    var arrayName = new String[]{\n        "Eko",\n        "Kurniawan",\n        "Khannedy",\n    };\n    System.out.println(arrayName[0]); // Eko\n    System.out.println(arrayName[1]); // Kurniawan\n    System.out.println(arrayName[2]); // Khannedy\n\n  }\n}\n')),(0,i.kt)("h2",{id:"error-array-index-out-of-bounds"},"Error Array Index Out Of Bounds"),(0,i.kt)("p",null,"Salah satu error yang sering terjadi ketika menggunakan Array adalah error ArrayIndexOutOfBoundsException. Error ini terjadi dikarenakan kita mengakses posisi index yang salah, diluar jangkauan data di Array. Misal kita mengakses index posisi kurang dari 0, atau lebih dari atau sama dengan panjang array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    var arrayName = new String[]{\n        "Eko",\n        "Kurniawan",\n        "Khannedy",\n    };\n\n    // ERROR, karena panjang array 3, dan index terakhir adalah 2\n    System.out.println(arrayName[3]); \n\n  }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: Index 3 out of bounds for length 3\n    at Array.main(Array.java:11)\n')),(0,i.kt)("h2",{id:"array-multidimensional"},"Array Multidimensional"),(0,i.kt)("p",null,"Array juga bisa menampung data multidimensional, atau lebih tepatnya Array di dalam Array. Untuk membuat Array multidimensional kita bisa menggunakan kurung kotak lebih dari satu."),(0,i.kt)("p",null,"Untuk mengakses dan mengubah data di Array multidimensional, kita perlu menggunakan sejumlah kurung kotak saat deklarasi Array nya."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    String[][] data = new String[3][3];\n\n    data[0][0] = "Eko";\n    data[0][1] = "Kurniawan";\n    data[0][2] = "Khannedy";\n\n    data[1][0] = "Budi";\n    data[1][1] = "Nugraha";\n    data[1][2] = "Kuncoro";\n\n    data[2][0] = "Joko";\n    data[2][1] = "Morro";\n    data[2][2] = "Susilo";\n    \n  }\n}\n')),(0,i.kt)("p",null,"Jika digambarkan dalam bentuk tabel, data Array pada kode diatas adalah sebagai berikut :"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Index"),(0,i.kt)("th",{parentName:"tr",align:null},"0"),(0,i.kt)("th",{parentName:"tr",align:null},"1"),(0,i.kt)("th",{parentName:"tr",align:null},"2"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0"),(0,i.kt)("td",{parentName:"tr",align:null},"Eko"),(0,i.kt)("td",{parentName:"tr",align:null},"Kurniawan"),(0,i.kt)("td",{parentName:"tr",align:null},"Khannedy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1"),(0,i.kt)("td",{parentName:"tr",align:null},"Budi"),(0,i.kt)("td",{parentName:"tr",align:null},"Nugraha"),(0,i.kt)("td",{parentName:"tr",align:null},"Kuncoro")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},"Joko"),(0,i.kt)("td",{parentName:"tr",align:null},"Morro"),(0,i.kt)("td",{parentName:"tr",align:null},"Susilo")))),(0,i.kt)("h2",{id:"menyalin-data-array-ke-array-lain"},"Menyalin Data Array ke Array Lain"),(0,i.kt)("p",null,"Java memiliki fitur untuk menyalin data Array secara mudah tanpa harus kita lakukan satu persatu. Carany dengan menggunakan kode :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"System.arraycopy(sourceArray, sourcePosition, destinationArray, destinationPositition, length);\n")),(0,i.kt)("p",null,"Terlihat banyak sekali informasi yang perlu dimasukkan, namun sebenarnya tidak terlalu rumit."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"sourceArray adalah Array yang akan di salin datanya"),(0,i.kt)("li",{parentName:"ul"},"sourcePositition adalah di posisi index mana data akan di salin"),(0,i.kt)("li",{parentName:"ul"},"destinationArray adalah Array yang akan menjadi target menyalin data"),(0,i.kt)("li",{parentName:"ul"},"destinationPosition adalah posisi index mana awal data salinan disimpan"),(0,i.kt)("li",{parentName:"ul"},"length berapa jumlah data yang akan disalin")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Array.java"',title:'"Array.java"'},'public class Array {\n  public static void main(String[] args) {\n\n    String[] name = {"Eko", "Kurniawan", "Khannedy", "Programmer", "Zaman", "Now"};\n    String[] target = new String[5];\n\n    // menyalin array name diposisi 3, ke posisi 2 array target, sebanyak 3 data\n    System.arraycopy(name, 3, target, 2, 3);\n\n    System.out.println(target[0]); // null\n    System.out.println(target[1]); // null\n    System.out.println(target[2]); // Programmer\n    System.out.println(target[3]); // Zaman\n    System.out.println(target[4]); // Now\n\n  }\n}\n')))}g.isMDXComponent=!0},1129:function(a,n,r){n.Z=r.p+"assets/images/array-index-1aa2aaa4c2ae08709b4d2933c3a3d9e9.png"},9226:function(a,n,r){n.Z=r.p+"assets/images/array-146251b670a01da4bd284cb8659f1782.png"}}]);