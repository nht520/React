import React, {Component} from 'react'
// import propTypes from 'prop-types'
class Todoitem extends Component{
    //子组件修改父组件内容
    constructor (props){
        super(props);
        this.hadleclick = this.hadleclick.bind(this);
    }
    render() {
        const { content,test } = this.props;
        return(
            <div>
                <li onClick={this.hadleclick}>
                    {test}{content}
                </li>
            </div>
        )
    }
    hadleclick () {
        const {Delitem,index} = this.props;
        Delitem(index);
    }
}
// propTypes 限制要求父组件给子组件传递什么样的数据
// isRequired  要求必须传值
// Todoitem.propTypes = {
//     test:propTypes.string.isRequired,
//     content:propTypes.string,
//     Delitem:propTypes.func,
//     index:propTypes.number
// }
//如果父组件没有给子组件传值 defaultProps给test添加默认值
// Todoitem.defaultProps = {
//     test:"hello world"
// }
export default Todoitem