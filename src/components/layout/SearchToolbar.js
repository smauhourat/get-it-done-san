import React from 'react'
import PropTypes from 'prop-types'
import InputBase from "@material-ui/core/InputBase";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SearchToolbar = props => {

    return (
        <Card variant="outlined">
            <CardContent>
                <InputBase
                    placeholder= 'Search'
                    onChange={() => console.log('onChange')}
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
