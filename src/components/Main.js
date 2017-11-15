//Main component after user logedin

import React, { Component} from 'react'
import { Text, Button, View } from 'react-native'
import { Card, CardSection, Input, Spinner, Header } from './common'
import CenterScreen from './CenterScreen'
import LeftScreen from './LeftScreen'
import RightScreen from './RightScreen'

class Main extends Component {

state = { screen1: 'left'};

  renderContent() {

  switch (this.state.screen1) {
    case 'center':
      return <CenterScreen />
    case 'left':
      return <LeftScreen />
    case 'right':
      return <RightScreen />
    }


  }

  onLeftButtonClick() {
    switch (this.state.screen1) {
      case 'left': return this.setState({screen1:'left'})
      case 'center': return this.setState({screen1:'left'})
      case 'right': return this.setState({screen1:'center'})
    }
  }

  onRightButtonClick() {
      switch (this.state.screen1) {
        case 'left': return this.setState({screen1:'center'})
        case 'center': return this.setState({screen1:'right'})
        case 'right': return this.setState({screen1:'right'})
      }

    this.setState({screen1:'right'})

  }

  render() {

  const { screen1 } = this.state

    return (
      <Card>
      <Header headerText="Main"> </Header>
      {this.renderContent()}
      <Button title={"Left"} onPress={this.onLeftButtonClick.bind(this)}></Button>
      <Button title={"Right"} onPress={this.onRightButtonClick.bind(this)}></Button>
      </Card>
    );
  }

}

export default Main
