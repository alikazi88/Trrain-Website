import React from 'react';
import CustomNavbarSec from '../components/CustomNavbarSec';
import FooterData from '../components/Footer/FooterData';
import BlogGrid from '../components/Blog/BlogGrid'
import FooterSecurity from '../components/Footer/FooterSecurity';

const Blog = () => {
    return(
        <div className="body_wrapper">
          <CustomNavbarSec nClass="m-auto"
        hbtnClass="new_btn"/>
            <BlogGrid/>
            <FooterSecurity FooterData={FooterData}/>
        </div>
    )
}
export default Blog;