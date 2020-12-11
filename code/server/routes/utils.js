const Propertie = require('../models/Propertie')
const Partner = require('../models/Partner')

const propertieSchema = require('../middleware/schema/propertie')
const partnerSchema = require('../middleware/schema/partner')

const sameQueries = [{
    name: { singular: 'propertie', plural: 'properties' },
    model: Propertie,
    schema: propertieSchema.admin.propertie
},
{
    name: { singular: 'partner', plural: 'partners' },
    model: Partner,
    schema: partnerSchema.admin.partner
}]

module.exports = sameQueries