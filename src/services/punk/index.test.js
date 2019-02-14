import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { baseUrl, getBeers } from './index';

describe('Punk service', () => {
  it('returns data when getBeers is called', (done) => {
    const mock = new MockAdapter(axios);
    const dataMock = [{ name: 'foo' }];

    mock.onGet(`${baseUrl}/beers`).reply(200, dataMock);

    getBeers().then((response) => {
      expect(response.data).toEqual(dataMock);
      done();
    });
  });
});
