import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const HomePopularCourse: FC = () => {
  return (
    <Box
      id="/popular-course"
      sx={{
        pt: {
          xs: 3,
          md: 5,
        },
        pb: 5,
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                height: '100%',
                width: { xs: '100%', md: '90%' },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Typography component="h2" variant="h2" sx={{ color: 'red', lineHeight: 1.6, mb: 2 }}>
                Liên hệ ngay Zalo: 0788070603
              </Typography>

              <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                MuaBánĐôLa là một Exchange hàng đầu trong lĩnh vực mua bán Paypal. Chuyên cung cấp dịch vụ trao đổi
                Paypal sang VND uy tín, nhanh chóng, chuyên nghiệp & rate tốt nhất thị trường. Bảo Nguyễn phục vụ tất cả
                những cá nhân mua bán Paypal nhỏ lẻ cho đến các doanh nghiệp cần thanh khoản số lượng lớn Paypal trong
                thời gian nhanh nhất. Nếu bạn đã tìm thấy tôi ở đây ngại chi mà không inbox số lượng bé rate bé, số
                lượng nhiều rate to.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomePopularCourse
