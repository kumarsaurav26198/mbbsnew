import {Box, Flex, Image, Pressable, Text} from 'native-base';
import {ImageBackground} from 'react-native';

const SelectCourse = ({navigation}) => {
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
          onPress={() => navigation.navigate('menupage')}>
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
              Medical In India
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
          onPress={() => navigation.navigate("abroad")}>
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
              Medical In Abroad
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
          onPress={() => navigation.navigate('PDF')}>
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
              Get NEET Cutoff
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
          onPress={() => navigation.navigate('ContactUs')}>
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
              Contact Us
            </Text>
          )}
        </Pressable>
      </Box>
    </ImageBackground>
  );
};

export default SelectCourse;
