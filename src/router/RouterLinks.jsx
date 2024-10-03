import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/Layout/Layout';

const RouterLinks = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {/* <Route index element={<Home />} /> */}
                        {/* <Route path="*" element={<Page404 />} /> */}
                        {/* <Route path="blog/blog-details" element={<BlogDetails />} /> */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RouterLinks;
