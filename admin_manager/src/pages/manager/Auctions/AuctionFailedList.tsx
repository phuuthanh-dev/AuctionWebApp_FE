import { useCallback, useEffect, useState } from "react";
import { Spinner, Table } from 'react-bootstrap';
import { Auction } from "../../../models/Auction";
import { getAllFailedAuctions } from "../../../api/AuctionAPI";
import { PaginationControl } from "react-bootstrap-pagination-control";
import useAccount from "../../../hooks/useAccount";
import AuctionSingle from "./AuctionSingle";
import { Link } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

const AuctionFailedList = () => {
    const token = localStorage.getItem("access_token");
    const user = useAccount(token);

    const [listAuctions, setListAuctions] = useState<Auction[]>([]);
    const [page, setPage] = useState(1);
    const [totalElements, setTotalElements] = useState(0);
    const [loading, setLoading] = useState(true);
    const [debouncedTxtSearch, setDebouncedTxtSearch] = useState('');
    const [txtSearch, setTxtSearch] = useState('');

    const debouncedTxtSearchChange = useDebouncedCallback(
        (txtSearch: string) => {
            setDebouncedTxtSearch(txtSearch);
        },
        1000
    );

    const handleTxtSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTxtSearch(value);
        debouncedTxtSearchChange(value);
    };

    const handleChangeList = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getAllFailedAuctions(debouncedTxtSearch, page);
            if (!response) {
                setLoading(false);
                return;
            }
            setListAuctions(response.auctionsData);
            setTotalElements(response.totalAuctions);
        } catch (error) {
            console.error(error);
            setListAuctions([])
        }
        setLoading(false);
    }, [page, debouncedTxtSearch]);

    useEffect(() => {
        handleChangeList();
    }, [user, page, debouncedTxtSearch]);

    return (
        <>
            <section className="main_content dashboard_part">
                <div className="main_content_iner ">
                    <div className="container-fluid plr_30 body_white_bg pt_30">
                        <div className="row justify-content-center" style={{ padding: "40px 0px 0px 350px" }}>
                            <div className="col-12">
                                <div className="breadcrumb-area">

                                    <Link to="/manager">Trang chủ  / </Link>
                                    <Link to="/manager/cac-phien-dau-gia">Danh sách các phiên đấu giá thất bại</Link>

                                </div>
                                <div className="QA_section">
                                    <div className="white_box_tittle list_header">
                                        <h4>Các phiên đấu giá thất bại</h4>
                                        <div className="box_right d-flex lms_block">
                                            <div className="serach_field_2">
                                                <div className="search_inner">
                                                    <form >
                                                        <div className="search_field">
                                                            <input
                                                                type="text"
                                                                placeholder="Tên phiên..."
                                                                value={txtSearch}
                                                                onChange={handleTxtSearch}
                                                            />
                                                        </div>
                                                        <button type="submit">
                                                            <i className="ti-search"></i>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Mã phiên</th>
                                                    <th scope="col" style={{ width: '20%' }}>Tên phiên</th>
                                                    <th scope="col">Thời gian bắt đầu</th>
                                                    <th scope="col">Thời gian kết thúc</th>
                                                    <th scope="col">Nhân viên phụ trách</th>
                                                    <th scope="col">Trạng thái</th>
                                                    <th scope="col">Thao tác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {loading ? (
                                                    <tr>
                                                        <td colSpan={7} className="text-center">
                                                            <Spinner animation="border" />
                                                        </td>
                                                    </tr>
                                                ) : (listAuctions.length > 0 ?
                                                    (listAuctions.map((auction) => (
                                                        <AuctionSingle key={auction.id} auction={auction} handleChangeList={handleChangeList} />
                                                    ))) : (
                                                        <tr>
                                                            <td colSpan={7} className="text-center">
                                                                <h5 className='fw-semibold lh-base mt-2'>Không có phiên đấu giá nào </h5>
                                                            </td>
                                                        </tr>))
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
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
                    </div>
                </div>
            </section>
        </>
    );
};

export default AuctionFailedList;

