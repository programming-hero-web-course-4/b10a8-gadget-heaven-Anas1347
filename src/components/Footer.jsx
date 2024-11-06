import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-neutral text-white">
      <footer className="container mx-auto footer text-neutral-content p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Product and Services Section */}
        <nav>
          <h6 className="footer-title text-xl">Shop</h6>
          <Link to="/products" className="link link-hover">All Products</Link>
          <Link to="/new-arrivals" className="link link-hover">New Arrivals</Link>
          <Link to="/best-sellers" className="link link-hover">Best Sellers</Link>
          <Link to="/sales" className="link link-hover">Current Offers</Link>
        </nav>

        {/* Customer Support Section */}
        <nav>
          <h6 className="footer-title text-xl">Customer Support</h6>
          <Link to="/faq" className="link link-hover">FAQ</Link>
          <Link to="/contact" className="link link-hover">Contact Us</Link>
          <Link to="/returns" className="link link-hover">Returns</Link>
          <Link to="/order-status" className="link link-hover">Order Status</Link>
        </nav>

        {/* About the Company Section */}
        <nav>
          <h6 className="footer-title text-xl">About Us</h6>
          <Link to="/about" className="link link-hover">Our Story</Link>
          <Link to="/careers" className="link link-hover">Careers</Link>
          <Link to="/blog" className="link link-hover">Blog</Link>
          <Link to="/privacy-policy" className="link link-hover">Privacy Policy</Link>
        </nav>

        {/* Social Media Section */}
        <nav>
          <h6 className="footer-title text-xl">Follow Us</h6>
          <a href="https://github.com" className="link link-hover">
            <FaGithub className="inline-block mr-2" />
            GitHub
          </a>
          <a href="https://linkedin.com" className="link link-hover">
            <FaLinkedin className="inline-block mr-2" />
            LinkedIn
          </a>
          <a href="https://twitter.com" className="link link-hover">
            <FaTwitter className="inline-block mr-2" />
            Twitter
          </a>
        </nav>

      </footer>

      
      <div className="bg-neutral text-center p-4">
        <p>&copy; 2024 Gadget Heaven. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
