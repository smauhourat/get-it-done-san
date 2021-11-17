import React, { Fragment } from 'react'
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types'
import useInputState from '../../hooks/useInputState';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';

const TaskForm = ({setTasks, setFilteredTasks}) => {
    const [title, setTitle, resetTitle] = useInputState("");
    const [description, setDescription, resetDescription] = useInputState("");
 
    const resetForm = () => {
        resetTitle();
        resetDescription();
    };

    const handleAddTask = (e) => {
        e.preventDefault();

        const newTask = {
            _id: uuidv4(),
            title,
            description,
        };
        
        setTasks((prevTask) => {
            return [...prevTask, newTask]
        });
        setFilteredTasks((prevTask) => {
            return [...prevTask, newTask]
        });

        resetForm();
    }
    return (
        <Card variant="outlined">
            <form  onSubmit={(e) => handleAddTask(e)}>
                <CardContent>
                    <FormControl sx={{ width: '25ch' }}>
                        <div>
                            <TextField label="Task Title" variant="standard" value={title} onChange={setTitle}></TextField>
                        </div>
                        <div>
                            <TextField label="Task Description" variant="standard" style={{ with:'100%' }} value={description} onChange={setDescription}></TextField>
                        </div>
                        <div>
                            <br />
                        </div>    
                    </FormControl>
                </CardContent>
                <CardActions>
                    <div>
                        <Button variant="contained" type="submit">Add</Button>
                    </div>
                </CardActions>
            </form>
        </Card>
    )
}

TaskForm.propTypes = {

}

export default TaskForm
