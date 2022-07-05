(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{459:function(t,a,e){"use strict";e.r(a);var s=e(46),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("STL六大组件: 容器、迭代器、算法")]),t._v(" "),e("p",[t._v("容器就是数据结构，用来将数据元素按照一定的规则进行排列，不同的容器拥有不同的排列规则，不同的排列规则可以达到不同的数据操作特点。\n算法就是提供对容器数据元素的一些操作。\n迭代器就是容器和算法之间的桥梁，粘合剂。")]),t._v(" "),e("h2",{attrs:{id:"_1-string"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-string"}},[t._v("#")]),t._v(" 1 string")]),t._v(" "),e("p",[t._v("问：string存取字符[]和at的异同?\n答：1 相同,[]和at都可以返回第n个字符\n2 不同，at访问越界会抛出异常，[]越界会直接程序会挂掉。")]),t._v(" "),e("h2",{attrs:{id:"_2-vector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-vector"}},[t._v("#")]),t._v(" 2 vector")]),t._v(" "),e("p",[t._v("长度动态改变的动态数组，连续的内存空间，随机存取效率高。\nvector是单口容器，在队尾插入和删除元素效率高，在指定位置插入会导致数据元素移动，效率低。\n问：vector如何实现动态增长?\n答: 当vector空间满的时候，再当插入新元素的时候，vector会重新申请一块更大的内存空间，将原空间数据拷贝到新的内存空间，然后释放旧的内存空间，再将新元素插入到新空间中，以此可以看出vector的空间动态增长效率较低。")]),t._v(" "),e("h2",{attrs:{id:"_3-deque"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-deque"}},[t._v("#")]),t._v(" 3 deque")]),t._v(" "),e("p",[t._v("deque是双向开口的连续性空间，头尾辆段都可以做元素的插入和删除操作\ndeque和vector的最大差异？\n一在于deque允许常数时间内对头端进行元素插入和删除操作。\n二在于deque没有容量的概念，因为它是动态的以分段的连续空间组合而成，随时可以增加一段新的空间并链接起来，换句话说，像vector那样“因旧空间不足而重新分配一块更大的空间，然后再复制元素，释放空间”这样的操作不会发生在deque身上，也因此deque没有必要提供所谓的空间保留功能。")]),t._v(" "),e("h2",{attrs:{id:"_4-queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-queue"}},[t._v("#")]),t._v(" 4 queue")]),t._v(" "),e("p",[t._v("先进先出的数据结构，不具有遍历行为。\n必须从一个口数据元素入队，另一个口数据元素出队。")]),t._v(" "),e("h2",{attrs:{id:"_5-stack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-stack"}},[t._v("#")]),t._v(" 5 stack")]),t._v(" "),e("p",[t._v("先进后出的数据结构，stack不具有遍历行为，没有迭代器。\n只有一个出入口")]),t._v(" "),e("h2",{attrs:{id:"_6-list"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-list"}},[t._v("#")]),t._v(" 6 list")]),t._v(" "),e("p",[t._v("链表是一种物理存储单元上非连续、非顺序的存储结构，数据元素的逻辑顺序是通过链表中的指针链接次序实现的。\n问：链表和数组有什么区别？\n答：1)\t数组必须事先定义固定的长度（元素个数），不能适应数据动态地增减的情况。当数据增加时，可能超出原先定义的元素个数；当数据减少时，造成内存浪费。\n2)\t链表动态地进行存储分配，可以适应数据动态地增减的情况，且可以方便地插入、删除数据元素。（数组中插入、删除数据项时，需要移动其它数据项）")]),t._v(" "),e("h2",{attrs:{id:"_7-set-multiset"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-set-multiset"}},[t._v("#")]),t._v(" 7 set/multiset")]),t._v(" "),e("p",[t._v("数据元素会自动进行排序。set是以RB-tree(红黑树，平衡二叉树的一种)为底层机制，查找效率特别高。\n二叉搜索树，是指二叉树中的节点按照一定的规则进行排序，使得对二叉树中元素访问更加高效。二叉搜索树的放置规则是：任何节点的元素值一定大于其左子树中的每一个节点的元素值，并且小于其右子树的值。因此从根节点一直向左走，一直到无路可走，即得到最小值，一直向右走，直至无路可走，可得到最大值。那么在二叉搜索树中找到最大元素和最小元素是非常简单的事情。")]),t._v(" "),e("h2",{attrs:{id:"_8-map-multimap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-map-multimap"}},[t._v("#")]),t._v(" 8 map/multimap")]),t._v(" "),e("p",[t._v("当我们给容器中插入元素的时候，容器内部实施了拷贝动作，将我们要插入的元素再另行拷贝一份放入到容器中，而不是将原数据元素直接放进容器中，也就是说我们提供的元素必须能够被拷贝。\nSTL容器都是值引用，在向容器中加入元素的时候，实际上是对元数据进行了一份拷贝，将拷贝的数据放入到容器中")]),t._v(" "),e("h2",{attrs:{id:"顺序容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#顺序容器"}},[t._v("#")]),t._v(" 顺序容器")]),t._v(" "),e("p",[t._v("vector\ndeque\nlist\nforward_list\narray\nstring")]),t._v(" "),e("h2",{attrs:{id:"容器适配器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器适配器"}},[t._v("#")]),t._v(" 容器适配器")]),t._v(" "),e("p",[t._v("queue\nstack")])])}),[],!1,null,null,null);a.default=r.exports}}]);