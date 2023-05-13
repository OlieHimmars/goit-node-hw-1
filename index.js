const { listContacts, getContactById, removeContact, addContact } = require('./contacts');

const argv = require("yargs").argv;

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await listContacts();
      console.log(allContacts);
      break;
    case 'get':
      const oneContact = await getContactById(id);
      console.log(oneContact);
      break;
    case 'add':
      const newContact = await addContact({ name, email, phone });
      console.log(newContact);
      break;
    case 'remove':
      const delContact = await removeContact(id);
      console.log(delContact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
