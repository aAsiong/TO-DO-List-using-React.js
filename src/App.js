// import logo from './logo.svg';
import './index.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

//// hook for new State
import { useState } from 'react'

//// Class based compotent (Old)
// import React from 'react'
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a Class</h1>
//   }
// }

//// Arrow method
const App = () => {
    const [showAddTask, setShowAddTask] = 
    useState(false)
    // call this piece of state
    // and function to update the state
    // State is IMMUTABLE

    // This tasks is now GLOBAL
    const [tasks, setTasks] = useState([
      {
          id: 1,
          text: 'Doctors Appointment',
          day: "Feb 5th at 2:30pm",
          reminder: true,
      },
      {
          id: 2,
          text: 'Meeting at School',
          day: "Feb 6th at 1:30pm",
          reminder: true,
      },
      {
          id: 3,
          text: 'Food Shopping',
          day: "Feb 5th at 2:30pm",
          reminder: false,
      }
  ])

  //// Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((tasks) => 
        tasks.id === id 
        ? { ...tasks, reminder: !tasks.reminder } 
        : tasks
      )
    )
  }

  //// Add Task
  const addTask = (task) => {
    // console.log(task)
    const id = Math.floor(
      Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //// Delete Task
  const deleteTask = (id) => {
    // console.log('delete', id )
    setTasks(tasks.filter((tasks) => 
      tasks.id !== id))
  }

  return (
    <div className="container">
      <Header onAdd={() => 
        setShowAddTask(!showAddTask)} 
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 
        ? ( <Tasks tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder} /> ) 
        : (
        'No Tasks To Show'
      )}
    </div>
  )
}

// function App() {
//   const name = "Brad";
//   const x = false;
//   return (
//     // This is JSX - Javascript Syntax Extension
//     // Can be empty to <>
//     <div className="container">
//       <Header />
//       <h1>Hello From React</h1>
      
//       {/* <h2>Hello {x ? 'Yes' : 'No'}</h2> */}
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           GitHub Codespaces <span className="heart">♥️</span> React
//         </p>
//         <p className="small">
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </p>
//       </header> */}

//     </div>
    
//     // Putting any element outside of the div
//     // will result to an error
//     //// <h2>Hello</h2>
//   );
// }

export default App;
