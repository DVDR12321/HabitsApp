import { StyleSheet, Button, Text, View } from "react-native";

function HomeScreen ({navigation}) {
    return (
      <View style = {styles.home}>
        <Text style = {styles.text}>Home Screen</Text>
        <Text style = {styles.text}>Profile</Text>
        <Text style = {styles.text}>Stats</Text>
        <Button title = "Go to Tasks" onPress={() => navigation.navigate('Tasks')}></Button>
      </View>
    );
  }

  const styles = StyleSheet.create({
    home: {
      flex: 1,
      backgroundColor: '#0a0359',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color:"#FFF",
    },
    other: {
      flex: 1,
      backgroundColor: '#0a0359',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

  export default HomeScreen;