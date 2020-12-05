import React from 'react'
import classes from './FilterBlock.module.css'

function FilterBlock() {
    return (
        <div className={classes.FilterBlock}>
            <h3>Action</h3>
            <h3>Detective</h3>
            <h3>Thriller</h3>
        </div>
    )
}

export default FilterBlock