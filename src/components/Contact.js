import "../styles/contact.css";
import { Card } from "./Card"



export const Contact= () => {
    return (
        <div className="contactDisplay">
            <Card name="CONTACT PAGE"/> 
            <h1 className="contact_header">Provide Contact Information For Connection</h1>
            
             <div className="row">
             <div className="col1">
                 <label>First Name</label>
             </div>
             <div className="col2">
                 <input type="text" placeholder="Your First Name" className="col3"/>
             </div>
             </div>
             
             <div className="row">
             <div className="col1">
                 <label>Last Name</label>
             </div>
             <div className="col2">
                 <input type="text" placeholder="Your Last Name" className="col3"/>
             </div>
             </div>

             <div className="row">
             <div className="col1">
                 <label>Email</label>
             </div>
             <div className="col2">
                 <input type="email" placeholder="Enter your email" className="col3"/>
             </div>
             </div>

             <div className="row">
             <div className="col1">
                 <label>Message</label>
             </div>
             <div className="col2">
                 <textarea placeholder="Enter your message" className="col4"></textarea>
             </div>
             </div>

             <button className="contact_form_button">Confirm</button>
        <div className="Contact Footer">
             <footer className="footer">&copy;The Cake World, All Rights Reserved</footer> 
        </div>
     </div>
         
    
        )
}

