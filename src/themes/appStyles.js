import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const getNavigationOptions = (title, backgroundColor, color) => ({
  title,
  headerTitle: title,
  headerBackTitle: null,
  headerStyle: {
    backgroundColor,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
});

export const getNavigationOptionsWithAction = (title, backgroundColor, color, headerLeft, headerRight) => ({
  title,
  headerStyle: {
    backgroundColor,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
  headerLeft,
  headerRight,
});

export const getTabNavigationOptions = (tabBarLabel, iconName, color, backgroundColor) => ({
  title: tabBarLabel,
  headerTitle: tabBarLabel,
  headerBackTitle: null,
  headerStyle: {
    backgroundColor,
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    color,
  },
  headerTintColor: color,
  tabBarLabel,
  tabBarIcon: ({ tintColor }) => <Icon name={iconName} size={20} color={tintColor} />,
});
