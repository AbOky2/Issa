import clsx from 'clsx';
import { Pagination } from '@material-ui/lab';
import { Grid, Typography } from '@material-ui/core';
import Link from 'next/link';
import { Icon, Select, Card } from 'components';
import {
  getAddress,
  getNbPieces,
  sortBySelectMap,
  getCardImg,
  singlePath,
} from 'helpers';

const ellipsis = ['start-ellipsis', 'end-ellipsis'];
const PaginationItem = ({
  children,
  classes,
  type,
  selected,
  disabled,
  onClick,
}) => (
  <Grid
    className={clsx(
      classes.paginationItem,
      selected ? classes.paginationSelectedItem : '',
      disabled ? classes.paginationDisabledItem : ''
    )}
    onClick={!ellipsis.includes(type) && !disabled ? onClick : null}
  >
    {type === 'next' || type === 'previous' ? (
      <Icon
        type="sliderArrow"
        color="newBlue"
        size="tiny"
        rotate={type === 'previous' ? '180deg' : '0'}
      />
    ) : ellipsis.includes(type) ? (
      '...'
    ) : (
      children
    )}
  </Grid>
);

const ListHeader = ({ classes = {}, sortBy, handleSortSelect }) => (
  <Grid
    container
    item
    alignItems="center"
    justify="space-between"
    className={classes.sortContainer}
  >
    <Grid item>
      <Select
        name="sort"
        placeholder="Type de bien"
        list={sortBySelectMap}
        value={sortBy}
        onChange={handleSortSelect}
      />
    </Grid>
  </Grid>
);

const ListFooter = ({ classes, page, matches, isMapsView, handlePage }) =>
  page?.totalPages > 1 && (
    <Grid
      container
      justify="center"
      className={classes.pagination}
      id="pagintationContainer"
    >
      <Pagination
        count={page.totalPages}
        page={!isNaN(page.page) ? Number(page.page) : 1}
        siblingCount={matches || isMapsView ? 0 : 1}
        onChange={handlePage}
        renderItem={({ ...params }) => (
          <>
            <PaginationItem {...params} classes={classes}>
              {params.page}
            </PaginationItem>
          </>
        )}
      />
    </Grid>
  );

const ListWrapper = ({
  children,
  classes,
  hasData,
  sortBy,
  toggleView,
  isMapsView,
  handleSortSelect,
  ...footerProps
}) => (
  <>
    <ListHeader
      classes={classes}
      sortBy={sortBy}
      toggleView={toggleView}
      isMapsView={isMapsView}
      handleSortSelect={handleSortSelect}
    />
    <div id="listViewScrollContainer">
      <Grid container>
        {hasData ? (
          children
        ) : (
          <div className={classes.notFound}>
            <Typography variant="body1">
              <span role="img" aria-label="cring">
                ????
              </span>
              Aucun r??sultat ne correspond ?? votre crit??re de recherche.
            </Typography>
          </div>
        )}
        <ListFooter classes={classes} {...footerProps} />
      </Grid>
    </div>
  </>
);

const ListElement = ({
  className,
  liked,
  handleBookmark,
  _id,
  heading,
  pictures,
  city,
  postal,
  typeOfAnnonce,
  minPieces,
  maxPieces,
  dimensions,
  price,
  noRedirect,
  showLikes,
  handleMouseEnter,
  handleMouseLeave,
}) => (
  <Grid
    item
    className={clsx(className)}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <Link href={noRedirect ? '#' : singlePath({ typeOfAnnonce, _id })}>
      <a>
        <Card
          _id={_id}
          title={heading}
          src={getCardImg(pictures?.[0])}
          address={getAddress({ city, postal })}
          description={getNbPieces(minPieces, maxPieces)}
          dimensions={dimensions}
          price={price}
          liked={liked?.includes(_id)}
          onClick={handleBookmark}
          showLikes={showLikes}
        />
      </a>
    </Link>
  </Grid>
);

const ListContainer = ({
  classes,
  sortBy,
  curr,
  isMapsView,
  handleSortSelect,
  hasData,
  page,
  matches,
  handlePage,
  handleMouseEnter,
  liked,
  handleBookmark,
  noRedirect = false,
}) => (
  <Grid item xs={5} className={classes.listViewContainer}>
    <ListWrapper
      classes={classes}
      sortBy={sortBy}
      isMapsView={isMapsView}
      handleSortSelect={handleSortSelect}
      hasData={hasData}
      page={page}
      matches={matches}
      handlePage={handlePage}
    >
      {page.pageList?.map((elems) => (
        <ListElement
          key={elems._id}
          noRedirect={noRedirect}
          handleMouseEnter={handleMouseEnter && handleMouseEnter(elems._id)}
          handleMouseLeave={handleMouseEnter && handleMouseEnter(null)}
          className={
            elems._id !== curr?._id
              ? classes.mapsListContainer
              : clsx(classes.mapsListContainer, classes.mapsCurrListContainer)
          }
          liked={liked}
          handleBookmark={handleBookmark}
          {...elems}
        />
      ))}
    </ListWrapper>
  </Grid>
);
export { ListHeader, ListFooter, ListElement, ListContainer };
