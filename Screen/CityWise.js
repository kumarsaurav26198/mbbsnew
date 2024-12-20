import {Box, Flex, Image, Pressable, Text, useTheme} from 'native-base';
import {useEffect, useState} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import Arrow from 'react-native-vector-icons/Entypo';

const CityWise = ({navigation, route}) => {
  const theme = useTheme();
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(null);
  const [isStateFocus, setIsStateFocus] = useState(false);
  const [iscourseFocus, setIscourseFocus] = useState(false);
  const [iscategoryFocus, setIscategoryfocus] = useState(false);
  const [selectedcityvalue, setSelectedcityvalue] = useState('');
  const [selectedcategory, setSelectedcategory] = useState('');
  const [selectedcourse, setSelectedcourse] = useState('');
  const [selectedcollegename, setSelectedcollegename] = useState(null);
  const [collegnamearray, setCollegenamearray] = useState([]);
  const [course, setCourse] = useState([]);
  const [courseType, setCoursetype] = useState('');

  // console.log(route.params);
  const {cityValue} = route.params;
  const {type} = route.params;
  const {section} = route.params;
  const {stateValue} = route.params;

  // console.log(selectedcategory);
  // console.log(selectedcityvalue);
  // console.log(selectedcourse);
  // console.log(selectedcollegename);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          'https://app-api.mbbsdunia.com/api/colleges',
        );
        const collegeNames = await response.data
          .filter(college => college.state === stateValue)
          .map(college => ({label: college.name, value: college.name}));
        setCollegenamearray(collegeNames);
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }, []);

  useEffect(() => {
    if (section === '1') {
      const course = [
        {label: 'MBBS', value: 'MBBS'},
        {label: 'MD', value: 'MD'},
      ];

      setCourse(course);
      setCoursetype('MBBS,MD');
    } else if (section === '2') {
      const course = [
        {label: 'MS', value: 'MS'},
        {label: 'DM', value: 'DM'},
      ];

      setCourse(course);
      setCoursetype('MS,DM');
    } else if (section === '3') {
      const course = [
        {label: 'MCH', value: 'MCH'},
        {label: 'DIP', value: 'DIP'},
      ];

      setCourse(course);
      setCoursetype('MCH,DIP');
    }
  }, [route.params]);

  const Category = [
    {label: 'GENERAL', value: 'GENERAL'},
    {label: 'OBC', value: 'OBC'},
    {label: 'SC', value: 'SC'},
    {label: 'ST', value: 'ST'},
    {label: 'EWS', value: 'EWS'},
  ];

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
          <Box flexDirection={'row'}>
            <Text
              color={'#F4903A'}
              fontWeight={'medium'}
              fontFamily={'Ruda-Bold'}
              fontSize={22}>
              {type ? type.charAt(0).toUpperCase() + type.slice(1) : ''}{' '}
            </Text>
            <Text
              color={'white'}
              fontWeight={'medium'}
              fontFamily={'Ruda-Bold'}
              fontSize={22}>
              Wise Medical Closure
            </Text>
          </Box>
          <Text
            color={'#F4903A'}
            fontWeight={'medium'}
            fontSize={15}
            fontFamily="Ruda-ExtraBold">
            {courseType}
          </Text>
        </Box>
      </Box>

      <Box
        flex={1}
        style={{
          alignItems: 'center',
          marginVertical: 50,
          gap: 15,
        }}>
        {cityValue.length > 0 && (
          <DropDownPicker
            items={course}
            open={iscourseFocus}
            value={selectedcourse}
            setOpen={setIscourseFocus}
            setValue={setSelectedcourse}
            setItems={() => {}}
            placeholder="Select course"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            textStyle={{color:"#1C375B",
            fontSize: 16,

            }}
          />
        )}

        {type == 'city' && (
          <DropDownPicker
            items={cityValue}
            open={isStateFocus}
            value={selectedcityvalue}
            setOpen={setIsStateFocus}
            setValue={setSelectedcityvalue}
            setItems={() => {}}
            placeholder="Select city"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            textStyle={{color:"#1C375B",
              fontSize: 16,
  
              }}
          />
        )}

        {type == 'seat' && (
          <DropDownPicker
            items={cityValue}
            open={isStateFocus}
            value={selectedcityvalue}
            setOpen={setIsStateFocus}
            setValue={setSelectedcityvalue}
            setItems={() => {}}
            placeholder="Select city"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            textStyle={{color:"#1C375B",
              fontSize: 16,
  
              }}
          />
        )}

        {type == 'college' && (
          <DropDownPicker
            items={collegnamearray}
            open={isStateFocus}
            value={selectedcollegename}
            setOpen={setIsStateFocus}
            setValue={setSelectedcollegename}
            setItems={() => {}}
            placeholder="Select college name"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            textStyle={{color:"#1C375B",
              fontSize: 16,
  
              }}
          />
        )}

        {type == 'cutoff' && (
          <DropDownPicker
            items={collegnamearray}
            open={isStateFocus}
            value={selectedcollegename}
            setOpen={setIsStateFocus}
            setValue={setSelectedcollegename}
            setItems={() => {}}
            placeholder="Select college name"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            textStyle={{color:"#1C375B",
              fontSize: 16,
  
              }}
          />
        )}

        {type != 'seat' && (
          <DropDownPicker
            fontFamily="Ruda-ExtraBold"
            items={Category}
            open={iscategoryFocus}
            value={selectedcategory}
            setOpen={setIscategoryfocus}
            setValue={setSelectedcategory}
            setItems={() => {}}
            placeholder="Select category"
            containerStyle={styles.dropdownContainer}
            style={styles.dropdown}
            textStyle={{color:"#1C375B",
              fontSize: 16,
  
              }}
          />
        )}
      </Box>

      <Flex alignItems="center" height={'30%'}>
        <Pressable
          onPress={() =>
            navigation.navigate('Singlepage', {
              selectedcategory: selectedcategory,
              selectedcityvalue: selectedcityvalue,
              selectedcourse: selectedcourse,
              selectedcollegename: selectedcollegename,
              type: type,
            })
          }
          borderRadius={50}
          shadow="5"
          width={'42%'}
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
                Submit
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
    </ImageBackground>
  );
};

export default CityWise;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    zIndex: 999,
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
    zIndex: 999,
  },
});
