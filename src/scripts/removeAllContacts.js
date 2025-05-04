import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const data = writeContacts([]);
    return data;
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
