import { useState } from 'react'
import qrCode from '../assets/qrcode.png'
import findUser from '../assets/findUser.png'
import Civ from '../assets/civ.png'
import Web from '../assets/web.png'

function Grid() { 
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
    function QR (){
        window.location.href = 'https://qrcodegenerator-free.vercel.app/'
    }
    function web(){
        window.location.href = 'https://samtredia-web-builder.netlify.app/'
    }
    function cv() {
        window.location.href = 'https://resume-craft-builder1.netlify.app/'
    }
    function api() {
        window.location.href = 'https://finduserapi.vercel.app/'
    }
    return (
        <>
        <div className="grid">
            <div className="grids" style={{boxSizing:'border-box', width:'100%', maxWidth:'420px'}}>
                <div className="imgWrap">
                    <img src={Civ} alt="" />
                </div>
                <h1>CVs</h1>
                <br />
                <p>Create your CV <br />for free, in seconds.</p>
                <br />
                <button onClick={cv}>Test It</button>
            </div>
            <div className="grids" style={{boxSizing:'border-box', width:'100%', maxWidth:'420px'}}>
                <div className="imgWrap">
                    <img src={qrCode} alt="" />
                </div>
                <br />
                <h1>QR Codes</h1>
                <br />
                <p>Create your own QR Code <br /> in a seconds & in the easiest way.</p>
                <br />
                <button  onClick={QR}>Test It</button>
            </div>
            <div className="grids" style={{boxSizing:'border-box', width:'100%', maxWidth:'420px'}}>
                <div className="imgWrap">
                    <img src={findUser} alt="" />
                </div>
                <h1>API's</h1>
                <br />
                <p>Test your API's, <br />Learn how to create your own, and more.</p>
                <br />
                <button onClick={api}>Test It</button>
            </div>
            <div className="grids" style={{boxSizing:'border-box', width:'100%', maxWidth:'420px'}}>
                <div className="imgWrap">
                    <img src={Web} alt="" />
                </div>
                <h1>WebBuilder</h1>
                <br />
                <p>Figma? Nah <br />Use Team 1's WebBuilder and enjoy life</p>
                <br />
                <button onClick={web}>Test It</button>
            </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button id='fea'>Simple Pricing</button>
        <br />
        <h1 id='h2'>Choose a plan that works for you</h1>
        <br />
        <p id='ph'>Get started with Team 1 today and enjoy more <br /> features with our pro plans.</p>
        <br />
        <br />
        <div id='payments' className="container">
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
        </>
    )
}

export default Grid;