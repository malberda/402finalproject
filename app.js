import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image, Linking, ScrollView, Dimensions, Math} from 'react-native';
import Constants from 'expo-constants';
import {Picker} from '@react-native-community/picker';
const dimensions = Dimensions.get('window');
var stores = [
  {value: 0, label: 'None Selected'},
  {value: 1, label: 'rei.com'},
  {value: 2, label: 'walmart.com'},
]
var hobbyGeneral = [
  {value: 0, label: 'None Selected'},
  {value: 1, label: 'Snow'},
  {value: 2, label: 'Rock Climbing'},
  {value: 3, label: 'Running'},
]
var hobbySpecific = [
  {value: 0, label: 'None Selected'},
  {value: 1, label: 'Snowboarding'},
  {value: 2, label: 'Skiing'},
  {value: 3, label: 'Rock Climbing Shoes'},
  {value: 4, label: 'Rock Climbing Harness'},
  {value: 5, label: 'Running Shoes'},
]
var defaultValues = [
          {value: '1', store: 1, hobbyGeneral: 1, hobbySpecific: 1, link: 'https://www.rei.com/product/193947/arbor-ethos-snowboard-womens-20222023', img: "https://www.rei.com/media/bae1912b-315a-466e-8fff-abcb985a2492.jpg?size=784x588", name:'Arbor Snowboard', price: '239.83'},
          {value: '2', store: 1, hobbyGeneral: 1, hobbySpecific: 2, link: 'https://www.rei.com/product/199291/rossignol-experience-80-carbon-w-skis-with-bindings-womens-20212022', img:"https://www.rei.com/media/68f7dd36-2e11-49a7-b746-318242191a99.jpg?size=784x588", name:'Rossignol Skis', price: '559.83'},
          {value: '3', store: 1, hobbyGeneral: 2, hobbySpecific: 3, link: 'https://www.rei.com/product/203930/la-sportiva-tarantulace-climbing-shoes-mens', img:"https://www.rei.com/media/0108620f-59fd-4905-babc-38f98930e187.jpg?size=784x588", name:'Tarantulace Climbing Shoes', price: '89.00'},
          {value: '4', store: 1, hobbyGeneral: 2, hobbySpecific: 4, link: 'https://www.rei.com/product/169549/camp-energy-cr3-harness-mens', img:"https://www.rei.com/media/109e9e43-259c-4b0e-aafa-51691e4775ba.jpg?size=784x588", name:'C.A.M.P. Energy CR3 Harness', price: '49.95'},
          {value: '5', store: 1, hobbyGeneral: 2, hobbySpecific: 3, link: 'https://www.rei.com/product/203927/la-sportiva-finale-climbing-shoes-mens', img:"https://www.rei.com/media/3992906e-aa1d-405a-b0e2-0a5dd13c9b33.jpg?size=784x588", name:'La Sportiva Finale Climbing Shoes', price: '129.00'},
          {value: '6', store: 2, hobbyGeneral: 1, hobbySpecific: 1, link: 'https://www.walmart.com/ip/ESP-107-cm-Sno-Spyder-Snowboard-Foot-Pads-with-Molded-Safety-Handle/49767345?from=searchResults', img:"https://i5.walmartimages.com/asr/08c99be1-4712-4a19-ba7e-7a367a39cace_1.c1f5a2e13fb99015f65c65dc6ebc0c55.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF", name:'ESP 107 cm Sno Spyder Snowboard - Foot Pads with Molded Safety Handle', price: '27.99'},
          {value: '7', store: 1, hobbyGeneral: 3, hobbySpecific: 3, link: 'https://www.rei.com/product/163753/evolv-kronos-climbing-shoes-mens', img:"https://www.rei.com/media/40872f17-f345-41cd-a8b8-24d897a652f9.jpg?size=784x588", name:'evolv Kronos Climbing Shoes - Men\'s', price: '139.00'},
          {value: '8', store: 1, hobbyGeneral: 3, hobbySpecific: 3, link: 'https://www.rei.com/product/849257/scarpa-instinct-vs-climbing-shoes-mens', img:"https://www.rei.com/media/99049658-d779-431e-8353-fda5751f9e3f.jpg?size=784x588", name:'Scarpa Instinct VS Climbing Shoes - Men\'s', price: '209.00'},
          {value: '9', store: 1, hobbyGeneral: 3, hobbySpecific: 3, link: 'https://www.rei.com/product/209527/altra-torin-6-road-running-shoes-mens', img:"https://www.rei.com/media/e0a0bfa5-273f-4e85-bb6b-52eb9e960bd9.jpg?size=784x588", name:'Altra Torin 6 Road-Running Shoes - Men\'s', price: '104.93'},
        ]

        

export default function App() {
  const [selectedOption1, setSelectedOption1] = React.useState(0);
  const [selectedOption2, setSelectedOption2] = React.useState(0);
  const [selectedOption3, setSelectedOption3] = React.useState(0);
  const [selectedOption4, setSelectedOption4] = React.useState(0);
  const [text, setText] = React.useState('');
  const [searchResult, setSearchResult] = React.useState(defaultValues);

  
  // Handles state change
  handleChange = (event) => {
    this.setState({selectValue: event.target.value}, ()=> {alert(`Value: ${this.state.selectValue}`)});
    } 

const buttonPressedSubmit = () => {
  changeFilterSearch();
}
const buttonPressedClear = () => {
  setText('');
  setSelectedOption1(0);
  setSelectedOption2(0);
  setSelectedOption3(0);
  setSelectedOption4(0);
  clearFilterSearch();
}

function clearFilterSearch() {
  var newResult = [];
  defaultValues.forEach((object) => {
    newResult.push(object);
  });
  setSearchResult(newResult);
}

function changeFilterSearch() {
  var newResult = [];
  console.log(defaultValues)

  defaultValues.forEach((object) => {
    objectName = object.name.toLowerCase();
    lowerCaseText = text.toLowerCase();
    if (selectedOption1 == 0 || object.store == selectedOption1) {
      if (selectedOption2 == 0 || object.hobbyGeneral == selectedOption2) {
        if (selectedOption3 == 0 || object.hobbySpecific == selectedOption3) {
          if (objectName.includes(lowerCaseText) || lowerCaseText == "") {
            newResult.push(object);
          }
        }
      }      
    } 
  });
  if (selectedOption4 == "PriceLowToHigh") {
    const numAscending = [...newResult].sort((a, b) => a.price - b.price);
    newResult = numAscending;
  } else if (selectedOption4 == 'PriceHighToLow') {
    const numAscending = [...newResult].sort((a, b) => b.price - a.price);
    newResult = numAscending;
  }
  setSearchResult(newResult);
}

function selectOption1Change (itemValue) {
  console.log(itemValue);
  setSelectedOption1(itemValue);
}

function selectOption2Change (itemValue) {
  console.log(itemValue);
  setSelectedOption2(itemValue);
}

function selectOption3Change (itemValue) {
  console.log(itemValue);
  setSelectedOption3(itemValue);
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
    <View style={styles.option}>
      <TouchableOpacity
              onPress={() => handleOpenWithLinking(value.link)}>
        <Text style={styles.shopObjectText}>{value.name}: ${value.price}</Text>
        <Image style={styles.logo} source={{uri: value.img}} />
      </TouchableOpacity>
    </View>
  );
}

function searchSection () {
  return (
    <TextInput
      style={styles.textInput}
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
    style={styles.dropDownInput}
    mode={"dialog"}
    selectedValue={selectedOption1}
    onValueChange={(itemValue) => selectOption1Change(itemValue)}
    // onValueChange={(itemValue) => setSelectedOption1(itemValue)}
    
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
    style={styles.dropDownInput}
    mode={"dialog"}
    selectedValue={selectedOption2}
    onValueChange={(itemValue) => selectOption2Change(itemValue)}
    //onValueChange={(itemValue) => setSelectedOption2(itemValue)}
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
    style={styles.dropDownInput}
    mode={"dialog"}
    selectedValue={selectedOption3}
    onValueChange={(itemValue) => selectOption3Change(itemValue)}
    //onValueChange={(itemValue) => setSelectedOption3(itemValue)}
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
    style={styles.dropDownInput}
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
      <View style={{ flexDirection: "row" }}>
      <TouchableOpacity style={styles.btn} onPress={buttonPressedSubmit}><Text style={styles.btnText}>Submit Search</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={buttonPressedClear}><Text style={styles.btnText}>Clear Search</Text></TouchableOpacity>
      </View>
      {shopObjects(searchResult)}
    </ScrollView>
  );

}// end app()

const styles = StyleSheet.create({
  dropDownInput: {
    backgroundColor: '#000cb6',
    color: '#00ecdc',
  },
  btn: {
    width: 115,
    alignItems: 'center',
    backgroundColor: '#0005af',
  },
  textInput: {
    backgroundColor: '#ffcc00',
  },
  btnText: {
    color: '#00f2de',
  },
  shopObjectText: {
    color: '#ffce00'
  },
  option: {
    color: '#ffce00',
    backgroundColor: '#ff0000',
  },  
  container: {
    flex: 1,
    justifyContent: 'top',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffce00',
    padding: 8,
    margin: 10,
    alignItems: 'center',
  },
  logo: {
    aspectRatio: 2/2,
    width: (dimensions.width * 6.9/10),
    height: undefined,
    marginBottom: 20,
  },
});