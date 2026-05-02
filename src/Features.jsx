import Images from './assets/Images.png'
import webss from './assets/webss.png'
import Civs from './assets/civs.png'
import Me from './assets/me.png'
import Footer from './Components/Footer'

function Features() {
    return(
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <section className="hero">
            <div className="hero-content">
                <h1 style={{fontSize: 'clamp(32px, 6vw, 60px)'}}>
                    Create QR Codes<br />for your links
                </h1>
                <p>Enhance your marketing strategy with custom QR codes. <br /> Drive engagement and track performance with ease.</p>
                <button>Create QR Codes →</button>
            </div>
        </section>
        <div className="black" style={{padding: '60px 20px'}}>
            <div className="info">
                <h1>QR Codes</h1>
                <div className="purpl"></div>
                <p>Create powerful and customizable QR codes with ease. Scan now and turn your links, messages, and content into smart QR codes in just a few clicks.</p>
                <br />
                <button>Try it out</button>
            </div>
            <img src={Images} alt="" style={{width: 'min(600px, 100%)', borderRadius: '15px', border: '2px solid #818181'}} />
        </div>
        <div className="blackk" style={{padding: '60px 20px'}}>
            <h1 id='h' style={{textAlign: 'center', fontSize: 'clamp(36px, 8vw, 80px)'}}>WebBuilder</h1>
            <div className="purpl" style={{width: 'min(700px, 90%)', margin: '0 auto'}}></div>
            <br />
            <br />
            <img src={webss} alt="" style={{width: 'min(1400px, 95%)', borderRadius: '15px'}} />
            <br />
            <br />
            <br />
            <h1 id='h' style={{textAlign: 'center'}}>Build your website like <span id='purple'>Pro</span></h1>
            <br />
            <p id='ph' style={{padding: '0 16px'}}>Team 1 is a powerful management tool that helps you test, create and organize all your required things in one place.</p>
            <br />
            <br />
            <button id='but'>Test WebBuilder</button>
            <br />
            <br />
            <br />
            <br />
        </div>
        <div className="black1" style={{flexDirection: 'column', alignItems: 'center', gap: '20px', padding: '40px 20px'}}>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
                <img src={Civs} alt="" style={{width: 'min(700px, 90vw)', borderRadius: '15px'}} />
                <h1 style={{color: 'white', fontSize: 'clamp(24px, 5vw, 40px)'}}>→</h1>
                <img src={Me} alt="" style={{width: 'min(600px, 90vw)', borderRadius: '15px'}} />
            </div>
        </div>
        <div className="blackk" style={{padding: '60px 20px'}}>
            <h1 id='h' style={{textAlign: 'center'}}>Paying for creating a CV?</h1>
            <br />
            <p id='ph' style={{padding: '0 16px'}}>We can't do that, it's Free with Team 1. Does not cost a cent, go test it.</p>
            <br />
            <br />
            <br />
            <button id='but'>Make a CV</button>
            <br />
            <br />
            <br />
            <br />
            <Footer/>
        </div>
        </>
    )
}

export default Features;