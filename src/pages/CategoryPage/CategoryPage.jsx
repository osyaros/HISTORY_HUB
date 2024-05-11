import React from 'react'
import Header from '../../components/Header/Header.jsx';
import './CategoryPage.scss';
import Card from '../../components/Card/Card.jsx';
const CategoryPage = () => {
    return (
      <div className='content'>
        <Header />
        <div className='title'>
            <span>Экспонаты</span>
        </div>
        <div className='cards'>
        {/* {
                    categorydata.map((data, index) => {
                    return (
                        <Card key={index} data={data} />
                    )
                })
                } */}
             <Card  />
             <Card  />
             <Card  />
             <Card  />
             <Card  />
        </div>
    </div>
)};
export default CategoryPage;