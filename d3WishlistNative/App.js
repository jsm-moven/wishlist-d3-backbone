import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Wishlist from './src/components/Wishlist';
import BalanceCard from './src/components/BalanceCard';
import WishlistChart from './src/components/WishlistChart';
import { Header, Card, CardSection } from './src/components/common';
import List from './data/sampleWishlistResponse.json';
import Stash from './data/sampleStashResponse.json';

export default class App extends Component {
  render() {
    let balance = Stash.currentStashBalance;
    let totalWishlistCost = 0;
    List.active.map((item) => {
      totalWishlistCost += item.price;
    })
    return (
      <View>
        <Header headerText='Wishlist' />
        <BalanceCard balance={balance} wishlistTotal={totalWishlistCost} />

        <WishlistChart
          wishlist={List.active}
          balance={balance}
          totalWishlistCost={totalWishlistCost}
        />

        <Wishlist wishlist={List.active} balance={balance} />
      </View>
    );
  }
}
