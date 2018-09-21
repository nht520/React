import React, { Component,Fragment } from 'react';
//引用todoitem
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import { Button,Flex,List } from 'antd-mobile';
import store from './store'
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
        //
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
                                placeholder='to doinfo'
                                className='ninput'
                                value = {this.state.inputValue}
                                onChange={this.hadonChange}
                            />
                        </Flex.Item>
                    </Flex>
                    <Flex>
                        <Flex.Item>
                            <Button onClick={this.addButtom} className="button" type="primary" >提交</Button>
                        </Flex.Item>
                    </Flex>
                    <ul>
                        {/*list列表*/}
                        <List renderHeader={()=>'我是标题'}>
                            {this.state.list.map(v=>{
                                return (
                                    <List.Item key={v}>
                                        {v}
                                    </List.Item>
                                )
                            })}
                        </List>
                    </ul>
                </div>
            </Fragment>
        );
    }

    hadonChange (e) {
        const action = {
            //帮我改变vue的值
            type:'change_input_value',
            value:e.target.value
        }
        store.dispatch(action);
       // console.log(e.target.value)
    }

    hasChange () {
        // console.log("store change")
        this.setState(store.getState());
    }

    addButtom (){
        const action = {
            //帮我改变vue的值
            type:'add_todo_item',
        }
        store.dispatch(action);
    //    成功了
    }

}

export default TodoList;
