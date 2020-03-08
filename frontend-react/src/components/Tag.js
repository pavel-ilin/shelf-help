import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { tagClick } from "../redux/actions";
import styled from 'styled-components';

const Wrapper = styled.div`
 display: flex;
`;

const Tag = (props) => {
    const dispatch = useDispatch()


    const onClick = (event) => {
      dispatch(tagClick(event.target.innerText))
    }

    return(
        <Fragment>
            <Wrapper><Link onClick={onClick} to={`/tags/${props.id}`}>{props.tag}</Link></Wrapper>
        </Fragment>
    )
}

export default Tag;