import React from 'react'
import './Home.css'
import Text from './Text'
const Home = () => {
  return (
    <>
    
    <main className="main-content container">
    <h1 className='typeEffect'><Text/></h1>
        <section id="home">

            <div className="hero">
           
              
                <p>Discover articles, tutorials, and tips on coding and programming.</p>
            </div>
        </section>
        <section id="about" className="section">
            <h2>About Us</h2>
            <p>We are passionate about coding and love to share our knowledge with the community. Join us to learn and grow together.</p>
        </section>
        <section id="blog" className="section">
            <h2>Latest Posts</h2>
            <div className="posts">
                <article className="post">
                    <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                    <h3>Post Title 1</h3>
                   
                    <p>Summary of the post...</p>
                    <a href="#">Read more</a>
                </article>
                <article className="post">
                    <img src="https://images.unsplash.com/photo-1687603921109-46401b201195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coding Image 2"/>
                    <h3>Post Title 2</h3>
                    <p>Summary of the post...</p>
                    <a href="#">Read more</a>
                </article>
                <article className="post">
                    <img src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coding Image 3"/>
                    <h3>Post Title 3</h3>
                    <p>Summary of the post...</p>
                    <a href="#">Read more</a>
                </article>
                <article className="post">
                    <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Coding Image 4"/>
                    <h3>Post Title 4</h3>
                    <p>Summary of the post...</p>
                    <a href="#">Read more</a>
                </article>
            </div>
        </section>
        <section id="contact" className="section">
            <h2>Contact Us</h2>
            <p>Feel free to reach out to us via email at <a href="mailto:contact@codingblog.com">contact@codingblog.com</a>.</p>
        </section>
    </main>

    
    </>
  )
}

export default Home
