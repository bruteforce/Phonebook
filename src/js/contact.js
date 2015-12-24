/**
 * Created by quikr on 19/12/15.
 */

/*Model For contact*/
function Contact(id,name,surname,mobile_home,email,address,mobile_work)
{
    if(parseInt(id) !== -1) this.id = id;
    else this.id = contactListHandler.getId();
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
        if(localStorage["contactList"]=== undefined)
            return 1;
        contactList= JSON.parse(localStorage["contactList"]);
        for (var key in contactList) {
            id=key;
        }

        return parseInt(id)+1;
    }
    function getList()
    {
        if(localStorage["contactList"]=== undefined)
        return {};
        return JSON.parse(localStorage["contactList"]);
    }
    function addToList(contact)
    {
        contactList[contact.id]=(contact);
        localStorage.setItem('contactList',JSON.stringify(contactList));
    }
    function deleteFromList(id)
    {
        contactList = JSON.parse(localStorage["contactList"]);
        delete contactList[id];
        localStorage.setItem('contactList',JSON.stringify(contactList));
    }
    function getContact(id)
    {
        return JSON.parse(localStorage["contactList"])[id];
    }
    function updateContact(contact)
    {
        contactList= JSON.parse(localStorage["contactList"]);
        contactList[contact.id] = contact;
        localStorage.setItem('contactList',JSON.stringify(contactList));
    }
    function getNextContact()
    {
        contactList= JSON.parse(localStorage["contactList"]);
        for (var key in contactList) {
            return contactList[key];
        }
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
        },
        updateContact : function(contact){
            return updateContact(contact);
        },
        getNextContact: function()
        {
            return getNextContact();

        }
    }
})();

