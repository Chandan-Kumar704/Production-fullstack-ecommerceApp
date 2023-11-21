const express = require('express');
const UserModel = require('../model/UserModel');
const router= express();


router.get('/getUsers',async(req,res)=>{

    UserModel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))     //ctrl
})




module.exports= router;



// const express = require('express');
// const UserModel = require('../model/UserModel');
// const router = express.Router();

// router.get('/getUsers/:id', async (req, res) => {
//     const userId = req.params.id;
//     try {
//         const user = await UserModel.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.json(user);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Error fetching user' });
//     }
// });

// module.exports = router;
