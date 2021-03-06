import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, updateCar } from "../store/actions/carActions";
import { useHistory, useParams } from "react-router-dom";

const CarForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { carSlug, manufacturerId } = useParams();

  const foundCar = useSelector((state) =>
    state.cars.cars.find((car) => car.slug === carSlug)
  );

  const [car, setCar] = useState(
    foundCar || {
      manufacturerId: manufacturerId,
      name: "",
      year: 1900,
      price: 0,
      description: "",
      image: "",
    }
  );

  const handleChange = (event) =>
    setCar({ ...car, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setCar({ ...car, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundCar) dispatch(updateCar(car));
    else dispatch(addCar(car));
    history.push("/cars");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h4> {foundCar ? "Edit Existing" : "Add New"} Car</h4>
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
        <label className="form-label">Description</label>
        <input
          type="text"
          value={car.description}
          onChange={handleChange}
          name="description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image</label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Tow {foundCar ? "back " : " "}to yard
      </button>
    </form>
  );
};

export default CarForm;
