const { listContacts, getContactById, removeContact, addContact } = require('./db');

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await listContacts();
            return allContacts;
        case "get":
            const oneContact = await getContactById(id);
            return oneContact;
        case "remove":
            const delContact = await removeContact(id);
            return delContact;
        case "add":
            if (!name || !email || !phone) {
          console.log("Please provide name, email and phone for the new contact");
          return;
        }
            const newContact = await addContact(name, email, phone);
            return newContact;
        default:
            console.log("Unknown action type. Please try again");
    }
}

export default invokeAction;