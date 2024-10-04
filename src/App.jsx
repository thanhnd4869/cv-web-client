import { useEffect } from 'react';
import { AOS } from 'aos';

import RouterLinks from './router/RouterLinks';

import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <>
            <RouterLinks />
        </>
    );
}

export default App;
