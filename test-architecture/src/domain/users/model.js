let users = [
    { id: '1', username: 'katya', age: 26 }
]

module.exports = {
    create: ({ username, age }) => {
        const newUser = {
            username,
            age,
            id: String(Date.now())
        }

        if (!users.find(user => user.username === username)) {
            users.push(newUser);
        } else {
            throw new Error("Пользователь уже существует!")
        }

        return newUser;
    },
    removeById: ({ id }) => { },
    removeByUsername: ({ id }) => { },
    getAll: () => {
        return users;
    },
    getById: ({ id }) => {
        return users.find(user => user.id === id);
    },
}