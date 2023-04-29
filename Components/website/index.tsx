import { Typography } from '@mui/material'
import React, { FC } from 'react'
import AboutUs, { AboutUsItem } from './AboutUs'
import HeroSection from './HeroSection'


interface Props {
    heroHeader: string
    heroText: string
    aboutUsItems: AboutUsItem[]
    contactUsText?: string
}
const Website: FC<Props> = (props) => {
  return (
    <div>
      <Typography variant='h4' textAlign={"center"}>Below is your website :). Update as you wish</Typography>
        <HeroSection initialText={props.heroText} imageUrl='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' initialHeading={props.heroHeader}/>
        <AboutUs items={props.aboutUsItems} />
    </div>
  )
}

export default Website