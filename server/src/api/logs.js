const { Router } = require('express');
const { getLogs, postLogs } = require('../controllers/logControllers');

const router = Router();

router.route('/').get(getLogs).post(postLogs);

module.exports = router;
