import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './Sidebar.css'
import UserProfile from './UserProfile';

function sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-header">
            <div className="sidebar-header-img">
                <img src="./user.png" alt="" />
            </div>
            <div className="sidebar-header-btn">
                <DonutLargeIcon/>
                <InsertCommentIcon/>
                <MoreVertIcon/>

            </div>
        </div>
        <div className="sidebar-search">
            <div className="sidebar-search-input">
                <SearchIcon/>
                <input type="text" name='search' placeholder='search...' />
            </div>
        </div>
        <div className="sidebar-chat-list">
            <UserProfile name='Felix Niyomugabo' photoURL='./user.png'/>
            <UserProfile name='Takumi Minamino' photoURL='./user.png'/>
            <UserProfile name='Bugingo Vienny' photoURL='./user.png'/>
            <UserProfile name='Sinzabakwira Gaettan' photoURL='./user.png'/>
            <UserProfile name='Maso' photoURL='./user.png'/>
            <UserProfile name='Maso' photoURL='./user.png'/>
            <UserProfile name='Maso' photoURL='./user.png'/>
            <UserProfile name='Maso' photoURL='./user.png'/>
            <UserProfile name='Maso' photoURL='./user.png'/>
            <UserProfile name='Maso' photoURL='./user.png'/>
        </div>
    </div>
  )
}

export default sidebar