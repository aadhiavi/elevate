// Class names utility

export const classNames = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter((c) => typeof c === 'string').join(' ');
};
