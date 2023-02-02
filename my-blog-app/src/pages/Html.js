import '../css/homepage.css';
import html from '../pages/img/html.png';

function Html() {
    return(
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                        <img src={html} className="img-fluid" alt="Fundamentals" />
                        </div>
                        <div className="col-md pt-5">
                            <h1 className="text-primary">HTML</h1>
                            <p className="lead">
                                The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.
                            </p>
                            <p className="lead">
                                Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.
                            </p> 
                        </div>
                    </div>
                    <div className="col-md py-xl-5">
                        <p className='lead'>
                            HTML elements are the building blocks of HTML pages. With HTML constructs, images and other objects such as interactive forms may be embedded into the rendered page. HTML provides a means to create structured documents by denoting structural semantics for text such as headings, paragraphs, lists, links, quotes, and other items. HTML elements are delineated by tags, written using angle brackets. Tags such as <span className='text-danger fw-bold'>img</span> and <span className='text-danger fw-bold'>input</span> directly introduce content into the page. Other tags such as <span className='text-danger fw-bold'>p</span> surround and provide information about document text and may include other tags as sub-elements. Browsers do not display the HTML tags but use them to interpret the content of the page.
                        </p>
                    </div>
                    <div className="col-md">
                        <p className='lead'>
                            HTML can embed programs written in a scripting language such as JavaScript, which affects the behavior and content of web pages. The inclusion of CSS defines the look and layout of content. The World Wide Web Consortium (W3C), former maintainer of the HTML and current maintainer of the CSS standards, has encouraged the use of CSS over explicit presentational HTML since 1997.[2] A form of HTML, known as HTML5, is used to display video and audio, primarily using the <span className='text-danger fw-bold'>canvas</span> element, in collaboration with JavaScript.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Html;