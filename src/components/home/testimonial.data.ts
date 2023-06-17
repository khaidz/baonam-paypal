import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Tỉ giá mua bán Paypal quá tốt',
    content:
      'Tỉ giá mua vào và bán paypal ra luôn được căn chỉnh phù hợp với nhu cầu của thị trường. Giúp đôi bên giao dịch đều có lợi',
    user: {
      id: 1,
      name: 'Nguyễn Minh',
      professional: 'Khách hàng',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Thanh toán linh hoạt!',
    content:
      'Lúc đầu mình cũng sợ, tại vì phía mình phải ck trước. Nhưng làm liều ai dè chưa đc 3p là nhận đc tiền nha. Cảm thấy áy náy vì hk tin tưởng. A làm ăn cực uy tín',
    user: {
      id: 1,
      name: 'Trần Tuấn Phát',
      professional: 'Khách hàng',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Quá tuyệt vời',
    content: 'Làm ăn cực uy tín. Nhanh gọn. Không kì kèo. Rất tốt. Lần đầu giao dịch không lỗi lầm',
    user: {
      id: 1,
      name: 'Đoàn Hữu Hướng',
      professional: 'Khách hàng',
      photo: '3.jpg',
    },
  },
]
