const express = require('express');
const router = new express.Router();
const cors = require('cors');

const root = require('../controllers/root.js');
const transorder_energy_input = require('../controllers/transorder_energy_input.js');
const piete = require('../controllers/piete.js');
const tip_tranzactii = require('../controllers/tip_tranzactii.js');
const ch_indir = require('../controllers/ch_indir.js');

 
router.route('/')
  .get(root.get);

router.route('/treni')
  .post(transorder_energy_input.get)
  .options(cors());

router.route('/piete')
  .get(piete.get)
  .options(cors());

router.route('/tip_tranzactii')
  .get(tip_tranzactii.get)
  .options(cors());

router.route('/ch_indir')
  .post(ch_indir.get)
  .options(cors());

 
module.exports = router;