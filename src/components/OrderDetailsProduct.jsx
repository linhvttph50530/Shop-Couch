import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import formatCurrency from '../consts/formatCurrency';

function OrderDetailsProduct() {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();

  const getOrders = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/orders/${id}`);
      setOrders(res.data || {});
    } catch (error) {
      console.error('Lỗi API:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (id) {
      getOrders(id);
    }
  }, [id]);

  return (
    <div className="untree_co-section before-footer-section">
      <div className="container">
        <div className="row mb-5">
          <form className="col-md-12" method="post">
            <div className="site-blocks-table">
              <table className="table">
                <thead>
                  <tr>
                    <th className="product-thumbnail">Hình ảnh</th>
                    <th className="product-name">Tên sản phẩm</th>
                    <th className="product-price">Giá sản phẩm</th>
                    <th className="product-quantity">Số lượng</th>
                    <th className="product-quantity">Mô tả</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.items &&
                    orders.items.map((item, index) => (
                      <tr key={index}>
                        <td className="product-name">
                          <img
                            style={{ mixBlendMode: 'multiply' }}
                            width={200}
                            src={item.image}
                            alt={item.name}
                          />
                        </td>
                        <td className="product-name">{item.name}</td>
                        <td className="product-price">
                          {formatCurrency(item.price)}
                        </td>
                        <td className="product-quantity">{item.quantity}</td>
                        <td className="product-total">{item.description}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </form>

          <div className="col-md-6">
            <div className="card p-4 mb-4 shadow-sm">
              <h5 className="mb-3" style={{ fontWeight: 800 }}>
                Thông tin người nhận
              </h5>
              <p>
                <strong>Người đặt hàng:</strong> {orders.customer?.name}
              </p>
              <p>
                <strong>Email:</strong> {orders.customer?.email}
              </p>
              <p>
                <strong>Địa chỉ:</strong> {orders.customer?.address}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {orders.customer?.phone}
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 mb-4 shadow-sm">
              <h5 className="mb-3" style={{ fontWeight: 800 }}>
                Chi tiết đơn hàng
              </h5>
              <p>
                <strong>Phương thức thanh toán:</strong>{' '}
                {orders.customer?.paymentMethod === 'cod'
                  ? 'Thanh toán khi nhận hàng'
                  : 'Không xác định'}
              </p>
              <p>
                <strong>Trạng thái:</strong> {orders.status}
              </p>
              <p className='mt-1'>
                <strong style={{ fontSize: 20 }}>Tổng tiền: </strong>
                <span
                  style={{
                    color: 'rgb(210, 0, 0)',
                    fontWeight: 600,
                    fontSize: 20,
                  }}
                >
                  {formatCurrency(orders.totalPrice)}
                </span>
              </p>
            </div>
          </div>

          <div className="col-md-12 text-center mt-4">
            <Link to={`/order/${orders.userId}`}>
              <button type="button" className="btn btn-primary">
                Quay lại trang đơn hàng
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsProduct;
