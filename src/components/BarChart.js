import React, { Component} from 'react'
import { Text, Button, View, TouchableHighlight } from 'react-native'
import InfoBubble from './InfoBubble'

const data = [
  {x:1, y:25, text:"говно"},
  {x:2, y:70},
  {x:3, y:125},
  {x:4, y:44, text:"привет"},
  {x:5, y:105},
  {x:6, y:57},
  {x:7, y:33},
  {x:8, y:10},
  {x:9, y:10},
  {x:10, y:10},
  {x:11, y:10},
  {x:12, y:10},
  {x:13, y:10},
  {x:14, y:10},
  {x:15, y:10},
  {x:16, y:10},
  {x:17, y:10},
  {x:18, y:10},
  {x:19, y:10},
  {x:20, y:10, text:"20"},
  {x:21, y:10},
  {x:22, y:10},
  {x:23, y:10},
  {x:24, y:10, text:"24"},
]

class BarChart extends Component {

  state = { bubbleText: '' };

  onPressBar(text) {
    this.setState({ bubbleText: text })
  }

  renderBar(item) {
    return (
    <TouchableHighlight
      key={item.x}
      onPress={() => this.onPressBar(item.text)}
      underlayColor={"#00FF00"}
      activeOpacity={0}>

      <View style={styles.barStyle} height={item.y}/>
    </TouchableHighlight>
    )
  }

  render() {

    return (
      <View style={styles.mainStyle}>

        <InfoBubble text={this.state.bubbleText}>
        </InfoBubble>

        <View style={styles.chartStyle}>

          {data.map( (item) => this.renderBar(item))}

        </View>
      </View>

    );
  }
}

const styles = {
    barStyle: {
      backgroundColor: 'red',
      justifyContent: 'space-around',
      flexDirection: 'row',
      width: 16,
      borderColor: 'white',
      borderRightWidth: 2,
      borderLeftWidth: 2,
    },
    chartStyle: {
      flexDirection: 'row',
      paddingTop: 30,
      alignItems: 'flex-end',
      backgroundColor: 'white',
      paddingBottom: 30, //need to remove after new View will be added
      height: 300
    },
    mainStyle: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      paddingTop:20
    }
}


export default BarChart
