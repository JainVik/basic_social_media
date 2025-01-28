import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/header'
import Footer from './components/footer';
import SideBar from './components/sidebar';
import CreatePost from './components/create-post';
import PostList from './components/post-list';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  const[selectedTab,setSelectedTab]=useState("Home");


return (
  <PostListProvider>
  <div className='app-container'>
<SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
<div className='content'>
<Header></Header>
{selectedTab=== "Home"?(<PostList></PostList>):(<CreatePost></CreatePost>)} 
<Footer></Footer>
</div>
</div>
</PostListProvider>

);

}

export default App;
