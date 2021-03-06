import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createManufacturer } from "../../store/actions/manufacturerActions";
import { useHistory, useParams } from "react-router-dom";

const ManufacturerForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { manufacturerSlug } = useParams();
  const foundManufacturer = useSelector((state) =>
    state.manufacturers.manufacturers.find(
      (manufacturer) => manufacturer.slug === manufacturerSlug
    )
  );

  const [manufacturer, setManufacturer] = useState({
    year: 1900,
    name: "",
    country: "",
    description: "",
  });

  const handleChange = (event) =>
    setManufacturer({
      ...manufacturer,
      [event.target.name]: event.target.value,
    });

  const handleImage = (event) =>
    setManufacturer({ ...manufacturer, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createManufacturer(manufacturer));
    history.push("/manufacturers");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <h4> Create Manufacturer</h4>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={manufacturer.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Country</label>
        <input
          type="text"
          value={manufacturer.country}
          onChange={handleChange}
          name="country"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Established </label>
        <input
          type="number"
          value={manufacturer.year}
          onChange={handleChange}
          name="year"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <input
          type="text"
          value={manufacturer.description}
          onChange={handleChange}
          name="description"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Logo</label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
};

export default ManufacturerForm;
