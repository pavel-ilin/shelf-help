import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux'
import { createTag, createBook } from "../redux/actions";

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
  const [newTag, setNewTag] = useState('')
  const [tags, setTags] = useState([])

  console.log(initTags)

  const renderTags = () => {
    return initTags.map(tag => {
      return  <option value={`${tag.title}`}>{tag.title}</option>
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
    const book = {title: title, author: author, pubYear: pubYear, edited: edited, tags: filteredTags}
    dispatch(createBook(book))

    setTitle('')
    setAuthor('')
    setPubYear('')
    setEdited('yes')
    setNewTag('')
  }

  return(
        <Fragment>
              <Form onSubmit={submitForm}>
                <lable>Title:</lable>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)}></input>
                <lable>Author:</lable>
                <input required type="text" value={author} onChange={e => setAuthor(e.target.value)}></input>
                <lable>Publication Year:</lable>
                <input required type="number" value={pubYear} onChange={e => setPubYear(e.target.value)}></input>
                <lable>Edited:</lable>
                <select required value={edited} onChange={e => setEdited(e.target.value)}>
                  <option value='yes'>Yes</option>
                  <option value='no'>No</option>
                </select>
                <lable>Tags:</lable>
                <select required multiple onChange={e => selectTags(e.target.value)}>
                  {renderTags()}
                </select>
                <input type="submit" value="Submit" />
              </Form>

              <Form>
                {errors ? <div>{errors}</div> : null}
                <br />
                <input type="text" valu={newTag} onChange={e => setNewTag(e.target.value)}></input>
                <button onClick={addTag}>Add tag</button>
              </Form>

              <Tags>
                  <Ul>{renderSelectedTags()}</Ul>
              </Tags>
        </Fragment>
    )
}

export default NewBookForm;