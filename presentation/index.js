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


//const code = {
  //deckSample: require('../assets/deck.example')
//};


const images = {
  formidagon: require('../assets/formidable-logo.svg'),
  goodWork: require('../assets/good-work.gif')
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        theme={theme}
        transition={['zoom', 'slide']}
        transitionDuration={500}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <Appear>
              <ListItem>Item 1</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 2</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 3</ListItem>
            </Appear>
            <Appear>
              <ListItem>Item 4</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
        </Slide>
      </Deck>
    );
  }
}
