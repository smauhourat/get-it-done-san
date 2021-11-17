import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const TaskItem = ({task}) => {
    return (
        <Card variant="outlined">
            <CardContent>
                <h1>{task.title}</h1>
                <p>{task.description}</p>            
            </CardContent>
        </Card>
    )
}

TaskItem.propTypes = {

}

export default TaskItem
