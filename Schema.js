var mongoose = require('mongoose');
var AddressSchema = mongoose.Schema({
    fullname: {
        type: String,
      
    },

    DOB: {
        type: Date,
        default: Date.now
    },
    Designation: {
        type: String,
       
    },
    salary: {
        line1: {
            type: number
        }
    },
});

var Address = module.exports = mongoose.model('Address', AddressSchema);

module.exports.getDetails = function (callback, limit) {
    Address.find(callback).limit(limit);
};

module.exports.getDetailsById = function (id, callback) {
    Address.findById(id, callback);
};


