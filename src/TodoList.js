import React, { Component,Fragment } from 'react';
//引用todoitem
import Axios from 'axios';
import Todoitem from './Todoitem'
import './App.css'
class TodoList extends Component {
    //构造函数 constructor 优先
    constructor(props){
        super(props)
        //当组件的 state 或者props 发生改变的时候  他的render会自动执行一次 页面就会重新渲染页面
        this.state = {
            inputValue:' ',
            list:[]
        }
        //点击事件中的bind(this)
        this.onChghd=this.onChghd.bind(this);
        this.Adddeta=this.Adddeta.bind(this);
        this.Deldeta=this.Deldeta.bind(this);
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input
                        id='insertArea'
                        className='input'
                        type="text"
                        value={this.state.inputValue}
                        onChange={this.onChghd}
                    />
                    <button onClick={this.Adddeta}>提交</button>
                    <ul>
                        { this.getTodoitem() }
                    </ul>
                </div>
            </Fragment>
        );
    }
    componentDidMount(){
        //数据请求
        Axios.get("/api/todolist",)
            .then(res => {
                console.log(res.data);
                this.setState(() => ({
                    list:[...res.data]
                }));
            })
            .catch(err => {
                 console.log(err
                 );
            })
    }
    getTodoitem () {
       return this.state.list.map((item,index) => {
            return(
                <div key ={index}>
                  <Todoitem  content={item} index={index}  Delitem={this.Deldeta}/>
                </div>
            )
        })
    }
    //获取vue改变的值
    onChghd (e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
        }))
    }
    //增加内容
    Adddeta (){
        this.setState(( prevState ) => ({
            list:[...prevState.list,prevState.inputValue],
            inputValue:''
        })
           //  ,() => {
           // console.log(this.ul.querySelectorAll('div').length)}
        );
    }
    //删除内容
    Deldeta (index){
        this.setState((prevState) =>{
            const list = [...prevState.list];
            list.splice(index,1);
            return {list}
        })

    }
}

export default TodoList;
