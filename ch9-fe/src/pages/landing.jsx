import { Component } from "react";

class Landing extends Component{

  goToGameDetail = () => {
    if (localStorage.getItem("jwt-token") !== null) {
      window.location.href = "/game";
    }else{
      alert('You have to login first')
    }}
  render(){    
    return (
      <div>
        <div className="container mt-5">
          <h1 className="bold">Game List</h1>
          <ul>
            <li>
              <button className="btn btn-warning" onClick={this.goToGameDetail}>Rock, Paper, Scissors</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Landing;
