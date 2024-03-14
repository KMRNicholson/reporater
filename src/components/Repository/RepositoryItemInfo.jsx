import { View, StyleSheet, Text as NativeText } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 5,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  flair: {
    backgroundColor: theme.colors.primary,
    color: '#ffffff',
    borderRadius: 5,
    padding: 5,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryItemInfo = ({name, description, language}) => {
  return (
    <View style={styles.container}>
      <ItemSeparator />
      <ItemSeparator />
      <Text fontWeight="bold">{name}</Text>
      <ItemSeparator />
      <Text color={theme.colors.textSecondary}>{description}</Text>
      <ItemSeparator />
      <ItemSeparator />
      <NativeText style={styles.flair}>{language}</NativeText>
    </View>
  );
}

export default RepositoryItemInfo;