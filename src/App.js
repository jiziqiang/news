/**
 *  获取新闻 做展示 
 *  1. 发送请求
 *  2. 拿数据 
 *  3. 存数据
 *  4. 做展示
 */
import axios from 'axios'
import React, { Component } from 'react'
// 导入样式
import './css/index.css'
// 导入axios
export default class App extends Component {
  // 初始化
  state ={
    list:[]
  }
  // 1.发送请求
  componentDidMount(){
    axios.get('https://api.jiasiyuan.cn/news?page=1').then((res) =>{
      // 2. 拿数据
      console.log(res);
      // 3. 存数据
      this.setState({list:res.data.result})
    })
  }
  // 4. 做展示
  show = () =>{
    return this.state.list.map((item,index) =>{
      return <div key={index} className="container">
        <div><img src={item.image} alt="" /></div>
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
