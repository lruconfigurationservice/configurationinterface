import { ChangeEventHandler } from 'react';

const DropdownToForm = ({
  htmlFor,
  name,
  value,
  onChange,
  title,
}: {
  htmlFor: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  title: string;
}) => {
  const dropdownOptions = [
    { value: 'true', label: 'true' },
    { value: 'false', label: 'false' },
  ];
  return (
    <div className="pt-2">
      <label htmlFor={htmlFor}>{title}</label>
      <br />
      <select name={name} value={String(value)} onChange={onChange}>
        {dropdownOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownToForm;
