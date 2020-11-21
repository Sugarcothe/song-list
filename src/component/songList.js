import React, { Component } from 'react'
import { connect } from 'react-redux';

class SongList extends Component {
  renderList() {
    return this.props.songs.map ((song) => {
        return (
          <div className="item" key={song.title}>
            <div className="align-right content">
              <button className='btn btn-primary btn-sm'>
                select
              </button>
            </div>
            <div className='content'>
              {song.title}
            </div>
          </div>
        );
    });
  }

  render() {
    return (
      <div>
        Songlist
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs};
}

export default connect(mapStateToProps)(SongList);
