function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(datas =>{
      let postContainer=document.getElementById('post_container');
    for(let data of datas){

  let divElement=document.createElement("div");
  divElement.classList.add("post");
  divElement.innerHTML=`
  <h4 class='post-id'>Post ID: ${data.id}</h1>
  <h3>Post Title:  ${data.title}</h3>
  <p>Post Description: ${data.body}</p>
  <button onclick='showComments(${data.id})'>Show comments</button>
  `;

   postContainer.appendChild(divElement);
  
    }

    })
  }
  loadData();
 