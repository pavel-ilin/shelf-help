import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { createTag, createBook } from "../redux/actions";
import { TextField, Button } from '@material-ui/core';

const Form = styled.form`
  display: grid;
  grid-auto-rows: max-content;
`;

const Tags = styled.div`
  display: grid;
`
const Ul = styled.ul`
  list-style-type:none;
`

const NewBookForm = () => {
  const initTags = useSelector(item => item.allTags)
  const errors = useSelector(item => item.errors)

  const dispatch = useDispatch();

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [pubYear, setPubYear] = useState('')
  const [edited, setEdited] = useState('yes')
  const [edition, setEdition] = useState('')

  const [newTag, setNewTag] = useState('')
  const [tags, setTags] = useState([])

  const renderTags = () => {
    return initTags.map(tag => {
      return  <option key={tag.id} value={`${tag.title}`}>{tag.title}</option>
    })
  }

  const selectTags = (tag) => {
    setTags([...tags, tag])
  }

  let filteredTags = [...new Set(tags)]

  const renderSelectedTags = () => {
    return filteredTags.map(tag => {
    return <li>{tag}</li>
    })
  }

  const addTag = (event) => {
    event.preventDefault();
    dispatch(createTag(newTag))
  }

  const submitForm = (event) => {
    event.preventDefault();
    const book = {title: title, author: author, pubYear: pubYear, edition: edition, edited: edited, tags: filteredTags}
    dispatch(createBook(book))

    setTitle('')
    setAuthor('')
    setPubYear('')
    setEdited('yes')
    setNewTag('')
  }

  return(
        <Fragment>
          <div>
              <Form onSubmit={submitForm}>
                <lable>Title:</lable>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                <lable>Author:</lable>
                <input required type="text" value={author} onChange={e => setAuthor(e.target.value)}></input>
                <lable>Publication Year:</lable>
                <input required type="number" value={pubYear} onChange={e => setPubYear(e.target.value)}></input>
                <lable>Edition:</lable>
                <input required type="text" value={edition} onChange={e => setEdition(e.target.value)}></input>
                <lable>Edited:</lable>
                <select required value={edited} onChange={e => setEdited(e.target.value)}>
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
                <lable>Tags:</lable>
                <select required multiple onChange={e => selectTags(e.target.value)}>
                  {renderTags()}
                </select>
                <Button className={'button'} variant="contained" color="primary" type="submit" value="Submit" >Submit</Button>
              </Form>
              <Form>
                {errors ? <div>{errors}</div> : null}
                <br />
                <TextField className={'input'} id="outlined-basic" label="Tags" variant="outlined" value={newTag} onChange={e => setNewTag(e.target.value)}></TextField>
                <Button className={'button'} variant="contained" color="primary" onClick={addTag}>Add tag</Button>
              </Form>
            </div>
            <Tags>
                  <Ul>{renderSelectedTags()}</Ul>
              </Tags>
        </Fragment>
    )
}

export default NewBookForm;