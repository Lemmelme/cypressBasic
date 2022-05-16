import { pageTest } from '../tests_modules/mainPage';
import {searchForProducts_Positive} from "../tests_modules/mainPage";


describe('Automation', () => {
    pageTest();
    searchForProducts_Positive('Hoodie', 'Showing all', 4, 1)
})

