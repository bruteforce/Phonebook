/**
 * Created by quikr on 19/12/15.
 */


function Contact(name,surname,mobile_home,email,address,mobile_work)  /*Model For contact*/
{
    this.id = contactListHandler.getId();
    this.name = name;
    this.surname = surname;
    this.mobile_home = mobile_home;
    this.emailID = email;
    this.address = address;
    this.mobile_work = mobile_work;
}


var contactListHandler = (function(){
    var id;
    var contactList;
    function createContactList()
    {
        return [];
    }
    function getID()
    {
        if(id===undefined)
        {
            id=1;
        }
        else {
            id = id + 1;
        }
        return id;
    }
    return {
        addContact : function(contact) {
            if (!contactList) {
                contactList = createContactList();
            }
            contactList.push(contact);
        },
        getContactList : function(name) {
            return contactList;
        },
        getId : function(){
            return getID();
        }
    }
})();

