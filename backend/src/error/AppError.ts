export class AppError extends Error {
    status: number;
    constructor(message: string, status: number = 400) {
      super();
      this.message = message;
      this.status = status;
    }
  }