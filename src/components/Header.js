import React from 'react'
import {Link} from 'react-router-dom'
import  AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next';


const Header = () => {
    const {t, i18n} = useTranslation();
    const  changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }
  return (
    <div>
        <h1>Header</h1>
        <p>{t('This is the front page')}</p>
        <AppBar>
            <Toolbar style={{ justifyContent: 'space-between'}}>
                <div>
                <Button component= {Link} to="/" color="inherit">
                    {t('Home')}
                </Button>
                <Button component= {Link} to="/about" color="inherit">
                    {t('About')}
                </Button>
                </div>
                <div>
                <Button id="fi" onClick={() => changeLanguage('fi')} color="inherit">FI</Button>
                <Button id="en" onClick={() => changeLanguage('en')} color="inherit">EN</Button>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;