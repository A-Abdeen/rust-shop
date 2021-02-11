import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../store/actions";
import { useHistory } from "react-router-dom";

const ProductForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [car, setCar] = useState({
    year: 1900,
    manufacturer: "",
    price: 0,
    description: "",
  });

  const handleChange = (event) =>
    setCar({ ...car, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar(car));
    history.push("/cars");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Model Year</label>
        <input
          type="number"
          value={car.year}
          onChange={handleChange}
          name="year"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Manufacturer</label>
        <input
          type="text"
          value={car.manufacturer}
          onChange={handleChange}
          name="manufacturer"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Model Name</label>
        <input
          type="text"
          value={car.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          type="number"
          value={car.price}
          onChange={handleChange}
          name="price"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="link"
          value={car.image}
          onChange={handleChange}
          name="image"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={car.desciption}
          onChange={handleChange}
          name="description"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Tow to yard
      </button>
    </form>
  );
};

export default ProductForm;
