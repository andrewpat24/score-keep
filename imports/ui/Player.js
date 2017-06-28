import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class Player extends React.Component {
  render(){

      return (
          <div key={this.props.player._id} className="item">
            <p>
              {this.props.player.name} has a score of {this.props.player.score}
            </p>
            <div className="player__actions">
              <button className="button button--round" onClick={() => {
                Players.update(this.props.player._id, {
                  $inc: {score: 1}
                });
              }}>+1</button>

              <button className="button button--round" onClick={() => {
                Players.update(this.props.player._id, {
                  $inc: {score: -1}
                });
              }}>-1</button>

              <button className="button button--round" onClick={() => {
                Players.remove(this.props.player._id)
              }}>X</button>
            </div>
          </div>
      );

  }
}

Player.propTypes = {
  player: PropTypes.object.isRequired,
};
