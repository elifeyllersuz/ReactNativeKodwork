import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:'#bdbdbd',
        padding:10,
        flexDirection:'row',
        margin:10,
        borderRadius:15
    },
    title:{
        fontWeight:'bold',
        fontSize:20
    },

    inner_container:{
        padding:10,
         flex:1,
        justifyContent:'center'
    },
    level_container:{
      flex:1,
     // backgroundColor:'green'
    },
    level_title:{
        fontSize:15,
        color:'#ef5350',
        fontWeight:'bold',
        textAlign:'right',
        paddingTop:15
    },
    info_container:{
        borderWidth:1,
        borderColor:'#ef5350',
        backgroundColor:'#ef5350',
        padding:4,
        borderRadius:10,
      // flex:1,
        marginRight:5
    },
    location_title:{
        
        color:'white',
        fontSize:15
    },
    content_container:{
        flexDirection:'row',
        flex:1
    }
})