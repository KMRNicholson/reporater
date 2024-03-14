import { Pressable, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  spacing: {
    padding: 10
  },
});

const AppBarTab = (props) => {
  return (
    <View style={styles.spacing}>
      <Pressable onPress={props.onPress}>
        {props.children}
      </Pressable>
    </View>
    
  )
};

export default AppBarTab;