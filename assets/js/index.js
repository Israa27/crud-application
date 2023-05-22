const axios =require('axios')
const addUserForm = document.querySelector('#add_user');

addUserForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Form data submitted');

  // Get the form data
  const formData = new FormData(addUserForm);
  const id = formData.get('id');
  const name = formData.get('name');
  const email = formData.get('email');
  const gender = formData.get('gender');
  const status = formData.get('status');

  // Create an object with the form data
  const data = { name, email, gender, status };

  // Send the data to the server using Axios or any other method
  // Example using Axios:
  axios.post(`http://localhost:3000/api/users/${id}`, data)
    .then(response => {
      console.log(response.data);
      alert('Data Updated Successfully!');
    })
    .catch(error => {
      console.error(error);
    });
});


const form = document.querySelector('#update_user');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Form data submitted');

  // Get the form data
  const formData = new FormData(form);
  const id = formData.get('id');
  const name = formData.get('name');
  const email = formData.get('email');
  const gender = formData.get('gender');
  const status = formData.get('status');

  // Create an object with the form data
  const data = { name, email, gender, status };

  // Send the data to the server using Axios or any other method
  // Example using Axios:
  axios.put(`http://localhost:3000/api/users/${id}`, data)
    .then(response => {
      console.log(response.data);
      alert('Data Updated Successfully!');
    })
    .catch(error => {
      console.error(error);
    });
});
