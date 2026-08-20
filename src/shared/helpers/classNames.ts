export type TClassName =
  | string
  | number
  | boolean
  | undefined
  | null
  | TClassName[]
  | Record<string, boolean>;

const toClassNames = (input: TClassName): string[] => {
  if (!input) return [];
  if (typeof input === 'string' || typeof input === 'number') {
    return [String(input)];
  }
  if (Array.isArray(input)) return input.flatMap(toClassNames);
  if (typeof input === 'object') {
    return Object.keys(input).filter((key) => input[key]);
  }

  return [];
};

export const classNames = (...classes: TClassName[]) =>
  toClassNames(classes).join(' ');
