import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, useState, Image, Linking, ScrollView, Button, Select} from 'react-native';
import Constants from 'expo-constants';
import {SelectDropdown, DropdownData} from "expo-select-dropdown";
import {Picker} from '@react-native-community/picker';
import { SelectList } from 'react-native-dropdown-select-list';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
var stores = [
  {value: 0, label: 'None Selected'},
  {value: 1, label: 'rei.com'},
]
var hobbyGeneral = [
  {value: 0, label: 'None Selected'},
  {value: 1, label: 'Snow'},
  {value: 2, label: 'Rock Climbing'},
]
var hobbySpecific = [
  {value: 0, label: 'None Selected'},
  {value: 1, label: 'Snowboarding'},
  {value: 2, label: 'Skiing'},
  {value: 3, label: 'Rock Climbing'},
]
var defaultValues = [
          {value: '1', store: 1, hobbyGeneral: 1, hobbySpecific: 1, link: 'https://www.rei.com/product/193947/arbor-ethos-snowboard-womens-20222023', img: "https://www.rei.com/media/bae1912b-315a-466e-8fff-abcb985a2492.jpg?size=784x588", name:'Arbor Snowboard', price: '239.83'},
          {value: '2', store: 1, hobbyGeneral: 1, hobbySpecific: 2, link: 'https://www.rei.com/product/199291/rossignol-experience-80-carbon-w-skis-with-bindings-womens-20212022', img:"https://www.rei.com/media/68f7dd36-2e11-49a7-b746-318242191a99.jpg?size=784x588", name:'Rossignol Skis', price: '559.83'},
          {value: '3', store: 1, hobbyGeneral: 2, hobbySpecific: 3, link: 'https://www.rei.com/product/203930/la-sportiva-tarantulace-climbing-shoes-mens', img:"https://www.rei.com/media/0108620f-59fd-4905-babc-38f98930e187.jpg?size=784x588", name:'Tarantulace Climbing Shoes', price: '89.00'},
          {value: '4', store: 1, hobbyGeneral: 2, hobbySpecific: 3, link: 'https://www.rei.com/product/169549/camp-energy-cr3-harness-mens', img:"https://www.rei.com/media/109e9e43-259c-4b0e-aafa-51691e4775ba.jpg?size=784x588", name:'C.A.M.P. Energy CR3 Harness', price: '49.95'},
        ]

        

export default function App() {
  const [selectedOption1, setSelectedOption1] = React.useState("");
  const [selectedOption2, setSelectedOption2] = React.useState("");
  const [selectedOption3, setSelectedOption3] = React.useState("");
  const [selectedOption4, setSelectedOption4] = React.useState("");
  const [text, setText] = React.useState('');

  
  // Handles state change
  handleChange = (event) => {
    this.setState({selectValue: event.target.value}, ()=> {alert(`Value: ${this.state.selectValue}`)});
    } 

const buttonPressed = () => {
  console.log(selectedOption1);
  console.log(selectedOption2);
  console.log(selectedOption3);
  console.log(selectedOption4);
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
  return(
    <Picker 
    mode={"dialog"}
    selectedValue={selectedOption1}
    onValueChange={(itemValue) => setSelectedOption1(itemValue)}
    
    >
         {stores.map((store, index) => (
        <Picker.Item label={store.label} value={store.value} key={store.value} />
      ))}
    </Picker>
  )
}
function dropdownHobbyGeneral() {
  return(
      <Picker  
    mode={"dialog"}
    selectedValue={selectedOption2}
    onValueChange={(itemValue) => setSelectedOption2(itemValue)}
    >
         {hobbyGeneral.map((hobby, index) => (
        <Picker.Item label={hobby.label} value={hobby.value} key={hobby.value}/>
      ))}
      </Picker>
  )
}
function dropdownHobbySpecific () {
  return(
      <Picker  
    mode={"dialog"}
    selectedValue={selectedOption3}
    onValueChange={(itemValue) => setSelectedOption3(itemValue)}
    > 
        {hobbySpecific.map((hobby, index) => (
        <Picker.Item label={hobby.label} value={hobby.value} key={hobby.value}/>
      ))}
      </Picker>
  )
}
function filterSort () {
  const data = [
  {value: 0, label: 'None Selected'},
  {value: 'PriceLowToHigh', label: 'Low To High'},
  {value: 'PriceHighToLow', label: 'High To Low'}
  ]

  return(
    <Picker  
    mode={"dialog"}
    selectedValue={selectedOption4}
    onValueChange={(itemValue) => setSelectedOption4(itemValue)}
    >
        {data.map((dataEl, index) => (
        <Picker.Item label={dataEl.label} value={dataEl.value} key={dataEl.value}/>
        ))}
      </Picker>
  )
}

  return (
    <ScrollView style={styles.container}>
      {searchSection()}
      {dropdownStore()}
      {dropdownHobbyGeneral()}
      {dropdownHobbySpecific()}
      {filterSort()}
      <Button title="Submit Search" onPress={buttonPressed}></Button>
      {shopObjects(defaultValues)}
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: '20px',
    marginBottom: '10px'
  },
  logo: {
    width: '200px',
    height: '150px',
    marginBottom: '20px'
  },
  button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    marginTop: '20px',
    borderRadius: '5px'
  },
  input: {
    height: '40px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  },
  dropdown: {
    width: '100%',
    height: '40px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  },
  dropdown_item: {
    padding: '10px'
  },
  dropdown_item_text: {
    fontSize: '16px'
  },
  dropdown_item_selected: {
    backgroundColor: '#4CAF50',
    color: 'white'
  },
  select_dropdown: {
    marginBottom: '10px'
  },
  list_item: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px'
  },
  list_item_image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '5px'
  },
  list_item_title: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  list_item_price: {
    fontSize: '16px',
    marginBottom: '5px'
  },
  list_item_button: {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    marginTop: '10px',
    borderRadius: '5px'
  },
  list_item_button_hover: {
    backgroundColor: '#3e8e41'
  },
  search_section: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px'
  },
  filter_section: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  filter_dropdown: {
    width: '48%'
  },
  sort_dropdown: {
    width: '48%'
  },
  results_section: {
    width: '100%',
    padding: '10px'
  }
});