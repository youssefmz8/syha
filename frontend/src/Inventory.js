import React, { useState } from 'react';
import './styles.css'; // Assuming your styles are here
import bannerImage from './Images/banner.jpg'; // Ensure this matches your file name exactly

const Inventory = () => {
    // State to hold the inventory items
    const [inventoryItems, setInventoryItems] = useState([]);
    
    // State for form inputs
    const [itemName, setItemName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Create a new inventory item
        const newItem = {
            id: inventoryItems.length + 1, // Generate a unique ID
            name: itemName,
            quantity: quantity,
            price: price,
            description: description,
        };

        // Update the inventory items state
        setInventoryItems([...inventoryItems, newItem]);

        // Clear form inputs
        setItemName('');
        setQuantity('');
        setPrice('');
        setDescription('');
    };

    return (
        <div className="home-container">
            {/* Banner Image */}
            <div className="banner">
                <img src={bannerImage} alt="Banner" />
            </div>
            <div className="inventory-container">
                <section className="inventory-content">
                    <div className="inventory-box">
                        <h2>Add Inventory Item</h2>
                        <form className="inventory-form" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Item Name" 
                                required 
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)} 
                            />
                            <input 
                                type="number" 
                                placeholder="Quantity" 
                                required 
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)} 
                            />
                            <input 
                                type="number" 
                                placeholder="Price" 
                                required 
                                value={price}
                                onChange={(e) => setPrice(e.target.value)} 
                            />
                            <textarea 
                                placeholder="Description" 
                                rows="4" 
                                value={description}
                                onChange={(e) => setDescription(e.target.value)} 
                            ></textarea>
                            <button type="submit">Add Item</button>
                        </form>
                    </div>

                    <div className="inventory-box"> {/* Inventory List */}
                        <h2>Inventory List</h2>
                        <ul>
                            {inventoryItems.map(item => (
                                <li key={item.id}>
                                    <strong>{item.name}</strong> - Quantity: {item.quantity}, Price: ${item.price}, Description: {item.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <footer className="home-footer">
                    <p>&copy; 2024 SYHA. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default Inventory;
