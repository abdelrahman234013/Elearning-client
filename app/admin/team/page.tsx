'use client'
import AdminProtected from '../../../app/hooks/adminProtected'
import Heading from '@/app/utils/Heading'
import React from 'react'
import AdminSideBar from '../../components/Admin/Sidebar/AdminSidebar'
import AllUsers from '../../components/Admin/User/AllUsers'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
    <AdminProtected>
    <Heading 
   title="Elearning"
   description="Elearning is a platform for students to learn and get help from teachers"
   keywords="Programing, MERN, Redux, Machine Learning"
   />
   <div className='flex h-[200vh]'>
     <div className='1500px:w-[16%] w-1/5'>
       <AdminSideBar />
     </div>

     <div className='w-[85%]'>
       asdfasdfasdf
       <AllUsers isTeam={true}/>
     </div>
   </div>
    </AdminProtected>
  </div>
  )
}

export default page