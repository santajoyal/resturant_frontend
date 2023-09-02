import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { create } from "./api/restaurants";

function CreateRestaurant() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      Type: "VEG",
      Address: {
        State: "TamilNadu",
        City: "Chennai",
        Country: "India",
        Pincode: 636003,
        Line1: "ECR street",
        Line2: "Chennai",
      },
      url: "https://aabsweets.com/assets/img/logo-aab.png",
      ClosingTime: "10:00",
      RestaurantName: "Anandha Bhavan",
      OpeningTime: "09:30",
      OwnerEmail: "person1@gmail.com",
      OwnerName: "Person 1",
      OwnerPhone: 944455667,
    },
    onSubmit: async (values) => {
      try {
        await create(values)
        navigate("/portal/list-restaurants")
      } catch (error) {
        alert("Something went wrong")
      }
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <label>Restaurant Name</label>
            <input
              name="RestaurantName"
              onChange={formik.handleChange}
              value={formik.values.RestaurantName}
              type={"text"}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
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
            <label>Opening Time</label>
            <input
              name="OpeningTime"
              onChange={formik.handleChange}
              value={formik.values.OpeningTime}
              type={"time"}
              className="form-control"
            />
          </div>

          <div className="col-lg-4">
            <label>Closing Time</label>
            <input
              name="ClosingTime"
              onChange={formik.handleChange}
              value={formik.values.ClosingTime}
              type={"time"}
              className="form-control"
            />
          </div>

          <div className="col-lg-4">
            <label>Owner Name</label>
            <input
              name="OwnerName"
              onChange={formik.handleChange}
              value={formik.values.OwnerName}
              type={"text"}
              className="form-control"
            />
          </div>

          <div className="col-lg-4">
            <label>Phone Number</label>
            <input
              name="OwnerPhone"
              onChange={formik.handleChange}
              value={formik.values.OwnerPhone}
              type={"number"}
              className="form-control"
            />
          </div>

          <div className="col-lg-4">
            <label>Email</label>
            <input
              name="OwnerEmail"
              onChange={formik.handleChange}
              value={formik.values.OwnerEmail}
              type={"text"}
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
        </div>
        <h2>Address</h2>
        <div className="row">
          <div className="col-lg-4">
            <label>Line 1</label>
            <input
              name="Address.Line1"
              onChange={formik.handleChange}
              value={formik.values.Address.Line1}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Line 2</label>
            <input
              name="Address.Line2"
              onChange={formik.handleChange}
              value={formik.values.Address.Line2}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>State</label>
            <input
              name="Address.State"
              onChange={formik.handleChange}
              value={formik.values.Address.State}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>City</label>
            <input
              name="Address.City"
              onChange={formik.handleChange}
              value={formik.values.Address.City}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Country</label>
            <input
              name="Address.Country"
              onChange={formik.handleChange}
              value={formik.values.Address.Country}
              type={"text"}
              className="form-control"
            />
          </div>
          <div className="col-lg-4">
            <label>Pincode</label>
            <input
              name="Address.Pincode"
              onChange={formik.handleChange}
              value={formik.values.Address.Pincode}
              type={"number"}
              className="form-control"
            />
          </div>
        </div>
        <input type="submit" value="Submit" className="btn btn-primary mt-2" />
      </form>
    </div>
  );
}

export default CreateRestaurant;
