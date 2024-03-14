import { View, StyleSheet, Image } from 'react-native';
import RepositoryItemStats from './RepositoryItemStats';
import RepositoryItemInfo from './RepositoryItemInfo';
import theme from '../../theme';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.backgroundPrimary
  },
  tinyLogo: {
    width: 35,
    height: 35,
    margin: 15,
  },
  repoItemContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexGrow: 1,
  },
  repoItemInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  repoItemStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    flexGrow: 1,
    padding: 5,
  },
});

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.repoItemContainer}>
      <View style={styles.repoItemInfo}>
        <Image
          style={styles.tinyLogo}
          source={repository.ownerAvatarUrl}
        />
        <RepositoryItemInfo
          name={repository.fullName}
          description={repository.description}
          language={repository.language}
        />
      </View>
      <View style={styles.repoItemStats}>
        <RepositoryItemStats 
          stars={repository.stargazersCount}
          forks={repository.forksCount}
          reviews={repository.reviewCount}
          rating={repository.ratingAverage}
        />
      </View>
    </View>
  );
}

export default RepositoryItem;