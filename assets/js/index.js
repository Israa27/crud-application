
//Add User Function 
if (document.getElementById('add_user')) {
  document.getElementById('add_user').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Add User form data submitted');
   
    
  });
}

//Update User Function
if (document.getElementById('update_user')) {
  document.getElementById('update_user').addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the form data
    const formData = new FormData(document.getElementById('update_user'));
    const id = formData.get('id');
    const name = formData.get('name');
    const email = formData.get('email');
    const gender = formData.get('gender');
    const status = formData.get('status');

    // Create an object with the form data
    const data = { id, name, email, gender, status };

    // Send the data to the server using Axios
    axios({
      method: 'put',
      url: `http://localhost:3000/api/users/${id}`,
      data: data
    })
      .then(response => {
        alert('Data Updated Successfully!');
        window.location.href = "/";
      })
      .catch(error => {
        console.error(error);
      });
  });
}

//Delete User Function
if(window.location.pathname==='/'){
 document.querySelector('.table tbody td a.delete').addEventListener('click', (event) => {
    let id=this.getAttribute('data-id')
    // Send the data to the server using Axios
    axios({
      method: 'delete',
      url: `http://localhost:3000/api/users/${id}`,
     
    })
      .then(response => {
        alert('Delete User Successfully!');
        location.reload();
      })
      .catch(error => {
        console.error(error);
      });
 
  })
}