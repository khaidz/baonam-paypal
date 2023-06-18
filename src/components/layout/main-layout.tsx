import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header />
      {children}
      <div
        className="fb-comments"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width="100%"
        data-mobile="true"
        data-numposts="10"
      ></div>
      <Footer />
    </Box>
  )
}

export default MainLayout
