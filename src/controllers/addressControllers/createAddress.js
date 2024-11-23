const {Address} = require("../../models/address.js");
require("../../models/associations.js");

async function createAddress(req, res) {
    try {
        const { addressStreet, addressNumber, city, postalCode, personregisterid } = req.body;
        const newAddress = await Address.create({
            addressStreet,
            addressNumber,
            city,
            postalCode,
            personregisterid
        });
        res.status(201).json(newAddress);
    } catch (err) {
        res.status(500).json({ Error: "Error creating address", details: err.message });
    };
};

module.exports = {
    createAddress
}