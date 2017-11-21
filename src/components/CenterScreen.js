import React, { Component} from 'react'
import { Text, Button, View, ScrollView, Dimensions } from 'react-native'
import { Card, CardSection, Input, Spinner } from './common'
import { VictoryLine,
         VictoryChart,
         VictoryTheme,
         VictoryAxis,
         VictoryCursorContainer,
         VictoryTooltip,
         VictoryLabel,
         VictoryScatter,
         VictoryVoronoiContainer,
         createContainer} from 'victory-native'

const sampleData = [
  {hour: 7, visionLoad: 10, light:56 },
  {hour: 8, visionLoad: 2, light: 65 },
  {hour: 9, visionLoad: 4, light: 33 },
  {hour: 10, visionLoad: 9, light: 48},
  {hour: 11, visionLoad: 9, light: 59},
  {hour: 12, visionLoad: 5, light: 75},
  {hour: 13, visionLoad: 7, light: 83},
  {hour: 14, visionLoad: 9, light: 95}
]

const {height, width} = Dimensions.get('window');

class CenterScreen extends Component {

  render() {

    return (
      <View style={{backgroundColor: 'gray', width: width, height: height}}>

        <VictoryChart>

        <VictoryScatter

      data={[
        {x: 1, y: 2, label: "A"},
        {x: 2, y: 4, label: "B"},
        {x: 3, y: 7, label: "C"},
        {x: 4, y: 3, label: "D"},
        {x: 5, y: 5, label: "E"},
      ]}

      events={[
        {
          target: "data",
          eventHandlers: {
            onPress: () => {
              return [{
                target: "labels",
                mutation: (props) => {
                  return props.text === "clicked" ?
                    null : { text: "clicked" }
                }
              }];
            }
          }
        }
      ]}
    />

        </VictoryChart>

    </View>
    );
  }
}


export default CenterScreen
