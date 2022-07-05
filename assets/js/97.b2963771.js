(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{456:function(t,a,s){"use strict";s.r(a);var n=s(46),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"在线安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在线安装"}},[t._v("#")]),t._v(" 在线安装")]),t._v(" "),s("h3",{attrs:{id:"安装anaconda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装anaconda"}},[t._v("#")]),t._v(" 安装anaconda")]),t._v(" "),s("p",[t._v("https://blog.csdn.net/weixin_41843918/article/details/85064395\n步骤：")]),t._v(" "),s("ol",[s("li",[t._v("wget https://repo.anaconda.com/archive/Anaconda3-2021.11-Linux-x86_64.sh")]),t._v(" "),s("li",[t._v("bash Anaconda3-5.0.0-Linux-x86_64.sh")]),t._v(" "),s("li",[t._v("修改配置文件 sudo vim /etc/profile   之后如果设置后台服务，可以不加\n行末添加 export PATH=/root/anaconda3/bin:$PATH")]),t._v(" "),s("li",[t._v("刷新配置使其生效 source /etc/profile")])]),t._v(" "),s("h3",{attrs:{id:"创建anaconda环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建anaconda环境"}},[t._v("#")]),t._v(" 创建anaconda环境")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("conda "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" list\nconda create -n googleModel "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("python")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.6")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只能安装3.6版本")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" activate "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入conda环境 出现(base)则说明安装成功")]),t._v("\nconda deactivate "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 退出conda环境")]),t._v("\nconda list "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看已安装的库")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装tensorflow")]),t._v("\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("  -i https://pypi.tuna.tsinghua.edu.cn/simple "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("tensorflow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.13")]),t._v(".1\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" matplotlib\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装flask")]),t._v("\npip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" flask  \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置默认anaconda虚拟环境，如果后台启动不需要")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" ~/ .bash_profile\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("source")]),t._v(" activate env-name\n")])])]),s("h3",{attrs:{id:"设置后台运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置后台运行"}},[t._v("#")]),t._v(" 设置后台运行")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vi object_detection.service")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Unit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Description")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Open OBJECT_DETECTION Control service.\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("After")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("network.target\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("User")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Group")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ExecStart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/anaconda3/envs/googleModel/bin/python /root/object_detection/test1.py\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WorkingDirectory")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/object_detection/\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("simple\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KillMode")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("control-group\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("Restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on-failure\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("RestartSec")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Install"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("WantedBy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("multi-user.target\n")])])]),s("p",[t._v("加入自启动服务")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" object_detection.service /usr/lib/systemd/system/\nsystemctl start object_detection "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动服务")]),t._v("\nsystemctl status object_detection "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看服务状态")]),t._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" object_detection "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 加入开机自启")]),t._v("\nsystemctl disable object_detection "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从开机自启服务中删除")]),t._v("\n")])])]),s("h2",{attrs:{id:"离线安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#离线安装"}},[t._v("#")]),t._v(" 离线安装")]),t._v(" "),s("p",[t._v("环境准备：\nAnaconda3-2021.11-Linux-x86_64.sh\ngoogleModel.tar.gz\nobject_detection.tar.gz")]),t._v(" "),s("h2",{attrs:{id:"记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#记录"}},[t._v("#")]),t._v(" 记录")]),t._v(" "),s("p",[t._v("后台启动，日志输出到垃圾箱\nnohup python -u main.py > log.out 2>&1 &")]),t._v(" "),s("p",[t._v("gcc+cmake")]),t._v(" "),s("p",[t._v("执行是出现ImportError CXXABI_1.3.8\nhttps://blog.csdn.net/qq_42078965/article/details/104360201")]),t._v(" "),s("p",[t._v("使用sudo yum install gcc-c++时会自动安装/升级gcc及其他依赖的包")]),t._v(" "),s("p",[t._v("yum install bison -y")]),t._v(" "),s("p",[t._v("make版本低\nhttps://blog.csdn.net/walykyy/article/details/121988788")]),t._v(" "),s("p",[t._v("Linux升级gcc到最新版本\nhttps://blog.csdn.net/qq_41054313/article/details/119453611")]),t._v(" "),s("p",[t._v("python web\nhttps://www.cnblogs.com/sss4/p/8097653.html")]),t._v(" "),s("p",[t._v("————————————————————————\nflask框架\n依赖Jinja模板引擎和Werkzeug(路由模块) WSGI套件。")]),t._v(" "),s("p",[t._v("web框架：稳定性和可扩展性强，降低开发难度，提高开发效率。\n创建flask的应用实例，"),s("strong",[t._v("name")]),t._v(" ，作用是为了确定资源所在的路径\nflask中定义路由是通过装饰器实现的\n@app.route('/'， methods=['GET', 'POST'])\nif __name == '"),s("strong",[t._v("main")]),t._v("':\napp.run()\n给路由传参\n<>定义动态路由参数\n@app.route('/order/<order_id>')\n访问优化\n"),s("a",{attrs:{href:"int:order_id"}},[t._v("int:order_id")])]),t._v(" "),s("p",[t._v("Jinja2模板引擎\n1.如何返回一个网页（模板）\n2.如何给模板填充数据\nstatic templates\nrender_template")])])}),[],!1,null,null,null);a.default=e.exports}}]);