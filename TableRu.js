import React, { Component } from 'react';
import './App.css';

class TableRu extends Component {

  activateLasers () {
    console.log("NameEn:" + (this.textInput.value),
    "Password:" + (this.textInputPorol.value));
  };
  render() {
    return (
      <div className='row'>
      <div className='col-sm-4'>
      <label htmlFor="nameEn">Имя:</label>
        <input id="nameEn" type="text" name="name" value={this.props.username} onChange={this.props.nameHandler}/>
        <p>Пороль:
        <strong></strong><input type="password" name="password" value={this.props.password} onChange={this.props.passwordHandler}/></p>

        <input id="buttonEn" type="submit" value="Отправить" onClick={this.props.activateLasersd}/>
      </div>
    </div>
  )
      }
}



export default TableRu;
