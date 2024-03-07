import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  spacing: {
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 10,
    paddingBottom: 10,
  },
  color: {
    backgroundColor: theme.colors.backgroundSecondary,
  }
});

const AppBar = (props) => {
  const style = [
    styles.flexContainer,
    styles.spacing,
    styles.color,
  ]

  return (
    <View style={style}>
      {props.children}
    </View>
  );
};

export default AppBar;