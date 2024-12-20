import React from 'react';
import { Box, Text } from 'native-base';
import { Linking } from 'react-native';

const Read = ({ state }) => {
  const handlePress = () => {
    Linking.openURL(`https://mbbsdunia.com/medical/${state}`);
  };

  return (
    <Box>
      <Text
        textDecorationLine={'underline'}
        color={'#1C375B'}
        onPress={handlePress}>
        Read More
      </Text>
    </Box>
  );
};

export default Read;
