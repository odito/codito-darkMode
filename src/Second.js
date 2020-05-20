import React, { Component } from 'react'

export default class Second extends Component {

state={
    setClass: JSON.parse(localStorage.getItem("Mode"))
}


handleChange = () => {

    if (JSON.parse(localStorage.getItem("Mode")) === true)
      this.setState({ setClass: false }, () => {
        localStorage.setItem("Mode", JSON.stringify(false));
      });
    else {
      this.setState({ setClass: true }, () => {
        localStorage.setItem("Mode", JSON.stringify(true));
      });
    }
  };










    render() {
        return (

<div className={this.state.setClass ?'dark-mode':'light-mode'}>
      
    <nav>
      <div className="toggle-container">
        {/* <button onClick={this.handleChange}>toggle mode</button> */}

        <div className="btn">
            <div className={this.state.setClass?'btnIcons newBtnIcons':'  btnIcons'} onClick={this.handleChange} >
                <i className="fas fa-moon"></i>
                <div className={this.state.setClass?'newBall ball':'  ball'}></div>
                <i className="fas fa-sun"></i>
                
            </div>
        </div>
      </div>

    </nav>
    <main>
  <h1>{this.setMode ?'Dark mode':'light-mode'}</h1>
      <h2 className={this.state.setClass ?'red':'light-mode'}>toggle to switch to see the changee</h2>
    </main>
    </div>
        )
    }
}
