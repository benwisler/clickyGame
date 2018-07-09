import React from "react";
import "./Character/Character.css";
import Character from "./Character/Character";
import { Grid, Row, Col } from 'react-bootstrap';
const CharacterBox = props => (
    <Grid>
    <Row className="show-grid">
      <Col xs={6} md={4}>
        {props.characters
          .slice(0, 1)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      
      <Col xs={6} md={4}>
        {props.characters
          .slice(1, 2)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      <Col xs={6} md={4}>
        {props.characters
          .slice(2, 3)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      </Row>
      <Row className="show-grid">
      <Col xs={6} md={4}>
        {props.characters
          .slice(3, 4)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      
      <Col xs={6} md={4}>
        {props.characters
          .slice(4, 5)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      <Col xs={6} md={4}>
        {props.characters
          .slice(5, 6)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      </Row>
      <Row className="show-grid">
      <Col xs={6} md={4}>
        {props.characters
          .slice(6, 7)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      
      <Col xs={6} md={4}>
        {props.characters
          .slice(7, 8)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      <Col xs={6} md={4}>
        {props.characters
          .slice(8, 9)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      </Row>
      <Row className="show-grid">
      <Col xs={6} md={4}>
        {props.characters
          .slice(9, 10)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      
      <Col xs={6} md={4}>
        {props.characters
          .slice(10, 11)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      <Col xs={6} md={4}>
        {props.characters
          .slice(11, 12)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </Col>
      </Row>
      {/* <Row className="show-grid">
      <div className="col-sm-4" id="grid">
        {props.characters
          .slice(3, 6)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </div>
      </Row>
      <Row className="show-grid">
      <div className="col-sm-4" id="grid">
        {props.characters
          .slice(6, 9)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </div>
      </Row>
      <Row className="show-grid">
      <div className="col-sm-4" id="grid">
        {props.characters
          .slice(9, 12)
          .map((character, index) => (
            <Character
              index={index}
              character={character}
              checkCard={props.checkCard}
              key={character.name}
            />
          ))}
      </div>
      </Row> */}
    </Grid>
)

export default CharacterBox;
