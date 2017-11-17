//Main component after user logedin

import React, { Component} from 'react'
import { Text, Button, View } from 'react-native'
import { Card, CardSection, Input, Spinner } from './common'
import { VictoryBar, VictoryChart, VictoryTheme } from 'victory-native'

const sampleData = [
  { x: 1, y: 2, y0: 1, width: 4 },
  { x: 2, y: 3, y0: 2, width: 6 },
  { x: 3, y: 5, y0: 2, width: 8 },
  { x: 4, y: 4, y0: 3, width: 10 },
  { x: 5, y: 6, y0: 3, width: 12 }
]

class CenterScreen extends Component {



  render() {
    return (
      <View>

        <Card>
          <CardSection>
            <Text>It is a CenterScreen</Text>
          </CardSection>
        </Card>

        <VictoryChart theme={VictoryTheme.material}>
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            alignment="start"
            data={sampleData}
          />
        </VictoryChart>

      </View>
    );
  }
}


export default CenterScreen
