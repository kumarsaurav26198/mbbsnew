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

const Kyrgyzstan = () => {
  return (
    <ScrollView background={'#F0F0F0'}>
      <Image
        resizeMode="stretch"
        source={require('../Assests/abroad/kyrgyzstan_banner.png')}
        alt="kyrgyzstan"
        width={'100%'}
        height={220}
      />
      <Flex width={'100%'} height={'100%'} py={8} px={4} style={{gap: 20}}>
        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Geography :{' '}
          </Text>
          Kyrgyzstan is a landlocked country in Central Asia, bordering
          Kazakhstan, China, Tajikistan and Uzbekistan. It lies between
          latitudes 39 and 44" N, and longitudes 69° and 81° E. It is further
          from the sea than any other individual country, and all its rivers
          flow into closed drainage systems which do not reach the sea. The
          mountainous region of the Tian Shan covers over 80% of the country
          (Kyrgyzstan is occasionally referred to as "the Switzerland of Central
          Asia," as a result) with the remainder made up of valleys and basins.
          Issyk-Kul Lake in the north-eastern Tian Shan is the largest lake in
          Kyrgyzstan and the second largest mountain lake in the world after
          Titicaca.
        </Text>

        <Flex flexDirection={'column'} style={{gap: 14}}>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Pollution :{' '}
            </Text>
            <Text fontSize={12}>6 Million</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Area :{' '}
            </Text>
            <Text fontSize={12}>199.951km</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 2}}>
            <Text fontWeight={700} fontSize={14} color={'#1C375B'}>
              Capital :{' '}
            </Text>
            <Text fontSize={12}>Bishkek</Text>
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
          Bishkek, Osh, Jala-Abad, Karakol etc.
          </Text>
        </Flex>

        <Text>
          <Text fontSize={17} color={'#1C375B'} fontWeight={900}>
            Climate :{' '}
          </Text>
          The climate varies regionally. The south-western Fergana Valley is
          subtropical and extremely hot in summer, with temperatures reaching
          40°C (104°F). The northern foothills are temperature rate the Tian
          Shan varies from a dry continental to a polar climate, depending on
          elevation. In the coldest areas, temperatures are sub-zero for around
          40 days in winter., and even some desert areas experience constant
          snowfall in this period, in the low lands the temperature ranges from
          around -6°C in January to 24°C in July. Language: Kyrgyzstan is one of
          the two former Soviet republics in Central Asia to retain Russian as
          an official language, Kyrgyz is the state language. Uzbek and English
          are other languages.
        </Text>

        <Flex style={{gap: 10}}>
          <Text fontWeight={800} fontSize={20} mb={2} color={'#1C375B'}>
            Why Kyrgyzstan ?
          </Text>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Low Tuition Fee</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Full English Medium</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Minimum Expenses</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>Five year MBBS programme</Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>WHO, PM & DC Approved</Text>
          </Flex>
        </Flex>

        <Flex style={{gap: 10}}>
          <Flex style={{gap: 2}}>
            <Text fontWeight={800} fontSize={20} color={'#1C375B'}>
              MBBS Program
            </Text>
            <Text fontWeight={500} fontSize={17} color={'#1C375B'}>
              Advantage of the mbbs program in kyrgyzstan
            </Text>
          </Flex>
          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              The MBBS program duration is typically 5 years, including clinical
              rotations.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Admission requirements are generally straight forward, with
              emphasis on science subjects.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              The curriculum covers basic sciences and clinical training with
              modern diagnostic tools.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Tuition fees are relatively low compared to many Western
              countries.
            </Text>
          </Flex>

          <Flex flexDirection={'row'} alignItems={'center'} style={{gap: 6}}>
            <Arrow name="checkcircle" size={20} color={'#1C375B'} />
            <Text>
              Medical universities in Kyrgyzstan are recognized by WHO, UNESCO,
              and various national medical councils.
            </Text>
          </Flex>
        </Flex>
        <Read state={"Kyrgystan"} />
      </Flex>
    </ScrollView>
  );
};

export default Kyrgyzstan;
