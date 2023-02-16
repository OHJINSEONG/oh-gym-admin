import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductFormStore extends Store {
  constructor() {
    super();
    this.options = [];
  }

  addOption(data) {
    // eslint-disable-next-line no-nested-ternary
    const id = this.options.length >= 2
      ? Number(this.options.reduce((prev, curr) => (prev.id >= curr.id ? prev.id : curr.id))) + 1
      : this.options.length ? 2 : 1;
    this.options.push({ id, ...data });

    this.publish();
  }

  deleteOption(optionId) {
    const reduceArray = this.options.filter((option) => option.id !== optionId);

    this.options = reduceArray;

    this.publish();
  }
}

export const productFormStore = new ProductFormStore();
