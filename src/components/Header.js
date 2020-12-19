import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../contexts/StateProvider';
import { auth } from '../lib/firebase';

function Header() {
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
        <div className="header">

            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo"/>
            </Link>
            
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">Hello, {user ? 'Sign out' : 'Sign In'}</span>
                        <span className="header__optionLineTwo">Account & Lists</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingCartIcon className=""/>
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                </div>
            </Link>

        </div>
    )
}

export default Header
