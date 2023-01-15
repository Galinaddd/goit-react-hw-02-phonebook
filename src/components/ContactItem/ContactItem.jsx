export const ContactItem = ({ info, onDelete }) => {
  const handlCliclDelete = () => {
    onDelete(info.id);
  };
  return (
    <li key={info.id}>
      <p>
        {info.name} {info.number}
      </p>
      <button type="button" onClick={handlCliclDelete}>
        Delete
      </button>
    </li>
  );
};
