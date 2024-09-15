import { useEffect } from 'react';
import Aos from 'aos';

import RouterLinks from './router';

const App = () => {
    useEffect(() => {
        Aos.init({ once: true });
    }, []);

    return (
        <>
            <RouterLinks></RouterLinks>
        </>
    );
};

export default App;
