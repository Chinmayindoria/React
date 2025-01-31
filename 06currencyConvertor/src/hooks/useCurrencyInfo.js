import {useEffect , useState} from 'react'



function useCurrencyInfo(currency){
    const [data , setData] = useState({});
    let a = 'conversion_rates';
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/52cf244b480542b84f1a9433/latest/${currency}`)
        .then((res) => {
            console.log(res); return res.json()})
        .then((res) => {
            console.log(res[a]);
            return setData(res[a])})
        console.log(data)
    } , [currency])

    return data;
}

export default useCurrencyInfo;