import React, { useState } from "react";

export const Home = () => {
  const [selectedUnit, setSelectedUnit] = useState(2);
  const handleUnitChange = (unit) => {
    setSelectedUnit(unit);
  };

  return (
    <div>
      <div className="container">
        <h2>YAY! It's BOGO</h2>

        {/* 1 Unit Option */}
        <div className={`unit-option ${selectedUnit === 1 ? "highlight" : ""}`}>
          <label className="radio-container">
            <input
              type="radio"
              name="unit"
              checked={selectedUnit === 1}
              onChange={() => handleUnitChange(1)}
            />

            <div className="first-container">
              <div>
                <span className="first-price">
                  1 Unit <span className="badge">10% Off</span>
                </span>
              </div>
              <div>
                <span className="standard">Standard price</span>
              </div>
            </div>

            <div>
              <div className="price">
                <p className="first-price">$10.00 USD</p>
                <del>$24.00 USD</del>
              </div>
            </div>
          </label>

          {selectedUnit === 1 && (
            <div className="selectors">
              <div>
                <label>Size</label>
                <div className="select-div">
                  <div className="hash">
                    <p className="number">#1</p>
                    <select>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </select>
                  </div>

                  <div className="hash">
                    <p className="number">#1</p>
                    <select>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label>Color</label>
                <div className="select-div">
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                  </select>
                  <select>
                    <option value="Black">Colour</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2 Unit Option */}
        <div className={`unit-option ${selectedUnit === 2 ? "highlight" : ""}`}>
          <label className="radio-container">
            <input
              type="radio"
              name="unit"
              checked={selectedUnit === 2}
              onChange={() => handleUnitChange(2)}
            />
            <div className="second-container">
              <div>
                <span className="first-price">
                  2 Unit <span className="badge">20% Off</span>
                </span>
              </div>
            </div>
            <div className="price">
              <span className="first-price">$18.00 USD</span>
              <del>$24.00 USD</del>
            </div>
          </label>
          <div className="most-popular">Most Popular</div>
          {selectedUnit === 2 && (
            <div className="selectors">
              <div>
                <label>Size</label>
                <div className="select-div">
                  <div className="hash">
                    <p className="number">#1</p>
                    <select>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </select>
                  </div>

                  <div className="hash">
                    <p className="number">#1</p>
                    <select>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label>Color</label>
                <div className="select-div">
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                  </select>
                  <select>
                    <option value="Black">Colour</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 3 Unit Option */}
        <div className={`unit-option ${selectedUnit === 3 ? "highlight" : ""}`}>
          <label className="radio-container">
            <input
              type="radio"
              name="unit"
              checked={selectedUnit === 3}
              onChange={() => handleUnitChange(3)}
            />
            <div className="third-container">
              <span className="first-price">3 Unit </span>{" "}
              <span className="badge">30% Off</span>
            </div>

            <div className="price">
              <span>$24.00 USD</span>
              <del>$24.00 USD</del>
            </div>
          </label>

          {selectedUnit === 3 && (
            <div className="selectors">
              <div>
                <label>Size</label>
                <div className="select-div">
                  <div className="hash">
                    <p className="number">#1</p>
                    <select>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </select>
                  </div>

                  <div className="hash">
                    <p className="number">#1</p>
                    <select>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <label>Color</label>
                <div className="select-div">
                  <select>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                  </select>
                  <select>
                    <option value="Black">Colour</option>
                    <option value="Black">Black</option>
                    <option value="White">White</option>
                    <option value="Red">Red</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="free-delivery">Free Delivery</div>
        <div className="total">
          Total: $
          {(selectedUnit === 1 ? 10 : selectedUnit === 2 ? 18 : 24).toFixed(2)}{" "}
          USD
        </div>

        <button className="add-to-cart">+ Add to Cart</button>
        <p className="powered">@Powered by Pumper</p>
      </div>
    </div>
  );
};
