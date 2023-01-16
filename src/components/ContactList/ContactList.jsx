import { ContactItem } from 'components/ContactItem/ContactItem';
import { Filter } from '../Filter/Filter';
import { List } from './ContactList.styled';
export const ContactList = ({ contacts, onDelete, filter, onFilterChange }) => {
  return (
    <>
      <Filter filterValue={filter} onChange={onFilterChange} />
      <List>
        {contacts.map(contact => (
          <ContactItem key={contact.id} info={contact} onDelete={onDelete} />
        ))}
      </List>
    </>
  );
};
