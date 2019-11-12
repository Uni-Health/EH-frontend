const errors = {
  400: ['ALREADY_EXISTS', 'An user has existed.']
};

export class ErrorHandler {
  static async handle(info) {
    if (info['status'] in errors) {
      return;
    }

    if (info['status'] in errors) {
      // handle errors
      throw Error(errors[info['status']][1]);
    }
  }
}