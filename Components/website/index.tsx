import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { FC, useState } from 'react'
import AboutUs, { AboutUsItem } from './AboutUs'
import ContactUs from './ContactUs'
import HeroSection from './HeroSection'


interface Props {
  heroHeader: string
  heroText: string
  aboutUsItems: AboutUsItem[]
  contactUsText?: string
}

interface Website {
  _id?: string;
  project_id: string;
  hero: {
    heading: string;
    description: string;
    image: string;
  };
  about_us: AboutUsItem[];
  created_at?: Date;
  updated_at?: Date;
}

const Website: FC<Props> = (props) => {
  const [loading, setLoading] = useState(false)
  const handleButtonClick = async () => {
    setLoading(true)
    const aboutUsItems: AboutUsItem[] = [
      {
        title: "about us 1",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      },
      {
        title: "about us 1",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      },
      {
        title: "about us 1",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      }, {
        title: "about us 1",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
      }
    ]
    const data: Website = {
      project_id: "1234",
      about_us: aboutUsItems,
      hero: {
        heading: "Ever Toast",
        description: "EverToast is a revolutionary toaster that never runs out of battery, ensuring that you can always enjoy perfectly toasted bread, bagels, and more. With its innovative power source, you'll never have to worry about running out of juice in the middle of making breakfast. EverToast is also equipped with a range of customizable settings, allowing you to get your toast just the way you like it every time.",
        image: "todo add this later"
      },

    }
    const body = JSON.stringify(data)
    await fetch("/api/websites", {
      method: "POST",
      body
    })
    setLoading(false)
  }
  return (
    <div>
      <Typography variant='h4' textAlign={"center"}>Below is your website :). Update as you wish</Typography>
      <HeroSection initialText={props.heroText} image='https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' initialHeading={props.heroHeader} />
      <AboutUs items={props.aboutUsItems} />
      <ContactUs />
      <Box sx={{ textAlign: 'center' }}>
        {/* todo show a loading spinner shaabeera */}
        <Button variant="contained" onClick={handleButtonClick}>I am happy with the site and content :)</Button>
      </Box>
    </div>
  )
}

export default Website