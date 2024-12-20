import {Box, Flex, Image, Pressable, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const AbroadCountry = ({navigation}) => {
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
        <Text fontWeight={900} fontSize={19} color={'#1C375B'} py={5}>
          Selct your Abroad Country to Study{' '}
        </Text>
        <Pressable
          shadow="9"
          borderRadius={10}
          width={'90%'}
          bg={'white'}
          borderColor={'#1C375B'}
          borderLeftWidth={5}
          borderRightWidth={5}
          onPress={() => navigation.navigate('kyrgyzstan')}>
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
                fontSize: isPressed ? 22 : 18,
                fontWeight: isPressed ? 800 : 400,
                transform: [
                  {
                    scale: isPressed ? 1 : 0.92,
                  },
                ],
              }}>
              Kyrgystan
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
          onPress={() => navigation.navigate("Russia")}>
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
                fontSize: isPressed ? 22 : 18,
                fontWeight: isPressed ? 800 : 400,
                transform: [
                  {
                    scale: isPressed ? 1 : 0.92,
                  },
                ],
              }}>
              Russia
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
          onPress={() => navigation.navigate('Georgia')}>
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
                fontSize: isPressed ? 22 : 18,
                fontWeight: isPressed ? 800 : 400,
                transform: [
                  {
                    scale: isPressed ? 1 : 0.92,
                  },
                ],
              }}>
              Georgia
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
          onPress={() => navigation.navigate('bangladesh')}>
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
                fontSize: isPressed ? 22 : 18,
                fontWeight: isPressed ? 800 : 400,
                transform: [
                  {
                    scale: isPressed ? 1 : 0.92,
                  },
                ],
              }}>
              BanglaDesh
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
          onPress={() => navigation.navigate('Nepal')}>
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
                fontSize: isPressed ? 22 : 18,
                fontWeight: isPressed ? 800 : 400,
                transform: [
                  {
                    scale: isPressed ? 1 : 0.92,
                  },
                ],
              }}>
              Nepal
            </Text>
          )}
        </Pressable>
      </Box>
    </ImageBackground>
  );
};

export default AbroadCountry;
