import React from 'react';
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import gmail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import arrow from "../../assets/white-arrow.png";

const Contact = () => {
    const [result, setResult] = React.useState("");
    const [errors, setErrors] = React.useState({});

    const validateEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    };

    const validatePhone = (phone) => {
        const phonePattern = /^[0-9]{10}$/; 
        return phonePattern.test(phone);
    };

    const onSubmit = async (event) => {
        event.preventDefault();

        setErrors({});
        setResult("Sending...");

        const formData = new FormData(event.target);
        const email = formData.get("email");
        const phone = formData.get("phone");
        const botcheck = formData.get("botcheck"); 
        let formErrors = {};

        
        if (botcheck) {
            setResult("Spam detected. Submission blocked.");
            return;
        }

         
        if (!validateEmail(email)) {
            formErrors.email = "Please enter a valid email address.";
        }

         
        if (!validatePhone(phone)) {
            formErrors.phone = "Please enter a valid 10-digit phone number.";
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            setResult("");
            return;
        }

        formData.append("access_key", "7402377c-8cbd-4d96-b2ca-f54d9268e14e");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            console.log("Web3Forms Response:", data);  

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
            } else {
                setResult(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.log("Network Error:", error);
            setResult("Network error. Please try again later.");
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message<img src={msg_icon} alt=""/></h3>
                <p>Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li><img src={gmail_icon} alt=""/>Email: ansarishaban665@gmail.com</li>
                    <li><img src={phone_icon} alt=""/>+ 91 111111111</li>
                    <li><img src={location_icon} alt=""/>Noida,Uttar pardesh<br />gate 32</li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Enter your name" required />

                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter your email" required />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="Enter your mobile number" required />
                    {errors.phone && <span className="error">{errors.phone}</span>}

                    <label>Write your message here</label>
                    <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

                    {/* Honeypot field */}
                    <input type="text" name="botcheck" style={{ display: "none" }} />

                    <button type="submit" className='btn dark-btn'>
                        Submit now<img src={arrow} alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
