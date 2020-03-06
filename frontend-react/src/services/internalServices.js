export function filterTags (data) {
  const rawTags = []
  const filteredTags = []

  for(let i = 0; i < data.length; i++){
    rawTags.push(data[i].all_tags)
  }

  const tags = rawTags.flat()

  for(let j = 0; j < tags.length; j++){
    if(!filteredTags.includes(tags[j])){
      filteredTags.push(tags[j])
    }
  }
  return filteredTags
}



const internalServices = {
  filterTags
}

export default internalServices