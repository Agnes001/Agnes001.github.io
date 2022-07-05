(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{461:function(n,t,a){"use strict";a.r(t);var e=a(46),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("ol",[a("li",[n._v("异常是一种程序控制机制，与函数机制独立和互补\n函数是一种以栈结构展开的上下函数衔接的程序控制系统,异常是另一种控制结构,它依附于栈结构,却可以同时设置多个异常类型作为网捕条件,从而以类型匹配在栈机制中跳跃回馈.")]),n._v(" "),a("li",[n._v("异常设计目的\n栈机制是一种高度节律性控制机制,面向对象编程却要求对象之间有方向、有目的的控制传动,从一开始，异常就是冲着改变程序控制结构，以适应面向对象程序更有效地工作这个主题，而不是仅为了进行错误处理。")])]),n._v(" "),a("h2",{attrs:{id:"_1-异常的基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-异常的基本语法"}},[n._v("#")]),n._v(" 1 异常的基本语法")]),n._v(" "),a("h2",{attrs:{id:"_1-1-抛掷异常的程序段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-抛掷异常的程序段"}},[n._v("#")]),n._v(" 1.1 抛掷异常的程序段")]),n._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("void Func(){\n    ...\n    throw 表达式;\n    ...\n}\n")])])]),a("h2",{attrs:{id:"_1-2-捕获并处理异常的程序段"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-捕获并处理异常的程序段"}},[n._v("#")]),n._v(" 1.2 捕获并处理异常的程序段")]),n._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("try{\n    复合语句\n}\ncatch(异常类型声明){\n\n}\ncatch(异常类型声明){\n\n}\n")])])]),a("p",[n._v("1） 若有异常则通过throw操作创建一个异常对象并抛掷。\n2） 将可能抛出异常的程序段嵌在try块之中。控制通过正常的顺序执行到达try语句，然后执行try块内的保护段。\n3） 如果在保护段执行期间没有引起异常，那么跟在try块后的catch子句就不执行。程序从try块后跟随的最后一个catch子句后面的语句继续执行下去。\n4） catch子句按其在try块后出现的顺序被检查。匹配的catch子句将捕获并处理异常（或继续抛掷异常）。\n5） 如果匹配的处理器未找到，则运行函数terminate将被自动调用，其缺省功能是调用abort终止程序。\n6） 处理不了的异常，可以在catch的最后一个分支，使用throw语法，向上扔。")]),n._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('#include <iostream>\nusing namespace std; \nint divide(int x, int y) \n{ \n    if (y == 0) \n    { \n        throw x; \n    } \n    return x/y; \n} \nint main(void) \n{ \n    try\n    { \n        cout << "8/2 = " << divide(8, 2) << endl; \n        cout << "10/0 = " << divide(10, 0) << endl; \n    } \n    catch(int e) \n    { \n        cout << "e" << " is divided by zero!" << endl; \n    } \n    catch(...) \n    { \n        cout << "未知异常" << endl; \n    } \n    return 0; \n} \n')])])]),a("h2",{attrs:{id:"_2-栈解旋"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-栈解旋"}},[n._v("#")]),n._v(" 2 栈解旋")]),n._v(" "),a("p",[n._v("异常被抛出后，从进入try块起，到异常被抛掷前，这期间在栈上的构造的所有对象，都会被自动析构。析构的顺序与构造的顺序相反。这一过程称为栈的解旋(unwinding)。")]),n._v(" "),a("div",{staticClass:"language-c++ extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('#include <iostream>\nusing namespace std; \nclass MyException {}; \nclass Test \n{ \npublic: \n    Test(int a=0, int b=0) \n    { \n        this->a = a; \n        this->b = b; \n        cout << "Test 构造函数执⾏" << "a:" << a << " b: " << b << endl; \n    } \n    void printT() \n    { \n        cout << "a:" << a << " b: " << b << endl; \n    } \n    ~Test() \n    { \n        cout << "Test 析构函数执⾏" << "a:" << a << " b: " << b << endl; \n    } \nprivate: \n    int a; \n    int b; \n}; \nvoid myFunc() throw (MyException) \n{ \n    Test t1; \n    Test t2; \n    cout << "定义了两个栈变量,异常抛出后测试栈变量的如何被析构" << endl; \n    throw MyException(); \n} \nint main(void) \n{ \n    //异常被抛出后，从进⼊try块起，到异常被抛掷前，这期间在栈上的构造的所有对象>，\n    //都会被⾃动析构。析构的顺序与构造的顺序相反。\n    //这⼀过程称为栈的解旋(unwinding)\n    try\n    { \n        myFunc(); \n    } \n    catch(MyException &e) \n    //catch(MyException ) //这⾥不能访问异常对象\n    { \n        cout << "接收到MyException类型异常" << endl; \n    } \n    catch(...) \n    { \n        cout << "未知类型异常" << endl; \n    } \n    return 0; \n} \n/*\nTest 构造函数执⾏a:0 b: 0\nTest 构造函数执⾏a:0 b: 0\n定义了两个栈变量,异常抛出后测试栈变量的如何被析构\nTest 析构函数执⾏a:0 b: 0\nTest 析构函数执⾏a:0 b: 0\n接收到MyException类型异常\n*/\n\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);