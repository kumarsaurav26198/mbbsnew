import {useNavigation} from '@react-navigation/native';
import {
  Box,
  Button,
  Flex,
  Image,
  Pressable,
  Text,
  View,
  theme,
  useTheme,
} from 'native-base';
import {Dimensions, ImageBackground} from 'react-native';
import SvgUri from 'react-native-svg';
import Arrow from 'react-native-vector-icons/Entypo';
const Login = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../Assests/login.png')}
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch">
      <Box width={'100%'} height={'100%'}>
        <Box ml={6} mt={12}>
          <Text
            fontFamily={'Ruda-Regular'}
            color={'white'}
            fontSize={'4xl'}
            // fontWeight={'normal'}
          >
            Welcome to
          </Text>
          <Text
            // underline
            fontFamily={'Ruda-SemiBold'}
            color={'white'}
            fontSize={'3xl'}
            // fontWeight={'semibold'}
          >
            MBBS Dunia
          </Text>
          <Box
            style={{borderBottomColor: '#F4903A', borderBottomWidth: 3}}
            width={'40%'}></Box>
        </Box>

        <Flex justifyContent="center" alignItems="center" height="90%">
          <Pressable
            onPress={() => navigation.navigate('selectcourse')}
            borderRadius={50}
            shadow="5"
            width={'40%'}
            bg={'white'}>
            {({isPressed}) => (
              <Flex
                py={3}
                justifyContent="space-around"
                flexDirection="row"
                alignItems="center"
                style={{
                  backgroundColor: isPressed ? '#1C375B' : '#FFFFFF',

                  fontSize: isPressed ? 20 : 16,
                  fontWeight: isPressed ? 800 : 400,
                  borderRadius: 50,
                  transform: [
                    {
                      scale: isPressed ? 1 : 0.92,
                    },
                  ],
                }}>
                <Text
                  fontSize={16}
                  fontFamily={'Ruda-ExtraBold'}
                  // fontWeight="medium"
                  style={{color: isPressed ? 'white' : '#1C375B'}}>
                  Let's Start
                </Text>
                <Arrow
                  name="arrow-with-circle-right"
                  size={24}
                  color={isPressed ? 'white' : '#1C375B'}
                />
              </Flex>
            )}
          </Pressable>
        </Flex>
      </Box>
    </ImageBackground>
  );
};

export default Login;
