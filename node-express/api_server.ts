// 需求：希望有一个服务，可以依据请求的接口内容返回相应的数据

// const express = require('express')
import express from 'express'
import { DataStore } from './data' 
const app = express()
console.log(__filename);
console.log(__dirname);
console.log(this  == global);
(function () {
    // console.log(this);
    // console.log(this == global); // true
})()



app.get('/', (req, res) => {
    // res.end('123')
    // res.send('456')
    res.json(DataStore.List)
})

app.listen(7200, () => {
    console.log('服务已经开启了');
})