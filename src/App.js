import React,{Component} from 'react';
import Home from './pages/Home';
import './css/index.scss';
import { Button } from 'antd';
import ReactECharts from 'echarts-for-react'

class App extends Component{
    getOptions = () => {
        return {
            title:{
                text:'用户骑行订单'
              },
              tooltip:{   //展示数据
                trigger:'axis'
              },
              xAxis:{
                data:['周一','周二','周三','周四','周五','周六','周日']
              },
              yAxis:{
                type:'value'
              },
              series:[
                {
                  name:'订单量',
                  type:'bar',
                  data:[1000,2000,1500,3000,2000,1200,800]
                }
            ]
        }
    }
    render(){
        return (
            <div>
                App
                <Button type='primary'>gigi</Button>
                <ReactECharts option={this.getOptions()}/>
            </div>
        )
    }
}
export default App