import React, { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { contactAPI } from './services/api';
import './App.css';

function App() {
  
  const [contacts, setContacts] = useState([]);
  // Stores all contacts coming from backend

 
  const [isLoading, setIsLoading] = useState(false);
   // Used to show loader while fetching contacts


  const [isFormLoading, setIsFormLoading] = useState(false);
    // Used to disable form button while submitting


  const [notification, setNotification] = useState(null);
    // Stores notification message and type (success / error)



  // Fetches all contacts from backend when website will load
  useEffect(() => {
    getAllContacts();
  }, []);


  const getAllContacts = async () => {
    setIsLoading(true);

    try {
      const response = await contactAPI.getAllContacts();

      // If API returns success, update contacts state
      if (response.success) {
        setContacts(response.data);
      }
    } catch (error) {
      showMessage('Failed to fetch contacts', 'error');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handles new contact creation
  const createContact = async (formData) => {
    setIsFormLoading(true);

    try {
      const response = await contactAPI.createContact(formData);

      // Add newly created contact at top of list
      if (response.success) {
        setContacts((oldContacts) => [response.data, ...oldContacts]);
        showMessage('Contact added successfully!', 'success');
      }
    } catch (error) {
      showMessage('Failed to add contact', 'error');
      console.error(error);
    } finally {
      setIsFormLoading(false);
    }
  };

  // Deletes contact using id
  const deleteContact = async (id) => {
    try {
      const response = await contactAPI.deleteContact(id);

      if (response.success) {
        // Remove deleted contact from state
        setContacts((oldContacts) =>
          oldContacts.filter((contact) => contact._id !== id)
        );
        showMessage('Contact deleted successfully', 'success');
      }
    } catch (error) {
      showMessage('Failed to delete contact', 'error');
      console.error(error);
    }
  };

  // Shows notification message for 3 seconds
  const showMessage = (message, type) => {
    setNotification({ message, type });

    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">

        {/* App Heading */}
        <h1 className="text-5xl font-bold text-center mb-10">
          Contact Manager
        </h1>

        {/* Notification Box */}
        {notification && (
          <div
            className={`fixed top-4 right-4 px-6 py-4 rounded shadow-lg ${
              notification.type === 'success'
                ? 'bg-green-500 text-white'
                : 'bg-red-500 text-white'
            }`}
          >
            {notification.message}
          </div>
        )}

        {/* Contact Form */}
        <ContactForm
          onSubmit={createContact}
          loading={isFormLoading}
        />

        {/* Contact List */}
        <ContactList
          contacts={contacts}
          onDelete={deleteContact}
          loading={isLoading}
        />
      </div>
    </div>
  );
}

export default App;
