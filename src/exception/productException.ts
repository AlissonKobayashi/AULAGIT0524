export class ProductException extends Error {
  
  constructor(message: string) {
    super(message);
        this.name = "ProductException";
    }
  }
  