import React from 'react'
import { useRouter } from 'next/router';

const Contact = () => {
    const router = useRouter();
    return (
        <>
            <div className='products-heading'>
                <h2>Contact Us</h2>
            </div>
            <div className="container">
                <form action="#" method="POST">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4" required></textarea>
                    </div>
                    <button type="submit" className='contact-button' onClick={()=> {router.push('/')}}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact
