import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Blogs from "./components/Blogs";
import UserBlog from "./components/UserBlog";
import AddBlog from "./components/AddBlog";
import Login from "./components/Login";

import Register from "./components/register";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  return (
  
  <React.Fragment>
  <header>
    <Header />
  </header>
  <main>
  <Routes>
  <Route path="/login" Component={Login} />
  <Route path="/register" Component={Register} />
  <Route path="/blogs" Component={Blogs} />
  <Route path="/blogs/add" Component={AddBlog} />
 <Route path="/myblogs" Component={UserBlog} />
  <Route path="/MyBlog/:id" Component={UserBlog} />
  


  </Routes>
  </main>
  

  </React.Fragment>


 
  );
}

export default App;
