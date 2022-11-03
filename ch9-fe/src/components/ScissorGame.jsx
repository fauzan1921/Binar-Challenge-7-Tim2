import { Component } from "react";
import { Col, Row, Table } from 'react-bootstrap';

class ScissorGame extends Component {


    render(){
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
                        id="batuPlayer" 
                        onMouseEnter={this.props.handlingMouseEnter} 
                        onMouseLeave={this.props.handlingMouseLeave}
                        style={{backgroundColor: this.props.backgroundColor.batuPlayer}}
                        />
                        <img 
                        src={require("../assets/kertas.png")} 
                        alt="" 
                        class="kertas" 
                        id="kertasPlayer" 
                        onMouseEnter={this.props.handlingMouseEnter} 
                        onMouseLeave={this.props.handlingMouseLeave}
                        style={{backgroundColor: this.props.backgroundColor.kertasPlayer}}
                        />
                        <img 
                        src={require("../assets/gunting.png")} 
                        alt="" 
                        class="gunting" 
                        id="guntingPlayer" 
                        onMouseEnter={this.props.handlingMouseEnter} 
                        onMouseLeave={this.props.handlingMouseLeave}
                        style={{backgroundColor: this.props.backgroundColor.guntingPlayer}}
                        />
                    </div>
                    <div id="result-vs" class="result-vs">
                        <h1 class="vs-text" id="vs-text">VS</h1>
                    </div>
                    <div class="com">
                        <h1 class="content-text">COM</h1>
                        <img src={require("../assets/batu.png")} alt="" class="batu" id="batu-com"/>
                        <img src={require("../assets/kertas.png")} alt="" class="kertas" id="kertas-com"/>
                        <img src={require("../assets/gunting.png")} alt="" class="gunting" id="gunting-com"/>
                    </div>
                </div>
                <div class="refresh">
                    <a href="#"><img src={require("../assets/refresh.png")} alt="" class="refresh-bt"/></a>
                </div>
            </Col>
        )
    }
}

export default ScissorGame