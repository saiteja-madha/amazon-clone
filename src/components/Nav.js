import React from 'react'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from '../contexts/StateProvider';
import { auth } from '../lib/firebase';
import './Nav.css'

function Nav() {

    const [{basket, user},] = useStateValue();

    const handleAuthentication = () => {
        console.log('HANDLE AUTHENTICATION', user)
        if (user) {
            auth.signOut().then(_ => {
                console.log('LOGGED OUT')
            }).catch(e => {
                console.warn(e.message)
            })
        }
    }

    return (
        <div className='nav'>
            <div className='nav__left'>
                <Link to="/">
                    <img className="nav__logo" src='../img/amazon_nav.png' alt="Amazon Logo"/>
                </Link>
                <div className="nav__location">
                    <LocationOnIcon className='nav__locationIcon'/>
                    <div className="nav__option nav__address">
                        <span className="nav__optionLineOne">Hello</span>
                        <span className="nav__optionLineTwo">Select your address</span>
                    </div>
                </div>
                <Link to='/login'>
                    <div className="nav__option">
                        <span className="nav__optionLineOne">Hello, Sign in</span>
                        <span className="nav__optionLineTwo">Account & Lists</span>
                    </div>
                </Link>
            </div>
            
            <div className="nav__stretch">
                <select className='nav__category'>
                    <option value="all">All</option>
                    <option value="deals">Deals</option>
                </select>
                <input className="nav__searchInput" type="text" />
                <SearchIcon className="nav__searchIcon"/>
            </div>

            <div className="nav__right">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="nav__option">
                        <span className="nav__optionLineOne">Hello, {user ? 'Sign out' : 'Sign In'}</span>
                        <span className="nav__optionLineTwo">Account & Lists</span>
                    </div>
                </Link>
                <Link to='/orders'>
                    <div className="nav__option">
                        <span className="nav__optionLineOne">Returns</span>
                        <span className="nav__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/checkout">
                    <div className="nav__optionBasket">
                        <ShoppingCartIcon className='nav__basketIcon'/>
                        <div className="nav__option">
                            <span className="nav__optionLineOne nav__basketCount">{basket?.length}</span>
                            <span className="nav__optionLineTwo">Cart</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Nav
