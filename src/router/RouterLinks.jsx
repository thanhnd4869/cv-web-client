import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouterLinks = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<></>} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RouterLinks;
