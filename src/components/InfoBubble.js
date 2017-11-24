import React, { Component} from 'react'
import { Text, Button, View, ScrollView, Dimensions } from 'react-native'
import { Card, CardSection, Input, Spinner } from './common'


class InfoBubble extends Component {
  render() {
    return (
    <View style={styles.bubbleStyle}>
      <Text>
        {this.props.text}
      </Text>
    </View>
    );
  }
}

const styles = {
    bubbleStyle: {
      padding: 10,
      backgroundColor: 'gray',
      height: 50,
    }
    textBubbleStyle: {
      
    }
}

export default InfoBubble
