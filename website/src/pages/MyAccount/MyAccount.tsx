import { Link, useLocation } from "react-router-dom";
import { MyAccountDetail } from "./Components/MyAccountDetail";
import { useContext, useEffect, useState } from "react";
import { User } from "../../models/User";
import { LogoutModal } from "./Modal/Modal";
import { UserContext } from "../../hooks/useContext";
import { ChangePassword } from "./Components/staff/ChangePassword";

import swal from "sweetalert";
import { useTranslation } from "react-i18next";

import { MyBidHistoryList } from "./Components/member/MyBidHistoryList";
import { TransactionHistory } from "./Components/member/TransactionHistory";
import MyJewelriesList from "./Components/member/MyJewelryList";

export default function MyAccount() {
  const context = useContext(UserContext);
  const [userState, setUserState] = useState<User | null>(null);
  const location = useLocation();
  const [isAfterPay, setIsAfterPay] = useState(false);
  const [listNumber, setListNumber] = useState<number>(0);

  const { t } = useTranslation(["MyAccount"]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paymentStatus = searchParams.get("paymentStatus");

    if (paymentStatus === "success") {
      swal("Success", "Bạn đã thanh toán thành công!", "success");
      setIsAfterPay(true);
    } else if (paymentStatus === "failed") {
      swal("Error", "Bạn thanh toán không thành công!", "error");
      setIsAfterPay(true);
    }
    return () => {
      setIsAfterPay(false);
    };
  }, [location.search]);

  useEffect(() => {
    if (context && context.account) setUserState(context?.account);
  }, [context]);

  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li className="active">{t("MyAccount.Tài khoản của tôi")}</li>
            </ul>
          </div>
        </div>
      </div>

      <main className="page-content">
        <div className="account-page-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <ul
                  className="nav myaccount-tab-trigger"
                  id="account-page-tab"
                  role="tablist"
                >
                  <li
                    className="nav-item"
                    onClick={() => {
                      setListNumber(1);
                    }}
                  >
                    <a
                      className={`nav-link ${!isAfterPay ? "active" : ""}`}
                      id="account-dashboard-tab"
                      data-bs-toggle="tab"
                      href="#account-details"
                      role="tab"
                      aria-controls="account-dashboard"
                      aria-selected="true"
                    >
                      {t("MyAccount.Thông tin cá nhân")}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setListNumber(2);
                    }}
                  >
                    <a
                      className="nav-link"
                      id="change-password-tab"
                      data-bs-toggle="tab"
                      href="#change-password"
                      role="tab"
                      aria-controls="account-dashboard"
                      aria-selected="true"
                    >
                      {t("MyAccount.Đổi mật khẩu")}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setListNumber(3);
                    }}
                  >
                    <a
                      className="nav-link"
                      id="account-orders-tab"
                      data-bs-toggle="tab"
                      href="#bid-activity"
                      role="tab"
                      aria-controls="account-orders"
                      aria-selected="false"
                    >
                      {t("MyAccount.Đấu giá của tôi")}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setListNumber(4);
                    }}
                  >
                    <a
                      className={`nav-link ${isAfterPay ? "active" : ""}`}
                      id="account-address-tab"
                      data-bs-toggle="tab"
                      href="#auction-activity"
                      role="tab"
                      aria-controls="account-address"
                      aria-selected="false"
                    >
                      {t("MyAccount.Lịch sử giao dịch")}
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      setListNumber(4);
                    }}
                  >
                    <a
                      className={`nav-link`}
                      id="account-address-tab"
                      data-bs-toggle="tab"
                      href="#my-jewelries"
                      role="tab"
                      aria-controls="account-address"
                      aria-selected="false"
                    >
                      {t("MyAccount.Tài sản của tôi")}
                    </a>
                  </li>
                  <li className="nav-item">
                    <Link to={""}>
                      <LogoutModal />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">
                <div
                  className="tab-content myaccount-tab-content"
                  id="account-page-tab-content"
                >
                  <MyAccountDetail
                    isAfterPay={isAfterPay}
                    user={userState}
                    setUser={setUserState}
                  />
                  <ChangePassword user={userState} />
                  <MyBidHistoryList
                    user={userState}
                    listNumber={listNumber}
                  />
                  <TransactionHistory
                    isAfterPay={isAfterPay}
                    user={userState}
                    listNumber={listNumber}
                  />
                  <MyJewelriesList
                    user={userState}
                    setUser={setUserState}
                    listNumber={listNumber}
                    setListNumber={setListNumber}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
