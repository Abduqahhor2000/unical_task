import axios from "axios"

export default async function handler(req, res) {
    if (req.method === 'GET') {
		try {
            const data = await axios.get(`https://api.currencybeacon.com/v1/latest?api_key=${process.env.NEXT_PUBLIC_SECRET_KEY}`)
			return res.status(200).json({...data.data});
		} catch (error) {
			return res.status(400).json(error);
		}
	}
}