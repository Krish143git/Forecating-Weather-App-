 import React, { useEffect, useState }  from 'react';
 import {View,Text,StyleSheet,ActivityIndicator,FlatList} from 'react-native'
import WeatherStructure from './WeatherStructure';

 const WeatherContent =({country}) =>{
  
  
    const [data1,setData1] = useState([]);
    const [data2,setData2] = useState([]);
    console.log(country)
  useEffect(() => {
    console.log(country)
    async function getIds() {
    let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=f5ce8d9dd95e4fab80f101745212601&q=${country}`)    
    response = await response.json()
    console.log(response)
    setData1(response)
    }
     async function getForecast() {
      let response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f5ce8d9dd95e4fab80f101745212601&q=${country}&days=6`)    
      response = await response.json()
      console.log(response)
      setData2(response)
      }
    getIds()
     getForecast() 
  },[country])

  return (
   
  <> 
   {data1.hasOwnProperty('error')  ?<View style={style.errorcontainer}><Text style={style.text1}>{data1.error.message}</Text></View> :
    null }

   {data1.hasOwnProperty('current')  ? 
     <>
    <View style={style.Container}>
    <Text style={style.text}>{data1.location.name}</Text>
    <View style={style.tempContainer}>
       <Text style={style.tempText}>Max-Temp {data1.current.temp_c}<View ><Text style={style.text1}>o</Text></View>C</Text>
    </View>  
  </View>
    
  </>
  : 
  
  
  null
  
   } 
  {data2.hasOwnProperty('forecast')?
    <FlatList  
      data={data2.forecast.forecastday}           
       renderItem={({item,id}) =>  
      <WeatherStructure data={item} /> }
         keyExtractor={(item, id) => id.toString()}/>  
         :
          null}       
  </>
)
}

const style =StyleSheet.create({
 
  errorcontainer:{
    flex:1,
    justifyContent: "center",
    alignItems:'center'
  }
  ,
  container1: {
    marginTop: 0,
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  Container:{
    marginTop : 20,
    alignItems : 'center',
    backgroundColor:'#e067b0'
  },
  text :{
    fontSize : 50,
    fontWeight : 'bold'
  },
  text1 :{
    fontSize : 20,
    fontWeight : 'bold',
    justifyContent:'center'
  },
  tempContainer:{
    width: 500,
    flexDirection : 'row',
    justifyContent :'space-evenly' 
  },
  tempText:{
    fontSize : 30,
    fontWeight : 'bold'
  },
  headercontainer:{
    width:"90%",
    flexDirection : 'row',
    justifyContent : 'space-between',
    marginLeft : 30,
    marginTop : 50 
  },
  text1:{
    fontSize : 30
  }
})
export default WeatherContent;