import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

export default function Header() {
    const navigate = useNavigate();

    const handleToShopLeftSibar = () => {
        navigate("/shop-left-sibar");
    };

    const handleToIndex = () => {
        navigate("/");
    };

    const handleToContact = () => {
        navigate("/contact");
    };

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId); // Clean up the interval on component unmount
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString();
    };

    const formatDateTime = (date: Date) => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        };
        const dateString = date.toLocaleDateString('vi-VN', options);

        const dayOfWeek = date.toLocaleDateString('vi-VN', { weekday: 'long' });

        return `${dayOfWeek}, ${dateString}`;
    };

    return (
        <>
            <header className="header-main_area">
                <div className="header-middle_area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-2">
                                <div className="header-logo">
                                    <Link to={"/"}>
                                        <img
                                            src="assets/images/menu/logo/1.png"
                                            alt="Umino's Header Logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-3 d-none d-lg-block">
                                <div className="contact-info">
                                    <div className="contact-info_icon">
                                        <i className="ion-android-call"></i>
                                    </div>
                                    <div className="contact-info_content">
                                        <span>Liên hệ</span>
                                        <a href="#">(+84) 123 321 345</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 d-none d-lg-block">
                                <div className="hm-form_area">
                                    <form action="#" className="hm-searchbox">
                                        <input
                                            type="text"
                                            placeholder="Tìm kiếm sản phẩm..."
                                        />
                                        <button
                                            className="umino-search_btn"
                                            type="submit"
                                        >
                                            <i className="ion-android-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 d-none d-lg-block">
                                <div className="hm-minicart_area">
                                    <ul>
                                        <li>
                                            <h4>
                                                <div className="minicart-icon fw-bold">
                                                    <i className="ion-clock me-2" style={{ fontSize: "30px" }}></i>
                                                    {formatTime(currentTime)}<br />
                                                    <h6 className="mt-1">{formatDateTime(currentTime)}</h6>
                                                </div>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom_area ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-9 col-sm-7">
                                <div className="category-menu category-menu-hidden">
                                    <div className="category-heading">
                                        <h2 className="categories-toggle">
                                            <span>Các loại trang sức đấu giá</span>
                                        </h2>
                                    </div>
                                    <div
                                        id="cate-toggle"
                                        className="category-menu-list none"
                                    >
                                        <ul>
                                            <li
                                                className="right-menu"
                                                onClick={() =>
                                                    handleToShopLeftSibar()
                                                }
                                            >
                                                <a href="#">Dây chuyền</a>
                                                <ul className="cat-mega-menu">
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Chất liệu
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạc
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vàng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạch kim
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim cương
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Giới tính
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Nam
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nữ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nam và nữ
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Dòng hàng
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Kim
                                                                    Cương
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính ECZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Đá Quý
                                                                    Và Bán Quý
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Ngọc
                                                                    Trai
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính CZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Không Đính
                                                                    Đá
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim Cương
                                                                    Viên
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="right-menu"
                                                onClick={() =>
                                                    handleToShopLeftSibar()
                                                }
                                            >
                                                <a href="#">Nhẫn</a>
                                                <ul className="cat-mega-menu">
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Chất liệu
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạc
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vàng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạch kim
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim cương
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Giới tính
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Nam
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nữ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Cả nam và nữ
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Dòng hàng
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Kim
                                                                    Cương
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính ECZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Đá Quý
                                                                    Và Bán Quý
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Ngọc
                                                                    Trai
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính CZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Không Đính
                                                                    Đá
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim Cương
                                                                    Viên
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="right-menu"
                                                onClick={() =>
                                                    handleToShopLeftSibar()
                                                }
                                            >
                                                <a href="#">Bông tai</a>
                                                <ul className="cat-mega-menu">
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Chất liệu
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạc
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vàng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạch kim
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim cương
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Giới tính
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Nam
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nữ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nam và nữ
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Dòng hàng
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Kim
                                                                    Cương
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính ECZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Đá Quý
                                                                    Và Bán Quý
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Ngọc
                                                                    Trai
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính CZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Không Đính
                                                                    Đá
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="right-menu"
                                                onClick={() =>
                                                    handleToShopLeftSibar()
                                                }
                                            >
                                                <a href="#">Vòng tay</a>
                                                <ul className="cat-mega-menu">
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Chất liệu
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạc
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vàng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạch kim
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim cương
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Giới tính
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Nam
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nữ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nam và nữ
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Dòng hàng
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Kim
                                                                    Cương
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính ECZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Đá Quý
                                                                    Và Bán Quý
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Ngọc
                                                                    Trai
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính CZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Không Đính
                                                                    Đá
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim Cương
                                                                    Viên
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="right-menu"
                                                onClick={() =>
                                                    handleToShopLeftSibar()
                                                }
                                            >
                                                <a href="#">Lắc</a>
                                                <ul className="cat-mega-menu">
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Chất liệu
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#"></a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạc
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vàng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạch kim
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim cương
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Giới tính
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Nam
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nữ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nam và nữ
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="right-menu cat-mega-title">
                                                        <a href="#">
                                                            Dòng hàng
                                                        </a>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Kim
                                                                    Cương
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính ECZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Đá Quý
                                                                    Và Bán Quý
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Ngọc
                                                                    Trai
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính CZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Không Đính
                                                                    Đá
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim Cương
                                                                    Viên
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 d-none d-lg-block position-static">
                                <div className="main-menu_area">
                                    <nav className="main_nav">
                                        <ul>
                                            <li
                                                className="dropdown-holder"
                                                onClick={() => handleToIndex()}
                                            >
                                                <a href="#">
                                                    Cuộc đấu giá
                                                    <i className="ion-chevron-down"></i>
                                                </a>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <a href="#">Đấu giá sắp diễn ra</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Đấu giá đang diễn ra</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Đấu giá đã kết thúc</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="/about">
                                                    Giới thiệu
                                                    <i className="ion-chevron-down"></i>
                                                </a>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <Link to={"/QA"}>
                                                            Câu hỏi thường gặp
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/privacy_policy"}>
                                                            Chính sách bảo mật
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Về chúng tôi
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to={"/404"}>Sắp ra mắt</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                onClick={() =>
                                                    handleToContact()
                                                }
                                            >
                                                <a href="#">Liên hệ</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-2 d-none d-lg-block">
                                <div className="login-area">
                                    <Link to={"/login"}>
                                        Đăng nhập
                                    </Link><span> | </span>
                                    <Link to={"/register"}>
                                        Đăng ký
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-5 d-block d-lg-none">
                                <div className="mobile-menu_area">
                                    <ul>
                                        <li className="minicart-area">
                                            <a href="#">
                                                <i className="fa fa-shopping-cart"></i>
                                                <span className="item-count">
                                                    2
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="mobile-menu_btn toolbar-btn color--white d-lg-none d-block"
                                            >
                                                <i className="ion-navicon"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom_area header-sticky stick">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-6 col-sm-7">
                                <div className="header-logo">
                                    <Link to={"/index"}>
                                        <img
                                            src="assets/images/menu/logo/1.png"
                                            alt="Umino's Header Logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 d-none d-lg-block position-static">
                                <div className="main-menu_area">
                                    <nav className="main_nav">
                                        <ul>
                                            <li className="megamenu-holder">
                                                <a href="#">
                                                    Cách loại trang sức đấu giá
                                                    <i className="ion-chevron-down"></i>
                                                </a>
                                                <ul className="umino-megamenu">
                                                    <li>
                                                        <span className="megamenu-title">
                                                            Chủng Loại
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Dây Chuyền
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nhẫn
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bông Tai
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vòng Tay
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Lắc
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="megamenu-title">
                                                            Giới tính
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Nam
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Nữ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Cả Nam và Nữ
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="megamenu-title">
                                                            Chất Liệu
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Bạc
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Vàng
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Bạch Kim
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim Cương
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span className="megamenu-title">
                                                            Dòng Hàng
                                                        </span>
                                                        <ul>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Kim
                                                                    Cương
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính ECZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Đá Quý
                                                                    Và Bán Quý
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính Ngọc
                                                                    Trai
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Đính CZ
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Trang Sức
                                                                    Không Đính
                                                                    Đá
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    Kim Cương
                                                                    Viên
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                className="dropdown-holder"
                                                onClick={() => handleToIndex()}
                                            >
                                                <a href="#">
                                                    Cuộc đấu giá
                                                    <i className="ion-chevron-down"></i>
                                                </a>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <a href="#">
                                                            Đấu giá sắp diễn ra
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Đấu giá đang diễn ra
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Đấu giá đã kết thúc
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Giới thiệu
                                                    <i className="ion-chevron-down"></i>
                                                </a>
                                                <ul className="hm-dropdown">
                                                    <li>
                                                        <a href="#">
                                                            Câu hỏi thường gặp
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Chính sách bảo mật
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Về chúng tôi</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            Sắp ra mắt
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li
                                                onClick={() =>
                                                    handleToContact()
                                                }
                                            >
                                                <a href="#">Liên hệ</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="hm-minicart_area">
                                    <ul className="d-flex align-items-center justify-content-center">
                                        <li>
                                            <a href="#">
                                                <div className="minicart-icon wishlist-icon">
                                                    <i className="fa-regular fa-bell"></i>
                                                    <span className="item-count">
                                                        2
                                                    </span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div>
                                                    <b style={{fontSize: "18px"}}>{formatTime(currentTime)}</b><br />
                                                    {formatDateTime(currentTime)}
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-5 d-block d-lg-none">
                                <div className="mobile-menu_area">
                                    <ul>
                                        <li className="minicart-area">
                                            <a href="#">
                                                <i className="fa fa-shopping-cart"></i>
                                                <span className="item-count">
                                                    2
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="mobile-menu_btn toolbar-btn color--white d-lg-none d-block"
                                            >
                                                <i className="ion-navicon"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu_wrapper" id="mobileMenu">
                    <div className="offcanvas-menu-inner">
                        <div className="container">
                            <a href="#" className="btn-close">
                                <i className="ion-android-close"></i>
                            </a>
                            <div className="offcanvas-inner_search">
                                <form action="#" className="hm-searchbox">
                                    <input
                                        type="text"
                                        placeholder="Search for item..."
                                    />
                                    <button
                                        className="search_btn"
                                        type="submit"
                                    >
                                        <i className="ion-ios-search-strong"></i>
                                    </button>
                                </form>
                            </div>
                            <nav className="offcanvas-navigation">
                                <ul className="mobile-menu">
                                    <li className="menu-item-has-children active">
                                        <a href="#">
                                            <span className="mm-text">
                                                Home
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Home Shop 1
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Home Shop 2
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Home Shop 3
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Home Shop 4
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Shop
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Grid View
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Grid Fullwidth
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Left Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Right Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Shop List
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Full Width
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Left Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Right Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Single Product Style
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Gallery Left
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Gallery Right
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Tab Style Left
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Tab Style Right
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Sticky Left
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Sticky Right
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Single Product Type
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Single Product
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Single Product
                                                                Sale
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Single Product
                                                                Group
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Single Product
                                                                Variable
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Single Product
                                                                Affiliate
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Single Product
                                                                Slider
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Shop Related Pages
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                My Account
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Login | Register
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Wishlist
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Cart
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Checkout
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Comparer
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Blog
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="menu-item-has-children has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Grid View
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Column Two
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Column Three
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Left Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Right Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        List View
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                List Fullwidth
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                List Left
                                                                Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                List Right
                                                                Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Blog Details
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Left Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Right Sidebar
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item-has-children has-children">
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Blog Format
                                                    </span>
                                                </a>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Gallery Format
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Audio Format
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <span className="mm-text">
                                                                Video Format
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Pages
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        About Us
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Contact
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        FAQ
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Coming Soon
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <nav className="offcanvas-navigation user-setting_area">
                                <ul className="mobile-menu">
                                    <li className="menu-item-has-children active">
                                        <a href="#">
                                            <span className="mm-text">
                                                User Setting
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        My Account
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Login | Register
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Currency
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        EUR €
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        USD $
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#">
                                            <span className="mm-text">
                                                Language
                                            </span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        English
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Français
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Romanian
                                                    </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="mm-text">
                                                        Japanese
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}