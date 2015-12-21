/**
 * Created by quikr on 19/12/15.
 */

var Form = {

    validClass : 'valid',

    fname : {
        minLength : 1,
        maxLength : 15,
        fieldName : 'First Name'
    },

    lname : {
        minLength : 1,
        maxLength : 25,
        fieldName : 'Last Name'
    },


    validateLength : function(formEl, type){
        if(formEl.value.length > type.maxLength || formEl.value.length < type.minLength ){
            formEl.className = formEl.className.replace(' '+Form.validClass, '');
            return false;
        } else {
            if(formEl.className.indexOf(' '+Form.validClass) == -1)
                formEl.className += ' '+Form.validClass;
            return true;
        }
    },


    validateEmail : function(formEl){
        var regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        var emailTest = regEx.test(formEl.value);
        if (emailTest) {
            if(formEl.className.indexOf(' '+Form.validClass) == -1)
                formEl.className += ' '+Form.validClass;
            return true;
        } else {
            formEl.className = formEl.className.replace(' '+Form.validClass, '');
            return false;
        }
    },

    getSubmit : function(formID){
        var inputs = document.getElementById(formID).getElementsByTagName('input');
        for(var i = 0; i < inputs.length; i++){
            if(inputs[i].type == 'submit'){
                return inputs[i];
            }
        }
        return false;
    }

};
