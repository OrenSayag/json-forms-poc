import {
  ArrayLayoutProps,
  composePaths,
  createDefaultValue,
  isObjectArrayWithNesting,
  isOneOfControl,
  rankWith,
  uiTypeIs,
} from "@jsonforms/core";
import React, { MouseEventHandler, useCallback, useEffect } from "react";
import {
  withJsonFormsArrayLayoutProps,
  withJsonFormsControlProps,
  withJsonFormsLayoutProps,
} from "@jsonforms/react";
import { CardRenderer } from "./CardRenderer";

// const Item: React.FC = () => {};

const ArrayLayoutRenderer = ({
  visible,
  enabled,
  id,
  uischema,
  schema,
  label,
  rootSchema,
  renderers,
  cells,
  data,
  path,
  errors,
  uischemas,
  addItem,
  removeItems,
}: ArrayLayoutProps) => {
  const addItemCb = useCallback(
    (p: string, value: any) => {
      return addItem(p, value);
    },
    [addItem]
  );

  const removeItemsCb = useCallback(
    (path: string, toDelete: number[]) => {
      console.log({ path, toDelete });
      return removeItems ? removeItems(path, toDelete) : () => {};
    },
    [removeItems]
  );

  const toRender = Array(data)
    .fill(0)
    .map((_, i) => {
      return (
        // <div key={i}></div>
        <CardRenderer
          key={i}
          index={i}
          schema={schema}
          uischema={uischema}
          path={composePaths(path, `${i}`)}
          renderers={renderers}
          cells={cells}
          onRemove={removeItemsCb(path, [i])}
          direction={"row"}
          enabled
          visible
        />
      );
    });

  useEffect(() => {}, [data]);

  return (
    <div className={"mt-4 flex flex-col justify-start"}>
      <button
        className={
          "border-[#472F92] border-2 text-[#472F92] font-medium py-2 w-36 rounded-md"
        }
        onClick={addItemCb(path, createDefaultValue(schema))}
      >
        הוספת אבחנה +
      </button>
      {toRender}
    </div>
  );
};

export default withJsonFormsArrayLayoutProps(ArrayLayoutRenderer);

export const ArrayLayoutTester = rankWith(1000, isObjectArrayWithNesting);
