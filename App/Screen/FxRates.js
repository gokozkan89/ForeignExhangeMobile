import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';
import GHeader from '../Components/GHeader'
import {  Container, Content, Text, Card, CardItem } from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome5Pro'
import { httpService } from '../Services/httpService';
export default class FxRates extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };

  }
  componentDidMount() {
    return httpService("currencies", "all", "latest").then(res => this.setState({
      isLoading: false,
      dataSource: res
    })).catch(error => console.log(error));
  }



  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <Container>
        <GHeader/>
        <Content>
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => (
                <Card>
                  <CardItem button >
                    <Text style={{ marginLeft: 5, flex: 1 }}>
                      {`${item.code}/TRY`}
                    </Text>
                    <IconFontAwesome
                      name={
                        JSON.stringify(item.change_rate).charAt(0) === '-'
                          ? 'arrow-alt-down'
                          : 'arrow-alt-up'
                      }
                      size={25}
                      color={
                        JSON.stringify(item.change_rate).charAt(0) === '-'
                          ? 'red'
                          : 'green'
                      }
                    />
                    <Text style={{ textAlign: 'center', flex: 1 }}>
                      {JSON.stringify(item.selling).substring(0, 6)}
                    </Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>
                      {JSON.stringify(item.buying).substring(0, 6)}
                    </Text>
                    <Text style={{ textAlign: 'center', flex: 1 }}>
                      {`%${JSON.stringify(item.change_rate).substring(0, 6)}`}
                    </Text>
                  </CardItem>
                </Card>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Content>
      </Container>
    );
  }
}