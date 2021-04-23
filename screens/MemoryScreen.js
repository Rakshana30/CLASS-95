import React , {Component} from 'react';
import {StyleSheet ,View ,Text ,TouchableOpacity ,KeyboardAvoidingView ,Alert ,TextInput} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class MemoryScreen extends Component{
    constructor(){
        super();

        this.state={
            userId : firebase.auth().currentUser.email,
            date : "",
            myDay :"",
            title : ""
        }
    }

    addMemory = (title,myDay)=>{
        var userId = this.state.userId
        var date = Date.now()
        db.collection('Memories').add({
            "date" : date,
            "myDay" : myDay,
            "title" : title
        })
        this.setState({
            date : "",
            myDay :"",
            title : ""  
        })

        return Alert.alert("Memory added successfully")
    }

    render(){
        return(
            <View style = {styles.container}>
                
                <KeyboardAvoidingView style = {styles.keyboardStyle}>
                    
                <Text style = {styles.buttonText1}>
                    TITLE
                </Text>
                <TextInput style = {styles.loginBox}
                    placeholder = {"Create title for your special day"}
                    onChangeText = {(text)=>{
                        this.setState({title:text})
                    }}
                    value = {this.state.title}
                />
               
                <Text style = {styles.buttonText1}>
                    DATE
                </Text>
    
    
    <TextInput style = {styles.loginBox}
           
                    placeholder = {"Enter date in the format dd-mm-yyyy"}
                    onChangeText = {(text)=>{
                        this.setState({date:text})
                    }}
                    value = {this.state.date}
                />
    
    <Text style = {styles.buttonText1}>
                    MY DAY
                    </Text>
    <TextInput style = {[styles.loginBox,{height:300}]}
                    multiline
                    numberOfLines = {10}
                   placeholder = {"Write about your day"}
                    onChangeText = {(text)=>{
                        this.setState({myDay:text})
                    }}
                    value = {this.state.myDay}
                />
    
    
            <TouchableOpacity style = {styles.button}
            onPress = {()=>{
                this.addMemory(this.state.title,this.state.myDay)}}>
                    
            <Text style = {styles.buttonText}>Add this memory</Text>
                    </TouchableOpacity>    
                </KeyboardAvoidingView>
              
            </View>
        )
    }
    }
    
    
    const styles = StyleSheet.create({
        
        container:{
            flex:1,
            backgroundColor:"pink",
            alignItems: 'center',
            justifyContent: 'center'
          },
        keyBoardStyle : {
          flex:1,
          alignItems:'center',
          justifyContent:'center'
        },
        loginBox:{
            width: 500,
            height: 50,
            borderBottomWidth: 1.5,
            borderColor : '#9039ED',
            fontSize: 30,
            margin:15,
            paddingLeft:20
          },
          buttonText:{
            color:'#ffff',
            fontWeight:'200',
            fontSize:30
          },
          buttonText1:{
            color:"purple",
            fontWeight:'300',
            fontSize:35
          },
        button:{
          width:"100%",
          height:50,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:10,
          backgroundColor:"#3733FF",
          shadowColor: "yellow",
          shadowOffset: {
             width: 0,
             height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,
          elevation: 16,
          marginTop:20
          },
        }
      )