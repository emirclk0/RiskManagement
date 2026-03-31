const cds = require('@sap/cds')

module.exports = cds.service.impl(async function () {
    const bpSrv = await cds.connect.to('API_BUSINESS_PARTNER')

    const { A_BusinessPartner } = this.entities
    
    this.on('READ', 'A_BusinessPartner', async (req) => {
        return bpSrv.run(req.query)
    })

})