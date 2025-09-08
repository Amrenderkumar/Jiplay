import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "MEAN Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Data Analyst",
  "Machine Learning Engineer",
  "Artificial Intelligence Engineer",
  "Cloud Engineer",
  "Cybersecurity Analyst",
]

const Categories = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
        <div className='my-10 py-3'>
            <h1 className='text-4xl font-bold text-[blue] text-center '>Categories</h1>
            <div className='w-40 h-1 border-b-4 border-y-amber-400 rounded-2xl mt-1 mx-auto md:mt-2'></div>
            <p className='text-center py-2'>Explore various career paths in the tech industry</p>
        </div>
      <Carousel className="w-full max-w-4xl mx-auto my-20">
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem 
              key={index} 
              className="basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80">
                {category}
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Categories
