import axios from "axios";
import { config } from "../config";

export function create(resData) {
  return axios.post(`${config.api}/admin/restaurants/create`, resData, {
    headers: {
      Authorization: localStorage.getItem(`${config.storage_key}`)
    },
  });
}

export function listRestaurantsData() {
    return axios.get(`${config.api}/admin/restaurants`, {
      headers: {
        Authorization: localStorage.getItem(`${config.storage_key}`)
      },
    });
  }
