import classes from '@/styles/blogDetails.module.scss';
import { Form } from 'react-bootstrap';

function BlogSearch() {
    return (
        <div className={`${classes.bdSideBox}`}>
            <h2 className={`${classes.bdSideTitle}`}>Search Here</h2>
            <div className={`${classes.bdSearch}`}>
                <Form.Control type="text" id="search" placeholder="Search" />
                <button type="button" className="btn btn-orange">
                    {/* <FaMagnifyingGlass /> */}
                </button>
            </div>
        </div>
    );
}

export default BlogSearch;
