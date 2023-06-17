import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Dịch vụ uy tín',
    description:
      'Chúng tôi luôn đặt chữ tín lên hàng đầu, với hi vọng website này sẽ là cầu nối giữa các cá nhân và doanh nghiệp có nhu cầu trao đổi Paypal.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Giá cả cạnh tranh',
    description:
      'Chúng tôi luôn báo tỉ giá mua và bán Paypal là tốt nhất so với thị trường ở thời điểm giao dịch. Giúp đôi bên cùng có lợi trong mọi trường hợp.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Hỗ trợ nhiệt tình',
    description:
      'Hỗ trợ mua bán Paypal tự động 24/7. Bất kể ngày lễ và chủ nhật bạn hoàn toàn có thể dễ dàng giao dịch online với chúng tôi.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Hợp tác lâu dài',
    description:
      'Chúng tôi luôn muốn tìm kiếm các đối tác có nhu cầu trao đổi thường xuyên để hợp tác lâu dài. Đối với những khách hàng thường xuyên sẽ có rate đẹp.',
    icon: <ContactSupportIcon />,
  },
]
