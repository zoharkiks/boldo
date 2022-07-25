import type { NextPage } from 'next'
import Head from 'next/head'

// import components
import {Navbar, Footer,Hero, Services, Testimonials,Blog}  from '../containers'

const Home: NextPage = () => {
  return (
    <div className='' >
      <Head>
        <title>Your App Name</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/* Website Sections */}
<div className="bg-darkBlue h-screen pt-14 px-[100px]">
<Navbar/>
<Hero/>
</div>
<Services/>
<Testimonials/>
<Blog/>
<Footer/>

    </div>
  )
}

export default Home
