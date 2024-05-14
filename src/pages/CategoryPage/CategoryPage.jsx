import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import './CategoryPage.scss';
import Card from '../../components/Card/Card.jsx';
import data1 from '../../mocks/mock1.js';
import data2 from '../../mocks/mock2.js';
import data3 from '../../mocks/mock3.js';
import data4 from '../../mocks/mock4.js';
import { useLocation, useNavigate } from 'react-router';

const CategoryPage = () => {
    const navigate = useNavigate();
    let [data, setData] = useState(null);
    let [category, setCategory] = useState(null);
    const location = useLocation();
    useEffect(() => {
        setCategory(location.state && location.state.category)
    }, [location]);
    useEffect(() => {
        switch (category) {
            case "Школа верных":
                setData(data4);
                break;
            case "Личности":
                setData(data1);
                break;
            case "Экспонаты":
                setData(data2);
                break;
            case "События":
                setData(data3);
                break;
            default:
                setData(null);
        }
    }, [category]);
    return (
        <div className='content'>
            <Header />
            <div className='title'>
                <span>{category}</span>
            </div>
            <div className='cards'>
                {data && Object.entries(data).map((datacard, index) => (
                    <div onClick={()=>navigate(`/detailpage/${datacard[1].id}`, {state:{datacard:datacard, category:category}})}>
                        <Card key={index} data={datacard} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
