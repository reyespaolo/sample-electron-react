import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Button} from 'primereact/components/button/Button';
import Aux from '../../hoc/Aux';
//Functional Components
class sampleComponent extends Component{

  constructor(props){
    super(props);
    this.inputElement = React.createRef();
  }

  componentDidMount(){
      this.inputElement.current.focus();
  }

  render(){
    return(
      <Aux>
        <p>Sample Component</p>
        <input ref={this.inputElement}/>
        <Button  label={this.props.sampleProp}/>
      </Aux>
    );
  }

}

sampleComponent.propTypes = {
  sampleProp:PropTypes.string
}
export default sampleComponent;
