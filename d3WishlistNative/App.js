import React, { Component } from 'react';
import { View, Text } from 'react-native';
import * as d3 from 'd3';
import Wishlist from './src/components/Wishlist';
import BalanceCard from './src/components/BalanceCard';
import { Header, Card, CardSection } from './src/components/common';
import List from './data/sampleWishlistResponse.json';
import Stash from './data/sampleStashResponse.json';

export default class App extends Component {
  render() {
    let balance = Stash.currentStashBalance;
    let wishlist = {};
    let headers = [];
    let totalWishlistCost = 0;
    List.active.map((item) => {
      headers.push(`item-${item.order}`);
      wishlist[`item-${item.order}`] = item.price;
      totalWishlistCost += item.price;
    })
    return (
      <View>
        <Header headerText='Wishlist' />
        <BalanceCard balance={balance} wishlistTotal={totalWishlistCost} />

        <Card>
          <CardSection>
            <Text>bar graph goes here</Text>
          </CardSection>
        </Card>

        <Wishlist wishlist={List.active} balance={balance} />
      </View>
    );
  }
}
