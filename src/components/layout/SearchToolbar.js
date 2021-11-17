import React from 'react'
import PropTypes from 'prop-types'
import InputBase from "@material-ui/core/InputBase";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SearchToolbar = ({setFilteredTasks, tasks}) => {

    const handleFilterTask = (e) => {
        e.preventDefault();

        setFilteredTasks((prevTask) => {
            prevTask = tasks;
            return prevTask.filter((task) => {
                if (
                    task.title
                    .trim()
                    .toLowerCase()
                    .includes(e.target.value.trim().toLowerCase()) ||
                    task.description
                    .trim()
                    .toLowerCase()
                    .includes(e.target.value.trim().toLowerCase())
                ) {
                  return true;
                }
                return false;
              });
        });
    }

    return (
        <Card variant="outlined">
            <CardContent>
                <InputBase
                    placeholder= 'Search'
                    onChange={(e) => handleFilterTask(e)}
                    onKeyDown={(e) => e.key === 'Enter' ? console.log('press enter') : null}
                    style={{
                        margin: '0 auto',
                        width: '100%',
                        backgroundColor: '#f1f8e9',
                        padding: '5px'
                    }}
                />            
            </CardContent>
        </Card>        
    )
}

SearchToolbar.propTypes = {

}

export default SearchToolbar
