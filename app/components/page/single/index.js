/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { userActions } from 'redux/_actions';
import { AdminContentWrapper } from 'components/wrapper';
import { addBookmarkApiMethod } from 'lib/api';
import {
  typeOfAnnoncies,
  defaultPropertyImg,
  getNbPieces,
  spaceCurrency,
} from 'helpers';
import { Carrousel, NotFound, Icon, Maps } from 'components';

import { BuyTable, LocationTable } from '../table';
import LocationModal from '../table/locationModal';
import Sidebar, { BtnCalendly } from './sidebar';
import useStyles from './styles';

const PropertyPage = ({
  id,
  user,
  update,
  property = {},
  isLocation = false,
}) => {
  const [state, setState] = useState({});
  const [selectedLot, setSelectedLot] = useState(null);
  const [total, setTotal] = useState(0);
  const [currOpen, setCurrOpen] = useState('');
  const [liked, setLiked] = useState(
    user?.bookmarks?.find((elem) => elem._id === id)
  );
  const handleBookmark = () => {
    setLiked(!liked);
    addBookmarkApiMethod({ id }).then(({ user }) => update(user));
  };
  const handleSelectLot = (elem) => setSelectedLot(elem);
  const handleCurrOpen = (e) => setCurrOpen(currOpen === e ? null : e);
  useEffect(() => {
    (async () => {
      const newState = {};
      property.lots?.forEach((newElem) => {
        const pieces = newElem.pieces == 0 ? 1 : newElem.pieces;
        const elem = newState[pieces];
        if (Object.prototype.hasOwnProperty.call(newState, pieces)) {
          elem.list.push(newElem);
          if (!elem.minPrice || elem.minPrice > newElem.price)
            elem.minPrice = newElem.price;
          if (!elem.minSurface || elem.minSurface > newElem.surface)
            elem.minSurface = newElem.surface;
          if (!elem.maxSurface || elem.maxSurface < newElem.surface)
            elem.maxSurface = newElem.surface;
          if (!elem.vat || elem.vat < newElem.vat) elem.vat = newElem.vat;
          newState[pieces] = elem;
        } else {
          newState[pieces] = {
            list: [newElem],
            minSurface: newElem.surface,
            maxSurface: newElem.surface,
            minPrice: newElem.price,
            vat: newElem.vat,
          };
        }
      });
      setState(newState);
      setTotal(property.lots?.length);
    })();
  }, [property.lots]);
  const classes = useStyles();

  if (!id) return <NotFound showLink={false} />;

  return (
    <AdminContentWrapper>
      <div>
        <div className="relative">
          {property.pictures && (
            <Carrousel
              list={
                property.pictures.length
                  ? property.pictures
                  : [defaultPropertyImg]
              }
            />
          )}
          <Grid
            container
            className={clsx(classes.save, liked ? classes.saved : '')}
            justify="center"
          >
            <Grid item container onClick={handleBookmark} alignItems="center">
              <Icon
                type="heart"
                color={liked ? 'red' : 'white'}
                strokeColor={liked ? 'red' : 'newBlue'}
              />
              {liked ? 'Sauvegardé‎‎ ‎' : 'Sauvegarder'}
            </Grid>
          </Grid>
        </div>
        <Grid container justify="space-between" className={classes.description}>
          <Grid item md={6}>
            <Typography variant="h1">{property.heading}</Typography>
            <Typography>{property.fullAddress}</Typography>
            <AnchorLink href="#table" className="inline-block">
              <Typography className={classes.totalAvailable}>
                {!isLocation
                  ? `${total} logement${total > 1 ? 's' : ''} disponible${
                      total > 1 ? 's' : ''
                    } dans ce programme immobilier neuf`
                  : `${total} logement${total > 1 ? 's' : ''} disponible${
                      total > 1 ? 's' : ''
                    } dans cette résidence`}
              </Typography>
            </AnchorLink>
            <div className={classes.houseInfo}>
              <Grid container>
                <div>
                  <Icon type="door" color="newBlue" />

                  <span>
                    {getNbPieces(property.minPieces, property.maxPieces)}
                  </span>
                </div>

                <div>
                  <Icon type="room" color="newBlue" />
                  <span>
                    {` de ${
                      property.minSurface !== property.maxSurface
                        ? `${property.minSurface}m² à ${property.maxSurface}m²`
                        : `${property.minSurface}m²`
                    }`}
                  </span>
                </div>
              </Grid>
            </div>
          </Grid>
          <Grid item md={6} className={classes.priceCta}>
            <Typography variant="h1">
              <span>à partir de</span>
              {` ${spaceCurrency(property.price)}€`}
              <span>{isLocation ? 'CC/mois' : ''}</span>
            </Typography>
            {property.available_date && !isLocation ? (
              <Typography variant="body1">
                {`Fin de construction le ${property.available_date}`}
              </Typography>
            ) : (
              ''
            )}
            <div className={classes.phoneContainer}>
              {isLocation ? (
                <AnchorLink href="#table" className={classes.anchorLink}>
                  Déposer mon dossier
                </AnchorLink>
              ) : (
                <BtnCalendly />
              )}
              {isLocation ? (
                ''
              ) : (
                <Typography variant="body1">
                  ou appeler le 06.65.07.11.66
                </Typography>
              )}
            </div>
          </Grid>
        </Grid>
        <Grid container alignItems="flex-start">
          <Grid item md={8} xs={12} className={classes.setpsContainer}>
            <div>
              <Typography variant="h3">À propos de cette résidence</Typography>
              <Typography variant="body1">
                <span
                  dangerouslySetInnerHTML={{ __html: property.description }}
                />
              </Typography>
            </div>
            <div className={classes.mapContainer}>
              <Maps loc={property.loc?.coordinates} />
            </div>
          </Grid>
          <Grid item md={4} xs={12}>
            <Sidebar
              isLocation={isLocation}
              property={property}
              classes={classes}
            />
          </Grid>
        </Grid>

        <Grid container className={classes.discoveryContainer}>
          <Typography variant="h2">
            {!isLocation
              ? `${total} logement${total > 1 ? 's' : ''} ${
                  total > 1 ? 'neufs disponibles' : 'neuf disponible'
                } à l’achat dans cette résidence :`
              : `${total} logement${total > 1 ? 's' : ''} disponible${
                  total > 1 ? 's' : ''
                } à la location dans cette résidence :`}
          </Typography>
          <Grid container id="table">
            {property.typeOfAnnonce === typeOfAnnoncies[0] ? (
              <BuyTable
                state={state}
                property={property}
                currOpen={currOpen}
                handleCurrOpen={handleCurrOpen}
              />
            ) : (
              <LocationTable
                state={state}
                property={property}
                currOpen={currOpen}
                handleSelect={handleSelectLot}
                handleCurrOpen={handleCurrOpen}
              />
            )}
          </Grid>
        </Grid>
        <LocationModal
          className={classes.modal}
          user={user}
          residenceName={property.heading}
          curr={selectedLot}
          fullAddress={property.fullAddress}
          handleClose={() => handleSelectLot(null)}
        />
      </div>
    </AdminContentWrapper>
  );
};

PropertyPage.propTypes = {
  property: PropTypes.object.isRequired,
};
const mapState = (state) => {
  const { loggingIn, user } = state.authentication;
  return { loggingIn, user };
};

const actionCreators = {
  update: userActions.updateUserDataOnly,
};
export default connect(mapState, actionCreators)(PropertyPage);
