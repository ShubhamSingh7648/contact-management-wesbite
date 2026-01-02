import ContactItem from './ContactItem';
import React from 'react';

const ContactList = ({ contacts, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="flex flex-col items-center justify-center py-12">
          <svg className="animate-spin h-12 w-12 text-purple-600 mb-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <p className="text-gray-600">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-8">
        <div className="text-center py-12">
          <svg className="mx-auto h-24 w-24 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Contacts Yet</h3>
          <p className="text-gray-500">Start by adding your first contact above!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          All Contacts
          <span className="ml-3 text-sm font-normal text-gray-500">
            ({contacts.length} {contacts.length === 1 ? 'contact' : 'contacts'})
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contacts.map((contact) => (
          <ContactItem 
            key={contact._id} 
            contact={contact} 
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactList;