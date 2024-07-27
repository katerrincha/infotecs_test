import Sort from "./Sort";
import Filter from "./Filter";
import NewModal from "./Modal";
import Modal from 'react-modal';
import React, { useState } from 'react';
import './Table.css'

/*const createHeaders = (headers) => {
    return headers.map((item) => ({
      text: item,
      ref: useRef(),
    }));
  }*/

const Table = ({users}) => {
    const { items, requestSort, sorted } = Sort(users);
    const [selectedItem, setSelectedItem] = useState(null);
    const getClassNamesFor = (name) => {
        if (!sorted) {
          return;
        }
        return sorted.key === name ? sorted.direction : undefined;
      };

      const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
    setModalIsOpen(true);
    //setSelectedItem(item);
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };

   

    const modalContent = (
        
        /*selectedItem.map((current) => {
            const {id, firstName, maidenName, lastName, age, gender, phone} = current;
            const {city, address} = current.address;
            const name = firstName + ' ' + maidenName + ' ' + lastName
            const newAddress = city + ', ' + address
            return (
                <div>
                    <h3>Name: {name}</h3>
                </div>
                
            )
        })*/
        <div className="modal">
            <div>
                <h3>Name: {name}</h3>
                <h3>Age: {}</h3>
                <h3>Address: </h3>
                <h3>Height:</h3>
                <h3>Weight: </h3>
                <h3>Number: </h3>
                <h3>Phone: </h3>
            </div>
            
            <button className="close" onClick={closeModal}>Закрыть</button>
        </div>
                    
)  
    return (
        <>
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
        </Modal>
        <div>
            <table>
            <thead>
                <tr>
                    <th>Name
                    <select onChange={() => requestSort('firstName', event.target.value)}
                            >
                        <option value='ascending'>ascending
                        </option>
                        <option value='descending'>descending
                        </option>
                        <option value='withoutSorting'>without sorting
                        </option>
                    </select>
                    </th>
                    <th>Age
                    <select onChange={() => requestSort('age', event.target.value)}
                            >
                        <option value='ascending'>ascending
                        </option>
                        <option value='descending'>descending
                        </option>
                        <option value='withoutSorting'>without sorting
                        </option>
                    </select>
                    </th>
                    <th>Gender
                    <select onChange={() => requestSort('gender', event.target.value)}
                            >
                        <option value='ascending'>ascending
                        </option>
                        <option value='descending'>descending
                        </option>
                        <option value='withoutSorting'>without sorting
                        </option>
                    </select>
                    </th>
                    <th>Phone</th>
                    <th>Address
                    <select onChange={() => requestSort('city', target.value)}
                            >
                        <option value='ascending'>ascending
                        </option>
                        <option value='descending'>descending
                        </option>
                        <option value='withoutSorting'>without sorting
                        </option>
                    </select>
                    </th>
                </tr>
            </thead>
            <tbody>
            {
                items.map((current) => {
                    const {id, firstName, maidenName, lastName, age, gender, phone} = current;
                    const {city, address} = current.address;
                    const name = firstName + ' ' + maidenName + ' ' + lastName
                    const newAddress = city + ', ' + address
                    return (
                        <tr key = {id} onClick={openModal}>
                            <td >{name}</td>
                            <td>{age}</td>
                            <td>{gender}</td>
                            <td>{phone}</td>
                            <td>{newAddress}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
        </div>
        
        </>
    )
}

export default Table;

