//Main component after user logedin

import React, { Component} from 'react'
import { Text, Button } from 'react-native'
import { Card, CardSection, Input, Spinner } from './common'

class CenterScreen extends Component {

  render() {
    return (

      <Card>
        <CardSection>
          <Text>It is a CenterScreen</Text>
        </CardSection>
      </Card>
    );
  }
}


export default CenterScreen
