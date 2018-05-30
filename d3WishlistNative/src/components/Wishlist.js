import React, { Component } from 'react';
import { View, Text } from 'react-native';
import WishlistItem from './WishlistItem';
import { Header, Card, CardSection } from './common';

class Wishlist extends Component {
  componentWillMount() {
    this.setState({ wishlist: this.props.wishlist})
  }
  render() {
    console.log('list',this.props.wishlist)
    let list = this.props.wishlist.map((item) => {
      return (
        <WishlistItem key={`item-${item.order}`} name={item.name} />
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
