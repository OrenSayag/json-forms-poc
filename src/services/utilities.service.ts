import { ListItem } from "../types/form.type";

export const listItemsToOneOf = (
  list: ListItem[]
): { const: any; title: string }[] => {
  return list.map((item) => ({
    const:
      typeof item.value === "object" ? JSON.stringify(item.value) : item.value,
    title: item.label,
  }));
};

export const classNames = (...args: string[]) => {
  return args.filter(Boolean).join(" ");
};
