import Link from 'next/link';
import { ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type MarketingBannerProps = ComponentProps & {
}

const MarketingBanner = (props: MarketingBannerProps): JSX.Element => {
    return (
        <section class="slide-in-right-animation SectionGenericBlockItem-SlickSliderBlock section-padding section-padding-none in-view">
            <div class="container-npm">
                <div class="row no-gutters">
                    <div class="col-lg-12">
                        <div class="slick-slider-block full-width-slider slick-initialized slick-slider" id="slick-slider-block-0" data-slides-to-show="1" data-slides-arrows="1" data-slides-to-scroll="1" data-slides-autoplay="1" data-slides-autoplay-speed="" style={{marginBottom: 0}}>
                            <div aria-live="polite" class="slick-list draggable" tabindex="0" style={{height: 1060}}>
                                <div class="slick-track" style={{opacity: 1, width: 2543 }}>
                                    <div class="slick-slide slick-active" data-slick-index="0" aria-hidden="false" style={{width: 2543}}>
                                        <div class="banner-home-wrap-buttons customized no-btn-hover">
                                            <img src="//humber.ca/assets/images/continuous-professional-learning/CPL_TopBanner_1920x800.jpg" width="1920" height="800" />
                                            <div class="buttons">
                                                <div class="inner-wrap">
                                                    <h1 style={{color: "black"}}>Get a recognized marketing degree from the most connected college in Canada.</h1>
                                                    <div class="bottom-links-wrp">
                                                        <a class="btn" style={{backgroundColor: '#004b78', color: '#fff'}} href="continuous-professional-learning/programs.html">Program Duration<span class="wsnw">&nbsp;</span></a> 
                                                        <a class="btn" style={{backgroundColor: '#004b78', color: '#fff'}}  href="continuous-professional-learning/courses.html">Fees & Financial Resources<span class="wsnw">&nbsp;</span></a> 
                                                        <a class="btn" style={{backgroundColor: '#004b78', color: '#fff'}}  href="continuous-professional-learning/micro-credentials.html">Language Requirements<span class="wsnw">&nbsp;</span></a>
                                                    </div>
                                                    <p><strong>Learn more about all <a class="btn btn-plain p-0 mt-0" style={{color: '#005173'}} href="continuous-professional-learning/search-all.html">professional learning options.</a></strong></p>
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