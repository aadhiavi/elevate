// API service using Axios

import axios, { type AxiosInstance, type AxiosError } from 'axios';
import { API_BASE_URL } from '../constants';
import type { IApiResponse, IApiError } from '../types';

class ApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Add token to requests if available
    this.api.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // Handle errors
    this.api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login';
        }
        return Promise.reject(error);
      }
    );
  }

  /**
   * GET request
   */
  async get<T>(url: string, config = {}): Promise<IApiResponse<T>> {
    try {
      const response = await this.api.get<IApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * POST request
   */
  async post<T>(url: string, data = {}, config = {}): Promise<IApiResponse<T>> {
    try {
      const response = await this.api.post<IApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * PUT request
   */
  async put<T>(url: string, data = {}, config = {}): Promise<IApiResponse<T>> {
    try {
      const response = await this.api.put<IApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * PATCH request
   */
  async patch<T>(url: string, data = {}, config = {}): Promise<IApiResponse<T>> {
    try {
      const response = await this.api.patch<IApiResponse<T>>(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * DELETE request
   */
  async delete<T>(url: string, config = {}): Promise<IApiResponse<T>> {
    try {
      const response = await this.api.delete<IApiResponse<T>>(url, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  /**
   * Handle API errors
   */
  private handleError(error: unknown): IApiError {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.message || error.message;
      const code = error.code || 'UNKNOWN_ERROR';
      return { message, status, code };
    }
    return {
      message: 'An unexpected error occurred',
      status: 500,
      code: 'UNKNOWN_ERROR',
    };
  }
}

export default new ApiService();
