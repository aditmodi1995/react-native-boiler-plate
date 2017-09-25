import React, { Component } from 'react';
import {
  ActivityIndicatorIOS,
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  Alert
} from 'react-native'

export default class ProtectedView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showIndicator: false,
      secret: null
    }
  }

  componentWillMount() {
    this.setState({
      showIndicator: true
    }, this._fetchData)
  }

  _fetchData = () => {
    AsyncStorage.getItem('jwt', (err, token) => {
      console.log("TOKEN FROM.............................",token);
      fetch('http://192.168.1.189:3001/api/protected', {
        headers: {
          Accept: 'application/json',
          token: `${token}`
        }
      })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          secret: json.secret,
          showIndicator: false
        })
      })
      .catch(() => {
        Alert.alert('There was an error fetching the secret info.')
      })
      .done()
    })
  }

  _renderIndicator = () => (
    <ActivityIndicatorIOS
      animating
      style={[styles.centering]}
      size='large'
    />
  )

  _renderSecret = () => (
    <Text>
      The secret code is {this.state.secret}
    </Text>
  )

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.showIndicator == true
          ? this._renderIndicator()
          :
            <Text style={styles.centering}>
              {this.state.secret ? this._renderSecret() : <Text>You are not authorized!</Text>}
            </Text>
        }
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 80,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  greenButton: {
    backgroundColor: '#4CD964'
  },
  blueButton: {
    backgroundColor: '#34AADC',
  },
  centering: {
    flex: 1,
    paddingTop: 28,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
