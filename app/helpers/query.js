const { typeOfAnnonciesObj } = require('./property');

const defaultLimit = 6;
const defaultOffset = 1;
const defaultLoc = {
  location: 'Paris, France',
  buy: 'Île-de-France, France',
};
const searchQueryWhitelist = [
  'sort',
  'listView',
  'limit',
  'page',
  'loc',
  'maxPrice',
  'typeOfProperty',
  'pieces',
];
const typeOfAnnoncies = {
  [typeOfAnnonciesObj.buy]: 'buy',
  [typeOfAnnonciesObj.location]: 'location',
};
const pages = {
  dashboard: '/dashboard',
  single: '/dashboard/property',
};
const singlePath = ({ typeOfAnnonce, _id }) =>
  `${pages.single}/${typeOfAnnoncies[typeOfAnnonce]}/${_id}`;

module.exports = {
  pages,
  defaultLimit,
  defaultOffset,
  defaultLoc,
  searchQueryWhitelist,
  singlePath,
};
