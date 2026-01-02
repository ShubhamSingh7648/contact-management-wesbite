import axios from 'axios';

const API_BASE_URL = 'https://contact-management-wesbite.onrender.com';

export const contactAPI = {
  // Create a new contact
  createContact: async (contactData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/createContact`, contactData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get all contacts
  getAllContacts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getAllContacts`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get single contact
  getContact: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getContact/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Update contact
  updateContact: async (id, contactData) => {
    try {
      const response = await axios.patch(`${API_BASE_URL}/updateContact/${id}`, contactData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Delete contact
  deleteContact: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/deleteContact/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};