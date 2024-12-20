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

const Nepal = () => {
  return (
    <ScrollView background={'#F0F0F0'}>
      <Image
        resizeMode="stretch"
        source={require('../Assests/abroad/nepal_banner.png')}
        alt="nepal"
        width={'100%'}
        height={220}
      />
      <Flex width={'100%'} height={'100%'} py={8} px={4} style={{gap: 20}}>
        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Geography :{' '}
          </Text>
          Nepal is a landlocked country located in South Asia, bordered by China
          to the north and India to the south, east, and west. It is known for
          its mountainous terrain, with eight of the world's ten highest peaks,
          including Mount Everest. The country has a diverse topography that
          includes plains, hills, and mountains.
        </Text>

        <Flex flexDirection={'column'} style={{gap: 14}}>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Pollution :{' '}
            </Text>
            <Text fontSize={12}>29.1 Million</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Area :{' '}
            </Text>
            <Text fontSize={12}>147,181 km²</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Capital :{' '}
            </Text>
            <Text fontSize={12}>Kathmandu</Text>
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
          Kathmandu, Pokhara, Lalitpur, Biratnagar, Bharatpur
          </Text>
        </Flex>

        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Climate :{' '}
          </Text>
          The climate of Nepal varies depending on the altitude. The lowlands
          have a subtropical climate, while the mountainous regions have an
          alpine climate. The country experiences four distinct seasons: spring,
          summer, autumn, and winter. The monsoon season brings heavy rainfall,
          especially in the southern regions.
        </Text>

        <Flex style={{gap: 10}}>
          <Text fontWeight={800} fontSize={20} mb={2} color={'#1C375B'}>
            Why Nepal ?
          </Text>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Affordable Tuition Fees</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Close Proximity to India</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Cultural Similarities</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>English Medium Instruction</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Recognized Medical Universities</Text>
          </Flex>
        </Flex>

        <Flex style={{gap: 10}}>
          <Flex style={{gap: 4}}>
            <Text fontWeight={800} fontSize={20} color={'#1C375B'}>
              MBBS Program
            </Text>
            <Text fontWeight={500} fontSize={17} color={'#1C375B'}>
              Advantage of the mbbs program in Nepal
            </Text>
          </Flex>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              The MBBS program typically lasts for 5.5 years, including
              internship.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              The curriculum includes comprehensive clinical training.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Many medical colleges are affiliated with international
              organizations.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Affordable living costs for international students.</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Recognized by the Medical Council of India (MCI) and other global
              medical bodies.
            </Text>
          </Flex>
        </Flex>
        <Read state={"Nepal"} />
      </Flex>
    </ScrollView>
  );
};

export default Nepal;
