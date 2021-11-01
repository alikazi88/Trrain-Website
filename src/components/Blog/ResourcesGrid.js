import React from 'react';
import Blogrightsidebar from './Blogrightsidebar';
import ResourcesGridItem from './ResourcesGridItem';
import ServiceData from '../Service/ServiceData';

const ResourcesGrid =()=>{
    return(
        <section className="blog_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 blog_grid_info">
                        <div className="row">
                            <ResourcesGridItem date="14" month="jan" image="blog_grid_1.jpg" Title="Why I say old chap that is."/>
                            <ResourcesGridItem date="15" month="Apr" image="blog_grid_2.jpg" Title="Oxford bum bag gutted."/>
                            <ResourcesGridItem date="10" month="jan" image="blog_grid_3.jpg" Title="Kell at public school chee."/>
                            <ResourcesGridItem date="7" month="Apr" image="blog_grid_4.jpg" Title="Oxford bum bag gutted."/>
                            <ResourcesGridItem date="14" month="jan" image="blog_grid_5.jpg" Title="Why I say old chap that is."/>
                            <ResourcesGridItem date="15" month="Apr" image="blog_grid_6.jpg" Title="Oxford bum bag gutted."/>
                            <ResourcesGridItem date="10" month="jan" image="blog_grid_7.jpg" Title="Kell at public school chee." />
                            <ResourcesGridItem date="7" month="Apr" image="blog_grid_8.jpg" Title="Oxford bum bag gutted."/>
                        </div>
                        <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
                            <li><span aria-current="page" className="page-numbers current">1</span></li>
                            <li><a className="page-numbers" href=".#">2</a></li>
                            <li><a className="next page-numbers" href=".#"><i className="ti-arrow-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResourcesGrid;