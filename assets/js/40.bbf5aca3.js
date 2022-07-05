(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{463:function(t,a,n){"use strict";n.r(a);var s=n(46),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"_1-static-cast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-static-cast"}},[t._v("#")]),t._v(" 1 static_cast")]),t._v(" "),n("p",[t._v("静态类型转换")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('#include\t<iostream>\nusing namespace\tstd;\t\nint\tmain(void)\t\n{\t\n\tdouble dPi = 3.1415926;\t\n\tint num1 = (int)dPi;\t//c语⾔的 旧式类型转换\n\tint num2 = dPi;\t\t\t//隐式类型转换\n\t//静态的类型转换:\t\t\n\t//在编译的时 进⾏基本类型的转换 能替代c⻛格的类型转换 可以进⾏⼀部分检查\n\tint num3 = static_cast<int>(dPi);\t//c++的新式的类型转换运算符\t\t\n\tcout <<\t"num1:"\t<< num1 << " num2:"\t<< num2 << " num3:"\t<< num3 << endl;\t\n\treturn 0;\t\n}\n')])])]),n("h2",{attrs:{id:"_2-reinterpreter-cast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-reinterpreter-cast"}},[t._v("#")]),t._v(" 2 reinterpreter_cast")]),t._v(" "),n("p",[t._v("interpret 是解释的意思,reinterpret 即为重新解释,此标识符的意思即为数据的二进制形式重新解释,但是不改变其值\n相当于是强制类型转换。")]),t._v(" "),n("h2",{attrs:{id:"_3-dynamic-cast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-dynamic-cast"}},[t._v("#")]),t._v(" 3 dynamic_cast")]),t._v(" "),n("p",[t._v("父类指针转换为子类指针")]),t._v(" "),n("h2",{attrs:{id:"_4-const-cast"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-const-cast"}},[t._v("#")]),t._v(" 4 const_cast")]),t._v(" "),n("p",[t._v("const_cast<目标类型> (标识符)\n去掉const属性，目标类类型只能是指针或引用。")]),t._v(" "),n("div",{staticClass:"language-c++ extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("#include <iostream>\nusing namespace\tstd;\t\nstruct A{int data;};\t\nint\tmain(void)\t\n{\t\n\tconst A a = {200};\t\n\tA a1 = const_cast<A>(a);//err,invalid use of const_cast, which is not a pointer, reference, nor a pointer-to-data-member type\n\ta1.data\t= 300;\t\n\tA &a2 = const_cast<A&>(a);\t\n\ta2.data\t= 300;\t\n\tcout<<a.data<<a2.data<<endl;\t\n\tA *a3 =\tconst_cast<A*>(&a);\t\n\ta3->data = 400;\t\n\tcout<<a.data<<a3->data<<endl;\t\n\tconst int x\t= 3;\t\n\tint\t&x1\t= const_cast<int&>(x);\t\n\tx1 = 300;\t\n\tcout<<x<<x1<<endl;\t\n\tint\t*x2\t= const_cast<int*>(&x);\t\n\t*x2\t= 400;\t\n\tcout<<x<<*x2<<endl;\t\n\treturn 0;\t\n}\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);