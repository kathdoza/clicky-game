import React, { Component } from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import Nav from "./components/Nav/Nav";
import Wrapper from "./components/Wrapper/Wrapper";
import Container from "./components/Container";
import Row from "./components/Row";
import Column from "./components/Column";
import Description from "./components/Description/Description";
import friends from "./friends.json";
import "./App.css";

 const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class App extends Component {
  state = {
    friends,
    score: 0,
    topScore: 0,
    clicked: [],
  };

  handleClick = id => {
    if(this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({clicked: this.state.clicked.concat(id)});
    }
    else {
      alert("You lost");
      this.handleReset();
    }
  };

  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore === 12) {
      alert("You win!");
    }
    else if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    }
    this.handleShuffle();
  };

  handleShuffle = () => {
    var shuffled = shuffle(friends);
    this.setState({ friends: shuffled });
  };

  handleReset = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  };

  render() {
    return (
      <Wrapper>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore} />
        <Description />

        <Container>
          <Row>
            {this.state.friends.map(friend => (
              <Column size="md-3 sm-6">
                <FriendCard
                  key={friend.id}
                  handleClick={this.handleClick}
                  handleScore={this.handleScore}
                  handleReset={this.handleReset}
                  handleShuffle={this.handleShuffle}
                  id={friend.id}
                  image={friend.image}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Wrapper>
    )
  };
}

export default App;
