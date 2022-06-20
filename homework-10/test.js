const axios = require('axios');

let url

const contact = {
  name: 'PETER',
  email: 'peter@gamil.com',
  phone: '937-99-92'
}


// --- test 1 ---
url = 'http://localhost:3000/contacts'
axios
  .get(url)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    // console.log(res.data);
  })
  .catch(error => {
    console.error(error.response.status);
    console.error(error.response.data);
  });

// --- test 2 ---
url = 'http://localhost:3000/contacts/3'
axios
  .get(url)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    // console.log(res.data);
  })
  .catch(error => {
    console.error(error.response.status);
    console.error(error.response.data);
  });


// --- test 3 ---
url = 'http://localhost:3000/contacts/3'
axios
  .delete(url)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    // console.log(res.data);
  })
  .catch(error => {
    console.error(error.response.status);
    console.error(error.response.data);
  });


// --- test 4 ---
url = 'http://localhost:3000/contacts/10'
axios
  .put(url, contact)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    // console.log(res.data);
  })
  .catch(error => {
    console.error(error.response.status);
    console.error(error.response.data);
  });


// --- test 5 ---
url = 'http://localhost:3000/contacts/add'
axios
  .post(url, contact)
  .then(res => {
    console.log(`statusCode: ${res.status}`);
    // console.log(res.data);
  })
  .catch(error => {
    console.error(error.status);
    console.error(error.data);
  });