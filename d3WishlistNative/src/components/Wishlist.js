import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WishlistItem from './WishlistItem';
import { Header, Card, CardSection } from './common';
import * as d3 from 'd3';

class Wishlist extends Component {
  componentWillMount() {
    this.setState({ wishlist: this.props.wishlist})
  }
  render() {
    let colors = d3.schemeRdYlGn[this.props.wishlist.length];
    let list = this.props.wishlist.map((item) => {
      return (
        <WishlistItem
          key={`item-${item.order}`}
          name={item.name}
          color={colors[item.order]}
          price={item.price}
          number={+item.order + 1}
        />
      );
    });
    return (
      <Card>
        { list }
      </Card>
    );
  }
}

export default Wishlist;
