import { TabView } from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const getNavigationOptions = (title, backgroundColor, color, tabBar) => ({
  title,
  header: {
    titleStyle: {
      // this only styles the title/text (font, color etc.)
      color,
    },
    style: {
      // this will style the header, but does NOT change the text
      backgroundColor,
    },
    // this will color your back and forward arrows or left and right icons
    tintColor: color,
  },
  tabBar,
});

export const getTabBarOptions = (label, icon) => ({
  label,
  icon: ({ tintColor, focused }) => (
    <Icon name={icon} size={25} color={tintColor} />
  ),
});

export const getTabNavigatorConfig = () => ({
  tabBarComponent: TabView.TabBarBottom,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#555',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#fff',
    },
  },
});
