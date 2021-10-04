import React from "react";
import Paper from "@material-ui/core/Paper";
import "github-markdown-css";
import { Component } from "react";
import Image from "../images/MoneyHeist.jpg"
import Parser from 'html-react-parser';
const style = { marginLeft: 1, };

class Song3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        songData: '',
    };
};


  getLyrics() {
    fetch('http://localhost:5000/Song/BellaCiao',{
      headers: {
        'Content-Type': 'application/html',
      }
    })
    .then(response => response.text())
    .then(data => this.setState({
      songData: data
    }));
  }
  
  
  render(){
   
  return (
    <Paper>
    <h1>Bella Ciao Lyrics</h1>
      <div class="main">
      <div class="songs" id="first">

      <div id="accordion">
        <div class="card-header" id="headingOne" class="main_container">
          <div class="grid-child-0">
            <img src={Image} width="300" height="300"/>
          </div>
          <h5 class="mb-0">
            <div class="songs">
              <div class="bsong" class="grid-container">
                <div class="grid-child-1">
                  <button
                    className="btn btn-danger"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                    onClick={this.getLyrics.bind(this)}
                  >
                    <i>See Lyrics</i>
                  </button>
                </div>
              </div>
            </div>
          </h5>
        </div>
        <div
          id="collapseOne"
          class="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div class="card-body" class="lyrics">
          {Parser(this.state.songData)}
          </div>
        </div>
      </div>
    </div>  </div>  
    </Paper>
  );
  }
};
export default Song3;
