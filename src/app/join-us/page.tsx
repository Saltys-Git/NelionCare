import {Label} from "@/components/ui/label";
import {Image} from "@nextui-org/react";
import {HeartIcon, ShieldCheckIcon, StarIcon} from "@/components/Svgs";
import JoinFormModal from "@/components/JoinFormModal";

const points = [
    {title:"Competitive Pay & Growth",description:"Earn a rewarding £12.10 per hour, with guaranteed annual pay increases of 5% to recognize your dedication and progress."},
    {title:"Travel Made Easy",description:"Get reimbursed for your journey with a generous mileage allowance of 35p per mile, making getting to work smooth and cost-effective."},
    {title:"Empowering Skills",description:"Invest in your future with comprehensive training that equips you with the knowledge and confidence to excel in your caregiving role."},
    {title:"Investing in You",description:"We believe in your potential and actively support your career development through dedicated resources and personalized guidance."},
    {title:"Making a Difference",description:"Join a team that values making a real impact. Your compassion and skills will directly improve the lives of our service users, fueling your sense of purpose."}
]

export default function Home() {

    return (
        <div>
            <div
                className="h-[150px] w-full flex flex-row items-center justify-center bg-[url('../../public/images/contact-bg.jpg')] bg-center bg-cover">
                <div className="w-full h-full bg-slate-500/50 flex flex-col justify-center items-center">
                    <Label className="text-4xl font-bold text-center text-white ">Join us</Label>
                    <Label className="text-sm mt-2 text-center text-white">Join our dedicated team of caregivers and
                        make a difference in the lives of our residents.</Label>
                </div>
            </div>
            <section className="w-full px-6 py-16 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                <div className="grid gap-10 lg:grid-cols-2">
                    <Image
                        isBlurred
                        alt="Nelioncare team"
                        className="rounded-lg object-cover"
                        src="/images/join-us-image1.jpg"
                        style={{
                            aspectRatio: "500/500",
                            objectFit: "cover",
                        }}
                    />
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Why Nelioncare?</h2>
                        <p className="text-gray-600 dark:text-gray-400">
                            Imagine a career where your compassion becomes your compass, where every smile you spark ignites a star in someone&aposs life. At Nelion Care, we&aposre not just providing care, we&aposre weaving tapestries of hope and well-being, and we invite you to join us as a master weaver.<br/><br/>
                            Step into the role of our community ambassador, not just an employee, but an architect of joy. We&aposll equip you with the knowledge and support to build bridges of understanding, where empathy is the mortar and kindness the bricks. You&aposll be a master listener, a confidante, a beacon of warmth in the lives of our service users.
                            Think of it as crafting personalized masterpieces of care, where every interaction is a brushstroke of compassion. We&aposll provide the finest tools – training, resources, and a supportive team that&aposs always there to cheer you on. But the real magic lies in your heart.<br/><br/>
                            Do you possess the gentle touch of a sunrise, the listening ear of a confidante, and the unwavering spirit of a changemaker? Do you yearn to leave a legacy of love and laughter etched in the lives of others? Then, join us. Here, at Nelion Care, your passion for care will find its perfect canvas, and together, we&aposll paint a world where every life shines.
                        </p>
                        <JoinFormModal/>
                    </div>
                </div>
            </section>
            <section className="container px-6 py-16 bg-gray-100">
                <h2 className="text-4xl font-bold text-center mb-6">Our Values</h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
                    Our values guide us in everything we do and help us to create a supportive and nurturing environment
                    for our
                    residents.
                </p>
                <div className="grid gap-10 lg:grid-cols-3">
                    <div className="flex flex-col items-center text-center">
                        <HeartIcon className="w-10 h-10 mb-4 text-primary-cyan"/>
                        <h3 className="text-lg font-bold mb-2">Compassion</h3>
                        <p className="text-gray-600 dark:text-gray-400">We care for our residents with kindness and
                            empathy.</p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <ShieldCheckIcon className="w-10 h-10 mb-4 text-primary-cyan"/>
                        <h3 className="text-lg font-bold mb-2">Safety</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            We prioritize the safety and well-being of our residents.
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <StarIcon className="w-10 h-10 mb-4 text-primary-cyan"/>
                        <h3 className="text-lg font-bold mb-2">Excellence</h3>
                        <p className="text-gray-600 dark:text-gray-400">We strive for excellence in all that we do.</p>
                    </div>
                </div>
            </section>
            <section
                className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                <div className="container px-4 md:px-6">
                    <div
                        className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 lg:gap-12">
                        <div className="flex flex-col justify-center space-y-4 bg-white p-6 rounded-lg shadow-lg w-full md:w-[50%]">
                            <div className="space-y-2 mb-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-fuchsia-700">
                                    Unveiling a Career That Rewards and Empowers
                                </h2>
                            </div>
                            <div className="space-y-4">
                                {points.map((data,index)=>(
                                    <details key={index}
                                        className="space-y-2 bg-fuchsia-100 rounded-lg p-4 transform transition-transform duration-500 hover:scale-105">
                                        <summary
                                            className="flex select-none cursor-pointer w-full items-center text-lg font-semibold text-fuchsia-700">
                                            {data.title}
                                            <svg
                                                className="ml-auto h-5 w-5 transition-all text-fuchsia-700"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path clipRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                                      fillRule="evenodd"/>
                                                <path
                                                    clipRule="evenodd"
                                                    d="M10 2a8 8 0 100 16A8 8 0 0010 2zm1 11a1 1 0 11-2 0 1 1 0 012 0z"
                                                    fillRule="evenodd"
                                                />
                                            </svg>
                                        </summary>
                                        <p className="text-fuchsia-700">
                                            {data.description}
                                        </p>
                                    </details>
                                ))
                                }
                            </div>
                        </div>
                        <div
                            className="overflow-hidden rounded-xl object-cover object-center lg:order-last transform transition-transform duration-500 hover:scale-105 w-full md:w-[50%]">
                            <Image
                                isBlurred
                                alt="Image"
                                src="/images/join-us-image1.jpg"
                                className="rounded-lg object-cover aspect-square"
                                style={{
                                    aspectRatio: "500/500",
                                    objectFit: "cover",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
