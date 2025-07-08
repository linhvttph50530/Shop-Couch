import Banner from '../components/Banner';
import OrderDetails from '../components/OrderDetails';

function Order() {
  return (
    <div>
      <Banner
        title={'Đơn hàng'}
        des={
          'Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không gian sống của bạn thành nơi lý tưởng với giá cực tốt!'
        }
      />
      <OrderDetails />
    </div>
  );
}
export default Order;
