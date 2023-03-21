import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HomePages = () => {


    const navigate  = useNavigate();

    function navigateHandler(){
        navigate('/products');
    }
  return (
    <div> 
        <h1>My Home Pages</h1>
        <p>Go to <Link to="products">the list of products</Link>
        </p>
        <button onClick={navigateHandler}>Navigate</button>
        </div>
  )
}

export default HomePages;