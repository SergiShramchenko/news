import axios from 'axios';

const newsApiUrl = process.env.REACT_APP_NEWS_API_URL;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

export default {
  getArticles: (category, q = '') =>
    axios({
      method: 'get',
      url: `${newsApiUrl}${newsApiKey}`,
      params: {
        category,
        q,
      },
    }),
};
