

/** 记得安装axios 
 *  引入axios 
 *  发送请求 axios  fetch 
 *  拿到数据 请求的回调方法中获取
 *  保存数据 针对组件化 组件的状态中 vue:data  react:state
 *  做展示  vue {{}} 插值表达式 v-bind缩写:  v-on 缩写@  v-for"(item,index) in data.list" :key唯一值
 */
 import React, { Component } from 'react'
 import axios from 'axios'
 
 export default class App extends Component {
   // 初始化一个列表
   state = {
     list:[]
   }
   // 发送请求在挂载中
   componentDidMount(){
     const url = 'https://api.jiasiyuan.cn/news?page=1'
     //  1. 发送请求
     axios.get(url).then(res=>{
       // 2. 拿数据
       console.log(res.data.result);
       // 3.  保存数据 需要初始化一个state
       this.setState({list:res.data.result})
     })
   }
   // 4. 做展示 记得是在外部 和挂载是同级
   show(){
     return this.state.list.map((item,index)=>(
       <div key={index} className="cell">
         {/* 左边的图片 */}
         <div>
           <img src={item.image} />
         </div>
         {/* 右边的描述 */}
         <div>
         <div>{item.title}</div>
         <div>{item.passtime}</div>
         </div>
       </div>
     ))
   }
   render() {
     return (
       <div>{this.show()}</div>
     )
   }
 }