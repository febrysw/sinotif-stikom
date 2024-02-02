export const constants = {
  CURRENT_TOKEN: 'CURRENT_TOKEN',
};

const apiurl = 'http://localhost:3333';

export const apiEndpoint = {
  AuthEndpoint: {
    login: `${apiurl}/auth/login`,
    logout: `${apiurl}/auth/logout`,
    loggedUser: `${apiurl}/user`,
  },
  TodoEndpoint: {
    getAllTodo: `${apiurl}/notif`,
    addTodo: `${apiurl}/notif`,
    updateTodo: `${apiurl}/notif`,
    deleteTodo: `${apiurl}/notif`,
  },
  BannerEndpoint: {
    getAllBanner: `${apiurl}/banner`,
    addBanner: `${apiurl}/banner`,
    updateBanner: `${apiurl}/banner`,
    deleteBanner: `${apiurl}/banner`,
  },
  NewsEndpoint: {
    getAllNews: `${apiurl}/news`,
    addNews: `${apiurl}/news`,
    updateNews: `${apiurl}/news`,
    deleteNews: `${apiurl}/news`,
  },
};
