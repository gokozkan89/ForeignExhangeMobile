import React from 'react';
import {
    createDrawerNavigator as BaseDrawerNavigator,
    createStackNavigator as BaseStackNavigator
} from 'react-navigation';
import FxRates from '../Screen/FxRates';
import GSideBar from '../Components/GSideBar'
export const DrawerNavigator = BaseDrawerNavigator(
    {
        FxRates: { screen: FxRates }
    }, 
    {
        contentComponent: props => <GSideBar {...props} />,
    }
);

export const StackNavigator = BaseStackNavigator({
    FxRates: { screen: FxRates }
});