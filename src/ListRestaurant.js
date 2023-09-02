import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { listRestaurantsData } from "./api/restaurants";

function ListRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      let res = await listRestaurantsData();
      setRestaurants(res.data);
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Restaurants</h1>
      <Link to={"/portal/create-restaurants"} className="btn btn-primary mb-2">
        Create Restaurant
      </Link>

      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Restaurant Name</th>
                  <th>Image</th>
                  <th>Owner Name</th>
                  <th>Owner Email</th>
                  <th>Owner Phone</th>
                  <th>Opening Time</th>
                  <th>Closing Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Restaurant Name</th>
                  <th>Image</th>
                  <th>Owner Name</th>
                  <th>Owner Email</th>
                  <th>Owner Phone</th>
                  <th>Opening Time</th>
                  <th>Closing Time</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {restaurants.map((res) => {
                  return (
                    <tr>
                      <td>{res.RestaurantName}</td>
                      <td>
                        <img src={res.url} height="50" widht="50" />
                      </td>
                      <td>{res.OwnerName}</td>
                      <td>{res.OwnerEmail}</td>
                      <td>{res.OwnerPhone}</td>
                      <td>{res.OpeningTime}</td>
                      <td>{res.ClosingTime}</td>
                      <td>
                      <Link to={`/portal/list-dishes/${res._id}`} className="btn btn-sm btn-primary">View Dish</Link>

                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListRestaurant;
