import Butter from "buttercms";
// Envs
const { REACT_APP_BUTTER_TOKEN: BUTTER_TOKEN } = process.env;
const butter = Butter(BUTTER_TOKEN);

async function getPosts({ page = 1, limit = 10 }) {
  try {
    return await butter.post.list({ page, page_size: limit });
  } catch (err) {
    console.log(err);
    return err;
  }
}

async function getPostBySlug(slug) {
  try {
    const response = await butter.post.retrieve(slug);

    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

const post = {
  getPosts,
  getPostBySlug,
};

export default post;
