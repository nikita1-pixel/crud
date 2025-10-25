  import './App.css'
  import Navbar from './components/Navbar'
  import  TableList  from './components/TableList'
  import ModalForm from './components/ModalForm';
  import { useState } from 'react';
  import axios from 'axios';



  function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalMode, setModalMode] = useState('add');
    const [searchTerm, setSearchTerm] = useState('');
    const [clientData, setClientData] = useState(null); // Keep for future use

    const handleOpen = (mode, client) => {
      setClientData(client);
        setModalMode(mode);
        setIsOpen(true);
    };

const handleSubmit = async (newClientData) => {
    if (modalMode === 'add') {
      try {
        const response = await axios.post('http://localhost:3000/api/clients', newClientData); // Replace with your actual API URL
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
      {/* ++ py-5 px-5 */}
      <div className="py-5 px-5 ">
          <Navbar onOpen={() => handleOpen('add')} onSearch={setSearchTerm}/>
          <TableList handleOpen={handleOpen} searchTerm={searchTerm}/>
          <ModalForm
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              mode={modalMode} clientData={clientData}
              onSubmit={handleSubmit}
          />
      </div>
        
      </>
    )
  }

  export default App