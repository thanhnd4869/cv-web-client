import { useEffect } from 'react';
import Aos from 'aos';

import RouterLinks from './router/RouterLinks';

import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        Aos.init({ once: true });
    }, []);

    return (
        <>
            <RouterLinks />
        </>
    );
}

export default App;
