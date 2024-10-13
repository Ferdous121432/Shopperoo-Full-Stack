import axios from "axios";
import { baseURL, carItemsURL } from "./apiURL";

export const addToCart = async (credentials, token) => {
  try {
    // const credentials = {
    //     product_id: _id,
    //     image: imageCover.split("/").slice(-1).join(),
    //     quantity: quantity,
    //     productName: name,
    //     price: price,
    //     subtotal: price * quantity,
    //   };
    const response = await axios.post(
      `${baseURL}/${carItemsURL}`,
      credentials,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    if (response.status === 201) {
      console.log(`Product ${credentials.productName} added to cart`);
    } else {
      console.error("Failed to add product to cart");
    }
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};

export const deleteFromCart = async (cartItem, token) => {
  try {
    const response = await axios.delete(
      `${baseURL}/${carItemsURL}/${cartItem._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 204) {
      console.log(
        `${cartItem.productName} with ID ${cartItem._id} deleted from cart`
      );
    } else {
      console.error("Failed to delete product from cart");
    }
  } catch (error) {
    console.error("Error deleting product from cart:", error);
  }
};

//TODO: After updating cart item, the cart page should be updated with the new data
export const getCart = async (token) => {
  try {
    const response = await axios.get(`${baseURL}/${carItemsURL}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to get cart items");
    }
  } catch (error) {
    console.error("Error getting cart items:", error);
  }
};

export const updateCartItem = async (cartItem, token) => {
  try {
    const response = await axios.patch(
      `${baseURL}/${carItemsURL}/${cartItem._id}`,
      cartItem,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log(`Updated ${cartItem.productName} in cart`);
    } else {
      console.error("Failed to update cart item");
    }
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};
