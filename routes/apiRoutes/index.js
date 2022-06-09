const router = require("express").Router();
const notesRoutes = require("./routes/apiRoutes/notesRoutes");

router.use(notesRoutes);

module.exports = router;
