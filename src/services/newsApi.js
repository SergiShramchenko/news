import axios from 'axios';

const newsApiUrl = process.env.REACT_APP_NEWS_API_URL;
const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
const newsApiKey1 = 'fceb3da434e54223879443b30b242337';

export default {
  getArticles: (category, q = '', pageSize) =>
    axios({
      method: 'get',
      url: `${newsApiUrl}${newsApiKey}`,
      params: {
        category,
        q,
        pageSize,
      },
    }),
};
