import React, { Component } from 'react'
import Swiper from 'react-native-deck-swiper'
import { Slider, Image ,Button,Alert, StyleSheet, Text, View } from 'react-native'

// demo purposes only
function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

export default class Menu extends Component {
  constructor (props) {
    super(props)

  }

  renderCard = (card, index) => {
    // https://source.unsplash.com/featured/?{dog}
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card} + {index}</Text>
        <Image source={{uri: 'https://source.unsplash.com/400x400/?dog/'+index}}
       style={{width: 400, height: 400}} />
      </View>
    )
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

  render () {
    return (
      
      <View style={styles.container}>
        <Button title="Thug life" onPress={() => Alert.alert('yeeeeeeeee bebe')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FD0E9'
  },
  swiper:{
    flex:1,
  },
  rateBoxes:{
    alignItems: 'center',
    padding: 10
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
})
