const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// // Sends info to the server upon request from GalleryItem.js
// // Flips description status to the opposite of its current state
// router.put('/descriptionStatus/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.descriptionStatus = !galleryItem.descriptionStatus
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;