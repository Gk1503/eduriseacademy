import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add token
api.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      useAuthStore.getState().logout();
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  getMe: () => api.get('/auth/me'),
  logout: () => api.post('/auth/logout'),
};

// Courses API
export const coursesAPI = {
  getAll: (params) => api.get('/courses', { params }),
  getAllAdmin: () => api.get('/courses/admin/all'),
  getBySlug: (slug) => api.get(`/courses/${slug}`),
  create: (data) => api.post('/courses', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  update: (id, data) => api.put(`/courses/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id) => api.delete(`/courses/${id}`),
  toggleStatus: (id) => api.patch(`/courses/${id}/toggle`),
};

// Inquiries API
// `create` posts to the site's own /api/inquiry serverless function (emails
// the details straight to the academy inbox) rather than the external backend,
// since there is no database-backed admin panel for inquiries yet.
export const inquiriesAPI = {
  create: async (data) => {
    const res = await fetch('/api/inquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      const error = new Error(body.message || 'Failed to submit inquiry');
      error.response = { data: body };
      throw error;
    }
    return { data: body };
  },
  getAll: (params) => api.get('/inquiries', { params }),
  getById: (id) => api.get(`/inquiries/${id}`),
  update: (id, data) => api.patch(`/inquiries/${id}`, data),
  delete: (id) => api.delete(`/inquiries/${id}`),
  export: () => api.get('/inquiries/export', { responseType: 'blob' }),
  getStats: () => api.get('/inquiries/stats'),
};

// Students API
export const studentsAPI = {
  getShowcase: () => api.get('/students'),
  getAll: (params) => api.get('/students/all', { params }),
  create: (data) => api.post('/students', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  update: (id, data) => api.put(`/students/${id}`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id) => api.delete(`/students/${id}`),
  toggleShowcase: (id) => api.patch(`/students/${id}/toggle`),
};

// Gallery API
export const galleryAPI = {
  getAll: (params) => api.get('/gallery', { params }),
  upload: (data) => api.post('/gallery', data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  delete: (id) => api.delete(`/gallery/${id}`),
};

// Announcements API
export const announcementsAPI = {
  getActive: () => api.get('/announcements'),
  getAll: () => api.get('/announcements/all'),
  create: (data) => api.post('/announcements', data),
  update: (id, data) => api.put(`/announcements/${id}`, data),
  delete: (id) => api.delete(`/announcements/${id}`),
  toggleStatus: (id) => api.patch(`/announcements/${id}/toggle`),
};

export default api;
