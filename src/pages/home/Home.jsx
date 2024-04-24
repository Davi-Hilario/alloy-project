import style from './Home.module.css';
import SearchBar from '../../components/searchbar/SearchBar';
import Navbar from '../../components/navbar/Navbar';
import api from '../../api/api';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/cards/productCard/ProductCard';

function App() {

  let [searchValue, setSearchValue] = useState("");
  let [products, setProducts] = useState([]); 
  let [foundProducts, setFoundProducts] = useState([]);

  useEffect(() => {
    findAllProducts()
  }, [])

  useEffect(() => {
      searchProduct();
  }, [searchValue])

  function findAllProducts() {
    api.get().then((response) => {
      const { data } = response;
      setProducts(data);
    }).catch((error) => {
      console.warn("Error: " + error);
    })
  }

  function searchProduct(){
    if (searchValue !== "") {

      let searchResult = []

      for (var i = 0; i < products.length; i++) {
        if (products[i].name.toUpperCase().includes(searchValue.toUpperCase())) {
          searchResult.push(products[i]);
        }
      }
      setFoundProducts(searchResult);
    } else {
      setFoundProducts([]);
    }
  };

  return (
    <div className={style["App"]}>
      <Navbar />
      <main>
        <div className={style["banner"]}>
          <div className={style["container"]}>
            <div className={style["banner-content"]}> 
              <h1>ALLOY</h1>
              <p>Delivering high quality and trustful products to our clients since 2024</p>
              <SearchBar 
                height="15%"
                width="40%"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
        </div>
      </main>
      { foundProducts.length !== 0 &&
      <div className={style["found-items-area"]}>
        { foundProducts && foundProducts.map((data, index) => (
          <div
              key={index}
              className={style['products-area']}
          >
              <ProductCard 
                  title={data.name}
                  description={data.description}
                  price={data.price}
                  src={data.image}
              />
          </div>
        ))}
      </div>
      }
    </div>
  );
}

export default App;
