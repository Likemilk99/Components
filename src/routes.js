import Dishes from "./components/Dishes";
import DefaultPage from "./pages/DefaultPage";
import Dish from "./components/Dish";
import Header from "./components/Header";

const routes = [
    { path: '/', component: DefaultPage },
    { path: '/dishes', component: Dishes, name: 'dishes', props: true},
    { path: '/dish', component: Dish, name: 'dish' },
    { path: '/header', component: Header, name: 'header' }
];

export default routes;