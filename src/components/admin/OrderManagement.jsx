import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';

function OrderManagement() {
  const [orderList, setOrderList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(10); // Số lượng đơn hàng mỗi trang
  const [selectedStatus, setSelectedStatus] = useState(''); // Trạng thái tìm kiếm

  const getList = async () => {
    try {
      const res = await axios.get('http://localhost:3000/orders');
      setOrderList(res.data);
    } catch (error) {
      console.log(error);
      toast.error('Lỗi');
    }
  };

  useEffect(() => {
    getList();
  }, []);

  // Lấy dữ liệu cho trang hiện tại
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;

  // Lọc các đơn hàng dựa trên trạng thái đã chọn
  const filteredOrders = selectedStatus ? orderList.filter(order => order.status === selectedStatus) : orderList;
  const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Tính toán số trang
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredOrders.length / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  // Danh sách trạng thái có thể chọn
  const statusOptions = [
    "Tất cả",
    "Chờ xác nhận",
    "Đã xác nhận",
    "Chờ lấy hàng",
    "Đang giao hàng",
    "Giao hàng thành công",
    "Đã hủy",
    "Trả hàng"
  ];

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold" style={{ fontWeight: 700 }}>
            DANH SÁCH ĐƠN HÀNG
          </h6>
        </div>
        <div className="card-body">
          {/* Ô chọn trạng thái */}
          <div className="mb-3">
            <label htmlFor="statusSelect">Tìm kiếm đơn hàng:</label>
            <select
              id="statusSelect"
              className="form-select"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value === "Tất cả" ? '' : e.target.value)}
            >
              {statusOptions.map(status => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
              <thead>
                <tr>
                  <th>ID Đơn Hàng</th>
                  <th>Họ Tên Người Đặt</th>
                  <th>Số Điện Thoại</th>
                  <th>Địa Chỉ</th>
                  <th>Phương Thức Thanh Toán</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {currentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.customer?.name}</td>
                    <td>{order.customer?.phone}</td>
                    <td>{order.customer?.address}</td>
                    <td>
                      {order.customer?.paymentMethod === 'cod'
                        ? 'Thanh toán khi nhận hàng'
                        : 'Không xác định'}
                    </td>
                    <td>{order?.status}</td>
                    <td>
                      <div style={{ display: 'flex' }}>
                        <Link
                          style={{ background: '#36b9cc' }}
                          to={`/admin/updateorder/${order.id}`}
                          className="button-circle-edit"
                        >
                          <div className="icon-circle-edit">
                            <i className="fa fa-wrench" />
                          </div>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Phân trang */}
          <nav aria-label="Page navigation">
            <ul className="pagination" style={{ justifyContent: "center", cursor: "pointer" }}>
              {pageNumbers.map(number => (
                <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                  <a onClick={() => setCurrentPage(number)} className="page-link">
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default OrderManagement;