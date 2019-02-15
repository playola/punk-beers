/**
 * Sets an item by key in local storage.
 * @param {string}  key   Key name to set the storage item.
 * @param {any}     value Content to be set in the storage.
 */
export const setLocalStorageItem = (key, value) => window.localStorage.setItem(key, JSON.stringify(value));

/**
 * Gets an item by key from the local storage.
 * @param {string} key Key name to get an item from the storage.
 */
export const getLocalStorageItem = key => JSON.parse(window.localStorage.getItem(key));
