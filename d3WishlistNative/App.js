import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as d3 from 'd3';
import WishlistItem from './src/components/WishlistItem';
import { Header, Card, CardSection } from './src/components/common';
import List from './data/sampleWishlistResponse.json';
import Stash from './data/sampleStashResponse.json';

export default class App extends Component {
  render() {
    let currentBalance = Stash.currentStashBalance;
    let wishlist = {};
    let headers = [];
    let totalWishlistCost = 0;
    let list = List.active.map((item) => {
      headers.push(`item-${item.order}`);
      wishlist[`item-${item.order}`] = item.price;
      totalWishlistCost += item.price;
      return (
        <WishlistItem key={`item-${item.order}`} name={item.name} />
      );
    });
    return (
      <View>
        <Header headerText='Wishlist' />
        <Card>
          <CardSection>
            <Text>Your Current Balance is ${currentBalance}</Text>
          </CardSection>
          <CardSection>
            <Text>Your Wishlist Total is ${totalWishlistCost}</Text>
          </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Text>bar graph goes here</Text>
          </CardSection>
        </Card>

        <Card>
          { list }
        </Card>
      </View>
    );
  }
}
