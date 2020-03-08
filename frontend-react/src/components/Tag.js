import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { tagClick } from "../redux/actions";

const Tag = (props) => {
    const dispatch = useDispatch()


    const onClick = (event) => {
      dispatch(tagClick(event.target.innerText))
    }

    console.log(this)
    return(
        <Fragment>
            <Link to={`/tags/${props.id}`}><div onClick={onClick}>{props.tag}</div></Link>
        </Fragment>
    )
}

export default Tag;