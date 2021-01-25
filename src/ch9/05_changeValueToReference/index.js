import { registerCustomer } from "./repository";

export class Order {
  constructor(data) {
    this._number = data.number;
    // this._customer = new Custom(data.customer);
    this._customer = registerCustomer(data.customer);
    // 다른 데이터를 읽어 들인다.
  }

  get customer() {
    return this._customer;
  }
}

export class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

