import Banner from '../components/Banner';
import OrderDetailsProduct from '../components/OrderDetailsProduct';

function OrderDetailsProductPage() {
  return (
    <div>
      <Banner
        title={'Chi tiết đơn hàng'}
        des={
          'Khám phá bộ sưu tập ghế sang trọng của chúng tôi và biến không gian sống của bạn thành nơi lý tưởng với giá cực tốt!'
        }
      />
      <OrderDetailsProduct />
    </div>
  );
}
export default OrderDetailsProductPage;
