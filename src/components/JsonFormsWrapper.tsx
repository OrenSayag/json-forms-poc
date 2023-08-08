import React, { FC, FormEvent, ReactNode } from "react";

const JsonFormsWrapper: FC<{
  jsonForms: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}> = ({ jsonForms, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={"flex flex-col"}>
      {jsonForms}
      <button
        className={"bg-[#472F92] text-white font-medium py-2 w-36 rounded-md"}
        type={"submit"}
      >
        שמירת פרטים
      </button>
    </form>
  );
};

export default JsonFormsWrapper;
