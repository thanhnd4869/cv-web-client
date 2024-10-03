import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import CustomCursor from '../CustomCursor/CustomCursor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Preloader from '../Preloader/Preloader';

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <div>
                    <CustomCursor />
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            )}
        </>
    );
};
export default Layout;
