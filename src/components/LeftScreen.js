//Main component after user logedin

import React, { Component} from 'react'
import { Text, Button } from 'react-native'
import { Card, CardSection, Input, Spinner } from './common'

class LeftScreen extends Component {

  render() {
    return (

      <Card>
        <CardSection>
          <Text>It is a LeftScreen</Text>
        </CardSection>
      </Card>
    );
  }

}
export default LeftScreen
