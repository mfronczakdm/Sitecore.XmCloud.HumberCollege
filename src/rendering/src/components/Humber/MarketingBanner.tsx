export type MarketingBannerProps = ComponentProps & {
}

const MarketingBanner = (props: MarketingBannerProps): JSX.Element => {
    console.log(props);
    return (
        <section className="slide-in-right-animation SectionGenericBlockItem-SlickSliderBlock section-padding section-padding-none in-view">
            <div className="container-npm">
                <div className="row no-gutters">
                    <div className="col-lg-12">
                        <div className="slick-slider-block full-width-slider slick-initialized slick-slider" id="slick-slider-block-0" data-slides-to-show="1" data-slides-arrows="1" data-slides-to-scroll="1" data-slides-autoplay="1" data-slides-autoplay-speed="" style={{marginBottom: 0}}>
                            <div aria-live="polite" className="slick-list draggable" style={{height: 1060}}>
                                <div className="slick-track" style={{opacity: 1, width: 2543 }}>
                                    <div className="slick-slide slick-active" data-slick-index="0" aria-hidden="false" style={{width: 2543}}>
                                        <div className="banner-home-wrap-buttons customized no-btn-hover">
                                            <img src="//humber.ca/assets/images/continuous-professional-learning/CPL_TopBanner_1920x800.jpg" alt="need to make this editable" width="1920" height="800" />
                                            <div className="buttons">
                                                <div className="inner-wrap">
                                                    <h1 style={{color: "black"}}>Get a recognized marketing degree from the most connected college in Canada.</h1>
                                                    <div className="bottom-links-wrp">
                                                        <a className="btn" style={{backgroundColor: '#004b78', color: '#fff'}} href="continuous-professional-learning/programs.html">Program Duration<span className="wsnw">&nbsp;</span></a> 
                                                        <a className="btn" style={{backgroundColor: '#004b78', color: '#fff'}}  href="continuous-professional-learning/courses.html">Fees & Financial Resources<span className="wsnw">&nbsp;</span></a> 
                                                        <a className="btn" style={{backgroundColor: '#004b78', color: '#fff'}}  href="continuous-professional-learning/micro-credentials.html">Language Requirements<span className="wsnw">&nbsp;</span></a>
                                                    </div>
                                                    <p><strong>Learn more about all <a className="btn btn-plain p-0 mt-0" style={{color: '#005173'}} href="continuous-professional-learning/search-all.html">professional learning options.</a></strong></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export const Default = MarketingBanner;