import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const WishlistItem = (props) => {
  return (
    <CardSection>
      <Text style={{color: props.color}}>
        { props.name } - ${ props.price }
      </Text>
    </CardSection>
  );
};

export default WishlistItem;
