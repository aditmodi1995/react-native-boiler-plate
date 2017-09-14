import React, { Component } from 'react';   //1st screen when app is opened for the first time
import {
  AsyncStorage,     //localStorage for client side
  Alert,
  View,
  StyleSheet        //same like CSS stylesheets
} from 'react-native';
import LoginForm from '../components/loginForm';  //Form with email and password

export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const { navigate } = this.props.navigation;     //to navigate to other pages
    return(
      <View style={styles.container}>
        <LoginForm
          loginEmail={(input) => {this.loginEmail = input}}   //for the whole reference of email field
          loginPass={(input) => {this.loginPass = input}}     //for the whole reference of password field
          loginPressed={          //triggers when login button is pressed
            () => {
              let lengthEmail = this.loginEmail.state.value.length; //calculating length as to see if the fields arent empty
              let lengthPass = this.loginPass.state.value.length;
              if (lengthEmail != 0 || lengthPass != 0){             //when fields are filled
                fetch('http://192.168.1.189:3001/api/login', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                  },
                  body: JSON.stringify({
                    username: this.loginEmail.state.value,      //passing email and password to the body of the route
                    password: this.loginPass.state.value
                  })
                })
                .then((response) => response.json())
                .then(async(res) => {
                    console.log("The Response is", res);        //token is created
                    if (res.token){
                      try {
                        await AsyncStorage.setItem('jwt', res.token);   //token is stored
                        Alert.alert('Welcome');
                        // Redirect to home screen
                        navigate('Home');
                      }
                      catch (error){
                        Alert.alert('got this error');
                        console.error(error);
                      }
                    }
                    else {
                      Alert.alert(res.message)
                    }
                })
                .catch((e) => {
                  console.log("DASDASDSA", e);
                  Alert.alert('Check your internet connection');    //triggers when there is server issue
                })
                .done()
              }
              else {
                Alert.alert('Fill the login form');       //when there is error in the fields from the client side
              }
            }
          }
          signUpPressed={() => navigate('SignUp')}        //when signUp is pressed
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  //adjusts according to the screen
    backgroundColor: '#ffffff'
  }
})
