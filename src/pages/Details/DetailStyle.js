import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

   container:{
      flex:1
   },
   content_container: {
      backgroundColor: "#fff",
      padding:5,
      margin:5,
      borderRadius:5,
     
   },
   details: {
      padding: 8,
      //margin:2
   },
   inner_container: {
      fontSize: 15
   },
   footer_title:{
       // backgroundColor : 'ef5350'
       color:'white',
       fontSize:20,
       padding:4,
      //margin:3
   },
   button:{
       flexDirection:'row',
       backgroundColor : '#ef5350',
       padding:10,
       alignItems:'center',
       margin:3,
       borderRadius:5,
       
   },

   name: {
     fontWeight:'bold',
     fontSize:20
   },
   location: {
      color: '#ef5350',
      fontWeight:'bold'
   },
   level: {
      color: '#ef5350',
      fontWeight:'bold'
   },

   title: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20
   },
   footer_container:{
      flexDirection:'row',
      justifyContent:'space-around',
      backgroundColor:'white'
      
   }

})