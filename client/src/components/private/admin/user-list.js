import React, { /* useState */ } from "react";
import { Grid } from '@material-ui/core'
// import ReactPaginate from 'react-paginate';
import Avatar from '../../../assets/img/icons/profile.png'

import './user-list.css'
// import moment from 'moment'

const Header = ({ headerList = [] }) => (
    <Grid container item alignItems="center" justify="center" className='user-list-header spacing'>
        {headerList.map(({ name, size }, index) => (
            <Grid key={index} item container alignItems='center' {...size}>
                <Grid item>
                    <p>{name}</p>
                </Grid>
            </Grid>
        ))}
    </Grid>
)
const UserList = ({ contentList = [], headerList }) => {
    // const [state, setState] = useState({
    //     contentList,
    //     currentPage: 0,
    //     offset: 0,
    //     limit: contentList.length
    // })

    // const handlePageClick = (data) => {
    //     const selectedPage = data.selected;
    //     const offset = Math.ceil(selectedPage * state.limit);
    //     setState({ ...state, currentPage: selectedPage, offset: offset });
    // }
    const list = contentList/*.splice(state.offset, state.limit)*/;
    return (
        <Grid container item>
            <Header headerList={headerList} />
            {list.map((elem, index) => (
                <Grid container item key={index} alignItems="center" justify="center" className='user-list spacing'>
                    <Grid item container alignItems='center' xs={4}>
                        <Grid item>
                            <img src={elem.avatar || Avatar} alt='Avatar' />
                        </Grid>
                        <Grid item>
                            <span>{`${elem.firstName} ${elem.lastName}`}</span>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={1}>
                        <Grid item>
                            <span className='tiny-icon icon-candle'></span>
                        </Grid>
                        <Grid item>
                            <span>{elem.age}</span>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={3}>
                        <Grid item>
                            <span className='tiny-icon icon-email'></span>
                        </Grid>
                        <Grid item>
                            <span>{elem.email}</span>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={2}>
                        <Grid item>
                            <span className='tiny-icon icon-phone'></span>
                        </Grid>
                        <Grid item>
                            <span>{elem.phone}</span>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={1}>
                        <Grid item>
                            <span className='tiny-icon icon-graduate'></span>
                        </Grid>
                        <Grid item>
                            <span>{elem.school}</span>
                        </Grid>
                    </Grid>
                    <Grid item container alignItems='center' xs={1}>
                        <Grid item>
                            <span className='tiny-icon icon-circle'></span>
                        </Grid>
                        <Grid item>
                            <span>{`${elem.studiesLevel}an${elem.studiesLevel === '1' ? '' : 's'}`}</span>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
            {/* <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={2}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            /> */}
        </Grid>
    )
}

export default UserList