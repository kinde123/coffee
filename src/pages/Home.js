
import React from 'react';
import { products } from './data'; // Assuming you have a data.js file with product data
// import './.css'; // Import your CSS file for styling
import Hero from './images/hero.jpeg';
import logo from './images/durame.png';
import Navbar from './Navbar';
const Home = () => {
  return (
    <div className="home">
     
      <Navbar />
      <div className="hero">
        <img src={Hero} alt="Coffee Shop" />
        <div className="hero-text">
          <h1>Welcome to Our Coffee Shop</h1>
          <p>From <span className='big-screen-text'> Ethiopia to Your Cup,
taste the origin of coffee </span>. <span className='small-screen-text'>Premium Ethiopian beans, handpicked for rich, vibrant flavor.</span> </p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>
      {/* <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <p>{product.description}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      {/* Testimonials Section */}
      {/* <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"Best coffee I've ever tasted!"</p>
          <p>- Happy Customer</p>
        </div>
      </section> */}

      {/* Blog Preview Section */}
      {/* <section className="blog-preview">
        <h2>From Our Blog</h2>
        <div className="blog-post">
          <h3>Brewing the Perfect Cup at Home</h3>
          <p>Learn how to brew coffee like a pro with our step-by-step guide.</p>
          <a href="/blog/brewing-guide">Read More</a>
        </div>
      </section> */}

      {/* Footer Section */}
      {/* <footer className="footer">
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/faq">FAQ</a>
        </div>
        <div className="newsletter-signup">
          <p>Subscribe to our newsletter for updates and promotions:</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="contact-info">
          <p>Contact us at: info@yourbrand.com</p>
          <p>Call us: (123) 456-7890</p>
        </div>
        <div className="social-media">
          <a href="https://www.facebook.com/yourpage" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/yourpage" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/yourpage" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>&copy; 2024 YourCoffeeBrand. All rights reserved.</p>
      </footer> */} 
    </div>
  );
};

export default Home;
// import React from 'react';
// import Hero from './images/hero.jpg';

// function HomePage() {
//   return (
//     <div className="homepage">
//       {/* Header Section */}
//       <header className="header">
//         <div className="logo">
//           <a href="/">YourBrand</a>
//         </div>
//         <nav>
//           <ul className="nav-links">
//             <li><a href="/">Home</a></li>
//             <li><a href="/shop">Shop</a></li>
//             <li><a href="/subscriptions">Subscriptions</a></li>
//             <li><a href="/about">About Us</a></li>
//             <li><a href="/blog">Blog</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//           <div className="nav-icons">
//             <a href="/search"><i className="fas fa-search"></i></a>
//             <a href="/account"><i className="fas fa-user"></i></a>
//             <a href="/cart"><i className="fas fa-shopping-cart"></i></a>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//     <div className="home">
//        <div className="hero">
//          <img src={Hero} alt="Coffee Shop" />
//          <div className="hero-text">
//            <h1>Welcome to Our Coffee Shop</h1>
//           <p>From <span> Ethiopia to Your Cup
// Taste the origin of coffee </span>. Premium Ethiopian beans, handpicked for rich, vibrant flavor.</p>
//            <button className="shop-now">Shop Now</button>
//         </div>
//        </div>
//        </div>

//       {/* Featured Products Section */}
//       <section className="featured-products">
//         <h2>Our Bestsellers</h2>
//         <div className="products">
//           <div className="product-card">
//             <img src="path/to/product-image1.jpg" alt="Product Name 1" />
//             <h3>Espresso Roast</h3>
//             <p>$15.99</p>
//             <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//           <div className="product-card">
//             <img src="path/to/product-image2.jpg" alt="Product Name 2" />
//             <h3>French Roast</h3>
//             <p>$13.99</p>
//             <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//           <div className="product-card">
//             <img src="path/to/product-image1.jpg" alt="Product Name 1" />
//             <h3>Espresso Roast</h3>
//             <p>$15.99</p>
//             <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//           <div className="product-card">
//             <img src="path/to/product-image2.jpg" alt="Product Name 2" />
//             <h3>French Roast</h3>
//             <p>$13.99</p>
//             <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//           <div className="product-card">
//             <img src="path/to/product-image1.jpg" alt="Product Name 1" />
//             <h3>Espresso Roast</h3>
//             <p>$15.99</p>
//             <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//           <div className="product-card">
//             <img src="path/to/product-image2.jpg" alt="Product Name 2" />
//             <h3>French Roast</h3>
//             <p>$13.99</p>
//             <button className="add-to-cart-btn">Add to Cart</button>
//           </div>
//         </div>
//       </section>

//       {/* Subscriptions Section */}
//       <section className="subscriptions">
//         <h2>Coffee Subscriptions</h2>
//         <p>Enjoy regular deliveries of your favorite blends.</p>
//         <button className="cta-button">Learn More</button>
//       </section>

//       {/* Testimonials Section */}
//       <section className="testimonials">
//         <h2>What Our Customers Say</h2>
//         <div className="testimonial">
//           <p>"Best coffee I've ever tasted!"</p>
//           <p>- Happy Customer</p>
//         </div>
//       </section>

//       {/* Blog Preview Section */}
//       <section className="blog-preview">
//         <h2>From Our Blog</h2>
//         <div className="blog-post">
//           <h3>Brewing the Perfect Cup at Home</h3>
//           <p>Learn how to brew coffee like a pro with our step-by-step guide.</p>
//           <a href="/blog/brewing-guide">Read More</a>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="footer">
//         <div className="footer-links">
//           <a href="/privacy">Privacy Policy</a>
//           <a href="/terms">Terms of Service</a>
//           <a href="/faq">FAQ</a>
//         </div>
//         <div className="newsletter-signup">
//           <p>Subscribe to our newsletter for updates and promotions:</p>
//           <form>
//             <input type="email" placeholder="Enter your email" />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//         <div className="contact-info">
//           <p>Contact us at: info@yourbrand.com</p>
//           <p>Call us: (123) 456-7890</p>
//         </div>
//         <div className="social-media">
//           <a href="https://www.facebook.com/yourpage" aria-label="Facebook">
//             <i className="fab fa-facebook-f"></i>
//           </a>
//           <a href="https://www.instagram.com/yourpage" aria-label="Instagram">
//             <i className="fab fa-instagram"></i>
//           </a>
//           <a href="https://twitter.com/yourpage" aria-label="Twitter">
//             <i className="fab fa-twitter"></i>
//           </a>
//         </div>
//         <p>&copy; 2024 YourCoffeeBrand. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default HomePage;
