/* eslint-disable class-methods-use-this */
import { apiService } from '../services/ApiService';
import { dateFormatter } from '../utils/DateFormatter';

import Store from './Store';

const today = dateFormatter.localDate(new Date());
const currentYear = today.split('-')[0];
const currentMonth = today.split('-')[1];
const currentDate = today.split('-')[2];

const dates = Array(30).fill()
  .map((v, i) => dateFormatter.localDate(new Date(currentYear, currentMonth - 1, currentDate - i)));

const months = Array(12).fill()
  .map((v, i) => dateFormatter.localDate(new Date(currentYear, currentMonth - i - 1))
    .slice(0, 7));

export default class SaleStore extends Store {
  constructor() {
    super();
    this.monthChart = [];
    this.dateChart = [];
    this.todaySale = 0;
    this.comparedSale = 0;
  }

  async createCharts() {
    const orders = await apiService.fetchOrders();

    this.createDateCharts(orders);
    this.createMonthCharts(orders);

    this.publish();
  }

  async createDateCharts(orders) {
    this.dateChart = await dates.map((date) => this.createDateChart(date, orders));
    this.todaySale = this.dateChart[0].totalPrice;
    this.comparedSale = this.dateChart[0].totalPrice
    - this.dateChart[1].totalPrice;

    this.publish();
  }

  async createMonthCharts(orders) {
    this.monthChart = await months.map((month) => this.createMonthChart(month, orders));

    this.publish();
  }

  createDateChart(date, orders) {
    const ptPrice = orders
      .filter((order) => order.dateOfPurchase === date && order.type === 'PT')
      .reduce((acc, cur) => acc + cur.option.price, 0);

    const lockerPrice = orders.filter((order) => order.dateOfPurchase === date && order.type === 'LOCKER')
      .reduce((acc, cur) => acc + cur.option.price, 0);

    const membershipPrice = orders.filter((order) => order.dateOfPurchase === date && order.type === 'MEMBERSHIP')
      .reduce((acc, cur) => acc + cur.option.price, 0);

    const totalPrice = orders.filter((order) => order.dateOfPurchase === date)
      .reduce((acc, cur) => acc + cur.option.price, 0);

    const orderTimes = orders.filter((order) => order.dateOfPurchase === date)
      .reduce((acc, cur) => acc + 1, 0);

    return {
      date, totalPrice, orderTimes, membershipPrice, ptPrice, lockerPrice,
    };
  }

  createMonthChart(month, orders) {
    const ptPrice = orders.filter((order) => order.dateOfPurchase.slice(0, 7) === month && order.type === 'PT')
      .reduce((acc, cur) => acc + cur.option.price, 0);

    const lockerPrice = orders.filter((order) => order.dateOfPurchase.slice(0, 7) === month && order.type === 'LOCKER')
      .reduce((acc, cur) => acc + cur.option.price, 0);

    const membershipPrice = orders.filter((order) => order.dateOfPurchase.slice(0, 7) === month && order.type === 'MEMBERSHIP')
      .reduce((acc, cur) => acc + cur.option.price, 0);

    const totalPrice = orders.filter((order) => order.dateOfPurchase.slice(0, 7) === month)
      .reduce((acc, cur) => acc + cur.option.price, 0);

    const orderTimes = orders.filter((order) => order.dateOfPurchase.slice(0, 7) === month)
      .reduce((acc, cur) => acc + 1, 0);

    return {
      month, totalPrice, orderTimes, membershipPrice, ptPrice, lockerPrice,
    };
  }
}

export const saleStore = new SaleStore();
