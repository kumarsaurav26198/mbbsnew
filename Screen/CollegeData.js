import React, {useEffect, useState} from 'react';
import {ScrollView, Image} from 'react-native';
import {VStack, Box, Text, Button, HStack, Spinner, Icon} from 'native-base';
import axios from 'axios';

const College = ({state}) => {
  console.log('check', state);
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    const getData = async () => {

        if(state){
            try {
                console.log("bhadwas")
                const res = await axios.get(
                  `https://api.mbbsdunia.com/api/state/Russia`,
                );
                console.log('check', res.data,"check");
              } catch (error) {
                console.error('Error fetching universities:', error);
              }
        }else{
            console.log("la lu")
        }

    };

    getData();
  }, [state]);


  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          'https://app-api.mbbsdunia.com/api/colleges',
        );
       console.log("check",response)
      } catch (error) {
        console.error(error);
      }
    };

    fetchdata();
  }, []);

  //   return (
  // <ScrollView contentContainerStyle={{ padding: 16 }}>
  //   {universities.length === 0 ? (
  //     <Box width="100%" alignItems="center" mt={6}>
  //       <Text>Loading Colleges....</Text>
  //       <Spinner color="blue.500" />
  //     </Box>
  //   ) : (
  //     universities.map((university) => (
  //       <Box
  //         key={university.collegename}
  //         borderWidth="1"
  //         borderColor="#01B4EC"
  //         borderRadius="20"
  //         overflow="hidden"
  //         p="4"
  //         bg="white"
  //         cursor="pointer"
  //         shadow="5"
  //         mb="5"
  //         _hover={{
  //           transform: [{ scale: 1.05 }],
  //           shadow: 9,
  //         }}
  //       >
  //         <HStack space={4} alignItems="flex-start">
  //           <Image
  //             source={{ uri: university.image2 }}
  //             alt={university.collegename}
  //             style={{ width: 100, height: 100, borderRadius: 50 }}
  //           />
  //           <VStack alignItems="flex-start" space={2} flex="1">
  //             <Text
  //               fontSize="lg"
  //               fontWeight="bold"
  //               numberOfLines={1}
  //             >
  //               {university.collegename}
  //             </Text>
  //             <HStack space={1} alignItems="center">
  //               <Icon as={MdPlace} size="sm" />
  //               <Text color="gray.600" numberOfLines={1}>
  //                 {university.address}, {university.state}
  //               </Text>
  //             </HStack>
  //             {university.courses
  //               .filter((course) => course.course.replace(/\s/g, "") === "MBBS")
  //               .map((ele) => (
  //                 <Box
  //                   key={ele.course}
  //                   bg="gray.100"
  //                   width="100%"
  //                   p="2"
  //                   borderRadius="md"
  //                 >
  //                   <Text>
  //                     <Text bold>Courses Offered: </Text> {ele.course}
  //                   </Text>
  //                 </Box>
  //               ))}
  //           </VStack>
  //         </HStack>
  //         <Button
  //           mt="4"
  //           borderRadius="10"
  //           width="full"
  //           onPress={() => handleClick(university._id)}
  //           borderColor="#023B7D"
  //           borderWidth="2"
  //           _hover={{ bg: "#023B7D", _text: { color: "white" } }}
  //         >
  //           Details
  //         </Button>
  //       </Box>
  //     ))
  //   )}
  // </ScrollView>
  //   );
};

export default College;
