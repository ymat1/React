import '../css/homepage.css';
import css from '../pages/img/css.png';

function Css() {
    return(
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md">
                        <img src={css} className="img-fluid" alt="Fundamentals" />
                        </div>
                        <div className="col-md pt-5">
                            <h1 className="text-primary">CSS</h1>
                            <p className="lead">
                                Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.
                            </p>
                            <p className="lead">
                                The name cascading comes from the specified priority scheme to determine which style rule applies if more than one rule matches a particular element. This cascading priority scheme is predictable.
                            </p> 
                        </div>
                    </div>
                    <div className="col-md py-xl-5">
                        <p className='lead'>
                            CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting.
                        </p>
                    </div>
                    <div className="col-md">
                        <p className='lead'>
                            Separation of formatting and content also makes it feasible to present the same markup page in different styles for different rendering methods, such as on-screen, in print, by voice (via speech-based browser or screen reader), and on Braille-based tactile devices. CSS also has rules for alternate formatting if the content is accessed on a mobile device.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Css;