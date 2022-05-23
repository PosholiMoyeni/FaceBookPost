import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Image  } from 'react-native';
import { useState } from 'react';
import Information from './Information';
import { Ionicons, Entypo } from '@expo/vector-icons';

export default function App() {

  const [post, setPost] = useState('');
  const [memes, setMemes] = useState([
    {post: '“I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.”'
    }
  ])

  function transform(message){
     return <Information post = {message.post} />
  }

  function addPost(){
    setMemes([{post: post}, ...memes])
    setPost('')
  }
  
  return (
    <View style={styles.container}>
     <StatusBar hidden/>
      <View style = {styles.upperbox}>
      <View style={{flexDirection:"row", justifyContent:"space-between", marginTop:10, alignItems: 'center'}}>
         <TouchableOpacity><Ionicons name = "arrow-back-sharp" size={30} color = "white" /></TouchableOpacity>
         <TouchableOpacity><Entypo name = "menu" size={30} color = "white" /></TouchableOpacity>
       </View>
      <Text style={styles.Info}>
          The Chat
          </Text>
      <Image 
          style={styles.Profile}
          source={require("./assets/favicon.png")}
        /> 
          <Text style={styles.a}>Posholi Ed Myeni</Text>
          <Text style={{color: 'white', alignSelf: 'center', fontSize: 17, marginBottom: 10}}> Just a bio </Text>
      </View>

      <View style = {styles.PostsField}>
        <ScrollView contentContainerStyle = {{paddingBottom: 300}}>
          <View style = {styles.postBox}>
           
            <Text style = {{color: 'white', fontSize: 15}}>  What's on your mind? </Text>
            <View style = {styles.Write}>
              <TextInput style = {styles.post} value = {post} onChangeText = {setPost} />
            </View> 
            <TouchableOpacity>
              <Button title = 'Post'  onPress = {addPost} color = '#536b85' /> 
            </TouchableOpacity>
          </View>
          {memes.map(item => transform(item))}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  upperbox:{
    alignContent: 'center',
    width:"100%",
    backgroundColor:"#012142",
  },
  Info:{
    color: "white",
    alignSelf: "center", 
    fontWeight: "bold",
    fontSize: 25,
  },
  Profile:{
    margin: 10,
    height: 100,
    width: 100,
    alignSelf: "center"
  },
  a:{
    alignSelf:'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,

  },
  postBox:{
    width: '97%',
    padding: 10,
    margin: 20,
    backgroundColor: '#012142',
    alignItems: 'center',
    marginLeft: 10,
    borderRadius: 10,
  },
  Write:{
    borderWidth: 1,
    borderColor: 'grey',
    marginVertical: 10,
    height: 70,
    width:"100%",
    alignContent: 'center'
  },
  post:{
    color: 'white',
    marginVertical: 10,
    height: 30,
    width:"90%",
    alignSelf: 'center',
  },
  PostsField: {
    backgroundColor:"#516881",
    width:"100%",
    height: '100%',
    alignItems:"center",
    alignContent: 'center',
    alignItems: 'flex-start',

  },
});
