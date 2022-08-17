const items = require("./data/items");
const tags = require("./data/tags");
const brands = require("./data/brands");
const itemTypes = require("./data/itemTypes");
const appliances = require("./data/appliances");
const laptop = require("./data/laptop");
const roll1 = require("./data/roll1");
const roll2 = require("./data/roll2");
const soundbar = require("./data/soundbar");
const television = require("./data/television");
const tvForHomePage = require("./data/tvForHomePage");
const watches = require("./data/watches");
const profile = require("./data/profile");
module.exports = {
  items,
  tags,
  brands,
  itemTypes,
  appliances,
  laptop,
  roll1,
  roll2,
  soundbar,
  television,
  watches,
  tvForHomePage,
  profile
}


// const items = require("./data/items");

// module.exports = () => {

//   var tags = items.map((i) => i.tags);
//   tags = [].concat.apply([], tags);
//   tags = [...new Set(tags)];

 

//   var brands = items.map((i) => i.manufacturer);
//   brands = [...new Set(brands)];

//   var itemTypes = items.map((i) => i.itemType);
//   itemTypes = [...new Set(itemTypes)];

//   return {
//     items,
//     tags,
//     brands,
//     itemTypes,
//   };
// };
