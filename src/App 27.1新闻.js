/**
 *  获取新闻 做展示
 */

import React, { Component } from 'react'

import axios from 'axios'
import './css/index.css'
export default class App extends Component {
  // 初始化state
  state = {
    list:[]
  }
  // 挂载完毕
  componentDidMount(){
    // 1. 地址
    const url = "https://api.jiasiyuan.cn/news?page=1"
    // 1. 发送请求
    axios.get(url).then(res=>{
      // 2. 拿数据
      console.log(res);
      // 3. 存数据
      this.setState({list:res.data.result})
    })
  }
  // 4. 做展示
  show(){
    return this.state.list.map((item,index)=>{
      return <div key={index} className="container">
        <div>
          <img src={item.image}  />
        </div>
        <div>
          <div>{item.title}</div>
          <div>{item.passtime}</div>
        </div>
      </div>
    })
  }

  render() {
    return (
      <div>{this.show()}</div>
    )
  }
}
