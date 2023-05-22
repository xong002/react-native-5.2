import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Modal, Pressable, Alert } from 'react-native';
import React, { useState, useMemo } from "react"; // the import
import RadioGroup from 'react-native-radio-buttons-group';


export default function App() {
  const [name, setName] = useState(null); 
  const [age, setAge] = useState(null); 
  const radioButtons = useMemo(() => ([
    {
      id: 'I like coffee.', // acts as primary key, should be unique and non-empty string
      label: 'Yes',
    },
    {
      id: 'I do not like coffee',
      label: 'No',
    }
  ]), []);

  const [selectedId, setSelectedId] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>

      <View
        style={[
          styles.container,
          {
            marginTop: 40,
          },
        ]}>
        <Text style={styles.text}>
          Your Name:
        </Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        ></TextInput>
      </View>
      <View
        style={[
          styles.container,
          {
            marginTop: 0,
          },
        ]}>
        <Text style={styles.text}>
          Your Age:
        </Text>
        <TextInput
          style={styles.input}
          value={age}
          onChangeText={setAge}
        ></TextInput>
      </View>

      <View
        style={[
          styles.container,
          {
            marginTop: 0,
          },
        ]}>
        <Text style={styles.text}>
          Like Coffee?
        </Text>
        <RadioGroup layout={'row'}
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
      </View>

      <Button title="Submit" onPress={() => setModalVisible(true)} />

    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={[styles.modalText, {fontSize: 20}]}>Summary</Text>
            <Text style={styles.modalText}>My name is {name}. I am {age} years old. {selectedId}</Text>
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>

    </ScrollView>
    // <View
    //   style={[
    //     styles.container,
    //     {
    //       // Try setting `flexDirection` to `"row"`.
    //       flexDirection: "row",
    //     },
    //   ]}
    // >
    //   <View style={{ flex: 1, backgroundColor: "red" }} />
    //   <View style={{ flex: 2, backgroundColor: "darkorange" }} />
    //   <View style={{ flex: 4, backgroundColor: "green" }} />
    //     <Image
    //   style={styles.image}
    //   source={{
    //     uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR2wcpqmDDUjViB6TEfWO-hxzaf5cwENejaQ&usqp=CAU",
    //   }}
    // ></Image>
    // </View>
  );
}

function handleSubmit() { };

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  container: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
  },
  image: {
    height: 500,
    width: 500,
  },
  text: {
    fontSize: 18,
    width: 100
  },
  input: {
    height: 30,
    marginTop: 0,
    marginLeft: 10,
    flex: 1,
    borderWidth: 1,
    padding: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {

  },
  textStyle: {
    fontWeight: 'bold',
    // textAlign: 'left',
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'left',
  },
});
