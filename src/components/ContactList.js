function ContactList (props) {
    const {contactList} = props

    return (
        <div class="flex-container">
            <div class="persondiv">
                <img class="pic" src={contactList.picture.medium}/>
                
            </div>
            <div class="persondiv wow">
                <p>{contactList.name.first} {contactList.name.last}</p>
                <p>Home: {contactList.phone}</p>
                <p>Mobile: {contactList.cell}</p>

            </div>

        </div>
        
    )
}
export default ContactList;