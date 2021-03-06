import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {View, ScrollView} from 'react-native';
import {Text, Form, Icon, Textarea, Item, Input, Button} from 'native-base';

const api = axios.create({baseURL: 'http://52.79.179.211'});

class PostShow extends Component{
    constructor(props){
        super(props);
        title = '화이트채플';
        category = '보드게임';
        price = 10000;
        bodytext = '어쩌구저쩌구';
        
        state = {
          token : "",
          postId : 2
        };
    }

    getToken = async () => {
      try{
        const value = await AsyncStorage.getItem('token');
        if (value !== null) this.token = value;
      } catch (error){
        console.log("error : ", error);
      }
    }

    chatCreateRequset(){
      api
        .post(`/chats?post_id=${2}`, null,{ headers : {
          'Authorization': this.token
        }})
        .then((response) => {
          console.log('success');
          console.log(this.token);
          console.log(response);
        })
        .catch((err) => console.log("err : ", err))
    }

    createAndNavigate(){
      this.chatCreateRequset();
      this.props.navigation.navigate('ChatRoom', {postId : 2, check : 0,});
    }

    render(){
      this.getToken();
      return(
        <ScrollView>
          <View style={{width : '95%', height : '40%', justifyContent : 'center', alignItems: 'center', alignSelf: 'center'}}>
            <Text>이미지</Text>
          </View>
          <View style = {{ alignItems : 'center'}}>
            <View style = {{ width : '95%',}}>
              <Form>
                <Item regular style = {{marginBottom : '3%'}}>
                    <Text style = {{fontSize : 17, margin : '4%'}}>{title}</Text>
                </Item>
                <Item regular style = {{marginBottom : '3%'}}>
                    <Text style = {{fontSize : 17, margin : '4%'}}>{category}</Text>
                </Item>
                <Item regular style = {{marginBottom : '5%', marginTop  :'3%'}}>
                    <Text style = {{fontSize : 17, margin : '4%'}}>{price + '원'}</Text>
                </Item>
                <Item regular style = {{marginBottom : '5%', marginTop  :'3%'}}>
                    <Text style = {{fontSize : 17, margin : '4%'}}>{bodytext}</Text>
                </Item>
                <Button style = {{alignSelf : 'center', marginTop : '3%'}}
                  onPress = {() => this.createAndNavigate()}
                >
                  <Icon name = 'person'></Icon>
                  <Text>채팅 거래하기</Text>
                </Button>
              </Form>
            </View>
          </View>
        </ScrollView>
      );
    }
}

export default PostShow;