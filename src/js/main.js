var viewHandler = {
    initiateApp:function() {
        populateSuggestor();
    },

    populateSuggestor:function() {
        var suggesionListHtml = "";
        var miniList = contactListHandler.getminiList();
        for (var contact in miniList) {
            suggesionListHtml += '<option onclick="handleContactSelection(' + contact + ')"   value="' + miniList[contact] + '" />';
        }
        document.getElementById('contactList').innerHTML = suggesionListHtml;
    },


     handleContactSelection:function(contact) {
        populateUserDetails(contactListHandler);

    },


     addContact:function() {
        var name = document.getElementById("inputFirstName").value;
        var surname = document.getElementById("inputLastName").value;
        var mobile_home = document.getElementById("inputMobileHome").value;
        var email = document.getElementById("inputEmail").value;
        var address = document.getElementById("inputAddress").value;
        var mobile_work = document.getElementById("inputMobileOffice").value;
        var contact = new Contact(name, surname, mobile_home, email, address, mobile_work);
        contactListHandler.addContact(contact);
        viewHandler.updateContactListView(contact);
    },

     updateContactListView:function(contact) {
        var contactHtml = "";
        contactHtml = '<div class="list-group-item active" >';
        contactHtml += '<div class="row-picture">';
        contactHtml += '<img class="circle" src="http://lorempixel.com/56/56/people/1" alt="icon">';
        contactHtml += '</div>';
        contactHtml += '<div class="row-content">';
        contactHtml += '<h4 class="list-group-item-heading">' + contact.name + ' ' + contact.surname + '</h4>';
        contactHtml += '</div>';
        contactHtml += '</div>';
        contactHtml += '<div class="list-group-separator"></div>';
        document.getElementsByClassName("list-group").innerHTML=contactHtml;
    },

    cancelAddContact:function() {
        document.getElementById("addcontactSection").style.display = 'none';
    },


    openAddContactForm:function() {
        document.getElementById("addcontactSection").style.display = 'block';
    },

    openEditContactForm : function(){
        document.getElementById("addcontactSection").style.display = 'block';
    },

    reloadContacts:function() {

    }

}

