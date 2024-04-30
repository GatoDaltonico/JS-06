const CARDS_CONTAINER = document.querySelector("#card-container");

// Función para crear una tarjeta de usuario
function createUserCard(user) {
    // Crear elementos de la tarjeta
    const card = document.createElement("div");
    const name_section = document.createElement("h3");
    const desc_section = document.createElement("p");
    const age_section = document.createElement("p");
    const book_section = document.createElement("div");

    // Crear lista de libros favoritos
    const bookList = user.fav_books.books.map(book => {
        const item = document.createElement("ul");
        item.textContent = book;
        return item;
    });

    // Asignar contenido a los elementos de la tarjeta
    name_section.textContent = user.username;
    desc_section.textContent = user.desc;
    age_section.textContent = user.age;
    book_section.append(...bookList);
    card.append(name_section, desc_section, age_section, book_section);

    // Devolver la tarjeta creada
    return card;
}

// Función para agregar una tarjeta al contenedor
function addCardToContainer(card) {
    CARDS_CONTAINER.appendChild(card);
}

// Lista de usuarios
const userList = [
    {
        id: 1,
        username: "User1",
        desc: "Sobre mí",
        age: 24,
        fav_books: {
            books: ["Libro1", "Libro2", "Libro3"],
        },
    },
    {
        id: 2,
        username: "User2",
        desc: "Sobre mí",
        age: 30,
        fav_books: {
            books: ["Libro4", "Libro5", "Libro6"],
        },
    },
    // Puedes agregar más usuarios aquí
];

// Crear y agregar tarjetas de usuario para cada usuario en la lista
userList.forEach(user => {
    const userCard = createUserCard(user);
    addCardToContainer(userCard);
});

//Hola soy un comentario rando, miau.