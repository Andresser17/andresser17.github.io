import axios from "axios";
// Envs
const { REACT_APP_WP_API: WP_API } = process.env;

async function getPosts({ page = 1, limit = 10 }) {
  try {
    return await axios.get(
      `${WP_API}/wp/v2/posts?page=${page}&per_page=${limit}`
    );
  } catch (err) {
    console.log(err);
    return err;
  }
}

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
  getPosts,
  getPostById,
};

export default post;
