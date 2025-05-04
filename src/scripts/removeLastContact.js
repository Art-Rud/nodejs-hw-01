import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const data = await readContacts();
    const newData = data.slice(0, -1);
    await writeContacts(newData);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
