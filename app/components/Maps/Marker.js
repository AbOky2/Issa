import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { MapsCard } from 'components';
import WhiteMarker from 'static/img/white_marker.png';
import BlueMarker from 'static/img/blue_marker.png';
import { styles } from './styles';

const useStyles = makeStyles(styles);
const Marker = ({ data, show, isMobile, inGroup, handleBookmark, liked }) => {
  const classes = useStyles({ isTop: data?.isTop, isLeft: data?.isLeft });
  let className = inGroup ? classes.markerInGroupStyled : classes.markerStyled;
  const src = !show ? WhiteMarker : BlueMarker;
  className = clsx(className, classes.markerPosition);

  return (
    <div>
      <div className={className}>
        <img src={src} className={classes.markerIcon} alt="" />
        {show && !isMobile && data?.showInfoWindow && (
          <MapsCard
            {...data}
            onClick={() => handleBookmark(data?._id)}
            liked={liked?.includes(data?._id)}
          />
        )}
      </div>
    </div>
  );
};

Marker.propTypes = {
  data: PropTypes.object,
  inGroup: PropTypes.bool,
  isMobile: PropTypes.bool,
  show: PropTypes.any,
  handleBookmark: PropTypes.func.isRequired,
  liked: PropTypes.array,
};
Marker.defaultProps = {
  data: {},
  inGroup: false,
  show: false,
  isMobile: false,
  liked: false,
};

export default Marker;
