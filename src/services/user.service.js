import axios from "axios";
// Envs
const { REACT_APP_WP_API: WP_API } = process.env;

async function getUserById(id) {
  try {
    const response = await axios.get(`${WP_API}/wp/v2/users/${id}`);

    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const user = {
  getUserById,
};

export default user;
