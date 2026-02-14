import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick })
{
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    const [showCart, setShowCart] = useState(false);

    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Produces oxygen at night.", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", description: "Filters toxins from air.", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg", description: "Removes mold spores.", cost: "$18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg", description: "Adds humidity to air.", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", description: "Easy to care plant.", cost: "$17" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Healing properties.", cost: "$14" }
            ]
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba", description: "Calming scent.", cost: "$20" },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b", description: "Sweet fragrance.", cost: "$18" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", description: "Invigorating scent.", cost: "$15" },
                { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg", description: "Refreshing aroma.", cost: "$12" },
                { name: "Lemon Balm", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Relieves stress.", cost: "$14" },
                { name: "Hyacinth", image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg", description: "Beautiful flowering plant.", cost: "$22" }
            ]
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                { name: "Oregano", image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg", description: "Deters insects.", cost: "$10" },
                { name: "Marigold", image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg", description: "Natural repellent.", cost: "$8" },
                { name: "Geraniums", image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg", description: "Pleasant scent.", cost: "$20" },
                { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg", description: "Repels flies.", cost: "$9" },
                { name: "Lavender Repellent", image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba", description: "Mosquito repellent.", cost: "$20" },
                { name: "Catnip", image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg", description: "Repels mosquitoes.", cost: "$13" }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                { name: "Aloe Medicinal", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg", description: "Soothes skin.", cost: "$14" },
                { name: "Echinacea", image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg", description: "Boosts immunity.", cost: "$16" },
                { name: "Peppermint", image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg", description: "Relieves headaches.", cost: "$13" },
                { name: "Chamomile", image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg", description: "Promotes sleep.", cost: "$15" },
                { name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg", description: "Heals wounds.", cost: "$12" },
                { name: "Lemon Balm Medicinal", image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg", description: "Calms nerves.", cost: "$14" }
            ]
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361", description: "Thrives in low light.", cost: "$25" },
                { name: "Pothos", image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg", description: "Grows easily.", cost: "$10" },
                { name: "Snake Plant LM", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", description: "Needs little water.", cost: "$15" },
                { name: "Cast Iron Plant", image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg", description: "Very hardy plant.", cost: "$20" },
                { name: "Succulents", image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg", description: "Drought tolerant.", cost: "$18" },
                { name: "Aglaonema", image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg", description: "Minimal care plant.", cost: "$22" }
            ]
        }
    ];

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleAddToCart = (plant) =>
    {
        dispatch(addItem(plant));
    };

    const handleCartClick = () => setShowCart(true);
    const handlePlantsClick = () => setShowCart(false);

    return (
        <div>
            <div className="navbar">
                <button onClick={onHomeClick}>Home</button>
                <button onClick={handlePlantsClick}>Plants</button>
                <button onClick={handleCartClick}>Cart ({totalQuantity})</button>
            </div>

            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h2>{category.category}</h2>
                            <div className="plants-container">
                                {category.plants.map((plant, plantIndex) =>
                                {
                                    const itemExists = cartItems.find(
                                        (item) => item.name === plant.name
                                    );

                                    return (
                                        <div className="plant-card" key={plantIndex}>
                                            <img src={plant.image} alt={plant.name} />
                                            <h3>{plant.name}</h3>
                                            <p>{plant.description}</p>
                                            <p><strong>{plant.cost}</strong></p>
                                            <button
                                                onClick={() => handleAddToCart(plant)}
                                                disabled={itemExists}
                                            >
                                                {itemExists ? "Added to Cart" : "Add to Cart"}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handlePlantsClick} />
            )}
        </div>
    );
}

export default ProductList;
