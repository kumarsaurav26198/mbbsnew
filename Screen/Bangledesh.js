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

const Bangladesh = () => {
  return (
    <ScrollView background={'#F0F0F0'}>
      <Image
        resizeMode="stretch"
        source={require('../Assests/abroad/bangladesh_banner.png')}
        alt="bangladesh"
        width={'100%'}
        height={220}
      />
      <Flex width={'100%'} height={'100%'} py={8} px={4} style={{gap: 20}}>
        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Geography :{' '}
          </Text>
          Bangladesh is located in South Asia, bordered by India to the west,
          north, and east, Myanmar to the southeast, and the Bay of Bengal to
          the south. The country has a diverse landscape, including the world's
          largest delta, the Sundarbans mangrove forest, and fertile plains.
          Bangladesh is characterized by its lush greenery and numerous rivers,
          with the Ganges, Brahmaputra, and Meghna being the most significant.
        </Text>

        <Flex flexDirection={'column'} style={{gap: 14}}>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Pollution :{' '}
            </Text>
            <Text fontSize={12}>166 Million</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Area :{' '}
            </Text>
            <Text fontSize={12}>147,570 km²</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Capital :{' '}
            </Text>
            <Text fontSize={12}>Dhaka</Text>
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
          Dhaka, Chittagong, Khulna, Rajshahi, Sylhet
          </Text>
        </Flex>

        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Climate :{' '}
          </Text>
          Bangladesh has a tropical monsoon climate, with distinct wet and dry
          seasons. The country experiences heavy rainfall and high humidity,
          especially during the monsoon season (June to October). The
          temperature ranges from 10°C (50°F) in winter to 35°C (95°F) in
          summer.
        </Text>

        <Flex style={{gap: 10}}>
          <Text fontWeight={800} fontSize={20} mb={2} color={'#1C375B'}>
            Why Bangladesh ?
          </Text>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Affordable Tuition Fees</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>English Medium Education</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Recognized by International Bodies</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Strong Medical Infrastructure</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>WHO, MCI Approved</Text>
          </Flex>
        </Flex>

        <Flex style={{gap: 10}}>
          <Flex style={{gap: 4}}>
            <Text fontWeight={800} fontSize={20} color={'#1C375B'}>
              MBBS Program
            </Text>
            <Text fontWeight={500} fontSize={17} color={'#1C375B'}>
              Advantage of the mbbs program in Bangladesh
            </Text>
          </Flex>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              The MBBS program duration is typically 5 years, followed by a
              1-year internship.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Simple admission process with no entrance exam.</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Comprehensive curriculum with focus on practical and clinical
              knowledge.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Affordable cost of living and education.</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Medical degrees from Bangladesh are globally recognized.
            </Text>
          </Flex>
        </Flex>
        <Read state={"Bangladesh"} />
      </Flex>
    </ScrollView>
  );
};

export default Bangladesh;
