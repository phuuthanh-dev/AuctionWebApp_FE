import React, { useCallback, useEffect, useState } from 'react'
import MyJewelrySingle from './MyJewelrySingle';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import { Spinner } from 'react-bootstrap';
import { User } from '../../../../models/User';
import { RequestApproval } from '../../../../models/RequestApproval';
import { getRequestNeedConfirmByMember } from '../../../../api/RequestApprovalAPI';
import useAccount from '../../../../hooks/useAccount';

interface MyJewelriesProps {
  user: User | null;
  setUser: (user: User) => void;
}

const MyJewelryList: React.FC<MyJewelriesProps> = (props) => {
  const token = localStorage.getItem("access_token");
  const userExit = useAccount(token);

  const [listRequests, setListRequests] = useState<RequestApproval[]>([]);
  const [user, setUser] = useState<User | null>(userExit?.account || props.user);
  const [page, setPage] = useState(1);
  const [totalElements, setTotalElements] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleChangeList = useCallback(async () => {
    if (user) {
      setLoading(true);
      try {
        const response = await getRequestNeedConfirmByMember(user.id, page);
        setListRequests(response.requestsData);
        setTotalElements(response.totalElements);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  }, [user, page]);

  useEffect(() => {
    setUser(props.user);
  }, [props.user]);

  useEffect(() => {
    handleChangeList();
  }, [page, handleChangeList]);

  useEffect(() => {
    if (user) {
      handleChangeList();
    }
  }, [user]);
  return (
    <>
      <div
        className="tab-pane fade"
        id="my-jewelry"
        role="tabpanel"
        aria-labelledby="account-orders-tab"
      >
        <div className="myaccount-orders">
          <h4 className="small-title">
            Danh sách cần xác nhận
          </h4>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className='text-center'>
                <tr>
                  <th >Mã trang sức</th>
                  <th style={{ width: '25%' }} >Tên trang sức</th>
                  <th >Ảnh</th>
                  <th >Giá mong muốn</th>
                  <th >Định giá</th>
                  <th >Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <Spinner animation="border" />
                    </td>
                  </tr>

                ) : (listRequests.length > 0 ? (listRequests.map((request) => (
                  <MyJewelrySingle key={request.id} request={request} jewelry={request.jewelry} user={props.user} handleChangeList={handleChangeList} />
                ))) : (
                  <tr>
                    <td colSpan={6} className="text-center">
                      <h5 className='fw-semibold lh-base mt-2'>Không có sản phẩm nào đợi xác nhận</h5>
                    </td>
                  </tr>))}
              </tbody>
            </table>
            <div className="mt-4">
              <PaginationControl
                page={page}
                between={5}
                total={totalElements}
                limit={5}
                changePage={(page) => {
                  setPage(page);
                }}
                ellipsis={1}
              />
            </div>
          </div>
        </div>
      </div >

    </>
  )
}

export default MyJewelryList
