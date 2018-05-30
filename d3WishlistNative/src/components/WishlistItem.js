import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const WishlistItem = (props) => {
  return (
    <CardSection>
      <Text>
        { props.name }
      </Text>
    </CardSection>
  );
};

export default WishlistItem;
