
import React, {Component} from 'react';
import {Text,Container,Header,Content,ListItem,List} from 'native-base';
import {httpService} from './services/httpService';
export default class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
       data :[],
      

    }
  }
  componentDidMount(){
    var d =[];
    httpService("currencies", "USD", "latest").then((res) => {
      for(var key in res){
        d.push(<ListItem>
          <Text>{key} :</Text><Text>{res[key]}</Text>
        </ListItem>)
      }
      this.setState({data:d})
    });  
  }
  render() {
    return (<Container>
        <Header />
        <Content>
          <List>
            {this.state.data}
          </List>
        </Content>
      </Container>)
  }
}

