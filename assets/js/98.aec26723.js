(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{401:function(s,t,n){"use strict";n.r(t);var a=n(46),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("###### 内核 ##########")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看cpu内核数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cpu cores"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看逻辑cpu个数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"processor"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看物理cpu个数")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"physical id"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" -l \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看每个物理cpu的核数cores")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cpu cores"')]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看cpu型号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -f2 -d: "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -c \n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("######## 内存 #########")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看内存大小，使用情况")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("free")]),s._v(" -h\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件系统的磁盘空间占用情况")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" -h\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示磁盘空间使用量")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" -h\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);