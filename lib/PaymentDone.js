import React from 'react';

export default function handler(req, res) {

    return (
        <div className="payment-done">
            <h1>Payment Successful</h1>
            <p>Your payment has been successfully processed.</p>
            <p>Thank you for your purchase!</p>
            <button onClick={() => window.location.href = '/'}>Back to Home</button>
        </div>
    );
}

