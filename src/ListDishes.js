import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchDish } from "./api/dish";

function ListDishes() {
  const params = useParams();
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    getDishes();
  }, []);

  async function getDishes() {
    try {
      let dishes = await fetchDish(params.rId);
      setDishes(dishes.data);
    } catch (error) {
      alert("Something went wrong");
    }
  }
  return (
    <div class="container-fluid">
      <h1 class="h3 mb-2 text-gray-800">Dishes List</h1>
      <Link
        to={`/portal/create-dishes/${params.rId}`}
        className="btn btn-sm btn-primary"
      >
        Create Dish
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
                  <th>Dish Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Dish Image</th>
                  <th>Ingredients</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Dish Name</th>
                  <th>Type</th>
                  <th>Price</th>
                  <th>Dish Image</th>
                  <th>Ingredients</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                {dishes.map((dish) => {
                  return (
                    <tr>
                      <td>{dish.DishName}</td>
                      <td>
                        <img src={dish.url} height="50" width="50" />
                      </td>
                      <td>{dish.Price}</td>
                      <td>{dish.Type}</td>
                      <td>{dish.Ingredients}</td>
                      <td>
                        <Link
                          to={`/portal/list-dishes/${dish.rId}`}
                          className="btn btn-sm btn-danger"
                        >
                          Delete Dish
                        </Link>
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

export default ListDishes;
