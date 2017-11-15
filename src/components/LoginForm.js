 import React, { Component} from 'react'
 import { Text, Button } from 'react-native'
 import firebase from 'firebase'
 import { Card, CardSection, Input, Spinner, Header } from './common'

 class LoginForm extends Component {

   state = { email: '', password: '', error: '', loading: false };

   onSignInButtonPress() {

     const { email, password, error} = this.state

     this.setState({ error: '', loading: true})

     firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        this.setState({ error: '', loading: false})
      )
      .catch((e) => {
        this.setState({ error: e.message, loading: false })
      });
    }

    onLogInButtonPress() {

      const { email, password, error} = this.state

      this.setState({ error: '', loading: true})

      firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        this.setState({ error: '', loading: false}, ()=>this.props.changeToLogin())
      )
      .catch((e) => {
        this.setState({ error: e.message, loading: false })
      });
     }

   renderLogInButton() {
     if (this.state.loading) {
       return <Spinner size='small' />
     }
     return (
       <Button title={"Log In"} onPress={this.onLogInButtonPress.bind(this)} />
     );
   }

   renderSignInButton() {
     if (this.state.loading) {
       return <Spinner size='small' />
     }
     return (
       <Button title={"Sign In"} onPress={this.onSignInButtonPress.bind(this)} />
     );
   }


   render() {
     return (
       <Card>
        <Header headerText="Log In Form"> </Header>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={text => this.setState({email:text}) }
            label="E-mail"
            placeholder="user@gmail.com"
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={text => this.setState({password:text}) }
            label="Password"
            placeholder="password"
            secureTextEntry
            />
        </CardSection>

        <Text style={styles.errorStyle}> {this.state.error} </Text>

        <CardSection>
          {this.renderLogInButton()}
          {this.renderSignInButton()}
        </CardSection>
       </Card>
     )
   }
 }

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm
