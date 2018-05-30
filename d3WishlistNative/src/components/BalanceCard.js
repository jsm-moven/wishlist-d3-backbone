import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

const BalanceCard = ({ balance, wishlistTotal }) => {
  return (
    <Card>
      <CardSection>
        <Text>Your Current Balance is ${balance}</Text>
      </CardSection>
      <CardSection>
        <Text>Your Wishlist Total is ${wishlistTotal}</Text>
      </CardSection>
    </Card>
  );
};

export default BalanceCard;
