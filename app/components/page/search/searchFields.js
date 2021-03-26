import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Grid } from '@material-ui/core';
import { Icon, Input } from 'components/form';
import { GoogleMaps } from 'components/form/Input';
import { DropdownSelect } from 'components/form/Select';
import { propertyPiecesSelectMap } from 'helpers/property';
import withStyles from './styles';

const searchFields = withStyles(
  ({
    classes,
    isLocation,
    queryData,
    handleMapSearch,
    handleSearch,
    handleSumit,
    handleSelect,
  }) => (
    <>
      <Grid
        container
        className={
          isLocation
            ? clsx(classes.searchContainer, classes.isLocation)
            : classes.searchContainer
        }
      >
        <Grid item md={isLocation ? 6 : 4}>
          <GoogleMaps
            name="loc"
            value={queryData.loc}
            onChange={handleMapSearch}
            placeholder="Localisation"
          />
        </Grid>
        {!isLocation && (
          <Grid item md={4}>
            <DropdownSelect
              name="typeOfAnnonce"
              placeholder="Nombre de pièces"
              list={propertyPiecesSelectMap}
              value={queryData.typeOfProperty}
              onChange={handleSelect}
            />
          </Grid>
        )}
        <Grid
          item
          md={isLocation ? 6 : 4}
          className={clsx(classes.search, classes.locationMaxBudget)}
        >
          <Input
            name="maxPrice"
            value={
              queryData.maxPrice > 0 && !Number.isNaN(queryData.maxPrice)
                ? queryData.maxPrice
                : ''
            }
            onChange={handleSearch}
            placeholder="Budget maximal"
          />
          <div onClick={handleSumit} className="pointer">
            <Icon type="search" size="large" color="white" />
          </div>
        </Grid>
      </Grid>
    </>
  )
);
searchFields.PropTypes = {
  classes: PropTypes.object.isRequired,
  isLocation: PropTypes.bool.isRequired,
  queryData: PropTypes.object.isRequired,
  handleMapSearch: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  handleSumit: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};
export default searchFields;
