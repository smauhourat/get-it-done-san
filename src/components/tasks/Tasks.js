import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TaskItem from './TaskItem'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Tasks = ({tasks}) => {
    return (
        <Card variant="outlined">
            <CardContent>
                Tasks List Count: {tasks.length}
                {tasks.map((task) => (
                    <TaskItem key={task._id} task={task} />
                ))}
            </CardContent>
        </Card>
    )
}

Tasks.propTypes = {

}

export default Tasks
