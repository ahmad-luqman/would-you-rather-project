import React, { Component } from 'react'

class ProgressBar extends Component {
  render() {
    return (
      <div className="progress-bar-control">
        <div className="filler" style={{width: `${this.props.percentage}%`}} />
      </div>
    )
  }
}

export default (ProgressBar)
