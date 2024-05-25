
const Banner02 = () => {
  return (
    <div className="umino-banner_area umino-banner_area-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 img-hover_effect">
            <div className="banner-item">
              <div className="banner-img">
                <a href="">
                  <img
                    className="img-full"
                    src="assets/images/banner/1-6.jpg"
                    alt="Umino's Banner"
                  />
                </a>
              </div>
              <div className="banner-content">
                <span>Living Room Set</span>
                <h4>Hauteville Plywood</h4>
                <h3>New Chair</h3>
                <a
                  className="umino-btn umino-btn_dark"
                  href="shop-left-sidebar.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-item img-hover_effect">
              <div className="banner-img">
                <a href="">
                  <img
                    className="img-full"
                    src="assets/images/banner/1-7.jpg"
                    alt="Umino's Banner"
                  />
                </a>
              </div>
              <div className="banner-content banner-content-2">
                <span>Home Decor</span>
                <h4>The Best Clock</h4>
                <h3>Creative Furniture</h3>
                <a
                  className="umino-btn umino-btn_yellow"
                  href="shop-left-sidebar.html"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner02
