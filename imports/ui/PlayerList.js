import React from 'react';
import Player from './Player';
import PropTypes from 'prop-types';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if(this.props.players.length === 0){
      return (
        <div className="item">
          <p className="item__message item__message--empty">Add players to the list</p>
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
