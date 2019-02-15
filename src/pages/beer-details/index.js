import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBeers } from '../beers-list/store/actions';
import { Button } from '../../components';
import { PageTitle, StyledLink } from '../styles';
import {
  HeaderWrapper,
  BeerDetailsWrapper,
  ErrorWrapper,
  Text,
  BackButton,
} from './styles';

const BeerDetails = React.memo(({ beersList, id, getBeers }) => {
  const [beerDetails, setBeersDetails] = useState({});
  const [toggle, setToggle] = useState(false);

  /**
   * Fetch beers from API or storage if there is no value defined.
   */
  useEffect(() => {
    if (!beersList || beersList.length === 0){
      getBeers();
    }
  }, []);

  /**
   * Find beer details by id when beersList updates.
   */
  useEffect(() => {
    const currentBeerDetails = beersList && beersList.length > 0 && beersList.find(beer => beer.id === parseInt(id));
    setBeersDetails(currentBeerDetails);
  }, [beersList]);
  
  /**
   * Update the state for the toggle.
   */
  const handleToggle = () => setToggle(!toggle);
  
  /**
   * Beer details to be displayed.
   */
  const {
    name,
    description,
    first_brewed: firstBrewed,
    image_url: imageUrl,
    food_pairing: foodPairing,
    adv: alcoholByVolume,
    ibu: internationalBitternessUnits,
    contributed_by: contributedBy,
    target_og: targetOf,
    target_fg: targetFg,
  } = beerDetails;

  return (
    <BeerDetailsWrapper>
      <HeaderWrapper>
        <StyledLink to="/"><BackButton>{ '<' }</BackButton></StyledLink>
        <PageTitle>Beer details</PageTitle>
      </HeaderWrapper>
      { beersList && beersList.length > 0
        ? (
          <div>
            <Text>Name: { name }</Text>
            <Text>Description: { description }</Text>
            <Text>First brewed: { firstBrewed }</Text>
            <Text>{ imageUrl }</Text>
            <Text>{ foodPairing }</Text>
            <Text>Alcohol by volume: { alcoholByVolume }</Text>
            <Text>International Bitterness Units: { internationalBitternessUnits }</Text>
            <Text>Contributed by: { contributedBy }</Text>
            <Button onClick={handleToggle}>Toggle difference</Button>
            { toggle && <Text>The difference is: { (targetOf - targetFg).toFixed(2) }</Text> }
          </div>
        )
        : (
          <ErrorWrapper>
            <Text>Ups, something happen with the data.</Text>
            <Text>Try to navigate to <StyledLink to="/">beers list</StyledLink>.</Text>
          </ErrorWrapper>
        )
      }
    </BeerDetailsWrapper>
  );
});

BeerDetails.propTypes = {
  beersList: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string.isRequired,
  getBeers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ beersListReducer }) => ({
  beersList: beersListReducer.beers,
});

const mapDispatchToProps = {
  getBeers,
};

export default connect(mapStateToProps, mapDispatchToProps)(BeerDetails);
