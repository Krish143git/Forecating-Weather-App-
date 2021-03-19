

 import React, { useEffect, useState }  from 'react';
 import {View,Text,StyleSheet,ActivityIndicator,FlatList} from 'react-native'
 
 const  WeatherStructure=({data}) =>{

  
//   console.log(data)
    
    return(
        <>
         
          <View>
              <View style={style.headercontainer} >
                  <View style={style.headercontainer1}>
                  <Text style={style.text}>Date : {data.date} </Text>
                  
                  </View>
                  <View style={style.headercontainer1}>
                  <Text style={style.text}>Max-Temp : {data.day.maxtemp_c}C</Text>
                  
                  </View>
                  <View style={style.headercontainer1}>
                  <Text style={style.text}>climate : {data.day.condition.text} </Text>                 
                  </View>         
              </View>         
          <View style={style.blackcontainer}>
          </View> 
          </View>
        
          
          
        </>
    )
 }

 const style =StyleSheet.create({
    headercontainer1:{
       flexDirection : 'row'
    },
    headercontainer:{ 
        width : '90%',  
         marginLeft : 10,
        marginTop : 50,   
        flex : 1,
        // backgroundColor : '',
        flexDirection : 'column',
        justifyContent:'space-between'    
    },
    
    text :{
        fontSize:30,

    },
    blackcontainer:{
       width : '100%',
       height : 2,
       backgroundColor :'#000',
       marginTop : 50
       
    },
    text1 :{
        fontSize : 20,
        fontWeight : 'bold',
        justifyContent:'center',
      },
    
    

  })
 export default WeatherStructure;