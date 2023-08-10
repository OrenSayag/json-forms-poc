import { ControlProps, rankWith, uiTypeIs } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";

const TextWithIcon: React.FC<ControlProps> = ({
  data,
  handleChange,
  label,
  path,
  rootSchema,
}) => {
  const isValid =
    data?.length >= (rootSchema?.properties?.[path]?.minLength || 0);
  return (
    <div className="flex flex-row items-center">
      <div className="flex flex-col">
        <label className="text-sm text-gray-600">{label}</label>
        <input
          className="border border-gray-300 rounded-md px-3 py-2 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-600"
          type="text"
          onChange={(ev) => handleChange(path, ev.target.value)}
        />
      </div>
      {isValid && <label className="text-sm text-gray-600">Icon</label>}
    </div>
  );
};

export const TextWithIconRenderer = withJsonFormsControlProps(TextWithIcon);
export const TextWithIconTester = rankWith(3, uiTypeIs("TextWithIcon"));
