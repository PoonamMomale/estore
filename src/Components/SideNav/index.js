import React, { useEffect, useState } from "react";
import "./__side-nav.scss";
import { useDispatch, useSelector } from "react-redux";
import accordionSlice from "../../Redux/slices/accordionSlice/accordionSlice";
import { getCategories } from "../../Redux/slices/categorySlice/actions";
import { filterByPrice, filterProducts } from "../../Redux/slices/productSlice/productSlice";

function SideNav() {
  // const accordionCategories = useSelector(accordionSlice.getInitialState);
  const accordionCategories = useSelector(
    (state) => state.categoryReducer.categories
  );
  const fetchProductData = useSelector((state) => state.productReducer);

  const [products, setProducts] = useState();
  const [minPriceLimit, setMinPriceLimit] = useState(10);
  const [maxPriceLimit, setMaxPriceLimit] = useState(130);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories);
  }, []);
  // console.log(accordionCategories)

  useEffect(() => {
    setProducts(fetchProductData.products);
  }, [fetchProductData.status]);

  const filterData = (selectedSubCategory) => {
    const payload = { selectedSubCategory, products };
    dispatch(filterProducts(payload));
    // console.log(payload)
  };

  const setPriceLimit = (e, stateFleg) => {
    if (stateFleg == "max") {
      setMaxPriceLimit(e.target.value);
    } else if (stateFleg == "min") {
      setMinPriceLimit(e.target.value);
    }
  };

  const applyPriceFilter = () =>{
    const payload = {products, minPriceLimit, maxPriceLimit};
    dispatch(filterByPrice(payload));
  }

  return (
    <>
      <div className="side-nav">
        <div className="section-title">
          <h3>Category</h3>
        </div>
        {accordionCategories.map((cat, key) => {
          if (cat.parent_category_id === null) {
            return (
              <div className="accordion my-3">
                <div className="accordion-item individual-category">
                  <div className="accordion-header">
                    <button
                      className="accordion-button"
                      data-bs-target={"#accordion-heading-" + key}
                      data-bs-toggle="collapse"
                    >
                      <div className="category-title">
                        <a href="#">{cat.category}</a>
                      </div>
                    </button>
                  </div>
                  <div
                    className="accordion-collapse collapse"
                    id={"accordion-heading-" + key}
                  >
                    <div className="accordion-body">
                      <ul>
                        {accordionCategories.map((subCategory, key) => {
                          if (
                            cat.id === parseInt(subCategory.parent_category_id)
                          ) {
                            return (
                              <li className="sub-items">
                                <a
                                  href="#"
                                  onClick={() => filterData(subCategory)}
                                >
                                  {subCategory.category}
                                </a>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div className="price-filter-container">
          <div className="section-title">
            <h4>Filter by price</h4>
          </div>
          <div>
            <label>Min : {minPriceLimit} </label>
            <input
              className="form-range"
              type="range"
              min={10}
              max={130}
              step={10}
              onChange={(e) => setPriceLimit(e, "min")}
            />
          </div>
          <div>
            <label>Max : {maxPriceLimit} </label>
            <input
              className="form-range"
              type="range"
              min={10}
              max={130}
              step={10}
              onChange={(e) => setPriceLimit(e, "max")}
            />
          </div>
          <button className="btn btn-outline-dark my-3" onClick={applyPriceFilter}>Apply Filter</button>
        </div>
      </div>
    </>
  );
}

export default SideNav;
