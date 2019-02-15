/**
 * Filter array of objects by 'name' key.
 * @param   {array}   array   [{ name: 'hello world' }, { name: 'foo' }]
 * @param   {string}  name    'hello'
 * @returns {array}           [{ name: 'hello world' }]
 */
export const filterArrayByName = (array, name) => (
  array.filter(item => item.name.toLowerCase().match(name.toLowerCase()))
);
