import React, { Component } from "react";
import Card from "./../Card/Card";
import "./game.css";
import { Route, Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Form, FormGroup, Label, Input, Fade } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import API from "./../utils/API";
import LeaderBoard from "./../leaderBoard/leaderBoard";

const pictures = [
  {
    image: "http://www4.pictures.zimbio.com/mp/kHoyq4whJW6l.jpg",
    picked: false
  },
  {
    image:
      "https://media1.popsugar-assets.com/files/thumbor/MIhqjLVvGMVAFjYfVyw_fJIAZcc/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2012/10/41/4/192/1922283/2946d558095820ca_Lana/i/Lana-Kane-From-Archer.png",
    picked: false
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/archer/images/4/44/Cheryl_1.jpg/revision/latest?cb=20130221004653",
    picked: false
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/archer/images/5/5c/Epi-Pam.PNG/revision/latest?cb=20130406084428",
    picked: false
  },
  {
    image:
      "https://yt3.ggpht.com/a-/ACSszfEXDGGZoZZ9H-xSEASAKYORU62IjLvdx31w2A=s900-mo-c-c0xffffffff-rj-k-no",
    picked: false
  },
  {
    image:
      "https://imgix.ranker.com/user_node_img/2740/54785274/original/malory-archer-tv-characters-photo-u1?w=280&h=280&fit=crop&crop=faces&q=50&fmt=jpg",
    picked: false
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/archer/images/6/6a/CyrilDad.png/revision/latest?cb=20110405023434",
    picked: false
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/archer/images/b/bf/Gillette.png/revision/latest?cb=20110213013032",
    picked: false
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/archer/images/3/3b/Barry_Dillon.png/revision/latest?cb=20110208043626",
    picked: false
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/archer/images/e/e8/Ron.JPG/revision/latest?cb=20130210035643",
    picked: false
  },
  {
    image:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2015624/rs_560x415-150724154942-560-woodhouse-archer.jpg?fit=inside|900:auto&output-quality=90",
    picked: false
  },
  {
    image:
      "https://vignette.wikia.nocookie.net/archer/images/3/38/Katya.png/revision/latest?cb=20110415122500",
    picked: false
  }
];

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        score: 0,
        topScore: 0,
        modal: false,
        tempScore: 0,
        userName: "",
        fadeIn: true 

      },
      characters: this.shuffle(pictures),
      guessAccuracy: false
    };
    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggle.bind(this);

  }
  
  toggleFade() {
    this.setState({
        fadeIn: !this.state.fadeIn
    });
}

  toggle() {
    console.log(this.state.user.tempScore);
    this.setState({
      tempScore: this.state.tempScore,
      modal: !this.state.modal
    });
  }

  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  checkCard = key => {
    if (this.state.user.score === 0) {
      // alert("correct")
    }

    var card = this.state.characters.filter(e => e.image === key);
    for (var i = 0; i < 12; i++) {
      if (this.state.characters[i] === card[0] || i > 12) {
        var xi = i;
        break;
      }
    }

    if (this.state.characters[xi].picked === false) {
      if (this.state.user.score >= this.state.user.topScore) {
        this.setState({
          user: {
            // ...this.state.user,
            topScore: this.state.user.score + 1,
            score: this.state.user.score + 1,
            tempScore: this.state.user.score + 1,

            // tempScore: this.state.user.score + 1
          },
          guessAccuracy: true
        });
        this.setState({
          characters: this.shuffle(
            this.state.characters.map((character, current) => {
              return current === xi
                ? { ...character, picked: true }
                : character;
            })
          )
        })          
      } else {
        this.setState({
          user: {
            topScore: this.state.user.topScore,
            score: this.state.user.score + 1,
            tempScore: this.state.user.score + 1
          }
        });
        this.setState({
          characters: this.shuffle(
            this.state.characters.map((character, current) => {
              return current === xi
                ? { ...character, picked: true }
                : character;
            })
          )
        });
      }
    } else {
      var x = this.state.user.score;
      console.log(x);
      this.setState({
        user: {
          ...this.state.user,
          topScore: this.state.user.topScore,
          tempScore: this.state.user.tempScore,
          score: 0
        }
      });
      this.toggle();

      console.log(this.state.user.tempScore);
      this.setState({
        // tempScore: this.state.suser.tempScore,
        characters: this.shuffle(
          this.state.characters.map(character => {
            return { ...character, picked: false };
          })
        )
      });

      console.log(this.state);
    }
    console.log(this.state.user.score);
    console.log("!!" + this.state.user.topScore);
    if (this.state.guessAccuracy) {
      // alert("correct")
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      user: {
        [name]: value,
        tempScore: this.state.user.tempScore
      }
    });
    console.log(this.state.user.tempScore);
  };
  addScore = event => {
    event.preventDefault();
    console.log(this.state.user.score);
    this.setState({
      user: {
        ...this.state.user,
        userName: this.state.user.userName,
        tempScore: this.state.user.tempScore
      }
    });
    var newScore = {
      player: this.state.user.userName,
      score: this.state.user.tempScore
    };
    API.addScore(newScore).then(res => {
      console.log(res);
    });
    console.log(newScore);
    this.setState({
      user: {
        score: 0
      }
    });
    this.toggle();
  };

  render() {
    return (
      <div id="body">
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink active>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/highScores" active>
                  Leader Board
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <Route
          path="/highScores"
          component={LeaderBoard}
          onClick={this.hideGame}
        />

        {/* <Route path="/highScores" render={() => <LeaderBoard />} /> */}
        <div id="game">
          {/* <Button color="danger" onClick={this.toggle}>
            {this.props.buttonLabel}
          </Button> */}
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader toggle={this.toggle}>
              You Placed on the Leaderboard
            </ModalHeader>
            <ModalBody>
              <h1>Score: {this.state.user.tempScore}</h1>
              <Form>
                <FormGroup>
                  <Label for="userName">Your Name</Label>
                  <Input
                    name="userName"
                    id="userName"
                    onChange={this.handleInputChange}
                    value={this.state.user.userName}
                  />
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.addScore}>
                Add Score
              </Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <div />
        <div>
          {/* <Button color="primary" >
            Toggle Fade
          </Button> */}
          <Fade in={this.state.fadeIn} tag="h5" className="mt-3">
            <Card
              checkCard={this.checkCard}
              shuffle={this.shuffle}
              user={this.state.user}
              characters={this.state.characters}
              onClick={this.toggleFade}
            />{" "}
          </Fade>
        </div>
      </div>
    );
  }
}

export default Game;
