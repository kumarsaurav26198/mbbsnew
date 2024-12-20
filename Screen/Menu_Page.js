import {Box, Flex, Image, Pressable, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const MenuPage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../Assests/menu_page.png')}
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch">
      <Box
        height={'100%'}
        borderWidth={2}
        flex={1}
        style={{gap: 20}}
        justifyContent={'center'}
        alignItems={'center'}>
        <Pressable
          shadow="9"
          borderRadius={10}
          width={'90%'}
          bg={'white'}
          borderColor={'#1C375B'}
          borderLeftWidth={5}
          borderRightWidth={5}
          onPress={() => navigation.navigate('selectcity', {section: '1'})}>
          {({isPressed}) => (
            <Text
              fontFamily={'Ruda-Bold'}
              fontSize={16}
              py={3}
              textAlign={'center'}
              style={{
                backgroundColor: isPressed ? '#1C375B' : '#FFFFFF',
                borderRadius: 10,
                color: isPressed ? 'white' : '#1C375B',
                fontSize: isPressed ? 20 : 16,
                fontWeight: isPressed ? 800 : 400,
                transform: [
                  {
                    scale: isPressed ? 1 : 0.92,
                  },
                ],
              }}>
              MBBS , MD
            </Text>
          )}
        </Pressable>
        <Pressable
          shadow="9"
          borderRadius={10}
          width={'90%'}
          bg={'white'}
          borderColor={'#1C375B'}
          borderLeftWidth={5}
          borderRightWidth={5}
          onPress={() => navigation.navigate('selectcity', {section: '2'})}>
          {({isPressed}) => (
            <Text
              fontFamily={'Ruda-Bold'}
              fontSize={16}
              py={3}
              textAlign={'center'}
              style={{
                backgroundColor: isPressed ? '#1C375B' : '#FFFFFF',
                borderRadius: 10,
                color: isPressed ? 'white' : '#1C375B',
                fontSize: isPressed ? 20 : 16,
                fontWeight: isPressed ? 800 : 400,
                transform: [
                  {
                    scale: isPressed ? 1 : 0.92,
                  },
                ],
              }}>
              MS, DM
            </Text>
          )}
        </Pressable>
        <Pressable
          shadow="9"
          borderRadius={10}
          width={'90%'}
          bg={'white'}
          borderColor={'#1C375B'}
          borderLeftWidth={5}
          borderRightWidth={5}
          onPress={() => navigation.navigate('selectcity', {section: '3'})}>
          {({isPressed}) => (
            <Text
              fontFamily={'Ruda-Bold'}
              fontSize={16}
              py={3}
              textAlign={'center'}
              style={{
                backgroundColor: isPressed ? '#1C375B' : '#FFFFFF',
                borderRadius: 10,
                color: isPressed ? 'white' : '#1C375B',
                fontSize: isPressed ? 20 : 16,
                fontWeight: isPressed ? 800 : 400,
                transform: [
                  {
                    scale: isPressed ? 1 : 0.92,
                  },
                ],
              }}>
              MCH & DIP
            </Text>
          )}
        </Pressable>
      </Box>
    </ImageBackground>
  );
};

export default MenuPage;
