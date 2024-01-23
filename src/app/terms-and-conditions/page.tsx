import { Label } from "@/components/ui/label"
import {Metadata} from "next";


export const metadata: Metadata = {
    title: 'Terms and Conditions - Nelion Care - Bringing the best Home Care to your home',
    description: 'We are a family run Homecare Service provider dedicated to delivery of expert and compassionate person centred care in the comfort of you own home in Derbyshire, Nottinghamshire, Staffordshire and neigbouring counties.',
}

export default function TermsAndConditions() {
  return (
      <div className="flex pb-1 md:pb-8 w-full flex-col items-center justify-center space-y-2 md:space-y-8 bg-gradient-to-r from-fuchsia-200 via-violet-200 to-red-200">
          <div className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover">
              <div className="w-full h-full bg-slate-500/50 flex flex-col justify-center items-center">
                  <Label className="text-4xl font-bold text-center text-white ">Terms & Conditions</Label>
              </div>
          </div>
          <section className="prose prose-lg max-w-[90%] bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-fuchsia-600 text-3xl font-semibold my-2">Terms & Conditions</h2>
          </section>
          {/*<section className="prose prose-lg max-w-[90%] bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-fuchsia-600 text-3xl font-semibold my-2">Introduction</h2>
              <p>
                  When you visit or interact with any of our websites, including www.nelioncare.co.uk and others operated by NelionCare, Inc. (collectively referred to as &quot;The Website&quot;), you are agreeing to comply with the terms, conditions, policies, and other obligations outlined in this document and those found in our privacy policies and other policies accessible on The Website (collectively referred to as the &quot;Terms of Use&quot;). If you do not fully agree with the Terms of Use, please refrain from using The Website.
                  It&apos;s important to note that the Terms of Use specifically address your use of The Website and the information, documents, and content found within it. Separate terms and conditions may apply to products and services offered by us through The Website or through other means. These Terms of Use constitute the complete and binding agreement between you and us regarding your use of The Website.
              </p>
              <h2 className="text-fuchsia-600 text-3xl font-semibold">Terms of Service</h2>
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
