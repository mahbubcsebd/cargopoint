'use client';

import Image from 'next/image';
import classes from '../../styles/testimonial.module.scss';

function SingleTestimonial(props) {
    const { id, author, img, post, text } = props;
    return (
        <div key={id} className={`${classes.singleTestimonial}`}>
            <p className={`${classes.testimonialText} text`}>“{text}”</p>
            <div className={`${classes.testimonialAuthor}`}>
                <div>
                    <div className={`${classes.authorImg}`}>
                        <Image src={img} alt={img} />
                    </div>
                </div>
                <div className={`${classes.authorText}`}>
                    <h4 className={`${classes.authorName}`}>{author}</h4>
                    <p className={`${classes.authorDesignation}`}>{post}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleTestimonial;
