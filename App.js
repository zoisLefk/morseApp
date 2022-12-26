import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextToMorseIcon, TextToMorseIconSelected, MorseToTextIcon, MorseToTextIconSelected, MorseScreenIcon, MorseScreenIconSelected } from './icons/icons';

const Tab = createBottomTabNavigator();

import { TextToMorse } from './screens/textToMorse';
import { MorseToText } from './screens/morseToText';
import MorseScreen from './screens/morseScreen';

export default function App() {
  const displayBar = React.useState(true)
 
  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'TextToMorse') {
                iconName = focused ? <TextToMorseIconSelected /> : <TextToMorseIcon />;
              } else if (route.name === 'MorseToText') {
                iconName = focused ? <MorseToTextIconSelected /> : <MorseToTextIcon />;
              } else if (route.name === 'MorseScreen') {
                iconName = focused ? <MorseScreenIconSelected /> : <MorseScreenIcon />;
              }
  
              return iconName;
            },
            tabBarActiveTintColor: '#000',
            tabBarActiveBackgroundColor: '#75bee6',
            tabBarInactiveTintColor: 'gray',
            tabBarInactiveBackgroundColor: '#023954',
            tabBarStyle: {
              display: displayBar ? 'flex' : 'none',
            },
            tabBarIconStyle: {
              marginTop: '10%'
            }
          })}
        >
          <Tab.Screen
            name='TextToMorse'
            component={TextToMorse}
            options={{ 
              title: 'Από κείμενο σε morse',
              headerShown: false,
              tabBarHideOnKeyboard: true
            }}
          />
          <Tab.Screen 
            name='MorseToText'
            component={MorseToText}
            options={{ 
              title: 'Από morse σε κείμενο',
              headerShown: false,
            }}
          />
          <Tab.Screen 
            name='MorseScreen'
            component={MorseScreen}
            options={{ 
              title: 'Morse',
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  );
}