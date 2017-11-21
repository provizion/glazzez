import React, {
  Component
}                    from 'react'

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
}                    from 'react-native'
import firebase      from 'firebase'

import {
  Header,
  Spinner
}                    from './src/components/common'
import LoginForm     from './src/components/LoginForm'
import Main          from './src/components/Main'
import MainNavigator from './src/components/MainNavigator'
import CenterScreen from './src/components/CenterScreen'

class App extends Component {

  state = { loggedIn: true }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCns9m5dhHD3sDmHo8k1XWOdg3HB7D0JEk",
      authDomain: "glazzez-e5f79.firebaseapp.com",
      databaseURL: "https://glazzez-e5f79.firebaseio.com",
      projectId: "glazzez-e5f79",
      storageBucket: "glazzez-e5f79.appspot.com",
      messagingSenderId: "648104678663"
    })

  }

  changeToLogin() {
    this.setState({loggedIn: true})
  }

  renderContent() {

    switch (this.state.loggedIn) {
      case true:
        return <CenterScreen />
      case false:
        return <LoginForm changeToLogin={ this.changeToLogin.bind(this) }/>
      default:
        return <Spinner size='large' />
    }


    /*if (this.state.loggedIn) {
      return (
        <View style={styles.logOutStyle} >
         <Button> Log Out </Button>
        </View>
      )
    }
    return <LoginForm />*/
  }

  render() {
    return (
      this.renderContent()
    )
  }
}

const styles = {
  logOutStyle: {
    height: 30
  }
}

export default App
