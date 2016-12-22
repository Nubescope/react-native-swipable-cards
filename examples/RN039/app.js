import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import SwipableCards from 'react-native-swipable-cards'
import ScrollableImages from './swipable-cards/scrollable-images'

const Card = ({ image, name }) =>
  <View style={styles.card}>
    <ScrollableImages
      style={styles.thumbnail}
      sources={[{uri: image}, {uri: image}, {uri: image}]} />
    <Text style={styles.text}>This is card {name}</Text>
  </View>

const NoMoreCards = () =>
  <View style={styles.noMoreCards}>
    <Text>No more cards</Text>
  </View>

const Cards = [
  {name: 'One', image: 'https://randomuser.me/api/portraits/women/1.jpg'},
  {name: 'Two', image: 'https://randomuser.me/api/portraits/women/2.jpg'},
  {name: 'Three', image: 'https://randomuser.me/api/portraits/women/3.jpg'},
  {name: 'Four', image: 'https://randomuser.me/api/portraits/women/4.jpg'},
  {name: 'Five', image: 'https://randomuser.me/api/portraits/women/5.jpg'},
  {name: 'Six', image: 'https://randomuser.me/api/portraits/women/6.jpg'},
  {name: 'Seven', image: 'https://randomuser.me/api/portraits/women/7.jpg'},
  {name: '1', image: 'https://media.giphy.com/media/GfXFVHUzjlbOg/giphy.gif'},
  {name: '2', image: 'https://media.giphy.com/media/irTuv1L1T34TC/giphy.gif'},
  {name: '3', image: 'https://media.giphy.com/media/LkLL0HJerdXMI/giphy.gif'},
  {name: '4', image: 'https://media.giphy.com/media/fFBmUMzFL5zRS/giphy.gif'},
  {name: '5', image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {name: '6', image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
  {name: '7', image: 'https://media.giphy.com/media/K6Q7ZCdLy8pCE/giphy.gif'},
  {name: '8', image: 'https://media.giphy.com/media/hEwST9KM0UGti/giphy.gif'},
  {name: '9', image: 'https://media.giphy.com/media/3oEduJbDtIuA2VrtS0/giphy.gif'},
]

const Cards2 = [
  {name: '10', image: 'https://media.giphy.com/media/12b3E4U9aSndxC/giphy.gif'},
  {name: '11', image: 'https://media4.giphy.com/media/6csVEPEmHWhWg/200.gif'},
  {name: '12', image: 'https://media4.giphy.com/media/AA69fOAMCPa4o/200.gif'},
  {name: '13', image: 'https://media.giphy.com/media/OVHFny0I7njuU/giphy.gif'},
]

class App extends Component {
  state = {
    cards: Cards,
    outOfCards: false
  }

  handleYup = (card) => {
    console.warn("yup")
  }

  handleNope = (card) => {
    console.warn("nope")
  }

  cardRemoved = (index) => {
    console.warn(`The index is ${index}`)

    const CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.warn(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {
        console.warn(`Adding ${Cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SwipableCards
          cards={this.state.cards}
          loop={false}
          onlyHorizontal

          renderCard={cardData => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}
          handleYup={this.handleYup}
          handleNope={this.handleNope}
          cardRemoved={this.cardRemoved}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 400,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  thumbnail: {
    //flex: 1,
    width: 300,
    height: 300,
  },
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App
