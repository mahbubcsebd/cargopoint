import pb1 from '@/public/images/pb-1.png';
import pb2 from '@/public/images/pb-2.png';
import pb3 from '@/public/images/pb-3.png';
import classes from '@/styles/blogDetails.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function BlogPopular() {
    return (
        <div className={`${classes.bdSideBox}`}>
            <h2 className={`${classes.bdSideTitle}`}>Popular Blog</h2>
            <div className={`${classes.popularBlogCollection}`}>
                <div className={`${classes.singlePbList} mb-4`}>
                    <div>
                        <Link href="#" className={`${classes.pbImg}`}>
                            <Image src={pb1} alt="pb" />
                        </Link>
                    </div>
                    <div className={`${classes.pbContent}`}>
                        <p className={`${classes.pbTag}`}>Logistics</p>
                        <Link href="blog-details.html" className={`${classes.pbTitle}`}>
                            The Role of Logistics Crisis Management
                        </Link>
                    </div>
                </div>
                <div className={`${classes.singlePbList} mb-4`}>
                    <div>
                        <Link href="#" className={`${classes.pbImg}`}>
                            <Image src={pb2} alt="pb" />
                        </Link>
                    </div>
                    <div className={`${classes.pbContent}`}>
                        <p className={`${classes.pbTag}`}>Logistics</p>
                        <Link href="blog-details.html" className={`${classes.pbTitle}`}>
                            Logistics and E-commerce: Pairt
                        </Link>
                    </div>
                </div>
                <div className={`${classes.singlePbList} mb-4`}>
                    <div>
                        <Link href="#" className={`${classes.pbImg}`}>
                            <Image src={pb3} alt="pb" />
                        </Link>
                    </div>
                    <div className={`${classes.pbContent}`}>
                        <p className={`${classes.pbTag}`}>Logistics</p>
                        <Link href="blog-details.html" className={`${classes.pbTitle}`}>
                            Navigating the Complexities Supply
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPopular;
