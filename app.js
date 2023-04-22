import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, useState, Image, Linking, ScrollView, Button} from 'react-native';
import Constants from 'expo-constants';
import {SelectDropdown, DropdownData} from "expo-select-dropdown";
import { SelectList } from 'react-native-dropdown-select-list'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
var stores = [
  {key: 1, value: 'rei.com'},
]
var hobbyGeneral = [
  {key: 1, value: 'Snow'},
  {key: 2, value: 'Rock Climbing'},
]
var hobbySpecific = [
  {key: 1, value: 'Snowboarding'},
  {key: 2, value: 'Skiing'},
  {key: 3, value: 'Rock Climbing'},
]
var defaultValues = [
          {key: '1', store: 1, hobbyGeneral: 1, hobbySpecific: 1, link: 'https://www.rei.com/product/193947/arbor-ethos-snowboard-womens-20222023', img: "https://www.rei.com/media/bae1912b-315a-466e-8fff-abcb985a2492.jpg?size=784x588", name:'Arbor Snowboard', price: '239.83'},
          {key: '2', store: 1, hobbyGeneral: 1, hobbySpecific: 2, link: 'https://www.rei.com/product/199291/rossignol-experience-80-carbon-w-skis-with-bindings-womens-20212022', img:"https://www.rei.com/media/68f7dd36-2e11-49a7-b746-318242191a99.jpg?size=784x588", name:'Rossignol Skis', price: '559.83'},
          {key: '3', store: 1, hobbyGeneral: 2, hobbySpecific: 3, link: 'https://www.rei.com/product/203930/la-sportiva-tarantulace-climbing-shoes-mens', img:"https://www.rei.com/media/0108620f-59fd-4905-babc-38f98930e187.jpg?size=784x588", name:'Tarantulace Climbing Shoes', price: '89.00'},
          {key: '4', store: 1, hobbyGeneral: 2, hobbySpecific: 3, link: 'https://www.rei.com/product/169549/camp-energy-cr3-harness-mens', img:"https://www.rei.com/media/109e9e43-259c-4b0e-aafa-51691e4775ba.jpg?size=784x588", name:'C.A.M.P. Energy CR3 Harness', price: '49.95'},
        ]

        

export default function App() {
  const [selected1, setSelected1] = React.useState('');
  const [selected2, setSelected2] = React.useState('');
  const [selected3, setSelected3] = React.useState('');

const buttonPressed = () => {
  console.log(selected1);
  console.log(selected2);
  console.log(selected3);
}

function handleOpenWithLinking(link) {
      Linking.openURL(link);
}
function shopObjects(values) {
  console.log()
  return (
    <View>
      {
        values.map((val) => {
          return shopObject(val)
        })
      }
    </View>
  )
}

function shopObject(value) {
  return  (
    <View>
      <TouchableOpacity
              onPress={() => handleOpenWithLinking(value.link)}>
        <Text>{value.name}: ${value.price}</Text>
        <Image style={styles.logo} source={{uri: value.img}} />
      </TouchableOpacity>
    </View>
  );
}

function searchSection () {
  const [text, setText] = React.useState('');
  return (
    <TextInput
      label="Search"
      placeholder="Search..."
      value={text}
      onChangeText={text => setText(text)}
    />
  );
}
function dropdownStore () {
  const [selected, setSelected] = React.useState("");
  const data = stores;

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )
}
function dropdownHobbyGeneral() {
  const [selected, setSelected] = React.useState("");
  const data = hobbyGeneral;

  return(
    <SelectList
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )
}
function dropdownHobbySpecific () {
  const [selected, setSelected] = React.useState("");
  const data = hobbySpecific;

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )
}
function filterSort () {
  const [selected, setSelected] = React.useState("");
  const data = [
  {key: 'PriceLowToHigh', value: 'Low To High'},
  {key: 'PriceHighToLow', value: 'High To Low'}
  ]

  return(
    <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
    />
  )
}

  return (
    <ScrollView style={styles.container}>
      {searchSection()}
      {dropdownStore()}
      {dropdownHobbyGeneral()}
      {dropdownHobbySpecific()}
      {filterSort()}
      {shopObjects(defaultValues)}
      <Button title="asdf" onPress={buttonPressed}>
      </Button>
    </ScrollView>
  );

}// end app()

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    margin: 15,
  },
  logo: {
    width: 200,
    height: 100
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
