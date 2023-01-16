import { ContactItem } from 'components/ContactItem/ContactItem';
import { Filter } from '../Filter/Filter';
import { List } from './ContactList.styled';
import PropTypes from 'prop-types';

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
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onFilterChange: PropTypes.func.isRequired,
};
