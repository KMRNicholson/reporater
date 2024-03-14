import { View, StyleSheet } from 'react-native';

import theme from '../../theme';
import AppBarTab from './AppBarTab';
import Text from '../Text';
import { useNavigate } from 'react-router-native';
import { ScrollView } from 'react-native-web';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
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
      <ScrollView horizontal>
        <AppBarTab onPress={() => navigate('/')}>
          <Text fontWeight="bold" color="textSecondary">Repositories</Text>
        </AppBarTab>
        <AppBarTab onPress={() => navigate('/signin')}>
          <Text fontWeight="bold" color="textSecondary">Sign in</Text>
        </AppBarTab>
      </ScrollView>   
    </View>
  );
};

export default AppBar;