import React from 'react';
import './mainpage.css'
import { BrowserRouter as Router,
    Routes,
    Route,
    Link 
} from "react-router-dom"
import HomePage from '../HomePage/HomePage';
import Index from '../Index/Index';
import NewBook from '../NewBook/NewBook';

export default function MainPage(){
    return(
        <Router>
            <header className ="navbar">
                <div><Link to = "/" className='logo'>영중 책방</Link></div>
                    <ul className='menu'>
                        <li><Link to="/Novel">장르</Link></li>
                        <li><Link to="/NewBook">신간도서</Link></li>
                        <li><Link to="/Novel">인기도서</Link></li>
                        <li><Link to="/Novel">About</Link></li>
                    </ul>
            </header>

                <main>
                    <Routes>
                        <Route path='/' element={<Index />} />
                        <Route path='/Novel' element={<HomePage />} />
                        <Route path='/NewBook' element={<NewBook />} />
                    </Routes>
                </main>
            <footer className="footer">
                <div className="footer-info">
                    <p>동양미래대학교 컴퓨터소프트웨어학과</p>
                    <p>20221053 김영중</p>
                </div>
                <div className='footer-sub'>
                    <p>웹프런트앤드 프로젝트</p>
                </div>
                <button className="scroll-top-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
            </footer>
        </Router>  
            )   
}