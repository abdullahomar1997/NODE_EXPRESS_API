import { v4 as uuidv4 } from 'uuid'

let users = [

    {
        id: "1",
        firstName: "john",
        lastName: "Doe",
        age: 25
    },

    {
        id: "2",
        firstName: "Sam",
        lastName: "Doe",
        age: 67
    }

];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {

    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database! `)

}

export const getUser = (req, res) => {

    const { id } = req.params;
    // alternative
    // const id = req.params.id

    const user = users.find((user) => user.id === id);

    res.send(user);
}

export const deleteUser = (req, res) => {

    const { id } = req.params;

    const users = users.filter((user) => user.id !== id);

    res.send(`User with the name ${user.firstName} deleted from the database! `)
}

export const updateUser = (req, res) => {

    const { id } = req.params;

    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;

    if (lastName) user.lastName = lastName;

    if (age) user.age = age;

    res.send(`User with the id ${id} has been updated! `)
}