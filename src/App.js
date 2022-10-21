import './App.css';

function App() {
  return (
    <div className="App">
      <div className='map'>
        <iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="map" scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28480.756276001328!2d85.84558254213653!3d26.836945365708157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec6c0bff5ce2f5%3A0x31ab40ee76b077b7!2sSingyahi%2045700!5e0!3m2!1sen!2snp!4v1665482154236!5m2!1sen!2snp">
        </iframe>
      </div>
      <div className="contact">
        <form action="#">
          <div className="input_label">
            <label htmlFor="fname">First Name</label>
            <input type="text" required />
          </div>
          <div className="input_label">
            <label htmlFor="lname">Last Name</label>
            <input type="text" required />
          </div>
          <div className="input_label">
            <label htmlFor="email">Email</label>
            <input type="email" required />
          </div>
          <div className="input_label">
            <label htmlFor="subject">Subject</label>
            <input type="text" required />
          </div>
          <div className="textarea_label">
            <label htmlFor="message">Message</label>
            <textarea name="message" required id="message" cols="30" rows="7" />
          </div>
          <div className="btn">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
