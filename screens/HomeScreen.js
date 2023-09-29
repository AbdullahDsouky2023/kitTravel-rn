import {
  View,
  ScrollView,
  Text,
  StatusBar
} from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-[#393939]  h-full">
      <View className='bg-red-400'>
        <Text>
        Start here

        </Text>
      </View>
     <StatusBar/>
    </ScrollView>
  );
}
 