import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { data } from './feature.data'

const HomeFeature: FC = () => {
  return (
    <Box id="feature" sx={{ py: { xs: 10, md: 14 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/home-feature.png" width={650} height={678} quality={97} alt="Feature img" />

              <Box
                sx={{
                  position: 'absolute',
                  bottom: -12,
                  left: { xs: 0, md: -24 },
                  boxShadow: 2,
                  borderRadius: 1,
                  px: 2.2,
                  py: 2,
                  zIndex: 1,
                  backgroundColor: 'background.paper',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <Typography sx={{ fontWeight: 600, lineHeight: 1 }}>Mức độ uy tín</Typography>
                  <Typography variant="subtitle1" sx={{ mb: 1, color: 'text.disabled' }}>
                    Cam kết
                  </Typography>
                  <Box
                    sx={{
                      height: 85,
                      width: 85,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: '#32dc88' }}>
                      100%
                    </Typography>
                    <CircularProgress
                      sx={{ position: 'absolute', color: 'divider' }}
                      thickness={2}
                      variant="determinate"
                      value={85}
                      size={85}
                    />
                    <CircularProgress
                      // disableShrink
                      thickness={2}
                      variant="determinate"
                      value={100}
                      size={85}
                      sx={{ transform: 'rotate(96deg) !important', color: '#32dc88', position: 'absolute' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography
              component="h2"
              sx={{
                position: 'relative',
                fontSize: { xs: 40, md: 50 },
                ml: { xs: 0, md: 4 },
                mt: 2,
                mb: 3,
                lineHeight: 1,
                fontWeight: 'bold',
              }}
            >
              Tại sao nên mua bán Paypal với{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                MuaBánĐôLa <br />
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 20, md: 28 },
                    transform: 'rotate(3deg)',
                    left: 2,
                    '& img': { width: { xs: 140, md: 175 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Typography>
            </Typography>

            <Typography sx={{ color: 'text.secondary', mb: 2, ml: { xs: 0, md: 4 } }}>
              Hiện tại nhu cầu mua hàng và kiếm tiền online xuyên biên giới đang diễn ra rất nhộn nhịp. Đôi khi bạn muốn
              mua một vài cái hosting chỉ vài chục USD thanh toán qua{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'bold',
                  backgroundColor: 'unset',
                }}
              >
                Paypal
              </Typography>{' '}
              mà không biết chỗ nào bán. Tìm được người uy tín thì họ lại chỉ giao dịch tối thiểu từ 100 USD trở
              lên…Blabla..Hoặc mấy bạn làm MMO muốn bán tiền Paypal để lấy tiền về tài khoản ngân hàng lại không biết
              chỗ nào uy tín + tỉ giá tốt. Hên thì không sao còn xui xẻo lại dính ngay vố Scam.
              <br />
              <br />
              Cũng đã từng đi tìm mua tiền{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'bold',
                  backgroundColor: 'unset',
                }}
              >
                Paypal Việt Nam
              </Typography>{' '}
              rất nhiều trên các trang diễn đàn nên chúng tôi hiểu hơn bao giờ hết tâm lý của các bạn khi tìm mua $
              Paypal hoặc tìm chỗ bán $ Paypal để lấy tiền phục vụ cuộc sống chính vì vậy hơn bao giờ hết chúng tôi muốn{' '}
              <Typography
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'bold',
                  backgroundColor: 'unset',
                }}
              >
                dịch vụ mua bán Paypal uy tín
              </Typography>{' '}
              của chúng tôi có thể phục vụ đại đa số các khách hàng chưa biết nơi mua bán paypal uy tín ở đâu đang có
              nhu cầu với một vài điểm mạnh như sau:
            </Typography>

            <Grid container spacing={2} sx={{ ml: { xs: 0, md: 2 } }}>
              {data.map(({ title, description, icon }, index) => (
                <Grid key={String(index)} item xs={12} md={6}>
                  <Box sx={{ px: 2, py: 1.5, boxShadow: 1, borderRadius: 4, display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        mr: 1,
                        backgroundColor: 'primary.main',
                        borderRadius: '50%',
                        height: 36,
                        width: 36,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'primary.contrastText',
                        '& svg': {
                          fontSize: 20,
                        },
                      }}
                    >
                      {icon}
                    </Box>
                    <Box sx={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ fontSize: '1rem', mb: 1, color: 'secondary.main' }}>
                        {title}
                      </Typography>
                      <Typography sx={{ lineHeight: 1.3, color: 'text.secondary' }} variant="subtitle1">
                        {description}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HomeFeature
