import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import formatCurrency from '../consts/formatCurrency';

function OrderDetails() {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getOrders = async (userId) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/orders?userId=${userId}`
      );
      setOrders(res.data);
    } catch (error) {
      console.error('Lỗi API:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (id) {
      getOrders(id);
    }
  }, [id]);

  const handleClickOrderDetailsProduct = (id) => {
    navigate(`/orderproduct/${id}`);
  };

  const handleCancelOrder = async (orderId) => {
    if (!window.confirm('Bạn có chắc chắn muốn hủy đơn hàng này?')) return;
    try {
      await axios.patch(`http://localhost:3000/orders/${orderId}`, {
        status: 'Đã hủy',
      });
      getOrders(id);
    } catch (error) {
      console.error(
        'Lỗi khi hủy đơn hàng:',
        error.response?.data || error.message
      );
    }
  };

  const handleReturnOrder = async (orderId) => {
    if (!window.confirm('Bạn có muốn trả hàng cho đơn hàng này?')) return;
    try {
      await axios.patch(`http://localhost:3000/orders/${orderId}`, {
        status: 'Trả hàng',
      });
      getOrders(id);
    } catch (error) {
      console.error('Lỗi khi trả hàng:', error.response?.data || error.message);
    }
  };

  const canCancel = (status) => {
    const cancellableStatuses = ['chờ xác nhận', 'đã xác nhận'];
    return cancellableStatuses.includes(status?.toLowerCase());
  };

  const canReturn = (status) => {
    return status?.toLowerCase() === 'giao hàng thành công';
  };

  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Tên Khách Hàng</th>
                    <th className="product-name">Tổng Tiền</th>
                    <th className="product-price">Địa Chỉ</th>
                    <th className="product-quantity">Phương Thức Thanh Toán</th>
                    <th className="product-total">Trạng Thái</th>
                    <th className="product-remove">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td className="product-name" style={{ fontWeight: 700 }}>
                        {order.customer?.name}
                      </td>
                      <td>{formatCurrency(order.totalPrice)}</td>
                      <td>{order.customer?.address}</td>
                      <td>
                        {order.customer?.paymentMethod === 'cod'
                          ? 'Thanh toán khi nhận hàng'
                          : 'Không xác định'}
                      </td>
                      <td>{order.status}</td>
                      <td>
                        <button
                          type="button"
                          style={{
                            borderRadius: '10px',
                            fontWeight: 'bold',
                            padding: '6px 12px',
                            backgroundColor: '#007bff',
                            color: '#ffffff',
                            border: 'none',
                            cursor: 'pointer',
                          }}
                          onClick={() =>
                            handleClickOrderDetailsProduct(order.id)
                          }
                        >
                          Xem chi tiết
                        </button>

                        {canCancel(order.status) && (
                          <button
                            type="button"
                            style={{
                              borderRadius: '10px',
                              fontWeight: 'bold',
                              padding: '6px 12px',
                              backgroundColor: '#dc3545', // Màu nền cho nút "Hủy"
                              color: '#ffffff',
                              border: 'none',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleCancelOrder(order.id)}
                          >
                            Hủy
                          </button>
                        )}

                        {canReturn(order.status) && (
                          <button
                            type="button"
                            style={{
                              borderRadius: '10px',
                              fontWeight: 'bold',
                              padding: '6px 12px',
                              backgroundColor: '#ffc107', // Màu nền cho nút "Trả hàng"
                              color: '#ffffff',
                              border: 'none',
                              cursor: 'pointer',
                            }}
                            onClick={() => handleReturnOrder(order.id)}
                          >
                            Trả hàng
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
