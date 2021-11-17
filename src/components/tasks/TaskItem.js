import React, { useState } from 'react'
import humanizeDuration from "humanize-duration";
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const TaskItem = ({task}) => {
    const [displaySpendTime, setDisplaySpendTime] = useState(
        task.spendTime
    );

    const handleStartStop = () => {
        task.spendTime += 10000;
        setDisplaySpendTime(task.spendTime);
    }
    return (
        <Card variant="outlined">
            <CardContent>
                <h1>{task.title}</h1>
                <p>{task.description}</p>
                <p>- You have spent {humanizeDuration(displaySpendTime)} on this task -</p>
            </CardContent>
            <CardActions>
                <div>
                    <Button variant="outlined" onClick={() => handleStartStop()} >Start</Button>
                </div>
            </CardActions>
        </Card>
    )
}

TaskItem.propTypes = {

}

export default TaskItem
