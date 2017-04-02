import React, { Component, props } from 'react';
import './App.css';

class TableEn extends Component {


  render(){
    return (
      <div className='row'>
        <div className='col-sm-4'>
        <label htmlFor="nameEn">Name:</label>
          <input id="nameEn" type="text" name="name" value={this.props.username} onChange={this.props.handleName.bind(this)}/>
          <p>Password:
          <strong></strong><input type="password" name="password" value={this.props.password} onChange={this.props.handlePassword}/></p>

          <input id="buttonEn" type="submit" value="Submit" onClick={this.props.activateLasersd}/>
        </div>
      </div>
    )
  }

}


export default TableEn;
/*

static propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  handlePassword: PropTypes.func.isRequired,
}
*/
