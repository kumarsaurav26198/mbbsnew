import React, {useEffect} from 'react';
import {
  Box,
  Text,
  Heading,
  Divider,
  HStack,
  Icon,
  Image,
  ScrollView,
  Flex,
} from 'native-base';
import Arrow from 'react-native-vector-icons/AntDesign';
import axios from 'axios';
import Read from './ReadMore';

const Russia = () => {
  return (
    <ScrollView background={'#F0F0F0'} width={'100%'} height={'100%'}>
      <Image
        resizeMode="stretch"
        source={require('../Assests/abroad/russia_banner.png')}
        alt="russia"
        width={'100%'}
        height={220}
      />
      <Flex width={'100%'} height={'100%'} py={8} px={4} style={{gap: 20}}>
        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Geography :{' '}
          </Text>
          Russia is the largest country in the world, stretching across Eastern
          Europe and northern Asia. It shares borders with 14 countries and has
          a vast and varied landscape, including tundra, forests, and mountain
          ranges.
        </Text>

        <Flex
          flexDirection={'column'}
          // alignItems={'center'}
          style={{gap: 8}}>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Population :{' '}
            </Text>
            <Text fontSize={12}>144.1 Million</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Area :{' '}
            </Text>
            <Text>17,098,242 km²</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Capital :{' '}
            </Text>
            <Text>Moscow</Text>
          </Flex>
        </Flex>

        <Flex
          width={'100%'}
          borderWidth={2}
          borderColor={'#1C375B'}
          flexDirection={'row'}
          py={2}
          px={2}
          // alignItems={'center'}
          borderRadius={'lg'}>
          <Text width={'30%'} color={'#1C375B'} fontWeight={700} fontSize={14}>
            Largest City :{' '}
          </Text>
          <Text width={'70%'}>
            Moscow, Saint Petersburg, Novosibirsk, Yekaterinburg, Kazan
          </Text>
        </Flex>

        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Climate :{' '}
          </Text>
          Russia has a diverse climate, ranging from humid continental in much
          of European Russia to subarctic and tundra in Siberia. The country
          experiences long, cold winters and short, warm summers.
        </Text>

        <Flex style={{gap: 10}}>
          <Text fontWeight={800} fontSize={20} mb={2} color={'#1C375B'}>
            Why Russia?
          </Text>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>High-quality education and research opportunities</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Globally recognized degrees</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Affordable tuition and living costs</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Diverse cultural experience</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Internationally recognized medical universities</Text>
          </Flex>
        </Flex>

        <Flex style={{gap: 10}}>
          <Flex style={{gap: 4}}>
            <Text fontWeight={800} fontSize={20} color={'#1C375B'}>
              MBBS Program
            </Text>
            <Text fontWeight={500} fontSize={17} color={'#1C375B'}>
              Advantages of the MBBS Program in Russia
            </Text>
          </Flex>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              The MBBS program duration in Russia is typically 6 years.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Students receive extensive practical training in hospitals.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Medical universities in Russia are globally recognized.</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Multicultural environment with students from various countries.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Courses are available in both Russian and English.</Text>
          </Flex>
        </Flex>

        <Read state={'Russia'} />
      </Flex>
    </ScrollView>
  );
};

export default Russia;
