import React, { Fragment } from 'react';
import '../App.css';
import { useSelector } from 'react-redux'

import Tag from '../components/Tag'

const Menu = () => {

    const tags = useSelector(item => item.tags)

    const renderTags = () => {
      let id = 0
      return  tags.sort().map(tag => {
          id++
          return (<Tag key={id} id={id}tag={tag} />)
        })
    }

    return(
        <Fragment>
            {renderTags()}
        </Fragment>
    )
}

export default Menu;
