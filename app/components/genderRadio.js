import React, { Component } from 'react';
// used Radio library from npm
import RadioForm, {}
// { RadioButton, RadioButtonInput, RadioButtonLabel }
  from 'react-native-simple-radio-button';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const radioProps = [
  { label: 'male', value: 'male' },
  { label: 'female', value: 'female' },
];

const styles = StyleSheet.create({
  genderContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  genderHeading: {
    fontSize: 17,
  },
  checkbox: {
    color: '#00008b',
  },
  radio: {
    marginLeft: 50,
    // fontSize: 15
  },
});

// this class is for gender field
export default class GenderRadio extends Component {
  static propTypes = {
    initial: PropTypes.bool,
  }

  static defaultProps = {
    initial: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 'male',
    };
  }

  render() {
    return (
      <View style={styles.genderContainer}>
        <Text style={styles.genderHeading}>Gender</Text>
        <RadioForm
          style={styles.radio}
          radio_props={radioProps}
          formHorizontal // radioboxes direction
          initial={this.props.initial}
          // animation={'true'}
          labelHorizontal // radiobox label direction
          onPress={(value) => { this.setState({ value }); }}
        />
      </View>
    );
  }
}
