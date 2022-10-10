import axios from "axios";
// Envs
const { REACT_APP_WP_API: WP_API } = process.env;

async function getPostById(id) {
  try {
    const response = await axios.get(`${WP_API}/wp/v2/posts/${id}`);

    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

const post = {
  getPostById,
};

export default post;
