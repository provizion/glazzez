import React, { Component} from 'react'
import { Text, Button, View, ScrollView, Dimensions } from 'react-native'
import { Card, CardSection, Input, Spinner } from './common'
import BarChart from './BarChart'
import InfoBubble from './InfoBubble'


const sampleData = [
  {hour: 7, visionLoad: 10, light:56},
  {hour: 8, visionLoad: 2, light: 65},
  {hour: 9, visionLoad: 4, light: 33},
  {hour: 10, visionLoad: 9, light: 48},
  {hour: 11, visionLoad: 9, light: 59},
  {hour: 12, visionLoad: 5, light: 75},
  {hour: 13, visionLoad: 7, light: 83},
  {hour: 14, visionLoad: 9, light: 95}
]

class CenterScreen extends Component {
  render() {

    return (
    <View>
      <BarChart />
    </View>
    );
  }
}




export default CenterScreen
