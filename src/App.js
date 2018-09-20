import React, { Component,Fragment } from 'react';
import './App.css';
import { CSSTransition,TransitionGroup  } from 'react-transition-group';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        list:[]
    }
    this.handtog = this.handtog.bind(this);
  }
  render() {
    return (
      <Fragment>
          <TransitionGroup>
              { this.state.list.map((item,index) => {
                  return(
                      <CSSTransition
                          key={index}
                          timeout={1000}
                          classNames='fade'
                          unmountOnExit
                          onEntered={(el) =>{el.style.color='red'}}
                          oppear='true'
                      >
                         <div>{item}</div>
                      </CSSTransition>
                  )
              })
              }
          </TransitionGroup>
          <button onClick={this.handtog}>提交</button>
      </Fragment>
    );
  }
//  点击事件
//
  handtog (){
    this.setState((prevState) => {
        return{
            list:[...prevState.list,'item']
        }
    })
  }

}

export default App;
