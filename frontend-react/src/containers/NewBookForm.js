import React, { Fragment } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux'


const Form = styled.form`
display: grid;
`;

const NewBookForm = () => {

  const tags = useSelector(item => item.tags)

  const renderTags = () => {
    return tags.map(tag => {
      return  <option value={`${tag}`}>{tag}</option>
    })
  }

    return(
        <Fragment>
              <Form>
                <lable>Title:</lable>
                <input type="text"></input>
                <lable>Author:</lable>
                <input type="text"></input>
                <lable>Publication Year:</lable>
                <input type="text"></input>
                <lable>Edited:</lable>
                <input type="text"></input>
                <lable>Tags:</lable>
                <select>
                  {renderTags()}
                </select>
                <button>Submit</button>
              </Form>
        </Fragment>
    )
}

export default NewBookForm;
