import { filterArrayByName } from './index';

describe('Filters utils', () => {
  it('should filter array by name', () => {
    const arrayMock = [{ name: 'hello world' }, { name: 'foo' }];
    expect(filterArrayByName(arrayMock, 'hello')).toEqual([{ name: 'hello world' }]);
  });
});
