import React from 'react'
import Header from '../../components/Header/Header.jsx';
import './DetailPage.scss';
import { useNavigate,useLocation,useParams } from 'react-router';
import { useState,useEffect, } from 'react';
import orig1 from '../../mocks/mock1.js';
import orig2 from '../../mocks/mock2.js';
import orig3 from '../../mocks/mock3.js';
import orig4 from '../../mocks/mock4.js';
const DetailPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [data, setData] = useState(null);
    const category = location.state && location.state.category;
    const origData = getOriginalData(category);

    useEffect(() => {
        setData(location.state && location.state.datacard[1]);
    }, [location]);

    function getOriginalData(category) {
        switch (category) {
            case "Школа верных":
                return orig4;
            case "Личности":
                return orig1;
            case "Экспонаты":
                return orig2;
            case "События":
                return orig3;
            default:
                return null;
        }
    }
    const params = useParams();
    const current = params.index;
    const next = (Number(current) + 1)%origData.length;
    const datacard = [next, origData[next]]

    console.log(category)
    return (
      <div className='content'>
        <Header />
        <div className='head'>
            <button onClick={() => navigate(-1)}>
                <div className='arrow'>
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.11916 9.5C0.11916 9.79297 0.236359 10.0625 0.470659 10.2852L8.24026 18.0313C8.49806 18.2891 8.74416 18.3828 9.02536 18.3828C9.59966 18.3828 10.045 17.9609 10.045 17.375C10.045 17.0938 9.95116 16.8242 9.76366 16.6367L7.13866 13.9648L2.48636 9.72265L2.25196 10.3086L6.02536 10.543L20.8496 10.543C21.459 10.543 21.8809 10.1094 21.8809 9.5C21.8809 8.89062 21.459 8.45703 20.8496 8.45703L6.02536 8.45703L2.25196 8.6914L2.48636 9.26562L7.13866 5.03511L9.76366 2.36331C9.95116 2.18751 10.045 1.90621 10.045 1.62501C10.045 1.03901 9.59966 0.617212 9.02536 0.617212C8.74416 0.617212 8.49806 0.722612 8.26366 0.945312L0.470659 8.71484C0.236359 8.9375 0.11916 9.20703 0.11916 9.5Z" fill="white" fill-opacity="0.85"/>
                    </svg>
                </div>
            </button>
            <div className='name'>
                 <span>{data ? data.name : 'Loading...'}</span>
            </div>
        </div>
        { data?.image?.length > 1 ? (
            <div className='photo'>
                <img src={data.image} alt='photo'/>
            </div>
        ) : (
            <div></div>
        )}
        <div className='descr'>
            <p>{data ? data.description : 'Loading...'}</p>
        </div>
        <div className='btn_next'>
            <button onClick={()=> navigate(`/detailpage/${next}`, {state:{category:category, datacard:datacard}})}>
                Следующая карточка
            </button>
        </div>
        <br></br>
    </div>
    )
};
export default DetailPage;