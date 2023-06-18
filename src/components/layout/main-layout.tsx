import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Rating from '@mui/material/Rating'
interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header />
      {children}
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
                component="div"
                className="fb-comments"
                data-href="https://developers.facebook.com/docs/plugins/comments#muabandola"
                data-width="100%"
                data-mobile="true"
                data-numposts="10"
              ></Box>
              <Box
                component="div"
                sx={{
                  fontWeight: 'bold',
                  width: { xs: '100%', md: '90%' },
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: { xs: 'end' },
                }}
              >
                <Rating name="no-value" value={5} size="large" />
                <span>5/5 - (503 bình chọn)</span>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout
