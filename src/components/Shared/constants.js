
const NAVBAR_ITEMS = [ 'Movies', 'TV Shows', 'People', 'More'];

export const NAVBAR_SUB_ITEMS = {
  More: ['Discussions', 'Leaderboard', 'Support', 'API'],
  Movies: ['Popular', 'Now Playing', 'Upcoming', 'Top Rated'],
  People:['Popular People'],
  'TV Shows': ['Popular', 'Airing Today', 'On TV', 'Top Rated'],
};

export const APP = {
  FOOTER: {
    LIST: [
      {
        items: ['About TMDB', 'Contact Us', 'Support Forums', 'API', 'System Status'],
        name: 'The Basics',
      },
      {
        items: ['Contribution Bible', 'Add New Movie', 'Add New TV Show'],
        name: 'GET INVOLVED',
      },
      {
        items: ['Guidelines', 'Discussions', 'Leaderboard', 'Twitter'],
        name: 'COMMUNITY',
      },
      {
        items: ['Terms of Use', 'API Terms of Use', 'Privacy Policy'],
        name: 'LEGAL',
      },
    ],
    TITLE: 'Join the Community',
  },
  JOIN: 'Join TMDB',
  LANGUAGE: 'en',
  LOAD_MORE: 'Load More',
  LOGIN: 'Login',
  NAVBAR_ITEMS,
  NAVBAR_SUB_ITEMS,
  POPULAR_TITLE: 'Popular Movies',
  SIDEBAR_ITEMS: [...NAVBAR_ITEMS.slice(0, -1), ...NAVBAR_SUB_ITEMS.More ],
  SORT_FILTER: 'Sort',
  SORT_FILTERS: [
    { name: 'Popularity Descending', value: 'popularity.desc'},
    { name: 'Popularity Ascending', value: 'popularity.asc'},
    { name: 'Rating Descending', value: 'vote_average.desc'},
    { name: 'Rating Ascending', value: 'vote_average.asc'},
    { name: 'Release Date Descending', value: 'primary_release_date.desc'},
    { name: 'Release Date Ascending', value: 'primary_release_date.asc'},
    { name: 'Title (Z-A)', value: 'original_title.desc'},
    { name: 'Title (A-Z)', value: 'original_title.asc'},
  ],
  SORT_RESULT: 'Sort Results By',
};
