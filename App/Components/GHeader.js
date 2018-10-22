import React, { Component } from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';

export default class GHeader extends Component {
    constructor() {
        super()
    }
    
    render() {
        return (<Header>
            <Left style={{ flex: 1 }}>
                <Button transparent >
                    <Icon name="menu" />
                </Button>
            </Left>
            <Body style={{ flex: 3, alignItems: 'center' }}>
                <Title>Fx Rates</Title>
            </Body>
            <Right style={{ flex: 1 }}>
                <Icon name="arrow-back" />
            </Right>
        </Header>)
    }
}