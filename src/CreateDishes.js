import { useFormik } from "formik";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createDish } from "./api/dish";

function CreateDishes() {
  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      Type: "",
      Price: "",
      Ingredients: "",
      url: "",
      DishName: "",
    },
    onSubmit: async (values) => {
      try {
        await createDish(params.rId, values);
        navigate(`portal/list-dishes/${params.rId}`);
      } catch (error) {
        alert("Something went wrong");
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-4">
            <label>Dish Name</label>
            <input
              name="DishName"
              onChange={formik.handleChange}
              value={formik.values.DishName}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Type</label>
            <select
              name="Type"
              onChange={formik.handleChange}
              value={formik.values.Type}
              className="form-control"
            >
              <option value={"veg"}>Veg</option>
              <option value={"non-veg"}>Non-Veg</option>
            </select>
          </div>
          <div className="col-lg-4">
            <label>Price</label>
            <input
              name="Price"
              onChange={formik.handleChange}
              value={formik.values.Price}
              type={"number"}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <label>Image Url</label>
            <input
              name="url"
              onChange={formik.handleChange}
              value={formik.values.url}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-12">
            <label>Ingredients</label>
            <input
              name="Ingredients"
              onChange={formik.handleChange}
              value={formik.values.Ingredients}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-12">
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary mt-2"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateDishes;
