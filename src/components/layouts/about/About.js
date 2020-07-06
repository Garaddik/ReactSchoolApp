import React, { Component } from 'react'
import './About.css'
import picture from './three_people.png'
import { Container } from 'semantic-ui-react'

class About extends Component {
  render() {
    return (
      <div className="about-body">
       <h1 className="ui center aligned header">WELCOME
          <div className="sub header">We're Taantrix, a creative company that 
          loves to learn, collaborate and create.</div>
       </h1>
       <img className="ui medium centered image" alt=""src={picture}/>
       <Container text>
        <p>
            Hi! We are a company with a passion for creativity — 
            creativity makes us happy. We truly believe in transforming the way we communicate and bridging the communication gap
            in our day today life and design the ability to simplify communications, elevate experiences, engage and make life simple
            and easy. Good design and good relationships come from collaboration. We're excited 
            to start a visual dialogue, learn about you, and make something beautiful together.
        </p>
       </Container>
      </div>
    );
  }
}

export default About;
