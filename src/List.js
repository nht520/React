import React, { Component } from 'react';
//引用todoitem
import ListUi from './ListUI'
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
        //订阅监听store的变化
        store.subscribe(this.hasChange);
    }
    render() {
        return (
            //listUi组件
            <ListUi
                inputValue={this.state.inputValue}
                list={this.state.list}
                hadonChange={this.hadonChange}
                addButtom={this.addButtom}
                delList={this.delList}
            />
        );
    }
    hadonChange = (e) => {
        const action = gethadonChange(e.target.value)
        store.dispatch(action);
    }
    // 增加list的item
    addButtom = () => {
        const action = getaddButtom();
        store.dispatch(action);
    }
    //删除list的item
    delList = (index) => {
        const action = getdelList(index)
        store.dispatch(action);
    }
    //监听 store的变化
    hasChange = () => {
        // console.log("store change")
        this.setState(store.getState());
    }
}

export default TodoList;
