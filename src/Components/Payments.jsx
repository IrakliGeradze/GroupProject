import { useState } from 'react';
import Footer from './Footer';

function Payments() { 
    const [isPaying, setIsPaying] = useState(false);
    const [plan, setPlan] = useState('');
    const [status, setStatus] = useState('idle');
    const handleStart = (selectedPlan) => {
        setPlan(selectedPlan);
        setIsPaying(true);
        setStatus('idle');
    }
    const processPayment = (e) => {
        e.preventDefault();
        setStatus('processing');
        setTimeout(() => setStatus('success'), 2000);
    }
    return (
        <>
        <div className="back">
                <div style={{padding: '100px 20px 0 20px', textAlign: 'center'}}>
                    <h1 id="h">Simple, Transparent <span id="purple">Pricing</span></h1>
                    <p id="ph">No hidden fees. Choose the plan that best fits your needs.</p>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px', color: '#818181', fontSize: '14px'}}>
                        <span>🔒 SSL Encrypted</span> <span>🛡️ Secure Payments</span> <span>⚡ Instant Setup</span>
                    </div>
                </div>
                <div className="container">
            <div className="cards">
                <div className="tops">
                    <h3>Free</h3>
                    <p>current plan</p>
                    <br />
                    <h2>$0</h2>
                </div>
                <div className="bottoms">
                    <h1 id='yes'>QR Codes</h1>
                    <h1 id='yes'>Up to 5 tags</h1>
                    <h1 id='no'>Track Clicks</h1>
                    <h1 id='no'>Community Support</h1>
                    <h1 id='no'>AI Powered suggestions</h1>
                    <br />
                    <br />
                    <button onClick={() => handleStart('Free')}>Get Started</button>
                </div>
            </div>
            <div id='middle' className="cards">
                <div className="tops">
                    <h3>Pro</h3>
                    <p>For small businesses</p>
                    <br />
                    <h2>$15<span id='price'>/month</span></h2>
                </div>
                <div className="bottoms">
                    <h1 id='yes'>QR Codes</h1>
                    <h1 id='yes'>Up to 150 tags</h1>
                    <h1 id='yes'>Track Clicks</h1>
                    <h1 id='no'>Community Support</h1>
                    <h1 id='no'>AI Powered suggestions</h1>
                    <br />
                    <br />
                    <button id='start' onClick={() => handleStart('Pro')}> Get Started </button>
                </div>
            </div>
            <div className="cards">
                <div className="tops">
                    <h3>Business</h3>
                    <p>For large organizations</p>
                    <br />
                    <h2>$49<span id='price'>/month</span></h2>
                </div>
                <div className="bottoms">
                    <h1 id='yes'>QR Codes</h1>
                    <h1 id='yes'>Up to 500 tags</h1>
                    <h1 id='yes'>Track Clicks</h1>
                    <h1 id='yes'>Community Support</h1>
                    <h1 id='yes'>AI Powered suggestions</h1>
                    <br />
                    <br />
                    <button onClick={() => handleStart('Business')}>Contact Team</button>
                </div>
            </div>
        </div>
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 20px 100px 20px', color: 'white'}}>
            <h2 style={{fontSize: '32px', marginBottom: '40px', textAlign: 'center'}}>Frequently Asked Questions</h2>
            <div style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
                <div>
                    <h3 style={{color: '#D049F0', marginBottom: '10px'}}>Can I cancel my subscription?</h3>
                    <p style={{color: '#8C8C8C'}}>Yes, you can cancel your subscription at any time from your dashboard settings. You will continue to have access until the end of your billing period.</p>
                </div>
                <div>
                    <h3 style={{color: '#D049F0', marginBottom: '10px'}}>What payment methods do you accept?</h3>
                    <p style={{color: '#8C8C8C'}}>We accept all major credit cards, PayPal, and Apple Pay through our secure encrypted payment processor.</p>
                </div>
                <div>
                    <h3 style={{color: '#D049F0', marginBottom: '10px'}}>Do you offer custom enterprise plans?</h3>
                    <p style={{color: '#8C8C8C'}}>Absolutely! If your organization needs more than our Business plan offers, please use the "Contact Team" button above.</p>
                </div>
            </div>
        </div>
        {isPaying && (
            <div className="payment-overlay">
                <div className="payment-modal">
                    {status === 'idle' && (
                        <form onSubmit={processPayment}>
                            <h2>Pay for {plan} Plan</h2>
                            <p>Secure Checkout</p>
                            <div className="methods">
                                <span>Card</span> <span>PayPal</span> <span>Apple Pay</span>
                            </div>
                            <input type="text" placeholder="Card Number" required maxLength="19" />
                            <div style={{display: 'flex', gap: '10px'}}>
                                <input type="text" placeholder="MM/YY" required maxLength="5" />
                                <input type="text" placeholder="CVC" required maxLength="3" />
                            </div>
                            <input type="text" placeholder="Cardholder Name" required />
                            <button type="submit" id="but" style={{marginTop: '20px', width: '100%', background: 'white', color: 'black'}}>Pay Now</button>
                            <button type="button" onClick={() => setIsPaying(false)} style={{background: 'transparent', color: '#818181', marginTop: '15px', width: '100%', border: 'none', cursor: 'pointer', fontSize: '14px'}}>Cancel</button>
                        </form>
                    )}
                    {status === 'processing' && (
                        <div style={{textAlign: 'center', padding: '40px 0'}}>
                            <div className="spinner"></div>
                            <h2 style={{marginTop: '20px', color: 'white'}}>Processing Payment...</h2>
                        </div>
                    )}
                    {status === 'success' && (
                        <div style={{textAlign: 'center', padding: '20px 0'}}>
                            <h1 style={{fontSize: '50px'}}>Done</h1>
                            <h2 style={{color: '#D049F0', marginTop: '10px'}}>Payment Successful!</h2>
                            <p style={{color: 'white'}}>You are now subscribed to the {plan} plan.</p>
                            <button id="but" onClick={() => setIsPaying(false)} style={{marginTop: '20px'}}>Back to Home</button>
                        </div>
                    )}
                </div>
            </div>
        )}
    </div>
        </>
    )
}

export default Payments;