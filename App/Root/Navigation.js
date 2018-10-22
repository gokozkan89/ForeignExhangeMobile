import React from 'react';
import {
    DrawerNavigator as BaseDrawerNavigator,
    StackNavigator as BaseStackNavigator
} from 'react-navigation';
import FxRates from '../Screen/FxRates';
export const DrawerNavigator = BaseDrawerNavigator(
    {
        FxRates: { screen: FxRates }
    }
);

export const StackNavigator = BaseStackNavigator({
    FxRates: { screen: FxRates }
});