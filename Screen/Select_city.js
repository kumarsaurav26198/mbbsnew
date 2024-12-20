import {useNavigation} from '@react-navigation/native';
import {Box, Flex, Image, Pressable, Text, useTheme} from 'native-base';
import {useState, useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import SelectList from 'react-native-dropdown-select-list'; // Correct import statement
import DropDownPicker from 'react-native-dropdown-picker';
import {state} from '../utils/data';
import {Section} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import Arrow from 'react-native-vector-icons/Entypo';

const SelectCity = ({navigation, route}) => {
  const theme = useTheme();
  const [stateValue, setStateValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const [isStateFocus, setIsStateFocus] = useState(false);
  const {section} = route.params;
  const [courseType, setCoursetype] = useState('');

  // console.log(route.params);

  const data = [
    {label: '1', value: 'Andhra Pradesh'},
    {label: '2', value: 'Arunachal Pradesh'},
    {label: '3', value: 'Assam'},
    {label: '4', value: 'Bihar'},
    {label: '5', value: 'Chhattisgarh'},
    {label: '6', value: 'Goa'},
    {label: '7', value: 'Gujarat'},
    {label: '8', value: 'Haryana'},
    {label: '9', value: 'Himachal Pradesh'},
    {label: '10', value: 'Jharkhand'},
    {label: '11', value: 'Karnataka'},
    {label: '12', value: 'Kerala'},
    {label: '13', value: 'Madhya Pradesh'},
    {label: '14', value: 'Maharashtra'},
    {label: '15', value: 'Manipur'},
    {label: '16', value: 'Meghalaya'},
    {label: '17', value: 'Mizoram'},
    {label: '18', value: 'Nagaland'},
    {label: '19', value: 'Odisha'},
    {label: '20', value: 'Punjab'},
    {label: '21', value: 'Rajasthan'},
    {label: '22', value: 'Sikkim'},
    {label: '23', value: 'Tamil Nadu'},
    {label: '24', value: 'Telangana'},
    {label: '25', value: 'Tripura'},
    {label: '26', value: 'Uttar Pradesh'},
    {label: '27', value: 'Uttarakhand'},
    {label: '28', value: 'West Bengal'},
    {label: '29', value: 'Andaman and Nicobar Islands'},
    {label: '30', value: 'Chandigarh'},
    {label: '31', value: 'Dadra and Nagar Haveli and Daman and Diu'},
    {label: '32', value: 'Delhi'},
    {label: '33', value: 'Lakshadweep'},
    {label: '34', value: 'Puducherry'},
  ];

  const stateItems = Object.keys(state).map(state => ({
    label: state,
    value: state,
  }));

  const cityItems = stateValue
    ? state[stateValue].map((city, index) => ({
        label: city,
        value: city,
        _index: index,
      }))
    : [];

  useEffect(() => {
    if (section === '1') {
      setCoursetype('MBBS,MD');
    } else if (section === '2') {
      setCoursetype('MS,DM');
    } else if (section === '3') {
      setCoursetype('MCH,DIP');
    }
  }, [route.params]);

  return (
    <ImageBackground
      source={require('../Assests/select_city.png')}
      style={{width: '100%', height: '100%'}}
      resizeMode="stretch">
      <Box
        borderBottomLeftRadius={30}
        borderBottomRightRadius={30}
        style={{width: '100%', height: '15%'}}
        background={'white'}>
        <Box
          style={{width: '100%', height: '96%', gap: 4}}
          borderBottomRightRadius={30}
          borderBottomLeftRadius={30}
          justifyContent={'center'}
          alignItems={'center'}
          background={'#1C375B'}>
          <Text
            color={'white'}
            // fontWeight={'medium'}
            fontFamily={'Ruda-Medium'}
            fontSize={22}>
            Medical
          </Text>
          <Text
            color={'#F4903A'}
            // fontWeight={'medium'}
            fontSize={15}
            fontFamily={'Ruda-Medium'}>
            {courseType}
          </Text>
        </Box>
      </Box>

      <Box
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 50,
        }}>
        <DropDownPicker
          items={stateItems}
          open={isStateFocus}
          value={stateValue}
          setOpen={setIsStateFocus}
          setValue={setStateValue}
          setItems={() => {}}
          placeholder="Select State"

          textStyle={{
            color: '#1C375B',
            fontSize: 16,
          }}

          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          onChangeValue={() => setCityValue(null)}
        />
      </Box>

      <Box
        onPress={() => navigate.navigate('citywise')}
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 10,
        }}>
        <Pressable
          shadow="9"
          borderRadius={10}
          width={'90%'}
          bg={'white'}
          borderColor={'#1C375B'}
          borderLeftWidth={5}
          borderRightWidth={5}
          onPress={() =>
            navigation.navigate('citywise', {
              cityValue: cityItems,
              type: 'city',
              section: section,
              stateValue: stateValue,
            })
          }>
          {({isPressed}) => (
            <Flex
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              px={6}
              backgroundColor={isPressed ? '#1C375B' : '#FFFFFF'}>
              <Text
                fontFamily={'Ruda-Bold'}
                fontSize={16}
                py={3}
                textAlign={'center'}
                style={{
                  borderRadius: 10,
                  color: isPressed ? 'white' : '#1C375B',
                  fontSize: isPressed ? 20 : 16,
                  fontWeight: isPressed ? 800 : 400,
                  transform: [
                    {
                      scale: isPressed ? 1 : 0.92,
                    },
                  ],
                }}>
                City Wise Closure
              </Text>

              <Arrow
                name="arrow-with-circle-right"
                size={24}
                color={isPressed ? 'white' : '#1C375B'}
              />
            </Flex>
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
          onPress={() =>
            navigation.navigate('citywise', {
              cityValue: cityItems,
              type: 'college',
              section: section,
              stateValue: stateValue,
            })
          }>
          {({isPressed}) => (
            <Flex
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              px={6}
              backgroundColor={isPressed ? '#1C375B' : '#FFFFFF'}>
              <Text
                fontFamily={'Ruda-Bold'}
                fontSize={16}
                py={3}
                textAlign={'center'}
                style={{
                  borderRadius: 10,
                  color: isPressed ? 'white' : '#1C375B',
                  fontSize: isPressed ? 20 : 16,
                  fontWeight: isPressed ? 800 : 400,
                  transform: [
                    {
                      scale: isPressed ? 1 : 0.92,
                    },
                  ],
                }}>
                College Wise Closure
              </Text>

              <Arrow
                name="arrow-with-circle-right"
                size={24}
                color={isPressed ? 'white' : '#1C375B'}
              />
            </Flex>
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
          onPress={() =>
            navigation.navigate('citywise', {
              cityValue: cityItems,
              type: 'cutoff',
              section: section,
              stateValue: stateValue,
            })
          }>
          {({isPressed}) => (
            <Flex
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              px={6}
              backgroundColor={isPressed ? '#1C375B' : '#FFFFFF'}>
              <Text
                fontFamily={'Ruda-Bold'}
                fontSize={16}
                py={3}
                textAlign={'center'}
                style={{
                  borderRadius: 10,
                  color: isPressed ? 'white' : '#1C375B',
                  fontSize: isPressed ? 20 : 16,
                  fontWeight: isPressed ? 800 : 400,
                  transform: [
                    {
                      scale: isPressed ? 1 : 0.92,
                    },
                  ],
                }}>
                Cut Off Wise Closure
              </Text>

              <Arrow
                name="arrow-with-circle-right"
                size={24}
                color={isPressed ? 'white' : '#1C375B'}
              />
            </Flex>
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
          onPress={() =>
            navigation.navigate('citywise', {
              cityValue: cityItems,
              type: 'seat',
              section: section,
              stateValue: stateValue,
            })
          }>
          {({isPressed}) => (
            <Flex
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              px={6}
              backgroundColor={isPressed ? '#1C375B' : '#FFFFFF'}>
              <Text
                fontFamily={'Ruda-Bold'}
                fontSize={16}
                py={3}
                textAlign={'center'}
                style={{
                  borderRadius: 10,
                  color: isPressed ? 'white' : '#1C375B',
                  fontSize: isPressed ? 20 : 16,
                  fontWeight: isPressed ? 800 : 400,
                  transform: [
                    {
                      scale: isPressed ? 1 : 0.92,
                    },
                  ],
                }}>
                Colleges and seats
              </Text>

              <Arrow
                name="arrow-with-circle-right"
                size={24}
                color={isPressed ? 'white' : '#1C375B'}
              />
            </Flex>
          )}
        </Pressable>
      </Box>
    </ImageBackground>
  );
};

export default SelectCity;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  dropdownContainer: {
    width: '90%',
    marginBottom: 20,
  },
  dropdown: {
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderRadius: 10,
    borderColor: '#1C375B',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 6,
    shadowColor: 'black',
    elevation: 9,
  },
});
