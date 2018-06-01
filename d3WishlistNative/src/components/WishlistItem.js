import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

const WishlistItem = (props) => {
  return (
    <CardSection style={styles.sectionStyle}>
      <Text style={styles.textStyle}>
        <Text style={{color: props.color}}>{props.number}</Text> { props.name } - ${ props.price }
      </Text>
    </CardSection>
  );
};

const styles = {
  sectionStyle: {
  },
  textStyle: {
  }
}

export default WishlistItem;
