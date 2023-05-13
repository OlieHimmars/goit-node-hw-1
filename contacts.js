const { listContacts, getContactById, removeContact, addContact } = require('./db');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "read":
            const allContacts = await listContacts();
            return console.log(allContacts);
        case "getById":
            const oneContact = await getContactById(id);
            return console.log(oneContact);
        case "deleteById":
            const delContact = await removeContact(id);
            return console.log(delContact);
        case "add":
            if (!name || !email || !phone) {
          console.log("Please provide name, email and phone for the new contact");
          return;
        }
            const newContact = await addContact({name, email, phone});
            return console.log(newContact);
        default:
            console.log("Unknown action type. Please try again");
    }
};

module.exports = {
    invokeAction,
};
