import { Link, Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import { useLocation } from "react-router-dom";

// компонент, в который мы прокидываем элементы меню
// они прокидываются через компонент Outlet
const Layout = () => {
	return (
		<div>
            <Header locationPath={useLocation().pathname}/>
            <Outlet/>
		</div>
	)
}

export {Layout}