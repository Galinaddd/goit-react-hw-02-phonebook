export const Filter = ({ filterValue, onChange }) => {
  return (
    <>
      <p>find contacts by name</p>

      <input type="text" value={filterValue} onChange={onChange} />
    </>
  );
};
