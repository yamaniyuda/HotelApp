const updateData = (link, data, option) => {
  const form = new FormData();
  const container = document.querySelector('.container')
  console.log(data)
  if (option === 'get') 
    fetch(link)
      .then(res => res.text)
      .then(data => {container.innerHTML = data})
  
}

const deleteData = (link) => {

}

const insertData = (link, option) => {
  const container = document.querySelector('.container')
  const form = new FormData();
  form.append('option', false)
  fetch(link, {
    'method': 'post',
    body: form
  }).then(res => res.text)
    .then(data => {container.innerHTML = data})
}