import './app.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm';
import { useState } from 'react';
import axios from 'axios';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [searchTerm, setSearchTerm] = useState('');
  const [clientData, setClientData] = useState(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleOpen = (mode, client) => {
    setClientData(client);
    setModalMode(mode);
    setIsOpen(true);
  };

  const handleSubmit = async (newClientData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/clients`, newClientData); // Replace with your actual API URL
        console.log('Client added:', response.data); // Log the response
        } catch (error) {
            console.error('Error adding client:', error); // Log any errors
        }
      console.log('modal mode Add');
        } else {
            console.log('modal mode Edit');
        }
        setIsOpen(false);
    };


  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <header className="bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-8">
            <h1 className="text-4xl font-bold">Client Management System</h1>
            <p className="text-purple-200 mt-2">Manage your clients efficiently with Neon Database</p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-8">
            <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm} />
            <TableList handleOpen={handleOpen} searchTerm={searchTerm} refreshTrigger={refreshTrigger} onRefresh={() => setRefreshTrigger(prev => prev + 1)} />
            <ModalForm
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              mode={modalMode} clientData={clientData}
              onSubmit={handleSubmit}
            />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 shadow-lg mt-12">
          <div className="max-w-6xl mx-auto px-6 py-6">
            <div className="grid grid-cols-3 gap-8 mb-6">
              <div>
                <h3 className="text-white font-semibold mb-2">About</h3>
                <p className="text-sm">Professional client management powered by Neon Database</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Features</h3>
                <p className="text-sm">CRUD Operations, Real-time Updates, Secure Storage</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Technology</h3>
                <p className="text-sm">React, Express.js, PostgreSQL, Neon</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6 text-center">
              <p className="text-sm">&copy; 2026 Client Management System. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

    </>
  )
}

export default App