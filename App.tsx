import { useState } from 'react'
import { Keyboard, StyleSheet, View } from 'react-native'
import ListTasks from './components/ListTasks'
import InputTask from './components/InputTask'

export default function App() {
  const [task, setTask] = useState<string>('')
  const [taskItems, setTaskItems] = useState<string[]>([])

  const handleAddTask = () => {
    if (!task) return
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask('')
  }

  const completeTask = (index: number) => {
    let itemsCopy = [...taskItems]
    itemsCopy.splice(index, 1)
    setTaskItems(itemsCopy)
  }

  return (
    <View style={styles.container}>
      <ListTasks taskItems={taskItems} completeTask={completeTask} />
      <InputTask task={task} setTask={setTask} handleAddTask={handleAddTask} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
  },
  addText: {},
})
