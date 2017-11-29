// delete existing ressources  
//**************************************************************************************
fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE'
});
  
 //**************************************************************************************
 // verify its existance in the BASE
 //**************************************************************************************
 
 fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo'
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(json)
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log('Fetch Error :-S', error);
  });