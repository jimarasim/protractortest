module.exports = {
    getCurrentDateInMMDDYYYY: function (daysToAdd) {
        var today = new Date();
        if(daysToAdd !== null && !isNaN(daysToAdd) && daysToAdd > 0) {
            today.setDate(today.getDate() + daysToAdd);
        }
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd;
        } 

        if(mm<10) {
            mm = '0'+mm;
        } 

        return mm + '/' + dd + '/' + yyyy;
    }
};

