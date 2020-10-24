import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps160262Navigator from '../features/Maps160262/navigator';
import Add-Item160261Navigator from '../features/Add-Item160261/navigator';
import Maps160257Navigator from '../features/Maps160257/navigator';
import UserProfile160253Navigator from '../features/UserProfile160253/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps160262: { screen: Maps160262Navigator },
Add-Item160261: { screen: Add-Item160261Navigator },
Maps160257: { screen: Maps160257Navigator },
UserProfile160253: { screen: UserProfile160253Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
