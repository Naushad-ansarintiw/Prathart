import Stripe from 'stripe';

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(`Origin: ${req.headers.origin}`);
        try {
            const params = {
                submit_type: 'pay',
                mode: 'payment',
                payment_method_types: ['card'],
                billing_address_collection: 'auto',
                shipping_options: [
                    { shipping_rate: 'shr_1Noq2sSEhYzXAEm5gE846eU2' },
                ],
                line_items: req.body.map((item) => {
                    const img = item.imageURL;
                    return {
                        price_data: {
                            currency: 'INR',
                            product_data: {
                                name: item.name,
                                images: [img],
                            },
                            unit_amount: item.price ,
                        },
                        adjustable_quantity: {
                            enabled: true,
                            minimum: 1,
                        },
                        quantity: item.quantity
                    }
                }),
                success_url: `http://localhost:3000/checkout-success`,
                cancel_url: `http://localhost:3000/checkout-cancel`,
            }
            // Create Checkout Sessions from body params.
            const session = await stripe.checkout.sessions.create(params);
            res.status(200).json(session);
        }
        catch (error) {
            res.status(error.statusCode || 500).json(error.message);
            console.log(error);
        }
    }

}
