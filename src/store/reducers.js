//类似笔记本 存储内容 数据
//state 就是数据
const  defaultState = {
  inputValue:'I love You',
  oped:['11','22','33'],
}
//reducer 可以接受state,但是不能修改state

export default (state=defaultState,action) => {

    if(action.type === 'change_input_value'){
        const  newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        //给store返回给store
        return  newState;
    }
    // console.log(state,action)
    return state;


}