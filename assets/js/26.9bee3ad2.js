(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{488:function(n,t,o){"use strict";o.r(t);var e=o(46),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[o("h2",{attrs:{id:"std-chrono"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#std-chrono"}},[n._v("#")]),n._v(" std::chrono")]),n._v(" "),o("p",[n._v("chrono时间日期库主要包含了三种类型：时间间隔Duration、时钟Clocks和时间点Time point")]),n._v(" "),o("div",{staticClass:"language-c++ extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v('#include <iostream>\n#include <chrono>\n#include <thread>\nusing namespace std;\nint main(){\n    cout<<"sleep前"<<endl;\n    std::this_thread::sleep_for(std::chrono::milliseconds(3000));\n    cout<<"sleep后"<<endl;\n}\n')])])]),o("h3",{attrs:{id:"duration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[n._v("#")]),n._v(" Duration")]),n._v(" "),o("p",[n._v("duration表示一段时间间隔，用来记录时间长度，可以表示几秒钟、几分钟或者几个小时的时间间隔，duration的原型是：\ntemplate<class Rep, class Period = std::ratio<1>> class duration;\n第一个模板参数Rep是一个数值类型，表示时钟个数；第二个模板参数是一个默认模板参数std::ratio，它的原型是：\ntemplate<std::intmax_t Num, std::intmax_t Denom = 1> class ratio;\n它表示每个时钟周期的秒数，其中第一个模板参数Num代表分子，Denom代表分母，分母默认为1，ratio代表的是一个分子除以分母的分数值，比如ratio<2>代表一个时钟周期是两秒，ratio<60>代表了一分钟，ratio<60"),o("em",[n._v("60>代表一个小时，ratio<60")]),n._v("60*24>代表一天。而ratio<1, 1000>代表的则是1/1000秒即一毫秒，ratio<1, 1000000>代表一微秒，ratio<1, 1000000000>代表一纳秒。标准库为了方便使用，就定义了一些常用的时间间隔，如时、分、秒、毫秒、微秒和纳秒，在chrono命名空间下，它们的定义如下：\ntypedef duration <Rep, ratio<3600,1>> hours;\ntypedef duration <Rep, ratio<60,1>> minutes;\ntypedef duration <Rep, ratio<1,1>> seconds;\ntypedef duration <Rep, ratio<1,1000>> milliseconds;\ntypedef duration <Rep, ratio<1,1000000>> microseconds;\ntypedef duration <Rep, ratio<1,1000000000>> nanoseconds;\n　　通过定义这些常用的时间间隔类型，我们能方便的使用它们，比如线程的休眠：\nstd::this_thread::sleep_for(std::chrono::seconds(3)); //休眠三秒\nstd::this_thread::sleep_for(std::chrono:: milliseconds (100)); //休眠100毫秒")]),n._v(" "),o("h3",{attrs:{id:"time-point"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#time-point"}},[n._v("#")]),n._v(" Time point")]),n._v(" "),o("p",[n._v("time_point表示一个时间点，用来获取1970.1.1以来的秒数和当前的时间, 可以做一些时间的比较和算术运算，可以和ctime库结合起来显示时间。time_point必须要clock来计时，time_point有一个函数time_from_eproch()用来获得1970年1月1日到time_point时间经过的duration。下面的例子计算当前时间距离1970年1月一日有多少天：")]),n._v(" "),o("div",{staticClass:"language-c++ extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v('#include <ratio>\n#include <chrono>\nint main ()\n{\n  using namespace std::chrono;\n  typedef duration<int,std::ratio<60*60*24>> days_type;\n  time_point<system_clock,days_type> today = time_point_cast<days_type>(system_clock::now());\n  std::cout << today.time_since_epoch().count() << " days since epoch" << std::endl;\n  return 0;\n}\n')])])]),o("h3",{attrs:{id:"clocks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#clocks"}},[n._v("#")]),n._v(" Clocks")]),n._v(" "),o("p",[n._v("表示当前的系统时钟，内部有time_point, duration, Rep, Period等信息，它主要用来获取当前时间，以及实现time_t和time_point的相互转换。Clocks包含三种时钟：\nsystem_clock：从系统获取的时钟；\nsteady_clock：不能被修改的时钟；\nhigh_resolution_clock：高精度时钟，实际上是system_clock或者steady_clock的别名。\n可以通过now()来获取当前时间点：")]),n._v(" "),o("div",{staticClass:"language-c++ extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v('#include <iostream>\n#include <chrono>\nint main()\n{\nstd::chrono::steady_clock::time_point t1 = std::chrono::system_clock::now();\nstd::cout << "Hello World\\n";\nstd::chrono::steady_clock::time_point t2 = std::chrono:: system_clock::now();\nstd::cout << (t2-t1).count()<<” tick count”<<endl;\n}\n')])])]),o("p",[n._v("通过时钟获取两个时间点之相差多少个时钟周期，我们可以通过duration_cast将其转换为其它时钟周期的duration：\ncout << std::chrono::duration_cast"),o("a",{attrs:{href:"std::chrono::microseconds"}},[n._v("std::chrono::microseconds")]),n._v("( t2-t1 ).count() <<” microseconds”<< endl;\nsystem_clock的to_time_t方法可以将一个time_point转换为ctime，而from_time_t方法则是相反的，它将ctime转换为time_point：\nstd::time_t now_c = std::chrono::system_clock::to_time_t(time_point);\n可以利用high_resolution_clock来实现一个类似于boost.timer的定时器，这样的timer在测试性能时会经常用到，经常用它来测试函数耗时，可实现毫秒微秒级定时，它的基本用法是这样的：")]),n._v(" "),o("div",{staticClass:"language-c++ extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[n._v("#include<chrono>\nusingnamespace std;\nusingnamespace std::chrono;\nclass Timer\n{\npublic:\n    Timer() : m_begin(high_resolution_clock::now()) {}\n    void reset() { m_begin = high_resolution_clock::now(); }\n    //默认输出毫秒\n    int64_t elapsed() const\n    {\n        return duration_cast<chrono::milliseconds>(high_resolution_clock::now() - m_begin).count();\n    }\n    //微秒\n    int64_t elapsed_micro() const\n    {\n        return duration_cast<chrono::microseconds>(high_resolution_clock::now() - m_begin).count();\n    } \n    //纳秒\n    int64_t elapsed_nano() const\n    {\n        return duration_cast<chrono::nanoseconds>(high_resolution_clock::now() - m_begin).count();\n    }\n    //秒\n    int64_t elapsed_seconds() const\n    {\n        return duration_cast<chrono::seconds>(high_resolution_clock::now() - m_begin).count();\n    }\n    //分\n    int64_t elapsed_minutes() const\n    {\n        return duration_cast<chrono::minutes>(high_resolution_clock::now() - m_begin).count();\n    }\n    //时\n    int64_t elapsed_hours() const\n    {\n        return duration_cast<chrono::hours>(high_resolution_clock::now() - m_begin).count();\n    }\nprivate:\n    time_point<high_resolution_clock> m_begin;\n};\n//测试代码：\nvoid fun()\n{\n    cout<<”hello word”<<endl;\n}\nint main()\n{\n    Timer t; //开始计时\n    fun()\n    cout<<t.elapsed()<<endl; //打印fun函数耗时多少毫秒\n    cout<<t.elapsed_micro ()<<endl; //打印微秒\n    cout<<t.elapsed_nano ()<<endl; //打印纳秒\n    cout<<t.elapsed_seconds()<<endl; //打印秒\n    cout<<t.elapsed_minutes()<<endl; //打印分钟\n    cout<<t.elapsed_hours()<<endl; //打印小时\n}\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);