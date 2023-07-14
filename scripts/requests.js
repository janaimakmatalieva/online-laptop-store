// const productsRoot = document.querySelector('.products');
// const USERS_URL = "https://jsonplaceholder.typicode.com/users";


// fetch(USERS_URL).then(function(response) {
//     return response.json();
// }).then((data) => {
//     renderUsers(data);
// });

// const renderUsers = (data) => {
//     data.forEach((user) => {
//         const div = document.createElement('div');
//         div.textContent = `ID:${user.id} ${user.name}`;

//         productsRoot.append(div);
//     })
// }

// const row = document.querySelector(".row");

// async - await

// const getAllPosts = async () => {
//    fetch(POSTS__URL)
//    .then((response) => {
//     // console.log(response);
//     if (response.status === 200) {
//         return response.json();
//     } else if (response.status === 404) {
//         throw new Error("Not found");
//     }
//    })
//    .then((data) => {
//        data.forEach((post) => {
//         row.innerHTML += 
//         `<div class="card">
//           <p class="card__id">${post.id}</p>
//           <h2 class="card__title">${post.title}</h2>
//           <p class="card__">${post.body}</p>
//         </div>`
//        });
//    }).catch((error) => {
//     console.dir(error);
//    });

    // try {
    //     const response = await fetch(POSTS__URL);
    //     const data = await response.json();
    //     console.log(data);
        
    // } catch (error) {
    //     console.log('catch сработал!')
    // }

    // const obj = {
    //     name: "Akyl",
    //     age: 101,
    // };

    // const jsonObj = JSON.stringify(obj);
    // console.log(jsonObj);
    // console.log(JSON.parse(jsonObj));
    
    // const options = {
    //     method: "POST",
    //     body: JSON.stringify(obj),
    // };


    // fetch(POSTS__URL, options);



// };

// getAllPosts();


// axios.get(POSTS__URL);

// const POSTS__URL = "https://pokeapi.co/api/v2awd/pokemon";
// // intercepters

// // axios.get(POSTS__URL);


// const getAllPokemons = async () => {
//     try {
//         // loader = true
//         const response = await axios.get(POSTS__URL);
//         console.log(response);

//     } catch (error) {
//         console.log('error');
//     } finally {
//         // lodader = false
//     }

// };

// getAllPokemons();

