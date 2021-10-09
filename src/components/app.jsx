import React from "react";
import Header from "./header";
import Footer from "./footer";
// import Notes from "./notes";
import Card from "./cards";

import contacts from "../contacts";

function createCards(contact){
    return(
        <Card 
            key = {contact.id}
            name = {contact.name}
            phone = {contact.phone}
            email = {contact.email}
        />
    )
}

function App(){
    return (
        <div>
            <Header />
            {/* <Notes /> */}
            <div className="card-layout">
                {contacts.map(createCards)}
            </div>
            <Footer />
        </div>
    )
}

export default App