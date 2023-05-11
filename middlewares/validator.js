class Validator {
  constructor() {}

  static get() {
    if (!Validator.instance) {
      this.instance = new Validator();
    }
    return this.instance;
  }

  check = (input) => {
    return (req, res, next) => {
      const { value, error } = input.validate(req.body, { abortEarly: false });
      if (error) next(error);
      req.body = value;
      next();
    };
  };
}

const validator = Validator.get();

export { validator as Validator };
