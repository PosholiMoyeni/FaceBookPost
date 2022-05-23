import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Information({post}) {
  
  const [NumLikes, setNumLikes] = useState(0);
 
  function Like(){
    setNumLikes(NumLikes + 1)
  }
  return (
    <View style = {styles.Container}>
      <Text style = {{color: 'white'}}>{post}</Text>
      <View style = {styles.LikeSpace}>
        <TouchableOpacity style={styles.LikeButtom}>
          <Ionicons name="heart" size={24} color="white" onPress={Like}/> 
        </TouchableOpacity>
        <Text style={{color:"#979491", fontSize: 20}}>{NumLikes}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        marginVertical: 10,
        marginBottom: 5,
        padding: 15,
        backgroundColor: '#012142',
        marginLeft:5,
        alignSelf: 'center',
        borderRadius: 15,
    },
    LikeButtom:{
     alignSelf: 'flex-end',
     marginHorizontal: 10,
    },
    LikeSpace: {
      flexDirection: 'row',
      backgroundColor:'#173453',
      width: '90%',
      height: 30,
      borderRadius:10,
      margin: 10,
    }
})