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
    const { data } = await axios.patch(`${baseUrl}/admin-lectures`, registerImformation);

    return data;
  }

  async fetchLectures(trainerId) {
    const { data } = await axios.get(`${baseUrl}/admin-lectures/${trainerId}`);

    return data;
  }

  async approveLecture(lectureId, userId, message) {
    const { data } = await axios.patch(`${baseUrl}/admin-lectures/approve/${lectureId}`, { userId, message });

    return data;
  }

  async deleteLecture(lectureId, userId, message) {
    const { data } = await axios.patch(`${baseUrl}/admin-lectures/cancel/${lectureId}`, { userId, message });

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

  async fetchMembers() {
    const { data } = await axios.get(`${baseUrl}/admin-users`);

    return data;
  }

  async findMember(memberId) {
    const { data } = await axios.get(`${baseUrl}/admin-users/${memberId}`);

    return data;
  }

  async findAllByInUseTicket(trainerId) {
    const { data } = await axios.get(`${baseUrl}/admin-trainers/${trainerId}/use-ticket-users`);

    return data;
  }

  async createTrainer(trainerRegisterData) {
    const { data } = await axios.post(`${baseUrl}/admin-trainers`, trainerRegisterData);

    return data;
  }

  async fetchWorkers() {
    const { data } = await axios.get(`${baseUrl}/admin-trainers`);

    return data;
  }

  async findWorker(workerId) {
    const { data } = await axios.get(`${baseUrl}/trainers/${workerId}`);

    return data;
  }

  async fetchLockers() {
    const { data } = await axios.get(`${baseUrl}/admin-lockers`);

    return data;
  }

  async findLocker(lockerId) {
    const { data } = await axios.get(`${baseUrl}/admin-lockers/${lockerId}`);

    return data;
  }

  async fetchLocker(lockerId, requestImformation) {
    const { data } = await axios.patch(`${baseUrl}/admin-lockers/${lockerId}`, requestImformation);

    return data;
  }

  async fetchTicket(ticketId, startDate) {
    const { data } = await axios.patch(`${baseUrl}/locker-tickets/${ticketId}?date=${startDate}`);

    return data;
  }

  async cancelLockerTicket(ticketId) {
    const { data } = await axios.patch(`${baseUrl}/locker-tickets/cancel/${ticketId}`);

    return data;
  }

  async fetchOrders() {
    const { data } = await axios.get(`${baseUrl}/admin-orders`);

    return data;
  }

  async fetchChattingRooms(trainerId) {
    const { data } = await axios.get(`${baseUrl}/trainers/${trainerId}/chattingRooms`);

    return data;
  }
}

export const apiService = new ApiService();
