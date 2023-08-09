import {
  JsonFormsStateContext,
  ResolvedJsonFormsDispatch,
  withJsonFormsContext,
} from "@jsonforms/react";
import { LayoutProps } from "@jsonforms/core";
import React, { ComponentType } from "react";

interface DispatchPropsOfCardRenderer {
  onRemove: () => void;
}

interface CardRendererProps extends LayoutProps, DispatchPropsOfCardRenderer {
  index: number;
}

export const CardRenderer = (props: CardRendererProps) => {
  const { uischema, schema, path, renderers, cells, onRemove } = props;
  const elements = uischema.options?.["detail"]["elements"];
  const itemsToRender = elements.map((element: any, index: number) => {
    return (
      <div key={index} className={"h-full"}>
        <ResolvedJsonFormsDispatch
          schema={schema}
          uischema={element}
          path={path}
          enabled={true}
          renderers={renderers}
          cells={cells}
        />
      </div>
    );
  });
  return (
    <div className={"grid grid-cols-3 gap-12 items-center"}>
      {itemsToRender}
      <button
        className={
          "h-fit border-2 -mr-8 border-[#472F92] border-2 text-[#472F92] font-medium py-2 w-24 rounded-md mt-6"
        }
        onClick={onRemove}
      >
        מחיקה
      </button>
    </div>
  );
};

const withContextToCardRenderd =
  (
    Component: ComponentType<CardRendererProps>
  ): ComponentType<CardRendererProps> =>
  ({ ctx, props }: JsonFormsStateContext & CardRendererProps) => {
    return <Component {...props} />;
  };

const withCustomProps = (Component: ComponentType<CardRendererProps>) => {
  return withJsonFormsContext(withContextToCardRenderd(Component));
};

export default withCustomProps(CardRenderer);
