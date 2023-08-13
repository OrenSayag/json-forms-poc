import { vanillaRenderers } from "@jsonforms/vanilla-renderers";
import {
  SelectControl,
  SelectTester,
} from "../../../components/jsonforms-renderers/Select";
import ArrayLayoutRenderer, {
  ArrayLayoutTester,
} from "../../../components/jsonforms-renderers/ArrayLayout";
import {
  TextWithIconRenderer,
  TextWithIconTester,
} from "../../../components/jsonforms-renderers/TextWithIcon";

export const styleContext = {
  styles: [
    {
      name: "control",
      classNames: ["my-2"],
    },
    {
      name: "array.control.add",
      classNames: ["border-2 border-purple-400"],
    },
    {
      name: "array.table",
      classNames: ["border-2 border-blue-500"],
    },
    {
      name: "control.input",
      classNames: [
        "w-full rounded border border-gray-400 focus:border-indigo-500 text-base text-[#333333] outline-none text-gray-700 py-1 px-3 pr-6 leading-8 transition-colors duration-200 ease-in-out font-light disabled:bg-[#E9E9E9]",
      ],
    },
    {
      name: "control.select",
      classNames: [
        "w-full rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 font-light py-1 px-3 leading-8 transition-colors duration-200 ease-in-out appearance-none ",
      ],
    },
    {
      name: "control.label",
      classNames: [
        "block uppercase tracking-wide text-gray-700 text-sm font-normal pb-4 -mb-3 text-right",
      ],
    },
    {
      name: "control.validation",
      classNames: ["text-red-500 font-normal mt-2 text-xs"],
    },
    {
      name: "vertical.layout",
      classNames: [
        "block uppercase tracking-wide text-gray-700 text-s font-bold mb-2",
      ],
    },
    {
      name: "horizontal.layout",
      classNames: [
        "grid grid-cols-1 md:grid-cols-3 gap-12 text-right items-center",
      ],
    },
    {
      name: "group.layout",
      classNames: ["my-5"],
    },
    {
      name: "group.label",
      classNames: [
        "accordion-button relative flex w-full py-4 transition focus:outline-none block uppercase tracking-wide text-gray-700 text-s font-bold pb-4",
      ],
    },
  ],
};

export const renderers = [
  ...vanillaRenderers,
  { tester: SelectTester, renderer: SelectControl },
  { tester: ArrayLayoutTester, renderer: ArrayLayoutRenderer },
  { tester: TextWithIconTester, renderer: TextWithIconRenderer },
];
