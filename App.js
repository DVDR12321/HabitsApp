import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function HomeScreen ({navigation}) {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>Home Screen</Text>
      <Button title = "go to Other Page" onPress={() => navigation.navigate('Other')}></Button>
    </View>
  );
}

function OtherScreen(){
  return (
    <View>
      <Text style={styles.other}>Other Screen</Text>
      <StatusBar style="auto" />
    </View>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Other"
          component={OtherScreen}
          options={{ title: "OtherTitle" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#17f032',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:"#000"
  },
  other: {
    flex: 1,
    backgroundColor: '#17f032',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
