import axios from 'axios';

const newsUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=';
const newsApiKey = 'a66a7bdb28954b278cf6b21f93b6c85a';

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
