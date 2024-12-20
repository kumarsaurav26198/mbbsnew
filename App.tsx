import React from 'react';
// 1. import `NativeBaseProvider` component
import {NativeBaseProvider, extendTheme} from 'native-base';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Screen/Splash';
import Login from './Screen/Login';
import MenuPage from './Screen/Menu_Page';
import SelectCity from './Screen/Select_city';
import CityWise from './Screen/CityWise';
import CollegeList from './Screen/CollegeList';
import Singlepage from './Screen/Singlepage';
import ContactUs from './Screen/ContactUs';
import MyWebComponent from './Screen/DownLoadpdf';
import SelectCourse from './Screen/SelectCourse';
import AbroadCountry from './Screen/AboardCourse';
import Kyrgyzstan from './Screen/Kyrgystan';
import Russia from './Screen/Russia';
import Georgia from './Screen/Georgia';
import Bangladesh from './Screen/Bangledesh';
import Nepal from './Screen/Nepal';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="splash"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="selectcourse"
            component={SelectCourse}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="menupage"
            component={MenuPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="abroad"
            component={AbroadCountry}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="selectcity"
            component={SelectCity}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="citywise"
            component={CityWise}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="collegelist"
            component={CollegeList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Singlepage"
            component={Singlepage}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="ContactUs"
            component={ContactUs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PDF"
            component={MyWebComponent}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="kyrgyzstan"
            component={Kyrgyzstan}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Russia"
            component={Russia}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Georgia"
            component={Georgia}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="bangladesh"
            component={Bangladesh}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Nepal"
            component={Nepal}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
