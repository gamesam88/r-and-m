type ClassNameType =
  string | undefined | false | null | Record<string, boolean>;

export const classNames = (...classes: ClassNameType[]) =>
  classes
    .flatMap((cls) => {
      if (!cls) return [];
      if (typeof cls === 'string') return [cls];

      return Object.keys(cls).filter((key) => cls[key]);
    })
    .join(' ');
