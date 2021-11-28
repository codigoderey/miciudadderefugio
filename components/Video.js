import React, { Component } from 'react';

export default class Video extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false
    }
  }

  openModal = () => {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <div className="video-one">
        <div className="video-container">
          <div className="block-title text-center">
            <span className="block-title__bubbles"></span>
            <p>Entrevista Aniversario 2019</p>
            <h3>Pastores<br />Norma y Omar Quiñones</h3>
          </div>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fmiciudadderefugio%2Fvideos%2F785889448533332%2F&show_text=true&width=560" width="560" height="429" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
        </div>
      </div>


    )
  }
}