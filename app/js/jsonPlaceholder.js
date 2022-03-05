function getPostById(id) {
    let post;

    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then(data => post = data)
        .then(() => console.log(post));

    return post;
}

// 10 users
function getUsers(id) {
    let users;

    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then(data => users = data)
        .then(() => console.log(users));

    return users;
}

// todo:obj
function addTodo(todo) {
    
}

