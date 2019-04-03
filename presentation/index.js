// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Quote,
  Slide,
  Text
} from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: 'white',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transition={['zoom', 'slide']}
        transitionDuration={500}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={4} textColor="secondary">
            Functional Programming
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              Background and basic skills
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why FP is important
          </Heading>
          <List>
            <Appear>
              <ListItem>A new technology trend</ListItem>
            </Appear>
            <Appear>
              <ListItem>A candidate's skill</ListItem>
            </Appear>
            <Appear>
              <ListItem>Help our development (React, JS)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Understand functional programmer</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Procedural Programming and OO (opposite side of FP)
          </Heading>
          <List>
            <Appear>
              <ListItem>Invented by Engineers</ListItem>
            </Appear>
            <Appear>
              <ListItem>Bridge between English and machine</ListItem>
            </Appear>
            <Appear>
              <ListItem>Encourage programmers to known computer</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Have not thought about artificial intelligence
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Functional Programming and logical programming
          </Heading>
          <List>
            <Appear>
              <ListItem>Invented by mathmaticians and AI researchers</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Bridge between mathmaticial formula and machine
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Do not care about computer(utopia)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Believes in computer will be intelligent</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why FP is different from PP
          </Heading>
          <List>
            <Appear>
              <ListItem>Function means 'mathmaticial function'</ListItem>
            </Appear>
            <Appear>
              <ListItem>Side effects(?) please ignore it</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Lambda calculas
                <Text size={3} textColor="tertiary">
                  [x + y]([2y])(1) = [2y + y](1) = 3
                </Text>
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            More about Lambda Calculas [x + y]
          </Heading>
          <List>
            <Appear>
              <ListItem>Assume you have a function [x + y]</ListItem>
            </Appear>
            <Appear>
              <ListItem>Given x=2y you get [2y + y] = 3y</ListItem>
            </Appear>
            <Appear>
              <ListItem>Given y=1 you get 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Sum up [x + y]([2y])(1) = [2y + y](1) = 3</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Until 2009 what does PP produce
          </Heading>
          <List>
            <Appear>
              <ListItem>OS: Linux, MacOS, Windows, etc</ListItem>
            </Appear>
            <Appear>
              <ListItem>Desktop Applications: Word, Office, etc</ListItem>
            </Appear>
            <Appear>
              <ListItem>Games, yes! tons tons of games</ListItem>
            </Appear>
            <Appear>
              <ListItem>Most Enterprise Softwares(web, desktop)</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Until 2009 what does FP produce
          </Heading>
          <List>
            <Appear>
              <ListItem>Nothing but some rarely used libraries</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why FP? Favors big project
          </Heading>
          <List>
            <Appear>
              <ListItem>Favors parrallel computing</ListItem>
            </Appear>
            <Appear>
              <ListItem>Code can are more reusable</ListItem>
            </Appear>
            <Appear>
              <ListItem>Code are more testable</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Why not FP? not favors to small task
          </Heading>
          <List>
            <Appear>
              <ListItem>Not for low level development</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not intuitive</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not framework friendly</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            People's thoughts of FP
          </Heading>
          <List>
            <Appear>
              <ListItem>OO + FP (Scala, Python, JS ...)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Pure FP (Clojure, Haskell ..)</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            FP Foundamentals
          </Heading>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" fit bold>
              Warning! Code appears
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Pricinples
          </Heading>
          <List>
            <ListItem>Functions are pure</ListItem>
            <ListItem>Data immutable</ListItem>
            <ListItem>Functions are data</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Techniques (It is all about functions)
          </Heading>
          <List>
            <ListItem>Function generation</ListItem>
            <ListItem>Currying</ListItem>
            <ListItem>Compose</ListItem>
            <ListItem>High Order Function</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Let's see an example
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Thanks
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
