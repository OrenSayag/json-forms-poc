import React, { FC, FormEvent, ReactNode } from "react";

const JsonFormsWrapper: FC<{
  jsonForms: ReactNode;
  onSubmit: () => void;
}> = ({ jsonForms, onSubmit }) => {
  const cancelOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={cancelOnSubmit} className={"flex flex-col"}>
      {jsonForms}
      <button
        className={"bg-[#472F92] text-white font-medium py-2 w-36 rounded-md"}
        type={"submit"}
        onClick={onSubmit}
      >
        שמירת פרטים
      </button>
    </form>
  );
};

export default JsonFormsWrapper;
