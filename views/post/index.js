import React, { Component, Fragment } from "react";
import {
  StyleSheet,
  View,
  StatusBar, TextInput, 
} from "react-native";
import CustomButton from './custom_button';
import { Container, Header, Content, Form, Item, Input, Footer, FooterTab, Badge, Button,Text, Icon,Tabs, Tab, TabHeading, ActionSheet, Root } from 'native-base';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Search_Bar from './search_bar';
import {Overlay} from 'react-native-elements';
import ProvidingList from './providerindex';
import A_F_Rent from './ask_for_rent';
import Example from './categorymodal';
IconM.loadFont();

var BUTTONS = ["제공 글쓰기", "대여요청 글쓰기", "취소"];
var CANCEL_INDEX = 2;

class PostListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    return(
      <View style = {{flex : 1, backgroundColor : 'white'}}>
        <View style = {{flex : 1}}>
          <View style={{flex : 1}}>
            <Container>
              <Example></Example>
              <Tabs style={{marginTop : '0%',}}>
                <Tab heading={ <TabHeading transparent><Icon name="camera" /><Text>제공</Text></TabHeading>}>
                  <ProvidingList></ProvidingList>
                </Tab>
                <Tab heading={ <TabHeading transparent><Text>대여</Text></TabHeading>}>
                  <A_F_Rent></A_F_Rent>
                </Tab>
              </Tabs>
            </Container>
          </View>
        </View>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('PLScreen')}>
              <Icon name="newspaper"/>
              <Text>리스트</Text>
            </Button>
            <Root>
              <Button 
                transparent
                vertical 
                onPress = {() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    title: "Testing ActionSheet"
                  },
                  buttonIndex => {
                    if(buttonIndex === 0) {
                      this.props.navigation.navigate('P_W_p');
                    }
                    if(buttonIndex === 1) {
                      this.props.navigation.navigate('P_W_c');
                    }
                  },
                )}
              >
                <Icon name="pencil" />
                <Text>글쓰기</Text>
              </Button>
            </Root>
            <Button badge vertical onPress = {() => {
              this.props.navigation.navigate('Logins')}
            }>
              <Badge ><Text>51</Text></Badge>
              <Icon name="chatbubble" />
              <Text>채팅</Text>
            </Button>
            <Button vertical onPress = {() => this.props.navigation.navigate('Logins')}>
              <Icon name="person" />
              <Text>Mypage</Text>
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}

export default PostListScreen;