import axios, {AxiosResponse} from "axios";

const getExchangeRates = (): Promise<AxiosResponse> => axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');

export default getExchangeRates;