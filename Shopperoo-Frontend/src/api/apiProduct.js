import axios from "axios";
import { baseURL, productURL } from "./apiURL";

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`${baseURL}${productURL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
