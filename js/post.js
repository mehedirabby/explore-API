function loadPosts (){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res =>res.json())
    .then(data=>displayPosts(data))
}


/*
    1.get the element/container where you want to add the new elements 
    2.creat child element
    3.set innerText or innerHtml
    4.append the chils into the file
*/
function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    for(const post of posts){
        
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML=`
            <h4>user-${post.userId}</h4>
            <h5>post: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}




loadPosts();