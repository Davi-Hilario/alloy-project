import style from './Home.module.css';
import SearchBar from '../../components/searchbar/SearchBar';
import Navbar from '../../components/navbar/Navbar';
import { productsController as api } from '../../api/api';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/cards/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../redux/slices/cartSlice';
import { addAllProducts, toggleAddToCart } from '../../redux/slices/productsSlice';
import { pickSelectedProduct } from '../../redux/slices/selectedProductSlice';

function Home() {

  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products);
  const selectedProduct = useSelector((state) => state.selectProduct);

  let [searchValue, setSearchValue] = useState("");
  let [products, setProducts] = useState([]); 
  let [foundProducts, setFoundProducts] = useState([]);

  useEffect(() => {
    findAllProducts();
  }, [])

  useEffect(() => {
    products.forEach(product => {
      dispatch(addAllProducts(product));
    });
  }, [products])

  useEffect(() => {
      searchProduct();
  }, [searchValue, allProducts])

  function findAllProducts() {
    api.get().then((response) => {
      const { data } = response;
      console.log(data);
      setProducts(data);
    }).catch((error) => {
      console.warn("Error: " + error);
    })
  }

  function searchProduct(){
    if (searchValue !== "") {

      let searchResult = []

      for (var i = 0; i < allProducts.length; i++) {
        if (allProducts[i].name.toUpperCase().includes(searchValue.toUpperCase())) {
          searchResult.push(allProducts[i]);
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
                  id={data.id}
                  title={data.name}
                  description={data.description}
                  price={data.price}
                  src={data.image}
                  addToCart={() => {
                    dispatch(toggleAddToCart({ id: data.id, inCart: !data.inCart }))

                    if (!data.inCart) {
                      dispatch(addItemToCart(data))
                    } else {
                      dispatch(removeItemFromCart({ id: data.id }))
                    }

                  }}
                  inCart={data.inCart}
                  selectProduct={() => {
                    dispatch(pickSelectedProduct(data));
                  }}
              />
          </div>
        ))}
      </div>
      }
    </div>
  );
}

export default Home;
