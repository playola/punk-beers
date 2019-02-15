import { setLocalStorageItem, getLocalStorageItem } from './index';

describe('Local storage utils', () => {
  xit('should call func to set a local storage item', () => {
    setLocalStorageItem('test', 'foo');
    expect(localStorage.setItem).toHaveBeenCalledWith('test', 'foo');
  });

  xit('should call func to get a local storage item', () => {
    getLocalStorageItem('test');
    expect(localStorage.getItem).toHaveBeenCalledWith('test');
  });
});
