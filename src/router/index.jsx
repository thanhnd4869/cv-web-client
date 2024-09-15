import { BrowserRouter, Route, Routes } from 'react-router-dom';

const RouterLinks = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<Layout />}> */}
                        {/* <Route index element={<Home />} /> */}
                        {/* <Route path="home-v3" element={<Home3 />} /> */}
                        {/* <Route path="home-v4" element={<Home4 />} /> */}
                        {/* <Route path="*" element={<Page404 />} /> */}
                        {/* <Route path="blog/blog-details" element={<BlogDetails />} /> */}
                    {/* </Route> */}
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RouterLinks;
