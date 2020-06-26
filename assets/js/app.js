let usersList = [];

fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
    res.json().then(data => {
        usersList = data;
    })
});

console.log(usersList);

