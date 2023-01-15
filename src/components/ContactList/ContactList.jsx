import { ContactItem } from 'components/ContactItem/ContactItem';
import { Filter } from '../Filter/Filter';
export const ContactList = ({ contacts, onDelete, filter, onFilterChange }) => {
  console.log(contacts);
  return (
    <>
      <Filter filterValue={filter} onChange={onFilterChange} />
      <ul>
        {contacts.map(contact => (
          <ContactItem key={contact.id} info={contact} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
};
