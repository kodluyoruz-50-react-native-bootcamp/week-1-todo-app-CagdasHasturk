import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native'

import {
  ListItem,
  MyInput,
  MyButton
} from './src/components/index'


const App = () => {

  const [entry, setEntry] = useState('');
  const [list, setList] = useState([]);

  changeTextHandler = (text) => {
    setEntry(text);
  }

  addToList = () => {
    let newList = [...list];
    newList.push({ myEntry: entry });
    setList(newList);
  }


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <View style={styles.topContainer}>
          <Text style={styles.headerText}>ALL TASKS</Text>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={list}
            renderItem={
              ({ item }) => <ListItem data={item} />
            }
          />
        </View>
        <View style={styles.bottomContainer}>
          <MyInput changeText={changeTextHandler} myTitle={entry} />
          <MyButton myTitle="Add" myPress={addToList} />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    alignItems: "center"
  },
  headerText: {
    color: '#29b6f6',
    fontSize: 20,
    fontWeight: '600',
  },
  bodyContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    padding: 10,
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: Dimensions.get('window').width,
  }

})