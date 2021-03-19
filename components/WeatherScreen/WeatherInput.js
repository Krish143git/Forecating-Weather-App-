 import React, { useEffect, useState }  from 'react';
 import {View,StyleSheet,TextInput,TouchableOpacity,Text,Button,FlatList} from 'react-native'

import WeatherContent from './WeatherContent';

 const WeatherInput =() =>{
   const [item,setItem]= useState('')
   const [country , setCountry] = useState('')
  //  const [id , changeId] = useState(0)
  function onSearchCountry(){
      setCountry(item)
  }
   
   return(
     <> 
     <View  style ={style.header}>
         <Text style={style.headerTitle}>WEATHER APP</Text>
     </View>
       <View style={style.container} >
     <View style={style.boxContainer}>
   <TextInput
      style={style.textbox}
      placeholder = 'Enter the city'
      onChangeText={(text) => setItem(text)}      
     />
     
    </View>
      <TouchableOpacity
        style={style.button}
         onPress={onSearchCountry}
      >
        <Text style={style.text} >SEARCH</Text>
      </TouchableOpacity>
      </View>  
       {country.length > 0  ? <WeatherContent country={country}/> : null } 
     </>
   )
 }

 const style =StyleSheet.create({
    header :{
      backgroundColor : '#fc6203',
      height : 50 ,
      alignItems : 'center',
      justifyContent : 'center'
    },
    headerTitle:{
      fontSize : 20,
      color : "#ffffff"   
    },
      text:{
    color :'#ffffff',
    fontSize : 19
  },
    
        textbox :{
   height : 50,
   width : 250,
   fontSize : 20,
  
   borderWidth:2,
   borderColor : '#541269' ,
   borderRadius : 5 
  },
  button:{
    width : 100,
    height : 50 ,
    backgroundColor :'#fc0349',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 7,
  },
  container :{
     marginTop : 10,
    flexDirection : 'row',
    justifyContent : 'space-evenly'
  },
  
  })
   
 export default WeatherInput;