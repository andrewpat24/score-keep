import React from 'react';
import PropTypes from 'prop-types';



export default class TitleBar extends React.Component{
  renderSubtitle() {
    if(this.props.sub){
      return <h2>{this.props.sub}</h2>
    }
  }

  render() {
    return (
      <div>
        <h1> {this.props.title} </h1>
        {this.renderSubtitle()}
      </div>
    );
  }
}

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
};

TitleBar.defaultProps = {
  title: 'Default title'
}
