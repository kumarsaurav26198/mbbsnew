import {Box, Flex, Heading, Text} from 'native-base';
import {ImageBackground} from 'react-native';
import Mail from 'react-native-vector-icons/AntDesign';
import Phone from 'react-native-vector-icons/Feather';
import Add from 'react-native-vector-icons/Entypo';
const ContactUs = () => {
  return (
    <ImageBackground
      source={require('../Assests/menu_page.png')}
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch">
      <Box
        height="40%"
        my="auto"
        py={8}
        px={6}
        borderRadius={12}
        boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
        alignItems="center"
        textAlign="center"
        style={{gap: 34}}>
        <Heading color="#F4903A" fontSize={28} mb={6}>
          Contact Us
        </Heading>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="90%"
          my={3}>
          <Flex
            width="30%"
            flexDirection="row"
            style={{gap: 8}}
            alignItems="center"
            justifyContent="center">
            <Mail name="mail" size={20} color="#1C375B" />
            <Text fontSize={16} fontWeight="bold" color="#1C375B">
              Mail
            </Text>
          </Flex>
          <Text fontSize={16} fontWeight="bold" color="#1C375B" mx={2}>
            :
          </Text>
          <Box width="60%">
            <Text fontSize={16} color="#1C375B">
              info@mbbsdunia.com
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="90%"
          my={3}>
          <Flex
            width="30%"
            flexDirection="row"
            style={{gap: 8}}
            alignItems="center"
            justifyContent="center">
            <Phone name="phone" size={20} color="#1C375B" />
            <Text fontSize={16} fontWeight="bold" color="#1C375B">
              Phone
            </Text>
          </Flex>
          <Text fontSize={16} fontWeight="bold" color="#1C375B" mx={2}>
            :
          </Text>
          <Box width="60%">
            <Text fontSize={16} color="#1C375B">                    
              +91-7982122094
            </Text>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="90%"
          my={3}>
          <Flex
            width="30%"
            flexDirection="row"
            style={{gap: 8}}
            alignItems="center"
            justifyContent="center">
            <Add name="address" size={20} color="#1C375B" />
            <Text fontSize={16} fontWeight="bold" color="#1C375B">
              Address
            </Text>
          </Flex>
          <Text fontSize={16} fontWeight="bold" color="#1C375B" mx={2}>
            :
          </Text>
          <Box width="60%">
            <Text fontSize={16} color="#1C375B">
              B-18, 3rd floor, Comm. Complex, Dr. Mukherjee Nagar, Delhi-110009
            </Text>
          </Box>
        </Box>
      </Box>
    </ImageBackground>
  );
};

export default ContactUs;
