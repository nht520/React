import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELE_TODO_ITEM} from './actionTypes'
//使用actionCreator统一创建action
export const gethadonChange = (value) => ({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getaddButtom = () => ({
    type:ADD_TODO_ITEM
});
export const getdelList = (index) => ({
    type:DELE_TODO_ITEM,
    index
})