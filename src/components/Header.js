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
                <Button element= {Link} to="/">
                    Home
                </Button>
                <Button element= {Link} to="/about">
                    About
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;