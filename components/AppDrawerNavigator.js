import React,{Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import MemoryScreen from '../screens/MemoryScreen';
import SideBarMenu from './SideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({

    Home:{
        screen:MemoryScreen
    },

},

{
    contentComponent:SideBarMenu
},

{
    initialRouteName:'Home'
}

)