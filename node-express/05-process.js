// 1.资源： cpu 内存
// const fs = require('fs')
// Buffer.alloc(1000)
// console.log(process.memoryUsage());
// console.log(process.cpuUsage());

// 2.运行环境：运行目录，node环境，cpu架构，用户环境，系统平台

// console.log(process.cwd());
// console.log(process.version);
// console.log(process.versions);
// console.log(process.arch);
// process.env.NODE_ENV = JSON.stringify({
//     name: 'peter'
// })
// console.log(JSON.parse(process.env.NODE_ENV));

// console.log(process.env);
// console.log(process.env.PATH);
// console.log(process.env.HOME); //windows: USERPROFILE
// console.log(process.platform);

// 3.运行状态： 启动参数,PID,运行时间
// console.log(process.argv);
// console.log(process.argv0);
// console.log(process.pid); // ppid
// console.log(process.ppid); // ppid

setTimeout(() => {
    console.log(process.uptime());
}, 3000);