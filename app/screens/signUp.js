import React, { Component } from 'react';
import {
  Alert,
  View,
  StyleSheet
} from 'react-native';
import SignUpForm from '../components/signUpForm';
import HeaderComponent from '../components/headerComponent';    //separate component for header bar

export default class SignUpScreen extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit = () => {
    const { navigate } = this.props.navigation;
    //when entered values are valid
    if (this.fname.state.valid == true && this.lname.state.valid == true && this.email.state.valid == true && this.phone.state.valid == true){
      //going to route '/users' to add new user
      fetch('http://192.168.1.189:3001/api/register',{
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fname: this.fname.state.value,
          lname: this.lname.state.value,
          email: (this.email.state.value).toLowerCase(),
          password: this.password.state.value,
          phone: this.phone.state.value,
          gender: this.gender.state.value
        })
      })
    .then((response) => response.json())
    .then((res) => {
      Alert.alert(res.message);
      if(res.message == 'Success!! You may now log in.'){
        navigate('SignIn');
        this.fname.clear();
        this.lname.clear();
        this.email.clear();
        this.password.clear();
        this.phone.clear();
        this.cPassword.clear();
      }
    })
    .catch((error) => {
      console.error(error);
    });
    //to alert the user
    // Alert.alert('Form submitted');

    //to clear the form after submitting
    }
    else {
      // when some value is not valid
      Alert.alert('Please resolve the errors');
    }
  }

  render(){
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <HeaderComponent
          leftIcon='arrow-back'                             //to navigate back
          leftPressed={() => navigate('SignIn')}
          title='New User'
        />
        <SignUpForm
          fname={(input) => {this.fname = input}}
          lname={(input) => {this.lname = input}}
          email={(input) => {this.email = input}}
          password={(input) => {this.password = input}}
          cPassword={(input) => {this.cPassword = input}}
          gender={(input) => {this.gender = input}}
          phone={(input) => {this.phone = input}}
          submitPressed={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    top: 0,
  }
})
