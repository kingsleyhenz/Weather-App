import React from "react";
import { Text, View, SafeAreaView, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons';

const App =()=>{
  return(
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
        <View style={styles.bodyWrapper}>
          
          <Text style={styles.description}>Its funny</Text>
          <Text style={styles.message}>Its perfect t-shirt weather</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    backgroundColor: 'red',
    flex: 1,
    paddingTop: 25
  },
  temp: {
    color: 'black',
    fontSize: 48,
    marginTop: 15
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    color: 'black',
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})

export default App;