const express = require("express");
const { 
    createContact, 
    getAllContacts, 
    getContact, 
    deleteContact, 
    updateContact 
} = require("../controllers/contact.controller.js");

const router = express.Router();

router.post("/createContact", createContact);           // api/contacts/createContact
router.get("/getAllContacts", getAllContacts);          // api/contacts/getAllContacts
router.get("/getContact/:id", getContact);              // api/contacts/getContact/:id
router.delete("/deleteContact/:id", deleteContact);     // api/contacts/deleteContact/:id
router.patch("/updateContact/:id", updateContact);      // api/contacts/updateContact/:id

module.exports = router;