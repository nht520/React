import React, {Component} from 'react'
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less'
import { Button,Flex,List } from 'antd-mobile';
class ListUI extends Component{
    render(){
        return(
            <div className='rjuq'>
                <Flex>
                    <Flex.Item>
                        <input
                            placeholder='todoinfo'
                            className='ninput'
                            value = {this.props.inputValue}
                            onChange={this.props.hadonChange}
                        />
                    </Flex.Item>
                    <Flex.Item>
                        <Button onClick={this.props.addButtom} className="button" type="primary" >添加</Button>
                    </Flex.Item>
                </Flex>
                <ul>
                    {/*list列表*/}
                    {this.props.list.map((item,index)=>{
                        return (
                            <Flex key={index}>
                                <Flex.Item>
                                    <List.Item >
                                        {item}
                                    </List.Item>
                                </Flex.Item>
                                <Flex.Item>
                                    <Button onClick={(index) => {this.props.delList(index)}} >删除</Button>
                                </Flex.Item>
                            </Flex>
                        )
                    })}

                </ul>
            </div>
        )
    }
}
export default ListUI;