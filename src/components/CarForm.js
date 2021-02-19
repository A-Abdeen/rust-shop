import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCar, updateCar } from "../store/actions";
import { useHistory, useParams } from "react-router-dom";

const ProductForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { carSlug } = useParams();

  const foundCar = useSelector((state) =>
    state.cars.find((car) => car.slug === carSlug)
  );

  const [car, setCar] = useState(
    foundCar ?? {
      year: 1900,
      manufacturer: "",
      price: 0,
      description: "",
    }
  );

  const handleChange = (event) =>
    setCar({ ...car, [event.target.name]: event.target.value });

  // const resetForm = () =>
  //   setCar({ year: 1900, manufacturer: "", price: 0, description: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (foundCar) dispatch(updateCar(car));
    else dispatch(addCar(car));
    // resetForm();
    history.push("/cars");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h4> {foundCar ? "Edit Existing" : "Add New"} Car</h4>
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
        Tow {foundCar ? "back " : " "}to yard
      </button>
    </form>
  );
};

export default ProductForm;
