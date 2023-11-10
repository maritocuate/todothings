import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import Task from './Task'

interface ListTasksProps {
  taskItems: string[]
  completeTask: (index: number) => void
}

const ListTasks = ({ taskItems, completeTask }: ListTasksProps) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
      }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays taks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#de0358',
  },
  items: {
    marginTop: 30,
  },
})

export default ListTasks
