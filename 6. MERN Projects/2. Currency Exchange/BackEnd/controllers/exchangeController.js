const exchangeRateService = require('../services/exchangeRateService');

exports.convertCurrecy = async(req,res,next) => {
    try{
        const{amount,sourceCurrency,targetCurrency} = req.body;

        if(!amount || !sourceCurrency || !targetCurrency){
            return res.status(400).json({
                error: 'Missing required parameters'
            });
        }

        const convertedAmount = exchangeRateService.convertCurrecy(
            parseFloat(amount),
            sourceCurrency.toUpperCase(),
            targetCurrency.toUpperCase()
        );

        res.json({
            success:true,
            result:{
                amount: parseFloat(amount),
                sourceCurrency,
                targetCurrency,
                convertedAmount: Number(convertedAmount.toFixed(2))
            }
        });
    } catch(error){
        next(error);
    }
};