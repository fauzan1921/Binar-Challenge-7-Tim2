import { Component } from "react";

class Landing extends Component{

  goToGameDetail = () => {
    if (localStorage.getItem("jwt-token") !== null) {
      window.location.href = "/game";
    }else{
      alert('You have to login first')
    }}
  goToGameDetail2 = () => {
    if (localStorage.getItem("jwt-token") !== null) {
      window.location.href = "https://yandex.com/games/app/168468?utm_medium=search&utm_source=google&utm_campaign=en-tier2_games_general-igra_all_google_search%7C17880492419&utm_term=game%20online%20computer#app-id=168468&catalog-session-uid=catalog-72016e65-6e67-572d-9d17-fa0f1b5fc481-1667717673477-6605&rtx-reqid=8254028490464112489&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D";
    }else{
      alert('You have to login first')
    }}
  goToGameDetail3 = () => {
  if (localStorage.getItem("jwt-token") !== null) {
    window.location.href = "https://yandex.com/games/app/180094?utm_medium=search&utm_source=google&utm_campaign=en-tier2_games_general-igra_all_google_search%7C17880492419&utm_term=game%20online%20computer#app-id=180094&catalog-session-uid=catalog-72016e65-6e67-572d-9d17-fa0f1b5fc481-1667717673477-6605&rtx-reqid=8254028490464112489&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D"
  }else{
    alert('You have to login first')
  }}
  goToGameDetail4 = () => {
  if (localStorage.getItem("jwt-token") !== null) {
    window.location.href = "https://yandex.com/games/app/180094?utm_medium=search&utm_source=google&utm_campaign=en-tier2_games_general-igra_all_google_search%7C17880492419&utm_term=game%20online%20computer#app-id=180094&catalog-session-uid=catalog-72016e65-6e67-572d-9d17-fa0f1b5fc481-1667717673477-6605&rtx-reqid=8254028490464112489&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22common%22%7D"
  }else{
    alert('You have to login first')
  }}

  render(){    
    return (
      <div>
        <div className="container mt-5">
          <h1 className="bold mb-3">Game List</h1>
          <ul>
            <li>
              <button className="btn btn-warning mt-3" onClick={this.goToGameDetail}>Rock, Paper, Scissors</button>
            </li>
            <li>
              <button className="btn btn-warning mt-3" onClick={this.goToGameDetail2}>Draw the Bridge</button>
            </li>
            <li>
              <button className="btn btn-warning mt-3" onClick={this.goToGameDetail3}>2048</button>
            </li>
            <li>
              <button className="btn btn-warning mt-3" onClick={this.goToGameDetail4}>Basket Random</button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Landing;
