import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TaskItem from './TaskItem'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Tasks = props => {
    return (
        <Card variant="outlined">
            <CardContent>
                Tasks List
            </CardContent>
        </Card>
    )
}

Tasks.propTypes = {

}

export default Tasks
