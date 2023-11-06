import classes from '@/styles/blogDetails.module.scss';
import Link from 'next/link';

function BlogCategory() {
    return (
        <div className={`${classes.bdSideBox}`}>
            <h2 className={`${classes.bdSideTitle}`}>Categories</h2>
            <ul className={`${classes.catCollection}`}>
                <li>
                    <Link href="#">
                        Road Freight <span>(3)</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Ocean Freight <span>(7)</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Air Freight <span>(6)</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Warehousing <span>(2)</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Train Freight <span>(8)</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        Inventory Manage <span>(1)</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default BlogCategory;
