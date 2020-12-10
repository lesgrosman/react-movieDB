import React, {Component} from 'react'
import MostRatedBlock from '../MostRatedBlock/MostRatedBlock'
import SearchBlock from '../SearchBlock/SearchBlock'
import GenresBlock from '../GenresBlock/GenresBlock'
import classes from './WrapperBlock.module.css'

class WrapperBlock extends Component{
    render() {
        return (
            <div className={classes.WrapperBlock}>
                <GenresBlock/>
                <h1>YO</h1>
                <SearchBlock/>
                <MostRatedBlock/>
            </div>
        )
    }
}

export default WrapperBlock