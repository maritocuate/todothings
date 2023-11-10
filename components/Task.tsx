import { View, Text, StyleSheet } from 'react-native'
import * as Animatable from 'react-native-animatable'

interface TaskProps {
  text: string
}

const Task = ({ text }: TaskProps) => {
  return (
    <Animatable.View style={styles.item} animation="bounceInRight">
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>

      <View style={styles.circular}></View>
    </Animatable.View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: '#e2e2e2',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 5,
  },
})

export default Task
