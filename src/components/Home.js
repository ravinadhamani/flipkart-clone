import "../styles.css";
import { useState } from "react";
import CardView from "./CardView";

export default function Home() {
  const [priceAcen, setpriceAcen] = useState(false);
  const [priceDesc, setpriceDesc] = useState(false);
  const [gender, setGender] = useState("Gender");
  const [size, setSize] = useState("Size");
  const [brand, setBrand] = useState("Brand");

  function handleClickAcen() {
    if (priceAcen) {
      setpriceAcen(false);
      setpriceDesc(true);
    } else {
      setpriceAcen(true);
      setpriceDesc(false);
    }
  }

  function handleClickDesc() {
    if (priceDesc) {
      setpriceDesc(false);
      setpriceAcen(true);
    } else {
      setpriceDesc(true);
      setpriceAcen(false);
    }
  }

  function handleSelectGender(e) {
    console.log(e.target.value);
    setGender(e.target.value);
  }
  function handleSelectSize(e) {
    console.log(e.target.value);
    setSize(e.target.value);
  }
  function handleBrand(e) {
    console.log(e.target.value);
    setBrand(e.target.value);
  }

  function handleClear(e){
    setpriceDesc(false);
    setpriceAcen(false);
    setGender("Gender");
    setBrand("Brand");
    setSize("Size"); 
  }

  return (
    <>
      <div className="App">
        <div className="body">
        <div className="filterDiv">
            <p className="filters">Filters</p><hr/>
            
            <select value={gender} onChange={handleSelectGender} className="genderBtn">
              <option value="Default">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select><hr/>
            <div>
               
            <select value={size} onChange={handleSelectSize} className="sizeBtn" >
              <option value="Default">Size</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select><hr/>

            <select value={brand} onChange={handleBrand} className="genderBtn">
              <option value="Default">Brand</option>
              <option value="Levi's">Levi's</option>
              <option value="Nike">Nike</option>
            </select><hr/>
            </div>
        </div>
        <div>
          <div className="sortingToolbar">
            <p className="sortBy">Sort By:</p>
            <button onClick={handleClickAcen} className="sortBtns">Price: Low to High </button>
            <button onClick={handleClickDesc} className="sortBtns">Price: High to Low </button>
            <button onClick={handleClear} className="clearBtn">Clear All</button>
          </div>
          <div className="cardView">
            <CardView
              genderSelected={gender}
              pricesortasc={priceAcen}
              pricesortdes={priceDesc}
              sizeSelected={size}
              brandSelected={brand}

            />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
