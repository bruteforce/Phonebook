
var viewHandler = {
    currentContact : -1,
    initiateApp:function() {
        var list = contactListHandler.getContactList();
        viewHandler.populateSuggestor(list);
        for (var key in list) {
            viewHandler.currentContact = key;
            viewHandler.updateDetailView(key);
            break;
        }

    },

    populateSuggestor:function(list) {

        var listArray = viewHandler.sortContact(list);
        for(var key in listArray)
        viewHandler.updateContactListView(listArray[key]);
        /*Activate Search*/
        $('#contact-list').searchable({
            searchField: '#contact-list-search',
            selector: 'li',
            childSelector: '.col-xs-12',
            show: function( elem ) {
                elem.slideDown(100);
            },
            hide: function( elem ) {
                elem.slideUp( 100 );
            }
        })
    },

    sortContact:function(list){
        var listArray =[];
        for(var key in list)
        {
            if(viewHandler.currentContact == -1)
                viewHandler.currentContact=key;
            listArray.push(list[key]);
        }
        listArray.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
        });
        return listArray;
    },

    editContact : function(){
        var contact = contactListHandler.getContact(viewHandler.currentContact);
        document.getElementById("name").value = contact.name;
        document.getElementById("surname").value = contact.surname;
        document.getElementById("mobile").value = contact.mobile_home;
        document.getElementById("email").value = contact.emailID;
        document.getElementById("address").value = contact.address;
        document.getElementById("mobileOffice").value = contact.mobile_work;
        $('#addressForm').modal('show');
        $('#edit').removeClass('hide');
        $('#submit').addClass('hide');

    },
    deleteContact : function(){
        contactListHandler.deleteContact(viewHandler.currentContact);
        var elem = document.getElementById('list'+viewHandler.currentContact);
        elem.parentNode.removeChild(elem);
        var contact= contactListHandler.getNextContact();
        if(contact === undefined) {
            $('#detailView').addClass('hide');
            return;
        }
        viewHandler.currentContact = contact.id;
        viewHandler.updateDetailView(contact.id);
    },

    updateContact:function()
    {
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var mobile_home = document.getElementById("mobile").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var mobile_work = document.getElementById("mobileOffice").value;
        var contact = new Contact(viewHandler.currentContact,name, surname, mobile_home, email, address, mobile_work);
        contactListHandler.updateContact(contact);
        //viewHandler.updateContactListView(contact);
        //viewHandler.updateDetailView(contact.id);
        location.reload();
    },

    updateDetailView : function(id)
    {
        viewHandler.currentContact = id;
        var contact = contactListHandler.getContact(id);
        document.getElementById("detail_name").innerHTML = contact.name+" "+contact.surname;
        document.getElementById("detail_address").innerHTML  = contact.address;
        document.getElementById("detail_mobile").innerHTML  = contact.mobile_home;
        document.getElementById("detail_email").innerHTML  = contact.emailID;
    },

    addContact:function() {
        $('#detailView').removeClass('hide');
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var mobile_home = document.getElementById("mobile").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var mobile_work = document.getElementById("mobileOffice").value;
        var contact = new Contact(-1, name, surname, mobile_home, email, address, mobile_work);
        contactListHandler.addContact(contact);
        //viewHandler.updateContactListView(contact);
        //viewHandler.updateDetailView(contact.id);
        location.reload();
    },

    updateContactListView:function(contact) {
        $('#list'+contact.id).remove();
        var contactHtml = "";
        contactHtml +='<li id="list'+contact.id+'" class="list-group-item" onclick="viewHandler.updateDetailView('+contact.id+')">'
        contactHtml +='    <div class="col-xs-12 col-sm-3">'
        contactHtml +='    <img src="http://www.pixelwebdesign.in/images/thumb.png" alt="'+contact.name+' '+contact.surname+'" class="img-responsive img-circle" />'
        contactHtml +='    </div>'
        contactHtml +='    <div class="col-xs-12 col-sm-9">'
        contactHtml +='    <span class="name">'+contact.name+' '+contact.surname+'</span><br/>'
        contactHtml +='<span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="'+contact.address+'"></span>'
        contactHtml +='    <span class="visible-xs"> <span class="text-muted">'+contact.address+'</span><br/></span>'
        contactHtml +='<span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="'+contact.mobile_home+'"></span>'
        contactHtml +='    <span class="visible-xs"> <span class="text-muted">'+contact.mobile_home+'</span><br/></span>'
        contactHtml +='<span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="'+contact.emailID+'"></span>'
        contactHtml +='    <span class="visible-xs"> <span class="text-muted">'+contact.emailID+'</span><br/></span>'
        contactHtml +='</div>'
        contactHtml +='<div class="clearfix"></div>'
        contactHtml +='</li>'
        $('#contact-list').append(contactHtml);
    },


}
