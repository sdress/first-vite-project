import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = (props) => {
    return (
        <div className="ContactForm">
            <h1>Contact Us for a Quote Today!</h1>
            <div class="mb-3">
                <label for="FormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="yourEmail@example.com" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
        </div>
    );
}

export default Contact;