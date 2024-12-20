import {Box, Flex, Image, Pressable, Text, useTheme} from 'native-base';
import {useEffect, useState} from 'react';
import {ImageBackground, TouchableOpacity} from 'react-native';
import axios from 'axios';

const CollegeList = ({navigation}) => {
  const getdata = async () => {
    try {
      const response = await axios.get('https://app-api.mbbsdunia.com/api/colleges');
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);
  const theme = useTheme();

  return (
    <ImageBackground
      source={require('../Assests/select_city.png')}
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch">
      <Box
        borderBottomLeftRadius={20}
        borderBottomRightRadius={20}
        style={{width: '100%', height: '15%'}}
        background={'white'}>
        <Box
          style={{width: '100%', height: '96%', gap: 4}}
          borderBottomRightRadius={20}
          borderBottomLeftRadius={20}
          justifyContent={'space-around'}
          alignItems={'center'}
          flex={1}
          flexDirection={'row'}
          background={'#1C375B'}>
          <TouchableOpacity onPress={() => navigation.navigate('menupage')}>
            <Image
              style={{height: 35, width: 35}}
              source={require('../Assests/home.png')}
            />
          </TouchableOpacity>
          <Text
            color={'white'}
            fontWeight={'medium'}
            fontFamily={theme.fonts.font}
            fontSize={22}>
            College List
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('menupage')}>
            <Image
              style={{height: 35, width: 35}}
              source={require('../Assests/refresh.png')}
            />
          </TouchableOpacity>
        </Box>
      </Box>

      <Box alignItems={'center'}>
        <Box
          shadow={5}
          gap="2"
          style={{
            backgroundColor: '#FFFFFF',
            width: '90%',
            marginVertical: 20,
            padding: 10,
            borderRadius: 10,
          }}>
          <Text
            style={{fontSize: 15, fontWeight: 'medium', color: '#1C375B'}}
            fontFamily={theme.fonts.font}>
            Shantabaa Medical College Amreli
          </Text>
          <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
              Quota: MQ
            </Text>
            <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
              City: AMRELI
            </Text>
          </Flex>
          <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
            Air: 254360
          </Text>
          <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
              Merit No: 8632
            </Text>
            <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
              Neet Marks: 342
            </Text>
          </Flex>
        </Box>

        <Box
          shadow={5}
          gap="2"
          style={{
            backgroundColor: '#F3F3F3',
            width: '90%',
            marginVertical: 5,
            padding: 10,
            borderRadius: 10,
          }}>
          <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
              Quota: GQ
            </Text>
            <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
              City: AMRELI
            </Text>
          </Flex>
          <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
            Air: 254360
          </Text>
          <Flex flexDirection={'row'} justifyContent={'space-between'}>
            <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
              Merit No: 8632
            </Text>
            <Text fontSize={14} fontFamily={theme.fonts.font} color={'#333333'}>
              Neet Marks: 342
            </Text>
          </Flex>
        </Box>
      </Box>
    </ImageBackground>
  );
};

export default CollegeList;
