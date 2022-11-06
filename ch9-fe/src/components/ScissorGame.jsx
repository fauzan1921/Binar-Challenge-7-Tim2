import { Component } from "react";
import { Col, Row, Table } from 'react-bootstrap';

class ScissorGame extends Component {


    render(){
        console.log(this.props.result)
        return(
            <Col sm={8} className="game-main">
                <div class="header">
                    <a href="/" class="back-bt"> Back </a>
                    <img src={require("../assets/logo 1.png")} alt="" class="logo" />
                    <h1 class="header-text">ROCK PAPER SCISSORS</h1>
                </div>
                <div class="content">
                    <div class="player">
                        <h1 class="content-text">PLAYER 1</h1>
                        <img 
                        src={require("../assets/batu.png")} 
                        alt="" 
                        class="batu" 
                        id="batu" 
                        onMouseEnter={this.props.isCLick ? () => {} : this.props.handlingMouseEnter} 
                        onMouseLeave={this.props.isCLick ? () => {} : this.props.handlingMouseLeave}
                        onClick={this.props.isCLick ? () => {} : this.props.handlingOnClick}
                        style={{backgroundColor: [this.props.playerBackgroundColor.batu ? '#C4C4C4' : '#9C835F']}}
                        />
                        <img 
                        src={require("../assets/kertas.png")} 
                        alt="" 
                        class="kertas" 
                        id="kertas" 
                        onMouseEnter={this.props.isCLick ? () => {} : this.props.handlingMouseEnter} 
                        onMouseLeave={this.props.isCLick ? () => {} : this.props.handlingMouseLeave}
                        onClick={this.props.isCLick ? () => {} : this.props.handlingOnClick}
                        style={{backgroundColor: [this.props.playerBackgroundColor.kertas ? '#C4C4C4' : '#9C835F']}}
                        />
                        <img 
                        src={require("../assets/gunting.png")} 
                        alt="" 
                        class="gunting" 
                        id="gunting" 
                        onMouseEnter={this.props.isCLick ? () => {} : this.props.handlingMouseEnter} 
                        onMouseLeave={this.props.isCLick ? () => {} : this.props.handlingMouseLeave}
                        onClick={this.props.isCLick ? () => {} : this.props.handlingOnClick}
                        style={{backgroundColor: [this.props.playerBackgroundColor.gunting ? '#C4C4C4' : '#9C835F']}}
                        />
                    </div>
                    <div id="result-vs" class="result-vs">
                        <h1 class="vs-text" id="vs-text">{this.props.result}</h1>
                    </div>
                    <div class="com">
                        <h1 class="content-text">COM</h1>
                        <img 
                        src={require("../assets/batu.png")} 
                        alt="" 
                        class="batu" 
                        id="batu"
                        style={{backgroundColor: [this.props.comBackgroundColor.batu ? '#C4C4C4' : '#9C835F']}}
                        />
                        <img 
                        src={require("../assets/kertas.png")} 
                        alt="" 
                        class="kertas" 
                        id="kertas"
                        style={{backgroundColor: [this.props.comBackgroundColor.kertas ? '#C4C4C4' : '#9C835F']}}
                        />
                        <img 
                        src={require("../assets/gunting.png")} 
                        alt="" 
                        class="gunting" 
                        id="gunting"
                        style={{backgroundColor: [this.props.comBackgroundColor.gunting ? '#C4C4C4' : '#9C835F']}}
                        />
                    </div>
                </div>
                <div class="refresh">
                    <a href="/game"><img src={require("../assets/refresh.png")} alt="" class="refresh-bt"/></a>
                </div>
            </Col>
        )
    }
}

export default ScissorGame