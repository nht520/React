//类似笔记本 存储内容 数据
//state 就是数据
const  defaultState = {
  inputValue:'',
  list:[],
}
//reducer 可以接受state,但是不能修改state

export default (state=defaultState, action) => {
    //获取input的值
    if(action.type === 'change_input_value'){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        //给store返回给store
        return  newState;
    }
    //增加数据
    if(action.type === 'add_todo_item'){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue='';
        return  newState;
    }
    //删除数据
    if(action.type === 'dele_todo_item'){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return  newState;
    }

    // console.log(state,action)
    return state;


}