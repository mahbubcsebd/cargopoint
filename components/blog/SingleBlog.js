import { syne } from '@/app/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import classes from '../../styles/blogs.module.scss';

function SingleBlog(props) {
    const { id, title, date, img, tag } = props;
    return (
        <div className={`${classes.singleBlog}`}>
            <Link href={`/blog/${id}`} className={`${classes.blogImgBox}`}>
                <Image src={img} alt="blog-img" className={`${classes.blogImg}`} />
                <p className={`${classes.blogCat}`}>{tag}</p>
            </Link>
            <div className={`${classes.blogContent}`}>
                <p className={`${classes.blogDate}`}>{date}</p>
                <Link href={`/blog/${id}`} className={`${classes.blogTitle} ${syne.className}`}>
                    {title}
                </Link>
                <Link href={`/blog/${id}`} className={`${syne.className} btn-text`}>
                    Explore Now{' '}
                    <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                </Link>
            </div>
        </div>
    );
}

export default SingleBlog;
