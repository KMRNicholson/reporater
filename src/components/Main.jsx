import RepositoryList from './Repository/RepositoryList';
import AppBar from './AppBar';
import Text from './Text';
import AppBarTab from './AppBarTab';
import { View } from 'react-native';

const Main = () => {
  return (
    <View>
      <AppBar>
        <AppBarTab onPress={() => console.log('Pressed!')}>
          <Text fontWeight="bold" color="textSecondary">Repositories</Text>
        </AppBarTab>
      </AppBar>
      <RepositoryList />
    </View>
  );
};

export default Main;