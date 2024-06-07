import './Footer.scss'
const Footer = () => {
    return (
        <footer className="bg-radial-gradient text-gray-300 py-12 p-4">
            <div className="container mx-auto flex flex-wrap justify-between text-center">
                <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-4xl font-semibold mb-4">About Me</h2>
                    <p>We are a team of passionate developers dedicated to creating innovative solutions.</p>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3 mb-8 lg:mb-0">
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <p>Email: example@example.com</p>
                    <p>Phone: +1234567890</p>
                </div>
                <div className="w-full lg:w-1/2 xl:w-1/3">
                </div>
            </div>
            
            <div className="text-center mt-8">
                <p className="text-sm">@DhirajBhawsar 2024 rights reserved.</p>
                <p className="mt-2">Thanks for visiting!</p>
            </div>
        </footer>
    );
}

export default Footer;
