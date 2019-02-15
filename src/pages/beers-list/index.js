import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBeers } from './store/actions';
import { filterArrayByName } from '../../utils/filters';
import { Input } from '../../components';
import { PageTitle, StyledLink } from '../styles';
import {
  BeersPageWrapper,
  BeersListWrapper,
  BeerItemWrapper,
  Image,
} from './styles';

const BeersList = React.memo(({ beersList, getBeers }) => {
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');

  /**
   * Fetch beers from API or storage when the components mounts.
   */
  useEffect(() => {
    getBeers(page);
  }, []);

  /**
   * Fetch more beers using an infinite scroll.
   */
  useEffect(() => {
    window.onscroll = () => {
      const docElement = document.documentElement;
      if (window.innerHeight + docElement.scrollTop === docElement.offsetHeight) {
        /**
         * Fetch the scroll goes down.
         */
        const nextPage = page + 1;
        getBeers(nextPage);
        setPage(nextPage);
      }
    };
  });

  /**
   * Filter beers list by 'name' key.
   */
  const filteredBeersByName = filterArrayByName(beersList, name);

  return (
    <BeersPageWrapper>
      <PageTitle>Beers list</PageTitle>
      <Input
        placeholder="Search by name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <BeersListWrapper>
        { filteredBeersByName && filteredBeersByName.length > 0 && filteredBeersByName.map(beer => (
          <StyledLink to={`/beer-detail/${beer.id}`} key={beer.id}>
            <BeerItemWrapper>
              <h4>{ beer.name }</h4>
              <p>{ beer.tagline }</p>
              <Image src={beer.image_url} alt={beer.name} />
            </BeerItemWrapper>
          </StyledLink>
        ))}
      </BeersListWrapper>
    </BeersPageWrapper>
  );
});

BeersList.propTypes = {
  beersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  getBeers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ beersListReducer }) => ({
  beersList: beersListReducer.beers,
});

const mapDispatchToProps = {
  getBeers,
};

export default connect(mapStateToProps, mapDispatchToProps)(BeersList);
