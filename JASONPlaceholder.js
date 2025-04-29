const API_URL = 'https://jsonplaceholder.typicode.com/posts';


window.onload = () => {
  cargarPosts();
};


function cargarPosts() {
  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      const postsTable = document.getElementById('posts-table');
      postsTable.innerHTML = ''; 

      data.forEach(post => {
        const row = document.createElement('tr');

        row.innerHTML = `
          <td>${post.title}</td>
          <td><button onclick="eliminarPost(${post.id}, this)">Eliminar</button></td>
        `;

        postsTable.appendChild(row);
      });
    })
    .catch(error => console.error('Error al cargar posts:', error));
}


function crearPost() {
  const title = document.getElementById('post-title').value.trim();
  const body = document.getElementById('post-body').value.trim();

  if (title === '' || body === '') {
    alert('Por favor completa todos los campos.');
    return;
  }

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1
    })
  })
    .then(response => response.json())
    .then(post => {
      alert('¡Post creado exitosamente!');

      const postsTable = document.getElementById('posts-table');
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${post.title}</td>
        <td><button onclick="eliminarPost(${post.id}, this)">Eliminar</button></td>
      `;

      postsTable.appendChild(row);

      
      document.getElementById('post-title').value = '';
      document.getElementById('post-body').value = '';
    })
    .catch(error => console.error('Error al crear post:', error));
}

function eliminarPost(postId, button) {
  fetch(`${API_URL}/${postId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        const row = button.closest('tr');
        row.remove();
        alert(`Post ${postId} eliminado correctamente.`);
      } else {
        throw new Error('No se pudo eliminar el post.');
      }
    })
    .catch(error => console.error('Error al eliminar post:', error));
}
