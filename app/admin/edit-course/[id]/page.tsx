'use client'
import React from 'react'
import Sidebar from '../../../../app/components/Admin/Sidebar/AdminSidebar'
import Heading from '../../../utils/Heading'
import DashBoardHeader from '../../../components/Admin/DashboardHeader'
import EditCourse from '../../../../app/components/Admin/Course/editCourse'



type Props = {}

const page = ({params}: any) => {
    
    const id = params.id;

    return (
      <div>
          <Heading
           title="Elearning - Admin"
           description="ELearning is a platform for students to learn and get help from teachers"
           keywords="Prograaming,MERN,Redux,Machine Learning"
          />
          <div className="flex">
              <div className="1500px:w-[19%] w-1/5">
                  <Sidebar />
              </div>
              <div className="w-[85%]">
                 <DashBoardHeader />
                 <EditCourse  id={id}/> 
              </div>
          </div>
      </div>
    )
  }

export default page