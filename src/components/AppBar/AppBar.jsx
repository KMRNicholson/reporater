import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import AppBarTab from './AppBarTab';
import Text from '../Text';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  auth: {
    flexDirection: 'row'
  },
  home: {
    flexGrow: 1
  },
  spacing: {
    padding: 10
  },
  color: {
    backgroundColor: theme.colors.backgroundSecondary,
  }
});

const AppBar = () => {
  const navigate = useNavigate();

  const containerStyle = [
    styles.container,
    styles.spacing,
    styles.color,
  ]

  return (
    <View style={containerStyle}>
      <View style={styles.home}>
        <AppBarTab onPress={() => navigate('/')}>
          <Text fontWeight="bold" color="textSecondary">Repositories</Text>
        </AppBarTab>
      </View>
      <View style={styles.auth}>
        <AppBarTab onPress={() => navigate('/signin')}>
          <Text fontWeight="bold" color="textSecondary">Sign in</Text>
        </AppBarTab>
      </View>
    </View>
  );
};

export default AppBar;