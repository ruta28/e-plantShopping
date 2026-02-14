import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick })
{
    const dispatch = useDispatch();

    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});   // ✅ state to track added products

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$15"
                },
                {
                    name: "Spider Plant",
                    image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$12"
                }
            ]
        }
        // (Rest of your categories remain SAME — no change needed)
    ];

    // ✅ Add to Cart Function
    const handleAddToCart = (plant) =>
    {
        dispatch(addItem(plant));  // Send plant data to Redux

        setAddedToCart((prevState) => ({
            ...prevState,
            [plant.name]: true
        }));
    };

    const handleHomeClick = (e) =>
    {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) =>
    {
        e.preventDefault();
        setShowCart(true);
    };

    const handlePlantsClick = (e) =>
    {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    const handleContinueShopping = (e) =>
    {
        e.preventDefault();
        setShowCart(false);
    };

    return (
        <div>
            <div className="navbar">
                <h2>Paradise Nursery</h2>
                <div>
                    <button onClick={handlePlantsClick}>Plants</button>
                    <button onClick={handleCartClick}>Cart</button>
                </div>
            </div>

            {!showCart ? (
                <div className="product-grid">

                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2>{category.category}</h2>

                            <div className="plants-container">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="plant-card" key={plantIndex}>
                                        <img src={plant.image} alt={plant.name} />
                                        <h3>{plant.name}</h3>
                                        <p>{plant.description}</p>
                                        <p><strong>{plant.cost}</strong></p>

                                        <button
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart[plant.name]}
                                        >
                                            {addedToCart[plant.name]
                                                ? "Added to Cart"
                                                : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;
