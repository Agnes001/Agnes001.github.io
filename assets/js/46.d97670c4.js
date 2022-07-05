(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{418:function(e,n,t){"use strict";t.r(n);var a=t(46),s=Object(a.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"进程的概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程的概念"}},[e._v("#")]),e._v(" 进程的概念")]),e._v(" "),t("p",[e._v("进程是资源申请,高度和独立运行的单位,因此,它使用系统中的运行资源,而程序不能申请系统资源,不能被系统调度也不能作为独立运行的单位,因此它不占系统运行资源."),t("br"),e._v("\n进程组成:"),t("br"),e._v("\n<1> 操作系统用来管理进行的内核对象"),t("br"),e._v("\n内核对象也是系统用来存放关于进程的统计信息的地方.内核对象是操作系统内部分配的一个内存块,该内存块是一种数据结构,其成员负责维护该对象的各种信息."),t("br"),e._v("\n<2> 地址空间"),t("br"),e._v("\n它包含所有可执行模块或 DLL 模块的代码和数据.另外,它也包含动态内存分配的空间,例如线程的栈和堆分配空间"),t("br"),e._v("\n进程从来不执行任何东西,它只是纯种的容器,若要使进程完成某项操作,它必须拥有一个在它的环境中运行的纯种,此线程负责执行包含在进程的地址空间的中的代码.也就是,真正完成代码执行的是线程,而进程只是纯种的容器, 或者说是线程的执行环境。")]),e._v(" "),t("h2",{attrs:{id:"创建进程-createprocess-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建进程-createprocess-函数"}},[e._v("#")]),e._v(" 创建进程 CreateProcess 函数")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" CreateProcessW( \n    _In_opt_ LPCWSTR lpApplicationName,// 该字符串可以指定要执行的模块的完整路径 和文件名 \n    _Inout_opt_ LPWSTR lpCommandLine, //命令行 \n    _In_opt_ LPSECURITY_ATTRIBUTES lpProcessAttributes, //该 结构确定子进程是否可以继承返回到新进程对象的句柄。如果 lpProcessAttributes为NULL，则不能继承该句柄 \n    _In_opt_ LPSECURITY_ATTRIBUTES lpThreadAttributes, //该 结构确定子进程是否可以继承返回到新线程对象的句柄。如果 lpThreadAttributes为NULL，则不能继承该句柄 \n    _In_ BOOL bInheritHandles, //如果此参数为TRUE，则新进程将继承调用进程中的每个可继承句柄。如果参数为FALSE，则不会继承句柄。请注意，继承的句柄与原始句柄具有相同的值和访问权限 \n    _In_ DWORD dwCreationFlags,// 控制优先级类别和流程创建的标志 CREATE_NEW_CONSOLE \n    _In_opt_ LPVOID lpEnvironment,// 指向新进程的环境块的指针。如果此参数为NULL，则新进程将使用调用进程的环境 \n    _In_opt_ LPCWSTR lpCurrentDirectory,// 进程当前目录的完整路径 \n    _In_ LPSTARTUPINFOW lpStartupInfo, //设置扩展属性 \n    _Out_ LPPROCESS_INFORMATION lpProcessInformation // 该结构接收有关新进程的标识信息\n);\n")])])]),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//创建一个用谷歌浏览器打开百度 \n#include <windows.h> \n#include <stdio.h> \n#include <tchar.h> \nvoid RunExe() \n{ \n    STARTUPINFO strStartupInfo; \n    memset(&strStartupInfo, 0, sizeof(strStartupInfo)); \n    strStartupInfo.cb = sizeof(strStartupInfo); \n    PROCESS_INFORMATION szProcessInformation; \n    memset(&szProcessInformation, 0, sizeof(szProcessInformation)); \n    TCHAR szCommandLine[] =_T("\\"D:\\\\Program Files (x86)\\\\ChromeCore\\\\ChromeCore.exe\\" http://www.baidu.com/"); \n    int iRet = CreateProcess( NULL, szCommandLine, NULL, NULL, false, CREATE_NEW_CONSOLE, NULL, NULL, &strStartupInfo, &szProcessInformation ); \n    if (iRet) \n    { \n        //创建成功 \n        printf_s("Create Success iRet = %d\\n", iRet); \n        WaitForSingleObject(szProcessInformation.hProcess, 3000); \n        //close进程计数减一，进程结束后，进程计数再减一\n        CloseHandle(szProcessInformation.hProcess); \n        CloseHandle(szProcessInformation.hThread); \n        szProcessInformation.dwProcessId = 0; \n        szProcessInformation.dwThreadId = 0; \n        szProcessInformation.hThread = NULL; \n        szProcessInformation.hProcess = NULL; \n    }\n    else \n    { \n        printf_s("Create Success iRet = %d\\n", iRet); \n        printf_s("errorcode = %d\\n", GetLastError()); \n    } \n}\nint main() \n{\n    printf("This is Bingo\\n"); \n    RunExe(); \n    system("pause"); \n    return 0; \n}\n')])])]),t("h2",{attrs:{id:"进程间的通信方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程间的通信方式"}},[e._v("#")]),e._v(" 进程间的通信方式")]),e._v(" "),t("h3",{attrs:{id:"剪切板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#剪切板"}},[e._v("#")]),e._v(" 剪切板")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('void CClipboardDlg::OnBnClickedSendBtn() \n{\n    // 1 打开剪切板 \n    if (OpenClipboard()) \n    { \n        //2 清空剪切板 \n        EmptyClipboard(); \n        char* szSendBuf; \n        //3 获取编辑框的内容 \n        CStringW strSendW; \n        GetDlgItemText(IDC_EDIT_SEND, strSendW); \n        CStringA strSend = (CStringA)strSendW; \n        //4 分配一个内存对象，内存对象的句柄就是hClip \n        HANDLE hClip = GlobalAlloc(GMEM_MOVEABLE, strSend.GetLength() + 1); \n        //5 将剪切板句柄加锁 \n        szSendBuf = (char*)GlobalLock(hClip); \n        strcpy(szSendBuf, strSend); \n        TRACE("szSendBuf = %s", szSendBuf); \n        GlobalUnlock(hClip); \n        //6 将数据放入剪切板 \n        SetClipboardData(CF_TEXT, hClip); \n        //7 关闭剪切板 \n        CloseClipboard(); \n    } \n}\nvoid CClipboardDlg::OnBnClickedRecvBtn() \n{\n    if (OpenClipboard()) \n    { \n        //确认剪切板是否可用 \n        if (IsClipboardFormatAvailable(CF_TEXT)) \n        { \n            HANDLE hClip; \n            char* pBuf; \n            //向剪切板要数据 \n            hClip = GetClipboardData(CF_TEXT); \n            pBuf = (char*)GlobalLock(hClip);\n            USES_CONVERSION; \n            LPCWSTR strBuf = A2W(pBuf); \n            GlobalUnlock(hClip); \n            SetDlgItemText(IDC_EDIT_RECV, strBuf); \n        }\n        CloseClipboard(); \n    } \n}\n')])])]),t("h3",{attrs:{id:"wm-copydata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wm-copydata"}},[e._v("#")]),e._v(" WM_COPYDATA")]),e._v(" "),t("p",[e._v("WM_COPYDATA wParam传递数据的窗口的句柄。"),t("br"),e._v("\n指向 COPYDATASTRUCT 结构的指针，该结构包含要传递的数据。 如果接收方应用程序处理此消息，则应返回 TRUE；否则，应返回 FALSE。")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('//发送端 \nvoid CWMCOPYDATASENDDlg::OnBnClickedSend() \n{ \n    // 必须要知道标题 句柄 \n    CString strWindowTitle = _T("MFCRecv"); \n    CString strDataToSend = _T("Hello ,this is Bingo WM_COPYDATA"); \n    // 利用标题句柄 \n    HWND hRecvWnd = ::FindWindow(NULL, strWindowTitle.GetBuffer(0)); \n    if (hRecvWnd != NULL && ::IsWindow(hRecvWnd))\n    { \n        //数据的封装 \n        COPYDATASTRUCT cpd; \n        cpd.dwData = 0; \n        cpd.cbData = strDataToSend.GetLength() * sizeof(TCHAR); \n        cpd.lpData = (PVOID)strDataToSend.GetBuffer(0); ::SendMessage(hRecvWnd, WM_COPYDATA, (WPARAM)(AfxGetApp()- >m_pMainWnd),(LPARAM)&cpd); \n    }\n    strDataToSend.ReleaseBuffer();\n}\n')])])]),t("p",[e._v("接收端，界面上右击，点击类向导，消息-WM_COPYDATA，双击，转到其消息响应的函数中")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('BOOL CWMCOPYDATADlg::OnCopyData(CWnd* pWnd, COPYDATASTRUCT* pCopyDataStruct) \n{ \n    //消息响应函数 \n    //解析数据 \n    LPCTSTR szText = (LPCTSTR)(pCopyDataStruct->lpData); \n    DWORD dwLength = (DWORD)pCopyDataStruct->cbData; \n    TCHAR szRecvText[1024] = { 0 }; \n    memcpy(szRecvText, szText, dwLength); \n    MessageBox(szRecvText, _T("Bingo"), MB_OK); \n    return CDialogEx::OnCopyData(pWnd, pCopyDataStruct); \n}\n')])])]),t("h3",{attrs:{id:"油槽"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#油槽"}},[e._v("#")]),e._v(" 油槽")]),e._v(" "),t("p",[e._v("使用邮槽通信的进程分为服务端和客户端。邮槽由服务端创建，在创建时需要指定邮槽名，创建后服务端得到邮槽的句柄。在邮槽创建后，客户端可以通过邮槽名打开邮槽， 在获得句柄后可以向邮槽写入消息。"),t("br"),e._v("\n邮槽通信是单向的，只有服务端才能从邮槽中读取消息，客户端只能写入消息。消息是先入先出的。客户端先写入的消息在服务端先被读取。"),t("br"),e._v("\n通过邮槽通信的数据可以是任意格式的，但是一条消息不能大于 424 字节。"),t("br"),e._v("\n邮槽除了在本机内进行进程间通信外，在主机间也可以通信。但是在主机间进行邮槽通信，数据通过网络传播时使用的是数据报协议(UDP)，所以是一种不可靠的通信。通过网络进行邮槽通信时，客户端必须知道服务端的主机名或域名。")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 服务端\nvoid CChildView::OnSlot() { \n    // "\\\\\\\\.\\\\mailslot\\\\Mymailslot \\\\.\\mailslot\\Mymailslot \n    // 1 创建一个邮槽 \n    LPCTSTR szSlotName = TEXT("\\\\\\\\.\\\\mailslot\\\\Mymailslot");\n    HANDLE hSlot = CreateMailslot(szSlotName, \n    0, // no maximum message size \n    MAILSLOT_WAIT_FOREVER, // no time-out for operations NULL\n    ); // default security \n    if (hSlot == INVALID_HANDLE_VALUE) \n    {\n        TRACE("CreateMailslot failed with %d\\n", GetLastError()); \n        return ; \n    }\n    // 2 读取数据 \n    char szBuf[100] = { 0 }; \n    DWORD dwRead; \n    TRACE("Begin ReadFile"); \n    if (!ReadFile(hSlot, szBuf, 100, &dwRead, NULL)) \n    { \n        MessageBox(_T("读取数据失败")); \n        CloseHandle(hSlot); \n        return; \n    }\n    TRACE("End ReadFile"); \n    MessageBox((CStringW)szBuf); \n    CloseHandle(hSlot); \n}\n')])])]),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 客户端\nvoid CChildView::OnSend() \n{\n    // 创建一个文件句柄 \n    LPCTSTR szSlotName = TEXT("\\\\\\\\.\\\\mailslot\\\\Mymailslot"); \n    HANDLE hMailSlot = CreateFile(szSlotName, FILE_GENERIC_WRITE, FILE_SHARE_READ, NULL, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL,NULL \n    ); \n    if (hMailSlot == INVALID_HANDLE_VALUE) \n    { \n        TRACE("CreateFile failed with %d\\n", GetLastError()); \n        return; \n    }\n    //写入数据 \n    char szBuf[] = "Bingo is handsome"; \n    DWORD dwWrite; \n    if (!WriteFile(hMailSlot, szBuf, strlen(szBuf) + 1, &dwWrite, NULL)) \n    { \n        MessageBox(_T("写入数据失败")); C\n        loseHandle(hMailSlot);\n        return; \n    }\n    CloseHandle(hMailSlot); \n}\n')])])]),t("h3",{attrs:{id:"匿名管道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名管道"}},[e._v("#")]),e._v(" 匿名管道")]),e._v(" "),t("p",[e._v("匿名管道是一个没有命名的单向管道，本质上就是一个共享的内存区域。通常用来在父进程和子进程之间通信。只能实现本地两个进程之间的通信。不能实现网络通信。")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CreatePipe( \n    \n    _Out_ PHANDLE hReadPipe, //该变量接收管道的读取句柄 \n    _Out_ PHANDLE hWritePipe,// 该变量接收管道的写句柄 \n    _In_opt_ LPSECURITY_ATTRIBUTES lpPipeAttributes,//NULL \n    _In_ DWORD nSize //管道缓冲区的大小 0 :默认缓冲区大小 \n);\n")])])]),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 父进程\nHANDLE hReadPipe;\nHANDLE hWritePipe;\n// 创建子进程\nvoid CChildView::OnPipeCreate() \n{ \n    // TODO: 在此添加命令处理程序代码 \n    //创建匿名管道 \n    SECURITY_ATTRIBUTES sa; \n    sa.bInheritHandle = TRUE; \n    sa.lpSecurityDescriptor = NULL; \n    sa.nLength = sizeof(SECURITY_ATTRIBUTES); \n    if (!CreatePipe(&hReadPipe, &hWritePipe, &sa, 0)) \n    { \n        MessageBox(_T("匿名管道创建失败")); \n        return; \n    }\n    //创建子进程 \n    STARTUPINFO strStartupInfo; //用来指定新进程窗口如何显示 \n    memset(&strStartupInfo, 0, sizeof(strStartupInfo)); \n    strStartupInfo.cb = sizeof(strStartupInfo); \n    strStartupInfo.dwFlags = STARTF_USESTDHANDLES; \n    strStartupInfo.hStdInput = hReadPipe; \n    strStartupInfo.hStdOutput = hWritePipe; \n    strStartupInfo.hStdError = GetStdHandle(STD_ERROR_HANDLE); \n\n    PROCESS_INFORMATION szProcessInformation;\n    memset(&szProcessInformation, 0, sizeof(szProcessInformation)); \n    int iRet = CreateProcess( _T("MailSlotClient.exe"), NULL, NULL, NULL, TRUE, 0,NULL, NULL, &strStartupInfo, &szProcessInformation );\n    if (iRet) \n    { \n        //创建成功 \n        CloseHandle(szProcessInformation.hProcess); \n        CloseHandle(szProcessInformation.hThread); \n        szProcessInformation.dwProcessId = 0; \n        szProcessInformation.dwThreadId = 0; \n        szProcessInformation.hThread = NULL; \n        szProcessInformation.hProcess = NULL; \n    }\n    else \n    {\n        CloseHandle(hReadPipe); \n        CloseHandle(hWritePipe); \n        hReadPipe = NULL; \n        hWritePipe = NULL; \n        MessageBox(_T("创建子进程失败")); \n        return; \n    } \n}\n\nvoid CChildView::OnPipeRead() \n{ \n    char szBuf[100] = { 0 }; \n    DWORD dwRead; \n    TRACE("Begin ReadFile"); \n    if (!ReadFile(hReadPipe, szBuf, 100, &dwRead, NULL)) \n    { \n        MessageBox(_T("读取数据失败")); \n        return; \n    }\n    TRACE("End PipeReadFile"); \n    MessageBox((CStringW)szBuf);\n}\nvoid CChildView::OnPipeWrite() \n{\n    //写入数据 \n    char szBuf[] = "Bingo hen shuai"; \n    DWORD dwWrite; \n    if (!WriteFile(hWritePipe, szBuf, strlen(szBuf) + 1, &dwWrite, NULL)) \n    { \n        MessageBox(_T("写入数据失败")); \n        return; \n    } \n}\n')])])]),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 子进程\nhReadCliPipe =GetStdHandle(STD_INPUT_HANDLE); \nhWriteCliPipe = GetStdHandle(STD_OUTPUT_HANDLE); \nvoid CChildView::OnCliPipeRead() \n{ \n    char szBuf[100] = { 0 }; \n    DWORD dwRead; \n    TRACE("Begin ReadFile"); \n    //查找所有引用shift + alt + F \n    if (!ReadFile(hReadCliPipe, szBuf, 100, &dwRead, NULL)) \n    { \n        MessageBox(_T("读取数据失败")); \n        return; \n    }\n    TRACE("End PipeReadFile"); \n    MessageBox((CStringW)szBuf);\n}\n\nvoid CChildView::OnCliPipeWrite() \n{ \n    char szBuf[] = "Bingo Bingo"; \n    DWORD dwWrite; \n    if (!WriteFile(hWriteCliPipe, szBuf, strlen(szBuf) + 1, &dwWrite, NULL)) \n    { \n        MessageBox(_T("写入数据失败")); \n        CloseHandle(hWriteCliPipe); \n        return; \n    }\n    CloseHandle(hWriteCliPipe); \n}\n')])])]),t("h3",{attrs:{id:"命名管道"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名管道"}},[e._v("#")]),e._v(" 命名管道")]),e._v(" "),t("p",[e._v("与Socket相似，支持网络之间不同进程的通信")]),e._v(" "),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("CreateNamedPipe \nHANDLE CreateNamedPipeA( \n    LPCSTR lpName, // \\.\\pipe<i>pipename \n    DWORD dwOpenMode, \n    DWORD dwPipeMode, \n    DWORD nMaxInstances, \n    DWORD nOutBufferSize, \n    DWORD nInBufferSize,\n    DWORD nDefaultTimeOut, \n    LPSECURITY_ATTRIBUTES lpSecurityAttributes \n);\n等待连接 \nBOOL ConnectNamedPipe( \n    HANDLE hNamedPipe, \n    LPOVERLAPPED lpOverlapped \n);\n\nWaitNamedPipe(szNamedPipeName, NMPWAIT_WAIT_FOREVER)\n")])])]),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('HANDLE hNamedPipe;\n// 服务端\nvoid CChildView::OnCreateNamedPipe() \n{ \n    //1 创建一个命名管道 \n    LPCTSTR szPipeName = TEXT("\\\\\\\\.\\\\pipe\\\\mypipe"); \n    hNamedPipe = CreateNamedPipe(szPipeName,PIPE_ACCESS_DUPLEX | FILE_FLAG_OVERLAPPED, PIPE_TYPE_BYTE, 1, 1024, 1024, 0, NULL); \n    if (hNamedPipe == INVALID_HANDLE_VALUE) \n    { \n        TRACE("CreateNamedhPipe failed with %d\\n", GetLastError()); \n        MessageBox(_T("创建命名管道失败")); \n        return; \n    }\n    // 2 等待客户端的连接 \n    HANDLE hEvent = CreateEvent(NULL, TRUE, FALSE, NULL); \n    if (NULL == hEvent) \n    { \n        MessageBox(_T("创建事件失败")); \n        CloseHandle(hNamedPipe); hNamedPipe = NULL; \n        return; \n    }\n    OVERLAPPED ovlap; \n    ZeroMemory(&ovlap, sizeof(OVERLAPPED)); \n    ovlap.hEvent = hEvent; \n    //等待连接 \n    if (!ConnectNamedPipe(hNamedPipe, &ovlap)) \n    { \n        if (ERROR_IO_PENDING != GetLastError()) \n        { \n            MessageBox(_T("等待客户端连接失败")); \n            CloseHandle(hNamedPipe); \n            CloseHandle(hEvent); \n            hNamedPipe = NULL; \n            hEvent = NULL; \n            return; \n        } \n    }\n    if (WaitForSingleObject(hEvent,INFINITE) == WAIT_FAILED) \n    { \n        MessageBox(_T("等待对象失败")); \n        CloseHandle(hNamedPipe); \n        CloseHandle(hEvent); \n        hNamedPipe = NULL; \n        hEvent = NULL; return; \n    }\n}\n\nvoid CChildView::OnSreadNamedPipe() \n{ \n    char szBuf[100] = { 0 }; \n    DWORD dwRead; \n    if (!ReadFile(hNamedPipe, szBuf, 100, &dwRead, NULL)) \n    { \n        MessageBox(_T("读取数据失败")); \n        return; \n    }\n    MessageBox((CStringW)szBuf); \n}\n\nvoid CChildView::OnSwriteNamedpipe() \n{ \n    //写入数据 \n    char szBuf[] = "OnNamedPipe Server"; \n    DWORD dwWrite; \n    if (!WriteFile(hNamedPipe, szBuf, strlen(szBuf) + 1, &dwWrite, NULL)) \n    { \n        MessageBox(_T("写入数据失败")); \n        return; \n    }\n}\n')])])]),t("div",{staticClass:"language-c++ extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 客户端 连接命名管道\nvoid CChildView::OnConnectNamedPipe() \n{ \n    LPCTSTR szNamedPipeName = TEXT("\\\\\\\\.\\\\pipe\\\\mypipe"); \n    if (0 == WaitNamedPipe(szNamedPipeName, NMPWAIT_WAIT_FOREVER)) \n    { \n        MessageBox(_T("当前没有可以利用的管道")); \n        return; \n    }\n    hNamedPipe = CreateFile(szNamedPipeName, GENERIC_READ | GENERIC_WRITE, 0, NULL, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, NULL); \n    if (hNamedPipe == INVALID_HANDLE_VALUE) \n    { \n        TRACE("CreateFile failed with %d\\n",\n        GetLastError()); \n        MessageBox(_T("打开命名管道失败！")); \n        hNamedPipe = NULL; \n        return; \n    } \n}\n\nvoid CChildView::OnReadNamedPipe() \n{ \n    char szBuf[100] = { 0 }; \n    DWORD dwRead; \n    if (!ReadFile(hNamedPipe, szBuf, 100, &dwRead, NULL)) \n    { \n        MessageBox(_T("读取数据失败")); \n        return; \n    }\n    MessageBox((CStringW)szBuf); \n}\n\nvoid CChildView::OnWriteNamedPipe() \n{ \n    char szBuf[] = "NAMEDPIPE CLIENT"; \n    DWORD dwWrite; \n    if (!WriteFile(hNamedPipe, szBuf, strlen(szBuf) + 1, &dwWrite, NULL)) \n    { \n        MessageBox(_T("写入数据失败")); \n        CloseHandle(hWriteCliPipe); \n        return; \n    }\n    CloseHandle(hWriteCliPipe); \n}\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);