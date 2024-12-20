import {
  View,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import {useState} from 'react';
import {
  Box,
  Flex,
  Image,
  Pressable,
  Text,
  useTheme,
  FlatList,
  ScrollView,
} from 'native-base';
import {DataTable} from 'react-native-paper';
import Home from 'react-native-vector-icons/AntDesign';
import Refresh from 'react-native-vector-icons/EvilIcons';
const Singlepage = ({navigation, route}) => {
  const [refresh, setRefresh] = useState(false);
  const [colleges, setColleges] = useState([]);
  const [filterColleges, setFilteredColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          'https://app-api.mbbsdunia.com/api/colleges',
        );
        await setColleges(response.data);
        // console.log(colleges);
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }, []);

  const {
    selectedcategory,
    selectedcityvalue,
    selectedcourse,
    selectedcollegename,
    type,
  } = route.params;

  // console.log(route.params);

  useEffect(() => {
    const filterCollegesbyCity = (
      colleges,
      selectedcategory,
      selectedcityvalue,
      selectedcourse,
    ) => {
      return colleges.filter(college => {
        const hasMatchingCutoff = college.cutOffs.some(
          cutoff => cutoff.category === selectedcategory,
        );
        const hasMatchingCourse = college.courses.some(
          course => course.Course === selectedcourse,
        );
        const isCityMatch = college.city === selectedcityvalue;

        return hasMatchingCourse && hasMatchingCutoff && isCityMatch;
      });
    };

    const filterCollegesbyCollegename = (
      colleges,
      selectedcategory,
      selectedcollegename,
      selectedcourse,
    ) => {
      return colleges.filter(college => {
        const hasMatchingCutoff = college.cutOffs.some(
          cutoff => cutoff.category === selectedcategory,
        );
        const hasMatchingCourse = college.courses.some(
          course => course.Course === selectedcourse,
        );
        const isCityMatch = college.name == selectedcollegename;

        return hasMatchingCourse && hasMatchingCutoff && isCityMatch;
      });
    };

    const filtercollegesonthebasisofseat = (
      colleges,
      selectedcityvalue,
      selectedcourse,
    ) => {
      return colleges.filter(college => {
        const hasMatchingCourse = college.courses.some(
          course => course.Course === selectedcourse,
        );
        const isCityMatch = college.city == selectedcityvalue;

        return hasMatchingCourse && isCityMatch;
      });
    };

    if (selectedcollegename != '') {
      const result = filterCollegesbyCollegename(
        colleges,
        selectedcategory,
        selectedcollegename,
        selectedcourse,
      );
      setFilteredColleges(result);
      // console.log(result);
    }
    if (selectedcityvalue != '') {
      const result = filterCollegesbyCity(
        colleges,
        selectedcategory,
        selectedcityvalue,
        selectedcourse,
      );
      setFilteredColleges(result);
    }
    if (type == 'seat') {
      const result = filtercollegesonthebasisofseat(
        colleges,
        selectedcityvalue,
        selectedcourse,
      );
      setFilteredColleges(result);
    }
  }, [
    selectedcategory,
    selectedcityvalue,
    selectedcourse,
    colleges,
    selectedcollegename,
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  const handleRefresh = () => {
    setRefresh(true);

    setTimeout(() => setRefresh(false), 1000);
  };
  return (
    <ScrollView borderWidth={5} height={'100%'} width={'100%'}>
      <ImageBackground
        source={require('../Assests/select_city.png')}
        style={{width: '100%',height:"100%"}}
        resizeMode="stretch"
        alt="ghhf">
        <Box
          borderBottomLeftRadius={20}
          borderBottomRightRadius={20}
          style={{width: '100%'}}
          background={'white'}
          height={'100px'}>
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
              <Home name="home" size={28} color={'white'} />
            </TouchableOpacity>
            <Text
              color={'white'}
              fontWeight={'medium'}
              fontFamily="Ruda-ExtraBold"
              fontSize={20}>
              College List
            </Text>
            <TouchableOpacity onPress={handleRefresh}>
              <Refresh name="refresh" size={28} color={'white'} />
            </TouchableOpacity>
          </Box>
        </Box>

        {isLoading ? (
          <ActivityIndicator size="large" color="#1C375B" />
        ) : (
          <Box alignItems={'center'}>
            {selectedcategory !== '' &&
              selectedcityvalue !== '' &&
              selectedcourse !== '' &&
              type === 'city' &&
              (filterColleges.length === 0 ? (
                <Text py={4}>No Data From This College </Text>
              ) : (
                filterColleges.map((college, index) => (
                  <Box
                    shadow={5}
                    key={index}
                    gap="2"
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '90%',
                      marginVertical: 20,
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        color: '#1C375B',
                      }}
                      fontFamily={'Ruda-ExtraBold'}>
                      {college.name}{' '}
                    </Text>
                    <Flex
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        State : {college.state}
                      </Text>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        City : {college.city}
                      </Text>
                    </Flex>
                    <Text
                      fontSize={14}
                      fontFamily={'Ruda-SemiBold'}
                      color={'#333333'}>
                      Air : {college.cutOffs[0].round1Rank}
                    </Text>
                    <Flex
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        Fee: {college.courses[0].TutionFee}
                      </Text>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        College Type: {college.cutOffs[0].seatType}
                      </Text>
                    </Flex>
                  </Box>
                ))
              ))}

            {selectedcityvalue !== '' &&
              selectedcourse !== '' &&
              type === 'seat' &&
              (filterColleges.length === 0 ? (
                <Text>No Data From This College </Text>
              ) : (
                filterColleges.map((college, index) => (
                  <Box
                    shadow={5}
                    key={index}
                    gap="2"
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '90%',
                      marginVertical: 20,
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        color: '#1C375B',
                      }}
                      fontFamily={'Ruda-SemiBold'}>
                      {college.name}{' '}
                    </Text>
                    <Flex
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        State: {college.state}
                      </Text>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        City: {college.city}
                      </Text>
                    </Flex>
                    <Text
                      fontSize={14}
                      fontFamily={'Ruda-SemiBold'}
                      color={'#333333'}>
                      Air: {college.cutOffs[0].round1Rank}
                    </Text>
                    <Flex
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        Fee: {college.courses[0].TutionFee}
                      </Text>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        College Type: {college.cutOffs[0].seatType}
                      </Text>
                    </Flex>
                  </Box>
                ))
              ))}

            {/* { selectedcategory!="" && selectedcourse!="" && selectedcollegename!="" &&  filterColleges.map((college,index)=>(
      <Box
      shadow={5}
      key={index}
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
        fontFamily={"Ruda-SemiBold"}>
{college.name}        </Text>
      <Flex flexDirection={'row'} justifyContent={'space-between'}>
        <Text fontSize={14} fontFamily={"Ruda-SemiBold"} color={'#333333'}>
          State: {college.state}
        </Text>
        <Text fontSize={14} fontFamily={"Ruda-SemiBold"} color={'#333333'}>
          City: AMRELI
        </Text>
      </Flex>
      <DataTable>
      <DataTable.Header>
          <DataTable.Title>Course Name</DataTable.Title>
          <DataTable.Title>Details</DataTable.Title>
          <DataTable.Title numeric>Cut Off</DataTable.Title>
        </DataTable.Header>

        {college.courses.map(course => (
          <DataTable.Row key={course.id}>
            <DataTable.Cell>{course.name}</DataTable.Cell>
            <DataTable.Cell>{course.details}</DataTable.Cell>
            <DataTable.Cell numeric>{course.cutOff}</DataTable.Cell>
          </DataTable.Row>
        ))}
        </DataTable>


    </Box>

    ))} */}

            {selectedcategory !== '' &&
              selectedcollegename !== '' &&
              selectedcourse !== '' &&
              type === 'college' &&
              (filterColleges.length === 0 ? (
                <Text>No Data From This College </Text>
              ) : (
                filterColleges.map((college, index) => (
                  <Box
                    shadow={5}
                    key={index}
                    gap="2"
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '90%',
                      marginVertical: 20,
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        color: '#1C375B',
                      }}
                      fontFamily={'Ruda-SemiBold'}>
                      {college.name}{' '}
                    </Text>
                    <Flex
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        State: {college.state}
                      </Text>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        City: {college.state}
                      </Text>
                    </Flex>
                    <Text
                      fontSize={14}
                      fontFamily={'Ruda-SemiBold'}
                      color={'#333333'}>
                      Air: {college.cutOffs[0].round1Rank}
                    </Text>
                    <Flex
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        Fee: {college.courses[0].TutionFee}
                      </Text>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        College Type: {college.cutOffs[0].seatType}
                      </Text>
                    </Flex>

                    <ScrollView horizontal={true}>
                      <DataTable style={{minWidth: 800}}>
                        <DataTable.Header>
                          <DataTable.Title style={styles.headerCell}>
                            Branch
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Course
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Duration
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Seats
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Fee
                          </DataTable.Title>
                        </DataTable.Header>
                        {college.courses.map(course => (
                          <DataTable.Row key={course._id}>
                            <DataTable.Cell style={styles.cell}>
                              {course.Branch}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {course.Course}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {course.CourseDuration}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {course.TotalSeat}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {course.TutionFee}
                            </DataTable.Cell>
                          </DataTable.Row>
                        ))}
                      </DataTable>
                    </ScrollView>
                  </Box>
                ))
              ))}

            {selectedcategory !== '' &&
              selectedcollegename !== '' &&
              selectedcourse !== '' &&
              type === 'cutoff' &&
              (filterColleges.length === 0 ? (
                <Text>No Data From This College </Text>
              ) : (
                filterColleges.map((college, index) => (
                  <Box
                    shadow={5}
                    key={index}
                    gap="2"
                    style={{
                      backgroundColor: '#FFFFFF',
                      width: '90%',
                      marginVertical: 20,
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 'medium',
                        color: '#1C375B',
                      }}
                      fontFamily={'Ruda-SemiBold'}>
                      {college.name}{' '}
                    </Text>
                    <Flex
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        State: {college.state}
                      </Text>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        City: {college.state}
                      </Text>
                    </Flex>
                    <Text
                      fontSize={14}
                      fontFamily={'Ruda-SemiBold'}
                      color={'#333333'}>
                      Air: {college.cutOffs[0].round1Rank}
                    </Text>
                    <Flex
                      flexDirection={'row'}
                      justifyContent={'space-between'}>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        Fee: {college.courses[0].TutionFee}
                      </Text>
                      <Text
                        fontSize={14}
                        fontFamily={'Ruda-SemiBold'}
                        color={'#333333'}>
                        College Type: {college.cutOffs[0].seatType}
                      </Text>
                    </Flex>

                    <ScrollView horizontal={true}>
                      <DataTable style={{minWidth: 800}}>
                        <DataTable.Header>
                          <DataTable.Title style={styles.headerCell}>
                            College Type
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Counselling Type
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Category
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Sub Category
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Domicile
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Round1 rank
                          </DataTable.Title>
                          <DataTable.Title style={styles.headerCell}>
                            Round2 rank
                          </DataTable.Title>
                        </DataTable.Header>
                        {college.cutOffs.map(cutoff => (
                          <DataTable.Row key={cutoff._id}>
                            <DataTable.Cell style={styles.cell}>
                              {cutoff.seatType}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {cutoff.counsellingType}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {cutoff.category}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {cutoff.subCategory}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {cutoff.round1Rank}
                            </DataTable.Cell>
                            <DataTable.Cell style={styles.cell}>
                              {cutoff.round2Rank}
                            </DataTable.Cell>
                          </DataTable.Row>
                        ))}
                      </DataTable>
                    </ScrollView>
                  </Box>
                ))
              ))}
          </Box>
        )}
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    minWidth: 140,
    maxWidth: 140,
    justifyContent: 'center',
  },
  headerCell: {
    minWidth: 140,
    maxWidth: 140,
    justifyContent: 'center',
  },
});

export default Singlepage;
