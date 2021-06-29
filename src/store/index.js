import {createStore} from "vuex";
import coachModule from "./modules/coaches/index.js";
import requestModule from './modules/requestes/index.js';
const store = createStore(
    {
        modules:{
            coaches:coachModule,
            requests:requestModule
        }
    }
);
export default store;