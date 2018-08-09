import React, { Component } from "react";
import { Link } from "react-router-dom";
// import API from '../utils/API';
import axios from "axios";

import API from "../utils/API";
import './leaders.css'
import ReactDOM from "react-dom";
// import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
// import { Card, Container, CardHeader, CardBody } from "reactstrap";
// import { Form, Popover, PopoverHeader, PopoverBody, FormGroup, Label, Button, Input } from "reactstrap";
import { Nav, NavItem, Table, NavLink } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
class LeaderBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scores: []
    };
  }
  getScores = () => {
    API.getScores().then(res => {
      // this.setState({
      //     scores: res.data
      // })
      console.log(res.data);
      var i = 1;
      var scores = res.data.map(score => (
        // console.log(score)

        <div className="scoreClass" id={score._id} key={score._id}>
              <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{i++}</th>
            <td>{score.player}</td>
            <td>{score.score}</td>
          </tr>
        </tbody>
      </Table>

          {/* <p>#{i}</p>
          <p>Player:{score.player}</p>
          <p>Score:{score.score}</p>
          {i++} */}
        </div>
      ));
      ReactDOM.render(scores, document.getElementById("scoreDiv"));
    });
  };
  componentDidMount() {
    this.getScores();
  }
  render() {
    return (
      <div id = "body">
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink >
              <Link to="/">Home</Link>

              </NavLink>
            </NavItem>
            <NavItem>
                <NavLink active>
              <Link to="/highScores" active>Leader Board</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <h1>You Made It!</h1>

        <div id="scoreDiv" />
      </div>
    );
  }
}

export default LeaderBoard;
