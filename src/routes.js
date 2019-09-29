import Dishes from "./components/Dishes";
import DefaultPage from "./pages/DefaultPage";
import Dish from "./components/Dish";

const routes = [
    { path: '/', component: DefaultPage },
    { path: '/dishes', component: Dishes, name: 'dishes', props: true},
    { path: '/dish', component: Dish, name: 'dish' }
];

export default routes;