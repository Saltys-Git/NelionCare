import { Label } from "@/components/ui/label"
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Privacy Policy - Nelion Care - Bringing the best Home Care to your home',
    description: 'We are a family run Homecare Service provider dedicated to delivery of expert and compassionate person centred care in the comfort of you own home in Derbyshire, Nottinghamshire, Staffordshire and neigbouring counties.',
}

export default function PrivacyPolicy() {
  return (
      <div className="flex pb-1 md:pb-8 w-full flex-col items-center justify-center space-y-2 md:space-y-8 bg-gradient-to-r from-fuchsia-200 via-violet-200 to-red-200">
          <div className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover">
              <div className="w-full h-full bg-slate-500/50 flex flex-col justify-center items-center">
                  <Label className="text-4xl font-bold text-center text-white ">Privacy Policy</Label>
              </div>
          </div>
          <section className="prose prose-lg max-w-[90%] bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-fuchsia-600 text-3xl font-semibold my-2">Privacy Policy</h2>
          </section>
          {/*<section className="prose prose-lg max-w-[90%] bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-fuchsia-600 text-3xl font-semibold my-2">Introduction</h2>
              <p>
                  Comfortable UK is focused on safeguarding the security of guests to our site,
                  endorsers of our pamphlets and those furnishing us with contact data. Kindly read
                  the accompanying Protection Strategy to comprehend how your own data is dealt
                  with. Now and again, Comfortable UK might offer new data or administrations that
                  might influence this arrangement. On the off chance that you have any various forms
                  of feedback with respect to this Security Strategy, kindly send an email to
                  info@nelioncare.co.uk
              </p>
              <h2 className="text-fuchsia-600 text-3xl font-semibold">Privacy Policy</h2>
              {conditions.map((data,index)=>(
                  <div className="my-4" key={index}>
                      <h3 className="text-fuchsia-500 text-xl font-semibold">{data.title}</h3>
                      <p>
                          {data.description}
                      </p>
                  </div>
              ))}
          </section>*/}
      </div>
  )
}
