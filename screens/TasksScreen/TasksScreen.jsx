import { StyleSheet, Button, Text, View, StatusBar } from "react-native";

function TasksScreen({navigation}){
    return (
      <View style = {styles.other}>
        <Text style = {styles.text} >Daily weekly monthly tasks, one time special quests etc.</Text>
        <Button title = "Go to Home" onPress={() => navigation.navigate('Home')}></Button>
        <StatusBar style="auto" />
      </View>
    )
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
      fontWeight:"bold",
    },
    other: {
      flex: 1,
      backgroundColor: '#0a0359',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default TasksScreen;