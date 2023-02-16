import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ProductManageStore extends Store {
  constructor() {
    super();
    this.products = [];
    this.product = {};
  }

  async fetchProducts() {
    const products = await apiService.fetchProducts();

    this.products = products;

    this.publish();
  }

  async create(productImformation) {
    const product = await apiService.createProduct(productImformation);

    this.product = product;

    this.publish();
  }
}

export const productManageStore = new ProductManageStore();
