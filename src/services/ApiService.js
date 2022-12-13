/* eslint-disable class-methods-use-this */
import axios from 'axios';
import config from '../../config';

const baseUrl = config.apiBaseUrl;

export default class ApiService {
  async fetchProducts() {
    const { data } = await axios.get(`${baseUrl}/products`);

    return data.productDtos;
  }

  async createProduct(productImformation) {
    const { data } = await axios.post(`${baseUrl}/products`, productImformation);

    return data;
  }

  async fetchRequests(trainerId) {
    const { data } = await axios.get(`${baseUrl}/requests/${trainerId}`);

    return data;
  }

  async fetchRequestsChecked(trainerId) {
    await axios.patch(`${baseUrl}/requests?trainerId=${trainerId}`);
  }

  async requestDelete(requestId) {
    await axios.delete(`${baseUrl}/requests/${requestId}`);
  }

  async createLecture(registerImformation) {
    const { data } = await axios.post(`${baseUrl}/lectures`, registerImformation);

    return data;
  }

  async fetchLectures(trainerId) {
    const { data } = await axios.get(`${baseUrl}/lectures/${trainerId}`);

    return data;
  }

  async createSchedules(scheduleImformation) {
    const { data } = await axios.post(`${baseUrl}/works`, scheduleImformation);

    return data;
  }

  async fetchSchedules(trainerId) {
    const { data } = await axios.get(`${baseUrl}/works/${trainerId}`);

    return data;
  }
}

export const apiService = new ApiService();
