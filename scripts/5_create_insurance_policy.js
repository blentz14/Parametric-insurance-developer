const MarineInsurance = artifacts.require('MarineInsurance')
require('dotenv').config();

const { addDays } = require('../utils.js')

module.exports = async callback => {
    try {
        const mc = process.env.CONTRACT_ADDRESS ?
            await MarineInsurance.at(process.env.CONTRACT_ADDRESS) :
            await MarineInsurance.deployed()

        const tx = await mc.registerInsurancePolicy(
            {dwellingValue: 123952035},
            {lat: "12.514706", lng: "-9.912506"},
            Math.floor(Date.now() / 1000),
            Math.floor(addDays(Date.now(), 10)  / 1000),
            { value: 100 }
        )
        callback(tx.tx)
    } catch (err) {
        callback(err)
    }
}


