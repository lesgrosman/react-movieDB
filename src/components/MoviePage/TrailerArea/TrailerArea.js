import React from 'react'
import ReactPlayer from 'react-player'
import {connect} from 'react-redux'

import classes from './TrailerArea.module.css'

const TrailerArea = props => {
    const _ytURL = "https://www.youtube.com/watch?v="
    let counter = 0

    return (
        <div className={classes.TrailerArea}>
            {   
                props.trailers.slice(0, 2).map((info, i) => {                 
                    if (info.type === "Trailer") {
                        counter += 1
                        return (
                            <div className={classes.Trailer} key={Date.now() + i}>
                                <h2>Trailer #{counter}</h2>
                                <ReactPlayer
                                    url={_ytURL + info.key}
                                    controls={true}
                                    width='600px'
                                    height='340px'
                                />
                            </div>
                        )
                    }                  
                })
            }

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        trailers: state.movie.trailers
    }
}

export default connect(mapStateToProps)(TrailerArea)
