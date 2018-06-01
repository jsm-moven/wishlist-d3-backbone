import React from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

const BalanceCard = ({ balance, wishlistTotal }) => {
  return (
    <Card>
      <CardSection style={styles.sectionStyle}>
        <Text style={styles.textStyle}>Your Current Balance is ${balance}</Text>
      </CardSection>
      <CardSection style={styles.sectionStyle}>
        <Text style={styles.textStyle}>Your Wishlist Total is ${wishlistTotal}</Text>
      </CardSection>
    </Card>
  );
};

const styles = {
  sectionStyle: {
    backgroundColor: "#178DB9"
  },
  textStyle: {
    color: 'white'
  }
}

export default BalanceCard;
