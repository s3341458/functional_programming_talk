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
    primary: 'white',
    secondary: '#1F2022',
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
              <ListItem>A candidates skill</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Help our development (React)
              </ListItem>
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
              <ListItem>Have not thought about artificial intelligence</ListItem>
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
              <ListItem>Bridge between formula and machine</ListItem>
            </Appear>
            <Appear>
              <ListItem>Do not care about computer(utopia)</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Util 2009 what does PP produce
          </Heading>
          <List>
            <Appear>
              <ListItem>OS: Linux, MacOS, Windows</ListItem>
            </Appear>
            <Appear>
              <ListItem>Desktop Applications: Word Office</ListItem>
            </Appear>
            <Appear>
              <ListItem>Games</ListItem>
            </Appear>
            <Appear>
              <ListItem>Most Enterprise Softwares</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Util 2009 what does FP produce
          </Heading>
          <List>
            <Appear>
              <ListItem>Nothing but some rarely used libraries</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
