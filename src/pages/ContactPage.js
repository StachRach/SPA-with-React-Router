import React from "react";
import '../styles/ContactPage.css'

class ContactPage extends React.Component {
   state = {
      value: ""
   }

   handleChange = (e) => {
      this.setState({
         value: e.target.value
      });
   }

   handleSubmit = (e) => {
      e.preventDefault();

      this.setState({
         value: ""
      });
   }

   render() {
      return (
         <div className={"contact"}>
            <form onSubmit={this.handleSubmit}>
               <h3>Write to us</h3>
               <textarea value={this.state.value} onChange={this.handleChange} placeholder={"Enter the message..."}></textarea>
               <button>Send</button>
            </form>
         </div>
      );
   }
}

export default ContactPage;