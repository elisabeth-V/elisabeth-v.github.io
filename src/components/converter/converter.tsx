import React, { useEffect,useState } from "react";
import './Converter.scss';
import { LabelsProps , selectedCountryProps } from "../data/interfaces";

const Converter = ({loadingMessage, errorMessage} : LabelsProps) => {
    const [isLoading, setIsLoading] = useState<boolean>();
    const [isError, setIsError] = useState<boolean>(false);
    const [loadOverall, setOverall] = useState<any>([]);
    const [CurrencyCountryCode, setCurrencyCountryCode] = useState<any>([]);
    const [exchangeRatesbyCountry, setExchangeRatesbyCountry] = useState<any>([]);
    const [convertFromCurrency, setconvertFromCurrency] = useState('');
    const [convertToCurrency, setconvertToCurrency] = useState('');
    const [lastUpdate,setLastUpdate] = useState<any>();
    const [lastUpdateDateFormatting,setLastUpdateDateFormatting ] = useState<any>();
    const [lastUpdateTimeFormatting,setLastUpdateTimeFormatting ] = useState<any>(); 
    const [convertedValue,setconvertedValue ] = useState<any>('');

    const fetchDataConversion = () =>{
        setIsLoading(true);
        fetch('https://open.er-api.com/v6/latest/USD')
        .then(res => res.json())
        .then(
            (response) => { 
                setIsLoading(false);
                setExchangeRatesbyCountry(response.rates);
                setLastUpdate(response.time_last_update_unix);
                let CountryCode = Object.keys(response.rates);
                let entries = Object.entries(response.rates);
                setCurrencyCountryCode(CountryCode);
                setOverall(entries);
            },
            (error) => {
                setIsLoading(false);
                setIsError(error);
            }
        );
    }
    
    //use of the useeffect hook to prevent the function to be called over and over because of re render
    useEffect(() => {
        fetchDataConversion();
    },[]);

    const renderCurrencyCompleteList = () => {
        const ratingList = [];
        for (const countries of loadOverall) {
          ratingList.push(<li key={countries[0]}>{countries[0]} : {countries[1]}</li>);
        }
        return <ul className="list-5-col">{ratingList}</ul>;
    };

    const displayLastUpdate = () => {
        let date = new Date(lastUpdate * 1000);
        let dateformat = date.toDateString();
        let timeformat = date.toTimeString();
        setLastUpdateDateFormatting(dateformat);
        setLastUpdateTimeFormatting(timeformat);
    }

    useEffect(() => {
        displayLastUpdate();
    },[lastUpdate]);

    const selectedCountry = (event : selectedCountryProps) => {
        //remove values when new conversion request
        if(convertFromCurrency && convertToCurrency){
            setconvertFromCurrency('');
            setconvertToCurrency('');
            setconvertedValue('');
        }
        const selectedValue = event.currentTarget.textContent;
        let listType = event.currentTarget.parentElement.getAttribute('data-convert-origin');
        listType === "from-currency" ? setconvertFromCurrency(selectedValue) : setconvertToCurrency(selectedValue);
    } 

    const renderCountryList = CurrencyCountryCode.map((country: string) =>
        <li key={`id-${country}`} onClick={selectedCountry}>
            {country}
        </li>
    )

    /*calculation for any conversion based on USD rate
      if 1 dollar is 0.92 eur and 0.78 GBP how much is 1 euros in pounds
      value 1 (rate USD base 1), divided b value 2 (value of chosen currency for 1 dollar), times value 3 (value of chosen currency for 1 dollar);
      example for 1 euro to GBP (1 / 0.93) * 0.78;
    */
    const conversionCalc = () => {
        /* notation to get a JSON value from a variable value: [] instead of "." 
          ie : myjson.myEl will look for the value of myEl inside the json but lets say let myEl = 'mykey'
          by doing myjson[myEl] it will look for the value of mykey inside json.
        */
        let calc = 1 / exchangeRatesbyCountry[convertFromCurrency] * exchangeRatesbyCountry[convertToCurrency];
        setconvertedValue(calc);
    }

    return(
        <>
            {isLoading && 
                <p className="loadingMessage">{loadingMessage}</p>
            }
            {isError &&
                <p className="errorMessage">{errorMessage}</p>
            }
            <div>   
                <h1>Currency Converter</h1>
                <div className="converterWrp">
                    <p className="conversionValues">
                        FROM: <span className='bold'>{convertFromCurrency} </span>
                        TO: <span className='bold'>{convertToCurrency}</span> 
                    </p>
                    
                    <div className="buttonConversion" onClick={conversionCalc} >CONVERT</div>
                    
                    {convertToCurrency && convertFromCurrency && convertedValue &&
                        <>
                            <div className="conversionRes">1 {convertFromCurrency} = {convertedValue} {convertToCurrency}</div>
                            <p className="conversionDataUpdate">Last Data Update: {lastUpdateDateFormatting} at {lastUpdateTimeFormatting}</p>
                        </>
                    }
                </div>

                <div className="countryListWrp">
                    <div>
                        <p>Select Rates from</p>
                        <ul className="countryList" data-convert-origin="from-currency">
                            {renderCountryList}
                        </ul>
                    </div>
                    <div>
                    <p>Select Rates to</p>
                        <ul className="countryList" data-convert-origin="to-currency">
                            {renderCountryList}
                        </ul>
                    </div>
                </div>
            </div>
            <h2>Rating List</h2>
            <div>{renderCurrencyCompleteList()}</div>
        </>
    )
}

export default Converter;