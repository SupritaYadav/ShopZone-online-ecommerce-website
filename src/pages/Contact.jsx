
function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="contact-intro">
        Have any questions? We'd love to hear from you.
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>📧 Email: support@shopzone.com</p>
          <p>📞 Phone: +91 98765 43210</p>
          <p>📍 Location: India</p>

          <p>
            Our support team is always ready to help you
            with your shopping experience.
          </p>
        </div>

        <div className="contact-form">

          <h2>Send us a Message</h2>

          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>

        </div>

      </div>

    </div>
  );
}

export default Contact;