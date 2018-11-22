import React, { Component } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: white;
`

class Square extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      value: ''
    }
  }

  handleClick = () => {
    this.setState({value: 'X'})
    console.log(this.props.boardIndex)
  }

  render() {
    return (
      <Root onClick={this.handleClick}>
        { this.state.value }
      </Root>
    )
  }
}

export default Square;