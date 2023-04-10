import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Text>This is my first ReactNative app!</Text>
      <Text>Provera za Marka Provera za Marka Provera za Marka</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17f032',
    alignItems: 'center',
    justifyContent: 'center',
    color:"#fff123",
  },
});
