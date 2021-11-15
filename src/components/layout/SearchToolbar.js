import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import InputBase from "@material-ui/core/InputBase";

const SearchToolbar = props => {

    return (
        <Fragment>
            <InputBase
                onChange={() => console.log('onChange')}
                onKeyDown={(e) => e.key === 'Enter' ? console.log('press enter') : null}
                style={{
                    margin: '0 auto',
                    maxWidth: 800,
                    backgroundColor: '#cccccc',
                    padding: '5px'
            }}
            />            
        </Fragment>
    )
}

SearchToolbar.propTypes = {

}

export default SearchToolbar
