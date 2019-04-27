export const hasParentClass = (e: any, className: string): boolean => {
  if (e === document) return false;
  if (classReg(className).test(e.className)) {
    return true;
  }

  return e.parentNode && hasParentClass(e.parentNode, className);
};

const classReg = (className: string) =>
  new RegExp("(^|\\s+)" + className + "(\\s+|$)");
