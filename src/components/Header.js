import React from 'react'
import {Link} from 'react-router-dom'
import  AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'

const Header = () => {
  return (
    <div>
        <h1>Header</h1>
        <p>This is a Header page.</p>
        <AppBar>
            <Toolbar>
                <Button component= {Link} to="/" color="inherit">
                    HOME
                </Button>
                <Button component= {Link} to="/about" color="inherit">
                    ABOUT
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;