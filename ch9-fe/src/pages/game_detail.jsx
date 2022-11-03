import { Component } from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import GameLeaderboard from '../components/GameLeaderboard';
import ScissorGame from '../components/ScissorGame';
import '../css/game_detail.css';


class Game extends Component {

    state = {
        backgroundColor : {
            kertasPlayer : '',
            batuPlayer : '',
            guntingPlayer : ''
        }

    }


    handlingMouseEnter = (event) => {
        this.setState({
            backgroundColor : { [event.target.id] : '#C4C4C4' }
        })
    }

    handlingMouseLeave = (event) => {
        this.setState({
            backgroundColor : { [event.target.id] : '#9C835F' }
        })
    }

    render(){
        return(
            <div className='game-detail'>
                <Row>
                    <ScissorGame 
                    handlingMouseEnter={this.handlingMouseEnter} 
                    handlingMouseLeave={this.handlingMouseLeave}
                    backgroundColor={this.state.backgroundColor}
                    />
                    <GameLeaderboard />
                </Row>
                
            </div>
        )
    }
}

export default Game