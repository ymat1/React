import fundamentals from '../pages/img/fundamentals.svg'
import { Link } from 'react-router-dom';
import '../css/homepage.css';

function Body() {
    return (
        <>
            <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center">
                        <div>
                            <h1>What we have learned so far in <span className="text-warning">Web Development</span></h1>
                            <p className="lead my-4">Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                        <img src={fundamentals} className="img-fluid" alt="Fundamentals" />
                        </div>
                        <div className="col-md p-5">
                            <h2>The Fundamentals</h2>
                            <p className="lead">
                                Having a thorough understanding of web development basics is essential for a person to become an expert web developer. Three technologies that rule the world of web development are HTML, CSS and JavaScript.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="p-5">
                <div className="container">
                    <div className="row text-center g-2">
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-filetype-html"></i>
                                    </div>
                                    <h3 className="card-title mb-3">
                                        HTML
                                    </h3>
                                    <p className="card-text">
                                        The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.
                                    </p>
                                    <Link to='/html' className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-secondary text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-filetype-css"></i>
                                    </div>
                                    <h3 className="card-title mb-3">
                                        CSS
                                    </h3>
                                    <p className="card-text">
                                        Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language.
                                    </p>
                                    <Link to='/css' className="btn btn-dark">Read More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="card bg-dark text-light">
                                <div className="card-body text-center">
                                    <div className="h1 mb-3">
                                        <i className="bi bi-filetype-js"></i>
                                    </div>
                                    <h3 className="card-title mb-3">
                                        JavaScript
                                    </h3>
                                    <p className="card-text">
                                        JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
                                    </p>
                                    <Link to='/js' className="btn btn-primary">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Body;