import React, { Component } from 'react';
import { View } from 'react-native';
import * as d3 from 'd3';
import {Header} from './src/components/common';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='sup'/>
      </View>
    );
  }
}
