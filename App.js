import React from 'react';
import { ProgressBarAndroid, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import moment from 'moment';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      daysLeft: null,
      daysInCurrentMonth: null,
      daysInYear: null,
      dayCompleted: null,
      weekCompleted: null,
      monthCompleted: null
    }
  }

  componentDidMount() {
    let currentTime = moment();

    // How Much Year Left (via days left for better accuracy when displayed in progress bar)
    let endOfYear = moment().endOf('year');
    let daysLeft = endOfYear.diff(currentTime, 'days');

    let daysInYear = 0;
    for(let i = 1; i <= 12; i++) {
      daysInYear = daysInYear + moment(moment().format('YYYY') + '-' + i, 'YYYY-M').daysInMonth();
    }

    // How Much Month Left
    let daysInCurrentMonth = moment(moment().year() + '-' + (moment().month() + 1), 'YYYY-M').daysInMonth();
    let monthCompleted = (moment().date())/daysInCurrentMonth;

    // How Much Day Left
    let dayCompleted = moment().hour() + 1;

    this.setState({
      daysLeft,
      daysInCurrentMonth,
      daysInYear,
      dayCompleted,
      monthCompleted
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style = {[styles.h1, styles.text]}>The Year Is Ending!</Text>
        <Text style = {[styles.label, styles.text]}>Day: </Text><Text style = {styles.text}>{24 - this.state.dayCompleted} Hours Left</Text>
        <ProgressBarAndroid
          styleAttr = "Horizontal"
          indeterminate = {false}
          progress = {this.state.dayCompleted/24}
          color = "#e74c3c"
          />

        <Text style = {[styles.label, styles.text]}>Month: </Text><Text style = {styles.text}>{this.state.daysInCurrentMonth - moment().date()} Days Left</Text>
        <ProgressBarAndroid
          styleAttr = "Horizontal"
          indeterminate = {false}
          progress = {this.state.monthCompleted}
          color = "#1abc9c"
          />

        <Text style = {[styles.label, styles.text]}>Year: </Text><Text style = {styles.text}>{this.state.daysLeft} Days Left</Text>
        <ProgressBarAndroid
          styleAttr = "Horizontal"
          indeterminate = {false}
          progress = {(this.state.daysInYear - this.state.daysLeft)/this.state.daysInYear}
          color = "#3498db"
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
    padding: 32,
    justifyContent: 'center'
  },
  h1: {
    fontSize: 24,
    fontWeight: '400'
  },
  label: {
    fontWeight: '500'
  },
  text: {
    color: '#fff'
  },
});
