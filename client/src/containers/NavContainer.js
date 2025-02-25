import React from 'react';
import Title from '../components/Title';
// import SearchBar from '../components/SearchBar';
import { Grid } from '@mui/material';
import Logo from '../components/Logo';
import NavMenu from '../components/NavMenu';
import NewSearch from '../components/NewSearch';


export default function NavContainer(props) {
    
    return (
        <div className="nav">
            <div className="fade">
                <div className="logo-container">
                    <Logo />
                </div>
                <NavMenu />
                <Title />
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item>
                        <div className="search-bar-container">
                            <h1 style={{paddingBottom: 20}}>Enter an address below to get started.</h1>
                            {/* <SearchBar search={props.search} /> */}
                            <NewSearch search={props.search}/>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
