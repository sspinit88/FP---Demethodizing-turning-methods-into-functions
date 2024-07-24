/*
  T: Тип объекта (this).
  U: Тип аргумента, который передается методу (arg).
  R: Тип результата, который возвращает метод.
*/

const demethodize1 = <T, U, R>(method: (this: T, ...args: U[]) => R) => {
  return function (obj: T, ...args: U[]): R {
    return method.apply(obj, args);
  };
};

const demethodize2 = <T, U, R>(method: (this: T, arg: U) => R) => {
  return function (obj: T, arg: U): R {
    return method.call(obj, arg);
  };
};

const demethodize3 = <T, U, R>(method: (this: T, arg: U) => R) => {
  return function (obj: T, arg: U): R {
    const boundMethod = method.bind(obj, arg);
    return boundMethod();
  };
};

export { demethodize1, demethodize2, demethodize3 };
