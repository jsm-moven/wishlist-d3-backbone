import React, { Component } from 'react';
import { Dimensions, View, Text } from 'react-native';
import * as d3 from 'd3';
import { Header, Card, CardSection } from './common';

class WishlistChart extends Component {
  render() {
    let width = Dimensions.get('window').width - 20;
    let x = d3.scaleLinear()
      .domain([0, Math.max(this.props.balance, this.props.totalWishlistCost)])
      .range([0, width]);

    let wishlist = {};
    let headers = [];
    this.props.wishlist.map((item) => {
      headers.push('item-'+item.order);
      wishlist['item-'+item.order] = item.price;
    })
    let stack = d3.stack()
      .keys(headers);
    let stackedSeries = stack([wishlist]);

    let colors = d3.schemeRdYlGn[headers.length];
    let bars = stackedSeries.map((item, index) => {
      let borderTopLeft = 0;
      let borderTopRight = 0;
      let borderBottomLeft = 0;
      let borderBottomRight = 0;

      if (index == 0) {
        borderTopLeft = 8;
        borderBottomLeft = 8;
      } else if (index == stackedSeries.length-1) {
        borderTopRight = 8;
        borderBottomRight = 8;
      }
      return(
        <View x={x(item[0][0])}
          y="0"
          width={x(item[0][1]-item[0][0])}
          height={50}
          backgroundColor={colors[index]}
          key={`${item.key}`}
          borderTopLeftRadius={borderTopLeft}
          borderTopRightRadius={borderTopRight}
          borderBottomLeftRadius={borderBottomLeft}
          borderBottomRightRadius={borderBottomRight}
        />
      )
    })
    return (
      <Card>
        <CardSection>{bars}</CardSection>
      </Card>
    );
  }
}

const styles = {
  rectangle: {
    width: 100 * 2,
    height: 50,
    backgroundColor: 'red'
  }
}

export default WishlistChart;
