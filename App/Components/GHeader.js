import React, { Component } from 'react';
import { Header, Left, Right, Body, Title, Button, Icon } from 'native-base';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
export default class GHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Header>
                <Left style={{ flex: 1 }}>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.openDrawer()}
                    >
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body style={{ flex: 3, alignItems: 'center' }}>
                    <Title>{this.props.title}</Title>
                </Body>

                <Right style={{ flex: 1 }}>
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate(this.props.rightNav)}
                    >
                        <IconFontAwesome name="plus-square-o" size={25} color="skyblue" />
                    </Button>
                </Right>
            </Header >
        );
    }
}