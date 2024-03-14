import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexGrow: 1,
  },
  stat: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
});

const convertToShortHandStat = (stat) => {
  if (Number(stat) >= 1000) {
    const shortHandStat = Number(stat) / 1000
    return `${shortHandStat.toFixed(1)}k`
  }

  return stat
}

const Stat = ({ value, name }) => {
  return (
    <View style={styles.stat}>
      <Text fontWeight="bold">{convertToShortHandStat(value)}</Text>
      <Text color={theme.colors.textSecondary}>{name}</Text>
    </View>
  )
}

const RepositoryItemStats = ({stars, forks, reviews, rating}) => {
  return (
    <View style={styles.container}>
      <Stat value={stars} name="Stars" />
      <Stat value={forks} name="Forks" />
      <Stat value={reviews} name="Reviews" />
      <Stat value={rating} name="Rating" />
    </View>
  );
}

export default RepositoryItemStats;