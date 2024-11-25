import Hero from '@/components/HomePage/Hero'
import About from '@/components/HomePage/About'

function Main() {
  return (
    <div className="mx-auto max-w-3xl px-5 mb-5 flex flex-col gap-10">
      <Hero />
      <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md"></hr>
      <About />
    </div>
  )
}

export default Main
