import { pageTest } from '../tests_modules/mainPage';
import {searchForProducts_Positive} from "../tests_modules/mainPage";
import {BarItemsTests} from "../tests_modules/mainPage"


describe('Automation', () => {

    BarItemsTests('Men');
    BarItemsTests('Accessories');
    BarItemsTests('BlaBla');//this test will fail
    pageTest();
    searchForProducts_Positive('Hoodie', 'Showing all', 4, 1)
})

