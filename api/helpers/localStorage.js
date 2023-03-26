const { LocalStorage } = require('node-localstorage');
localStorage = new LocalStorage('./scratch')

const LS = {
  /**
   * Get all items of a given model
   * 
   * @param {string} model 
   * @returns array
   */
  all: (model) => {
    return JSON.parse(localStorage.getItem(model) || '[]');
  },

  /**
   * This method will set the first dummy data
   * 
   * @param {string} model
   * @param {Array} items 
   * 
   * @returns {void}
   */
  addALL: (model, items) => {
    return localStorage.setItem(model, JSON.stringify(items));
  },

  /**
   * Find a single item from a given ID
   * 
   * @param {string} model 
   * @param {number} id 
   * 
   * @returns {object} item
   */
  find: (model, id) => {
    const items = LS.all(model);

    return items.find((i) => i.id == id);
  },

   /**
   * Find a single item from a given ID
   * 
   * @param {string} model 
   * @param {number} subCatId 
   * 
   * @returns {object} item
   */
   getProductsBySubCat: (model, subCatId) => {
    const items = LS.all(model);

    return items.filter((i) => i.subCatId == subCatId);
  },

  /**
   * 
   * @param {string} model 
   * @param {object} data 
   */
  create: (model, data) => {
    let items = LS.all(model);

    data.id = Math.max(...items.map(i => i.id)) + 1;

    items.push(data);
    
    LS.addALL(model, items);

    return data;
  }
}

module.exports = LS;