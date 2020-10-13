import axios from 'axios';

const newsUrl = process.env.REACT_APP_NEWS_API_URL;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;

export default {
  getArticles: (category, q = '') =>
    axios({
      method: 'get',
      url: `${newsUrl}${newsApiKey}`,
      params: {
        category,
        q,
      },
    }),
};
