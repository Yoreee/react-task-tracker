import './App.css';
// import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState}  from 'react';
import Task from './components/Task';


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "one",
        day: "M",
        reminder: true
    },
    {
        id: 2,
        text: "two",
        day: "Tu",
        reminder: true
    },
    {
        id: 3,
        text: "three",
        day: "W",
        reminder: true
    },
    {
        id: 4,
        text: "four",
        day: "Th",
        reminder: true
    },
    {
        id: 5,
        text: "five",
        day: "F",
        reminder: true
    }
])

const deleteTask = (id) => {
  console.log('DELETE', id);
  setTasks(tasks.filter((task) => task.id !== id));
}

  return (
    <div className="container">
      <Header></Header>
      <Tasks tasks={tasks} onDelete={deleteTask}></Tasks>
    </div>
  );
}


// class App extends React.Component {
//   render() {
//     return <h1>Hello from Class Component</h1>
//   }
// }
export default App;
