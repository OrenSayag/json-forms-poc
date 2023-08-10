import { withJsonFormsControlProps } from "@jsonforms/react";
import { ControlProps, rankWith, uiTypeIs } from "@jsonforms/core";
import { useState } from "react";

const Pop: React.FC<{ onClick: (val: string) => void }> = ({ onClick }) => {
  return (
    <div
      className={
        "fixed top-0 left-0 w-full bg-black text-white bg-screen grid place-items-center h-screen"
      }
    >
      <div className={"flex flex-col items-center w-full"}>
        <p>Pop</p>
        <button onClick={() => onClick("X")}>
          Click to set the test field's value to X
        </button>
        <button onClick={() => onClick("Y")}>
          Click to set the test field's value to Y
        </button>
      </div>
    </div>
  );
};

const Button = ({
  label,
  uischema,
  data,
  path,
  handleChange,
}: ControlProps) => {
  const [pop, setPop] = useState<boolean>(false);
  const onPopButtonClick = (val: string) => {
    setPop(false);
    handleChange("testField", val);
  };
  const openPop = () => {
    setPop(true);
  };
  return (
    <>
      {pop && <Pop onClick={onPopButtonClick} />}
      <button onClick={openPop} className={"border-2 border-red-500 p-12"}>
        {label}
      </button>
    </>
  );
};

export const ButtonRenderer = withJsonFormsControlProps(Button);

export const ButtonTester = rankWith(3, uiTypeIs("Button"));
