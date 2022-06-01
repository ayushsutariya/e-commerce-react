import React from "react";
// import Header from "../../Components/Header/Header";
// import Banner from "../Banner/Banner";
// import Kids from "../Kids/Kids";
// import Women from "../Women/Women";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink } from 'react-router-dom';
import "swiper/css";

function Men(props) {
  return (
    <>
      <section className="section" id="men">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Men's Latest</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-eye" />
                        </NavLink>
                          </li>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-star" />
                        </NavLink>
                          </li>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-shopping-cart" />
                        </NavLink>
                          </li>
                        </ul>
                      </div>
                      <img src="assets/images/men-01.jpg" alt />
                    </div>
                    <div className="down-content">
                      <h4>Classic Spring</h4>
                      <span>$120.00</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-eye" />
                        </NavLink>
                          </li>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-star" />
                        </NavLink>
                          </li>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-shopping-cart" />
                        </NavLink>
                          </li>
                        </ul>
                      </div>
                      <img src="assets/images/men-02.jpg" alt />
                    </div>
                    <div className="down-content">
                      <h4>Air Force 1 X</h4>
                      <span>$90.00</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-eye" />
                        </NavLink>
                          </li>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-star" />
                        </NavLink>
                          </li>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-shopping-cart" />
                        </NavLink>
                          </li>
                        </ul>
                      </div>
                      <img src="assets/images/men-03.jpg" alt />
                    </div>
                    <div className="down-content">
                      <h4>Love Nana ‘20</h4>
                      <span>$150.00</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="item">
                    <div className="thumb">
                      <div className="hover-content">
                        <ul>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-eye" />
                        </NavLink>
                          </li>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-star" />
                        </NavLink>
                          </li>
                          <li>
                          <NavLink to={"/SingleProduct"} className="navlink scrollto">
                          <i className="fa fa-shopping-cart" />
                        </NavLink>
                          </li>
                        </ul>
                      </div>
                      <img src="assets/images/men-01.jpg" alt />
                    </div>
                    <div className="down-content">
                      <h4>Classic Spring</h4>
                      <span>$120.00</span>
                      <ul className="stars">
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                        <li>
                          <i className="fa fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Men;
