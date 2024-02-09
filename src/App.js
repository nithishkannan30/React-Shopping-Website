// import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation/Nav';
import Product from './product/Product';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import { useState } from 'react';
import Card from './components/Card';
//database
import Products from './db/data';
function App() {
  const[selectedCategory,setselectedCatogory]=useState(null);
  const[query,setQuery]=useState("");
  //........input filter
  
  const handleInputChange=(e)=>{
    setQuery(e.target.value)
  }
  const filteredItem=Products.filter((product)=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1);
   //.......radio filter
   const handleChange=e=>{
    setselectedCatogory(e.target.value);
   }
   //....button filter
   const handleClick=e=>{
    setselectedCatogory(e.target.value);
   }
   function filteredData(products,selected,query){
    let filteredProducts=products
    //filtering input items
    if(query){
      filteredProducts=filteredItem;
    }
    //selected Filter
    if(selected){
      filteredProducts=filteredProducts.filter(({category,color,company,newPrice,title})=>category===selected||color===selected||company===selected||
      newPrice===selected||title===selected)
    }
    return filteredProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(
      <Card 
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      newPrice={newPrice}
      prevPrice={prevPrice}
      />
    ))
   }
   const result=filteredData(Products,selectedCategory,query)
  return (
   <div>
    <Sidebar handleChange={handleChange} />
    <Navigation query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Product result={result}/>
    
   </div>
  );
}

export default App;
