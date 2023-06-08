import { AppBar, Typography, Toolbar, Box, Button, Tabs, Tab } from "@mui/material"
import { useState} from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
const Header = () => {
    const [value, setvalue] = useState();


    const isLoggedIn = useSelector(state => state.isLoggedIn);
    console.log(isLoggedIn)

    return (
        <AppBar position="sticky" sx={{ background: " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,84,179,1) 43%, rgba(0,212,255,1) 100%)" }}>
            <Toolbar>
                <Typography variant="h4">
                    BlogApp
                </Typography>
             { isLoggedIn &&    <Box display="flex" marginLeft={'auto'}>
                    <Tabs value={value} onChange={(e,val)=>setvalue(val)}>
                        <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                        <Tab LinkComponent={Link} to="/myblogs" label="My Blogs" />
                    </Tabs>
                </Box>}
                 <Box display="flex" marginLeft="auto" >
          {  (!isLoggedIn) && <>       <Button LinkComponent={Link} to="/login" variant="contained" sx={{ margin: 1, borderRadious: 10 }} color="warning">Login</Button>
                    <Button LinkComponent={Link} to="/login" variant="contained" sx={{ margin: 1 }} color="warning">Signup</Button> 
                    
        </> }    
           { (isLoggedIn) &&   <>     <Button LinkComponent={Link} to="/login" variant="contained" sx={{ margin: 1 }} color="warning">Logout</Button>
</>}
                </Box>


            </Toolbar>
        </AppBar>
    )
}

export default Header
