import React, { Component } from 'react';

class Piece extends Component {

  constructor(props) {
    super(props);
    this.state = {title: "", composer: ""}
  }

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 60 * 1000);
  }

  loadData() {
    const ApiHost = "https://now-playing-api.herokuapp.com/"
    const request = new XMLHttpRequest();
    request.open('GET', ApiHost + "api/" + this.props.source, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    //this callback gets called when the server responds to the ajax call            
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const returnedJson = JSON.parse(request.responseText);
        this.setState({
          title: returnedJson.title,
          composer: returnedJson.composer
        });
      }
    };   
    request.send();
  }

  render() {
    return (
      <div>
        <h2><a target="_blank" rel="noopener noreferrer" href={this.props.url}>{this.props.name}</a></h2>
        <p className="title">{this.state.title}</p>
        <p className="composer">{this.state.composer}</p>
      </div>
    );
  }
}

export default Piece;
