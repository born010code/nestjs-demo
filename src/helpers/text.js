
module.exports = {
    isEmpty: function(data) {
        if (
            typeof data === 'undefined' || 
            data == null || 
            (data).toString().trim() == '' || 
            data == {}
        )
            return true;

        return false;
    },
}