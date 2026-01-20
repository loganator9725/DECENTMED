import { Route } from 'react-router-dom';
import Fen from '../pages/blogs/fenbendazole';
import Ivermectin from '../pages/blogs/ivermectin';
import Hoxsey from '../pages/blogs/hoxsey';
import Blog21 from '../pages/blogs/blog21';
import Blog5 from '../pages/blogs/blog5';
import Bitcoin from '../pages/blogs/bitcoin';
import Blog8 from '../pages/blogs/blog8';
import Blog7 from '../pages/blogs/blog7';
import Blog9 from '../pages/blogs/blog9';
import Blog20 from '../pages/blogs/blog20';
import Blog16 from '../pages/blogs/blog16';
import Blog1 from '../pages/blogs/blog1';
import BlogAcu from '../pages/blogs/blogacu';
import Mike from '../pages/blogs/mike';
import Blog18 from '../pages/blogs/blog18';
import Blog12 from '../pages/blogs/blog12';
import Blog14 from '../pages/blogs/blog14';
import Blog17 from '../pages/blogs/blog17';
import Blog2 from '../pages/blogs/blog2';
import Blog6 from '../pages/blogs/cancer';
import Blog10 from '../pages/blogs/blog10';
import Blog19 from '../pages/blogs/blog19';
import Ramona from '../pages/blogs/ramona';
import Blog3 from '../pages/blogs/blog3';
import Blog4 from '../pages/blogs/blog4';

export const BlogRoutes = ({ t }) => (
    <>
        <Route path="/acupuncture-for-migraines" element={<Blog21 t={t} />} />
        <Route path="/acupuncture-for-carpal-tunnel" element={<BlogAcu t={t} />} />
        <Route path="/can-back-pain-cause-constipation" element={<Blog1 t={t} />} />
        <Route path="/bitcoin" element={<Blog17 t={t} />} />
        <Route path="/blog18" element={<Blog18 t={t} />} />
        <Route path="/dry-needling-vs-acupuncture" element={<Blog2 t={t} />} />
        <Route path="/detox-cleanse" element={<Blog3 t={t} />} />
        <Route path="/cellular-regeneration" element={<Blog4 t={t} />} />
        <Route path="/ramona" element={<Ramona t={t} />} />
        <Route path="/tcnh" element={<Blog19 t={t} />} />
        <Route path="/acupuncture-cost" element={<Blog20 t={t} />} />
        <Route path="/cancer" element={<Blog6 t={t} />} />
        <Route path="/acupuncture-defined" element={<Blog5 t={t} />} />
        <Route path="/what-is-bitcoin" element={<Bitcoin t={t} />} />
        <Route path="/ivermectin" element={<Ivermectin t={t} />} />
        <Route path="/hoxsey" element={<Hoxsey t={t} />} />
        <Route path="/fenbendazole" element={<Fen t={t} />} />
        <Route path="/hepatitis-B-specialists" element={<Blog8 t={t} />} />
        <Route path="/value-of-nutrition" element={<Blog9 t={t} />} />
        <Route path="/rose-oil" element={<Blog16 t={t} />} />
        <Route path="/cancer-prevention" element={<Blog10 t={t} />} />
        <Route path="/acupuncture-montreal" element={<Blog12 t={t} />} />
        <Route path="/benefits-of-chiropractic" element={<Blog14 t={t} />} />
        <Route path="/batana-oil" element={<Blog7 t={t} />} />
        <Route path="/naturopathylane" element={<Mike t={t} />} />
    </>
);