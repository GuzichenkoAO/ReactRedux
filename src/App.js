import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  addTrack() {
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  }

  render() {
    return (
      <div>
        <input type="text" ref={(input) => {
          this.trackInput = input
        }}/>
        <button onClick={this.addTrack.bind(this)}>Add track</button>
        <ul>
          {this.props.store.map((track, index) =>
            <li key={index}>{track}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    store: state
  }),
  dispatch => ({
    onAddTrack: (trackName) => {
      dispatch({type: 'ADD_TRACK', playload: trackName})
    }
  })
)(App);
