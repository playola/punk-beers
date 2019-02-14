import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { PageTitle, StyledLink } from '../styles';
import {
  HeaderWrapper,
  BeerDetailsWrapper,
  ErrorWrapper,
  Text,
  BackButton,
} from './styles';

const BeerDetails = React.memo(({ beersList, id }) => {
  const [beerDetails, setBeersDetails] = useState({});

  /**
   * Find beer details by id when the component mounts.
   */
  useEffect(() => {
    const currentBeerDetails = beersList && beersList.length > 0 && beersList.find(beer => beer.id === parseInt(id));
    setBeersDetails(currentBeerDetails);
  }, []);
  
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
};

const mapStateToProps = ({ beersListReducer }) => ({
  beersList: beersListReducer.beers,
});

export default connect(mapStateToProps)(BeerDetails);
