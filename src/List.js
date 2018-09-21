import React, { Component,Fragment } from 'react';
//引用todoitem
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import { Button,Flex,List } from 'antd-mobile';
import store from './store'
import { gethadonChange,getaddButtom,getdelList } from  './store/actionCreators'
import './App.css'
class TodoList extends Component {
    //构造函数 constructor 优先
    constructor(props){
        super(props);
        //从store里面获取数据
        this.state = store.getState();
        //当组件的 state 或者props 发生改变的时候  他的render会自动执行一次 页面就会重新渲染页面
        // console.log(store.getState())
        this.hadonChange=this.hadonChange.bind(this);
        this.addButtom=this.addButtom.bind(this);
        //订阅监听store的变化
        this.hasChange= this.hasChange.bind(this);
        store.subscribe(this.hasChange);
    }
    render() {
        return (
            <Fragment>
                <div className='rjuq'>
                    <Flex>
                        <Flex.Item>
                            <input
                                placeholder='todoinfo'
                                className='ninput'
                                value = {this.state.inputValue}
                                onChange={this.hadonChange}
                            />
                        </Flex.Item>
                        <Flex.Item>
                            <Button onClick={this.addButtom} className="button" type="primary" >添加</Button>
                        </Flex.Item>
                    </Flex>
                    <ul>
                        {/*list列表*/}
                        {this.state.list.map((item,index)=>{
                            return (
                                <Flex key={index}>
                                    <Flex.Item>
                                        <List.Item >
                                            {item}
                                        </List.Item>
                                    </Flex.Item>
                                    <Flex.Item>
                                        <Button onClick={this.delList.bind(this,index)} >删除</Button>
                                    </Flex.Item>
                                </Flex>
                            )
                        })}

                    </ul>
                </div>
            </Fragment>
        );
    }

    hadonChange (e) {
        const action = gethadonChange(e.target.value)
        store.dispatch(action);
    }
    // 增加list的item
    addButtom (){
        const action = getaddButtom();
        store.dispatch(action);
    }
    //删除list的item
    delList(index){
        const action = getdelList(index)
        store.dispatch(action);
    }
    //监听 store的变化
    hasChange () {
        // console.log("store change")
        this.setState(store.getState());
    }

}

export default TodoList;
