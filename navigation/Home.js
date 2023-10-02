import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useIsFocused } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Explore from "../screens/Home/Explore";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import TabIcon from "../components/Home/TabIcon";

export default function HomeNavigation() {
  const Tab = createBottomTabNavigator();
  const isFocused = useIsFocused();

  return (
    <Tab.Navigator
      screenOptions={{
        headerBackgroundContainerStyle: "red",
        tabBarStyle:{
            // backgroundColor:'red',
            margin:16,
            borderRadius:8,
            paddingTop:15,
            height:heightPercentageToDP((60/812)*100),
            paddingbottom:15,
            shadowRadius:1000,
            shadowOpacity:1,
            shadowColor:"#cccc"

        }
      }}
      
    >
      <Tab.Screen
        name="HomeTabScreen"
        options={{
          headerShown: false,
          tabBarLabel: "",
          headerTitle:true,
        
          tabBarIcon: ({ focused }) => {
            return (
              <TabIcon focused={focused}
              iconName={'compass-outline'}
              tabName={'Explore'}
              />
            );
          },
          tabBarActiveTintColor: "red",
          
        }}
        component={Explore}
      />
      <Tab.Screen
        name="Categoris"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
                <TabIcon focused={focused} 
                iconName={'heart-outline'}
              tabName={'Wishlist'}
                />
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={Explore}
      />
      <Tab.Screen
        name="NotificationScreen"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <View className={`m1-2 bg-white`}>
                <TabIcon focused={focused}
                 iconName={'magnet-outline'}
                 tabName={'Tickets'}
                />
              </View>
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={Explore}
      />

      <Tab.Screen
        name="Cart"
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
                <TabIcon focused={focused}
                iconName={'person-outline'}
                tabName={'Profile'}
                />
            );
          },
          tabBarActiveTintColor: "red",
        }}
        component={Explore}
      />
    </Tab.Navigator>
  );
}
