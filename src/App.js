import React, { Component } from 'react';
import './App.css';



export default class App extends Component {


state={

mode: JSON.parse(localStorage.getItem("Mode")),


}


// light-dark mode
handleMode=()=>{
  if(JSON.parse(localStorage.getItem("Mode")) ===true){

    this.setState({mode:false}, ()=>{
      localStorage.setItem("Mode", JSON.stringify(false));
    })

  }
 
  else{
    this.setState({mode:true}, ()=>{
      localStorage.setItem("Mode", JSON.stringify(true));
    })
  }
}



  render() {
    return (
      <div>
        <nav className={this.state.mode ?"newNav":""}>
       
          {/* btn mode */}
          <div className="btnMode" >
             <div className={this.state.mode?"btnIcons newBtnIcons":"btnIcons"} onClick={this.handleMode}>
              <i className="fas fa-moon"></i>
              <div className={this.state.mode? "newCircle circle":"circle"}></div>
              <i className="fas fa-sun"></i>

            </div>
          </div>
          {/* end of btn mode */}
         
         
        </nav>
        
        <div className={this.state.mode ? "newHeader header":"header"}>
          
          <div className={this.state.mode ?"newTexts texts":'texts'}>
        
          <h1>Hello i am Codito</h1>
           <h2 className={this.state.mode?"newH2":"h2"}>I like web development</h2>
           <p>This is a tutorial in react for light-dark mode. I use localstorage in order to keep permanantly the changes. Push the button and see the changes! <b className={this.state.mode?"newSubscribe":"subscribe"}> Subscribe and like for more...cool things that are coming</b>.</p>
          </div>
     
        </div>
      
      </div>
    )
  }
}
