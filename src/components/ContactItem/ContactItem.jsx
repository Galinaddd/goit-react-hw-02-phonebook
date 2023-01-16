import { Item, Name, Number, Button } from './ContactItem.styled';
export const ContactItem = ({ info, onDelete }) => {
  const handlCliclDelete = () => {
    onDelete(info.id);
  };
  return (
    <Item key={info.id}>
      <Name>{info.name}</Name>
      <Number>{info.number} </Number>

      <Button type="button" onClick={handlCliclDelete}>
        Delete
      </Button>
    </Item>
  );
};
