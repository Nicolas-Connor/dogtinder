import * as React from 'react';
import {  Slider, Image ,Alert, StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Swiper from 'react-native-deck-swiper'
import {  ThemeProvider,Header, Text, Input, Avatar,PricingCard,Button  } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { createStackNavigator } from 'react-navigation-stack';
//import ImageSlider from 'react-native-image-slider';
//import Carousel from 'react-native-snap-carousel';




class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width:"100%" }}>

        <PricingCard
          color="#4f9deb"
          title="Rate Dogs"
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
          onButtonPress={() => this.props.navigation.navigate('RateDogs')}
        />
        <Button
         
         title="Next"
         
        containerStyle={{width:"90%",}}
        buttonStyle={{borderRadius:50,height:50,width:50}}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#8E2DE2', '#7B4FC2'],
          start: { x: 0, y: 0.0 },
          end: { x: 1, y: 1 },
        }}
         
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
      <ThemeProvider style={{flex:1}} >
        <Header style={{flex: 1}}
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={<Avatar
    rounded
    source={{
      uri:
        'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
    }}
  />}
/>
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
          disableTopSwipe={true}
          disableBottomSwipe={true}
          cardStyle={{marginTop:-85}}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          <View style={{flex:3, flexDirection:"row",justifyContent: 'space-between', position:"absolute",bottom:0}}> 
          <Button
         onButtonPress={() => this.swiper.swipeLeft()}

         title="5"
         
        containerStyle={{margin:10}}
        buttonStyle={{borderRadius:50,height:50,width:50}}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#8E2DE2', '#7B4FC2'],
          start: { x: 0, y: 0.0 },
          end: { x: 1, y: 1 },
        }}
        
         
       />
       <Button
         
         title="6"
         
        containerStyle={{margin:10}}
        buttonStyle={{borderRadius:50,height:50,width:50}}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#8E2DE2', '#7B4FC2'],
          start: { x: 0, y: 0.0 },
          end: { x: 1, y: 1 },
        }}
         
       />
       <Button
         
         title="7"
         
        containerStyle={{margin:10}}
        buttonStyle={{borderRadius:50,height:50,width:50}}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#8E2DE2', '#7B4FC2'],
          start: { x: 0, y: 0.0 },
          end: { x: 1, y: 1 },
        }}
         
       />
       <Button
         
         title="8"
         
        containerStyle={{margin:10}}
        buttonStyle={{borderRadius:50,height:50,width:50}}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#8E2DE2', '#7B4FC2'],
          start: { x: 0, y: 0.0 },
          end: { x: 1, y: 1 },
        }}
         
       />
       <Button
         
         title="9"
         
        containerStyle={{margin:10}}
        buttonStyle={{borderRadius:50,height:50,width:50}}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#8E2DE2', '#7B4FC2'],
          start: { x: 0, y: 0.0 },
          end: { x: 1, y: 1 },
        }}
         
       />
       <Button
         
         title="10"
         
        containerStyle={{margin:10}}
        buttonStyle={{borderRadius:50,height:50,width:50}}
        ViewComponent={LinearGradient} // Don't forget this!
        linearGradientProps={{
          colors: ['#8E2DE2', '#7B4FC2'],
          start: { x: 0, y: 0.0 },
          end: { x: 1, y: 1 },
        }}
         
       />
          </View>
         
        </Swiper>
        </View>
  
      </View>
      </ThemeProvider>
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
    flex: 2,
    backgroundColor: '#F5FCFF'
    
  },
  swiper:{
    
    flex:2,
    justifyContent: "space-between",
    backgroundColor: '#F5FCFF',
    
   
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