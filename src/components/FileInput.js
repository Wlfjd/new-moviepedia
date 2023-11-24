export function FileInput({ name, onChange }) {
  const handleChange = (e) => {
    onChange(name, e.target.files[0]);
  };
  return <input type="file" onChange={handleChange}></input>;
}
