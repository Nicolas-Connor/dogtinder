import * as React from 'react';
import {  Slider, Image ,Button,Alert, StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Swiper from 'react-native-deck-swiper'
//import ImageSlider from 'react-native-image-slider';
//import Carousel from 'react-native-snap-carousel';




class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login/signup page</Text>
        <Button
          title="Rate Dogs"
          onPress={() => this.props.navigation.navigate('RateDogs')}
        />
      </View>
    );
  }
}

// demo purposes only
function * range (start, end) {
  for (let i = start; i <= end; i++) {
    yield i
  }
}

class RateDogsScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cards: [...range(1, 80)],
      swipedAllCards: false,
      swipeDirection: '',
      cardIndex: 0
    }
  }

  renderCard = (card, index) => {
    // https://source.unsplash.com/featured/?{dog}
    return (
      <View style={styles.card}>
        <Text style={styles.text}>{card} + {index}</Text>
        <Image source={{uri: 'https://source.unsplash.com/400x400/?dog/'+index}}
       style={{width: 365, height: 400}} />
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
        <View style={[styles.swiper]}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={(cardIndex) => this.props.navigation.navigate('MyModal', {itemId: cardIndex,})}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin	 = {100}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          useViewOverflow	 = {false}
          stackSize={3}
          stackSeparation={15}
          backgroundColor='#c5dee8'
          
          overlayLabels={{
            bottom: {
              title: 'BLEAH',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            },
            left: {
              title: 'NOPEE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: -30
                }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                  marginTop: 30,
                  marginLeft: 30
                }
              }
            },
            top: {
              title: 'SUPER LIKE',
              style: {
                label: {
                  backgroundColor: 'black',
                  borderColor: 'black',
                  color: 'white',
                  borderWidth: 1
                },
                wrapper: {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center'
                }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          
         
        </Swiper>
        </View>
  
      </View>
    )
  }
}
class ModalScreen extends React.Component {
  render() {
    
    return (

      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={{uri: 'https://source.unsplash.com/400x400/?dog/'+JSON.stringify(this.props.navigation.getParam('itemId', '-1'))}}
       style={{width: 365, height: 400}} />
       <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </ScrollView>
    </SafeAreaView>
    );
  }
}
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      
    },
    RateDogs: {
      screen: RateDogsScreen,
      navigationOptions: {
        header: null,
    },
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  swiper:{
    flex:1,
    backgroundColor: '#F5FCFF'
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


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}