import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react'
import Navbar from './components/layout/Navbar'
import SearchToolbar from './components/layout/SearchToolbar'
import Tasks from './components/tasks/Tasks'
import TaskForm from './components/tasks/TaskForm'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

function App() {
  
  return (
    <Fragment>
      <CssBaseline />
      <Navbar />

      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#c8e6c9', height: '80vh', with: '100vh', padding: '30px', borderRadius: '5%'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} className="grid-item">
              <TaskForm />
            </Grid>
            <Grid item xs={12} className="grid-item">
              <SearchToolbar />
            </Grid>
            <Grid item xs={12} className="grid-item">
              <Tasks />
            </Grid>
          </Grid>      
        </Box>
      </Container>
    </Fragment>
  );
}

export default App;
