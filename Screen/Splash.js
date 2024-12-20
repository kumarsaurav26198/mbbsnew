import React, {useEffect} from 'react';
import {Box, Image} from 'native-base';
import {Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate('login');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <Box flex={1}>
      <Image
        source={require('../Assests/splash.png')}
        alt="splash image"
        resizeMode="stretch"
        style={{height: '100%', width: '100%'}}
      />
    </Box>
  );
}

export default HomeScreen;
