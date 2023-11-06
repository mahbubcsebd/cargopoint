import Banner from '@/components/Banner';
import Blogs from '@/components/blog/Blogs';

export const metadata = {
    title: 'Logistic | Blog',
};

function Blog() {
    return (
        <div id="blog-page" className="blog-page">
            <div className="blog-page-area">
                <Banner text="Blog" title="Our Latest Blog" />
                <Blogs />
            </div>
        </div>
    );
}

export default Blog;
