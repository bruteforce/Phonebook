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

/*Handler for CRUD operations on contact list*/
var contactListHandler = (function(){
    var id;
    var contactList;
    function createContactList()
    {
        if(localStorage["contactList"] == undefined) {
            return {};
        }
        else
        {
            return JSON.parse(localStorage["contactList"]);
        }
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
    function getList()
    {
        return JSON.parse(localStorage["contactList"]);
    }
    function addToList(contact)
    {
        contactList[contact.id]=(contact);
        localStorage.setItem('contactList',JSON.stringify(contactList));
    }
    function deleteFromList(id)
    {
        delete contactList[id];
        localStorage.setItem('contactList',JSON.stringify(contactList));
    }
    function getContact(id)
    {
        return JSON.parse(localStorage["contactList"])[id];
    }
    return {
        deleteContact : function(id) {
            deleteFromList(id);
        },
        addContact : function(contact) {
            if (!contactList) {
                contactList = createContactList();
            }
            addToList(contact);

        },
        getContactList : function() {
            return getList();
        },
        getContact : function(id){
            return getContact(id);
        },
        getId : function(){
            return getID();
        }
    }
})();

