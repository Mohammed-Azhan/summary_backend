
const { default: axios } = require('axios');
require('dotenv').config();

const lsqyConfig = {
    API_KEY: process.env.LEMONSQUEEZY_API_KEY,
    URL: "https://api.lemonsqueezy.com/v1"
}

const headers = {
    Accept: 'application/vnd.api+json',
    "Content-Type": 'application/vnd.api+json',
    Authorization: `Bearer ${lsqyConfig.API_KEY}`,
}



const getProducts = async (req, res) => {
    try {
        console.log("route hit");
        const response = await axios.get(`${lsqyConfig.URL}/products`, {
            headers: headers,
            timeout: 10000
        })
        const price = response.data.data[0].attributes.price_formatted;
        const buy_now_url = response.data.data[0].attributes.buy_now_url;
        res.json({price, buy_now_url})
    }
    catch (error) {
        console.log(error);
        res.json({status : false,});
    }

}

module.exports = { getProducts };