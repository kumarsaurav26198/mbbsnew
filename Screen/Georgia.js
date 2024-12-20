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
import Read from './ReadMore';

const Georgia = () => {
  return (
    <ScrollView background={'#F0F0F0'}>
      <Image
        resizeMode="stretch"
        source={require('../Assests/abroad/georgia_banner.png')}
        alt="georgia"
        width={'100%'}
        height={220}
      />
      <Flex width={'100%'} height={'100%'} py={8} px={4} style={{gap: 20}}>
        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Geography :{' '}
          </Text>
          Georgia is located at the crossroads of Western Asia and Eastern
          Europe, bordered to the west by the Black Sea, to the north by Russia,
          to the south by Turkey and Armenia, and to the southeast by
          Azerbaijan. The country has a rich history and a diverse culture.
        </Text>

        <Flex flexDirection={'column'} style={{gap: 14}}>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Pollution :{' '}
            </Text>
            <Text fontSize={12}>3.7 Million</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Area :{' '}
            </Text>
            <Text fontSize={12}>69,700 km²</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Capital :{' '}
            </Text>
            <Text fontSize={12}>Tbilisi</Text>
          </Flex>
        </Flex>


        <Flex
          width={'100%'}
          borderWidth={2}
          borderColor={'#1C375B'}
          flexDirection={'row'}
          py={2}
          px={2}
          borderRadius={'lg'}>
          <Text width={'30%'} color={'#1C375B'} fontWeight={700} fontSize={14}>
            Largest City :{' '}
          </Text>
          <Text width={'70%'}>
          Tbilisi
          </Text>
        </Flex>

        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Climate :{' '}
          </Text>
          The climate of Georgia is diverse, with subtropical conditions in the
          west, moderate winters in the east, and a Mediterranean-like climate
          in the Black Sea coastal areas. The country experiences warm, humid
          summers and cold winters.
        </Text>

        <Flex style={{gap: 10}}>
          <Text fontWeight={800} fontSize={20} mb={2} color={'#1C375B'}>
            Why Georgia ?
          </Text>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>High-Quality Education</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Affordable Tuition Fees</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Safe and Welcoming Environment</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Easy Admission Process</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>WHO, UNESCO Approved Medical Universities</Text>
          </Flex>
        </Flex>

        <Flex style={{gap: 10}}>
          <Flex style={{gap: 4}}>
            <Text fontWeight={800} fontSize={20} color={'#1C375B'}>
              MBBS Program
            </Text>
            <Text fontWeight={500} fontSize={17} color={'#1C375B'}>
              Advantages of the MBBS Program in Georgia
            </Text>
          </Flex>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              The MBBS program in Georgia is typically 6 years long, including
              practical training.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Students gain international exposure and a globally recognized
              degree.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              The curriculum is designed to meet international standards, with
              English as the medium of instruction.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Modern infrastructure and well-equipped laboratories.</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Affordable living costs compared to other European countries.
            </Text>
          </Flex>
        </Flex>
        <Read state={"Georgia"} />
      </Flex>
    </ScrollView>
  );
};

export default Georgia;
