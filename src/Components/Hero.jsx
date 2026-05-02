export default function Hero() {
    function blog () {
        window.location.href = '/blog'
    }
    return (
    <>
        <section className="hero">
            <div className="hero-content">
            <h1>
                Enjoy Blogs<br />
                with <span>Team First</span>
            </h1>
            <p>
                Explore powerful utilities like link shortening, QR code generation, password tools, and more <br />
                all designed to make your workflow faster and easier.
            </p>
            <button onClick={blog}>Explore Our Blogs →</button>
            <br />
            <br />
            </div>
            <br />
            <br />
            <br />
        </section>
        <br />
    </>
    );
}