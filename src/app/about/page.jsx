import p from "../../../public/assets/h2.png"
import Image from "next/image"



export default function About() {
    return (
      <>
        <section className="" style={{direction:"rtl"}}>

        <div className="sm:flex items-center max-w-screen-xl">
  <div className="sm:w-1/2 p-10">
    <div className="image object-center text-center">
      <Image src={p} alt="AtrinPayesh"></Image>
    </div>
  </div>
  <div className="sm:w-1/2 p-5">
    <div className="text-accent">
      <span className="text-gray-500 border-b-2 border-accent uppercase">
        درباره
      </span>
      <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
        آترین <span className="text-accent-hover">پایش پارسیان</span>
      </h2>
      <p className="text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
        commodi doloremque, fugiat illum magni minus nisi nulla numquam
        obcaecati placeat quia, repellat tempore voluptatum.
      </p>
    </div>
  </div>
</div>

  <div className="py-12 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
      
        <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl">
          We know tech, we know finance. We are fintech experts.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
          We know how to handle taxation for all the countried we operate in. We
          care for our customers and help them manage cashflows.
        </p>
      </div>
      <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div className="relative">
            <dt>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Powerful API
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Easy to integrate SDK
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
              
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Low Transaction Cost
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
          <div className="relative">
            <dt>
          
              <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                Powerful Dashboard
              </p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  

</section>

      </>
    );
  }