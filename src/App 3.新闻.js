import React, { Component } from 'react'

/**
 *  获取新闻案例
 *  1.发送请求 axios fetch
 *  2. 拿数据 请求的回调方法中获取
 *  3. 针对组件化 组件的状态中
 *  4. 做展示
 *  
 */
// 1. 导入axios
import axios from 'axios'
export default class App extends Component {
  // 保存数据 初始化state
  state = {
    list:[]
  }
  // 挂载中发送数据
  componentDidMount(){
      const url = 'https://api.jiasiyuan.cn/news?page=1'
      // 1. 发送请求
      axios.get(url).then(res => {
        // 2. 拿数据
        console.log(res.data.result);
        // 3. 存本地
        // this.setState 是是react类组件中最常用的一个react API，使用它可以改变state从而改变页面
        this.setState({list:res.data.result})
      })
  }
  // 4. 做展示
     show(){
      return this.state.list.map((item,index)=>
         <div key={index} className="cell">
           <div>
             <img src={item.image}  />
           </div>
           <div>
             <div>{item.title}</div>
             <div>{item.passtime}</div>
           </div>
         </div>
       )
     }
    // show(){
    //   return this.state.list.map((item,index)=>(
    //     <div key={index} className="cell">
    //       {/* 左边的图片 */}
    //       <div>
    //         <img src={item.image} />
    //       </div>
    //       {/* 右边的描述 */}
    //       <div>
    //       <div>{item.title}</div>
    //       <div>{item.passtime}</div>
    //       </div>
    //     </div>
    //   ))
    // }
    
     // 渲染
  render(){
    return (
      <div>
        {this.show()}
      </div>
    )
  }
}
