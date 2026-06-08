import "../index.css";
function Contact(){
    return(
        <div className="Contact">
            <h1>Contact Me</h1>
            <form className="contact-container">
                <input type="name" placeholder="Enter Your Name"/><br/>
                <input type="email" placeholder="Enter Your Email"/><br/>
                <textarea type="msg" placeholder="Enter Your Message"/><br/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}
export default Contact;