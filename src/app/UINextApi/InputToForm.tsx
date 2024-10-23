import { ChangeEventHandler } from 'react';

export const InputAsString = ({
  htmlFor,
  onChange,
  value,
  name,
  title,
}: {
  htmlFor: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  name: string;
  title: string;
}) => {
  return (
    <div className="pt-2">
      <label htmlFor={htmlFor}>{title}</label>
      <br />

      <input type="text" name={name} onChange={onChange} value={value} className="w-full" />
    </div>
  );
};

export const InputAsNumber = ({
  htmlFor,
  onChange,
  value,
  name,
  title,
}: {
  htmlFor: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: number;
  name: string;
  title: string;
}) => {
  return (
    <div className="pt-2">
      <label htmlFor={htmlFor}>{title}</label>
      <br />

      <input type="number" name={name} onChange={onChange} value={value} className="w-full" />
    </div>
  );
};
