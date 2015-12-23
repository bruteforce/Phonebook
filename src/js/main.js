
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
        var name = document.getElementById("name").value;
        var surname = document.getElementById("surname").value;
        var mobile_home = document.getElementById("mobile").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var mobile_work = document.getElementById("mobileOffice").value;
        var contact = new Contact(name, surname, mobile_home, email, address, mobile_work);
        contactListHandler.addContact(contact);
        viewHandler.updateContactListView(contact);
    },

    updateContactListView:function(contact) {
        var contactHtml = "";
        contactHtml +='<li class="list-group-item">'
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

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('a[href="#addressForm"]').on('click', function(event) {
        event.preventDefault();
        $('#addressForm').modal('show');
    })

    $('[data-command="toggle-search"]').on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('hide-search');

        if ($(this).hasClass('hide-search')) {
            $('.c-search').closest('.row').slideUp(100);
        }else{
            $('.c-search').closest('.row').slideDown(100);
        }
    })

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
});
