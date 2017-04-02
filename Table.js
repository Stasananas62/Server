import React, { Component } from 'react';
import './App.css';
import TableEn from './TableEn';
import TableRu from './TableRu';

class Table extends Component {

  constructor(){
    super();
    this.state = {
      username: "",
      password: "",
      language: "En",
      language: "Ru"
    }
  }

  activateLasersd () {
    console.log(this.state);
  }

handleName(event){
  this.setState({
    username: event.target.value
  });
}

handlePassword(event){
  this.setState({
    password: event.target.value
  });
}

changeLanguage(){
  let lang = null;
  if (this.state.language === "En"){
    lang = "Ru"
  }else{
    lang = "En"
  }
  this.setState({
    language: lang
  });
}

  render() {

let currentTable = null;
      if(this.state.language === 'En'){
        currentTable = (<TableEn
          username={this.state.username}
          password={this.state.password}
          handleName={this.handleName.bind(this)}
          handlePassword={this.handlePassword.bind(this)}
          activateLasersd={this.activateLasersd.bind(this)}/>)

      }else{
         currentTable = <TableRu
          username={this.state.username}
          password={this.state.password}
          nameHandler={this.handleName.bind(this)}
          passwordHandler={this.handlePassword.bind(this)}
          activateLasersd={this.activateLasersd.bind(this)}/>
      }


    return (
      <div className='fluid-grid'>
        <button onClick={this.changeLanguage.bind(this)}>Change language</button>
        {currentTable}

      </div>
    );
  }
}



export default Table;

/*
var buttonEn = document.getElementById('buttonEn');
buttonEn.addEventListener('click', function(){
    console.log();
});*/
/*
constructor(props) {
      super(props);
      this.state = {
        name
      };
}
$("#contenInput").text($(".mytext").attr("value"));*/
