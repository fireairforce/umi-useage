import React, { Fragment } from 'react';
import {Button} from 'antd';
import {connect} from 'dva'; 

class Main extends React.Component{
    state={
        list:[1,2,3]
    }
    handleClick = () => {
      this.props.dispatch({
          type:'test/exam',
          payload:this.state.list
      })  
    }
    render(){
        console.log(this.props.test.value);
        return(
            <Fragment>
                <Button onClick={this.handleClick}>Click it</Button>
            </Fragment>
        )
    }
}
export default connect(({test}) => ({test}))(Main);
