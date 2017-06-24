import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if(this.props.players.length === 0){
      return (
        <div>
          <h3>Add players to the list!</h3>
        </div>
      );
    } else {
      return this.props.players.map((player) => {
        return (
          <div>
            <Player key={player._id} player={player}/>
          </div>
        );
      });
    }
  }


  render() {
    return (
      <div>
        {this.renderPlayers()}
      </div>
    )
  }
}

PlayerList.PropTypes = {
  players: React.PropTypes.array.isRequired
}
