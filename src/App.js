import logo from './logo.svg';
import { v4 as uuidv4 } from "uuid";
import './App.css';
import React, { useEffect, Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import SearchToolbar from './components/layout/SearchToolbar'
import Tasks from './components/tasks/Tasks'
import TaskForm from './components/tasks/TaskForm'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import useLocalStorageState from './hooks/useLocalStorageState';

function App() {
  const [tasks, setTasks] = useLocalStorageState("tasks", [
    {
      _id: uuidv4(),
      title: "Eat breakfast",
      description:
        "buy oatmeal, tea and dried rose petals from the local grocery store"
    },
    {
      _id: uuidv4(),
      title: "Win hackathon",
      description: "Make best task planner app ever"
    },
  ]);  

  const [filteredTasks, setFilteredTasks] = useLocalStorageState("filteredTasks", tasks);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <Container>
        {/* <Box sx={{ bgcolor: '#c8e6c9', height: '80vh', with: '100vh', padding: '30px', borderRadius: '5%'}}> */}
          <Grid container spacing={2} >
            <Grid item xs={12} md={12}>
              
            </Grid>            
            <Grid item xs={12} className="grid-item">
              <TaskForm setTasks={setTasks} setFilteredTasks={setFilteredTasks} />
            </Grid>
            <Grid item xs={12} className="grid-item">
              <SearchToolbar setFilteredTasks={setFilteredTasks} tasks={tasks}/>
            </Grid>
            <Grid item xs={12} className="grid-item">
              <Tasks tasks={filteredTasks} />
            </Grid>
          </Grid>      
        {/* </Box> */}
      </Container>
    </Fragment>
  );
}

export default App;
