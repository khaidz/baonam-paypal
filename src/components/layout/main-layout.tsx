import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
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
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default MainLayout
