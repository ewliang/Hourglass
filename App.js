import React from 'react';
import { ProgressBarAndroid, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import moment from 'moment';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      daysLeft: null,
      weeksLeft: null,
      monthsLeft: null,
      daysInYear: null
    }
  }

  componentDidMount() {
    let currentTime = moment();

    let endOfYear = moment().endOf('year');
    let daysLeft = endOfYear.diff(currentTime, 'days');
    let weeksLeft = endOfYear.diff(currentTime, 'weeks');
    let monthsLeft = endOfYear.diff(currentTime, 'months');

    let daysInYear = 0;
    for(let i = 1; i <= 12; i++) {
      daysInYear = daysInYear + moment(moment().format('YYYY') + '-' + i, 'YYYY-M').daysInMonth();
    }

    this.setState({
      daysLeft,
      weeksLeft,
      monthsLeft,
      daysInYear
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {[styles.h1, styles.text]}>Oh No! The Year Is Ending!</Text>
        <Text style = {styles.text}>Days Left: {this.state.daysLeft} days</Text>
        <Text style = {styles.text}>Weeks Left: {this.state.weeksLeft} weeks</Text>
        <Text style = {styles.text}>Months Left: {this.state.monthsLeft} months</Text>
        <ProgressBarAndroid
          styleAttr = "Horizontal"
          indeterminate = {false}
          progress = {(this.state.daysInYear - this.state.daysLeft)/this.state.daysInYear}
          color = "#359dc7"
        >
        </ProgressBarAndroid>
        <ProgressBarAndroid
          styleAttr = "Horizontal"
          indeterminate = {false}
          progress = {this.state.weeksLeft}
          color = "#359dc7"
          />
        <ProgressBarAndroid
          styleAttr = "Horizontal"
          indeterminate = {false}
          progress = {(12-this.state.monthsLeft)/12}
          color = "#359dc7"
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 24,
    fontWeight: '400'
  },
  text: {
    color: '#fff'
  },
});
