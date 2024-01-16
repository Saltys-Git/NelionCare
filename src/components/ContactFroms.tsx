"use client"
import { useState } from "react"
import {Input, Textarea} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Card} from "@/components/ui/card";
import LoadingShimmerComp from "@/components/LoadingShimmerComp";
import {toast} from "@/components/ui/use-toast";
import {sendEmailBasic} from "@/lib/resendEmail";

const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[.]+[A-Z]{2,4}$/i);

export function ContactUsForm(){
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [formData, setFormData] = useState<{
        firstName: string,
        lastName: string,
        email: string,
        validEmail: boolean,
        message: string
    }>({
        firstName: "",
        lastName: "",
        email: "",
        validEmail: true,
        message: ""
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)
        if(!emailRegex.test(formData.email)){
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "You've entered an invalid email for contact.",
            })
            return setIsLoading(false)
        }
        sendEmailBasic({firstName:formData.firstName,lastName: formData.lastName,email: formData.email,subject:"Contact Form",message: formData.message})
            .then((res)=>{
                setIsLoading(false)
                if(!res.status){
                    return toast({
                        variant: "destructive",
                        title: "Uh oh! Something went wrong.",
                        description: res.error,
                    })
                }
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    validEmail: true,
                    message: ""
                })
                return toast({
                    description: "Your message has been sent.",
                })
            })

    };
    return(
        <Card className="max-w-full md:max-w-md mx-4 md:mx-auto bg-white shadow-lg rounded-lg overflow-hidden bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
        <LoadingShimmerComp loading={isLoading} loader="spinner">
            <div className="sm:flex sm:items-center px-6 py-4">
                <h2 className="text-lg font-semibold text-gray-900">Contact Us</h2>
                <p className="mt-2 text-gray-600 sm:mt-0 sm:ml-4">We&apos;d love to hear from you!</p>
            </div>
                <form onSubmit={(e) => {
                    handleSubmit(e)
                }}>
                    <div className="px-6 py-4">
                        <div className="grid grid-cols-1 gap-4">
                            <div className="space-y-2">
                                <Input id="firstName"
                                       isRequired
                                       label="First Name"
                                       value={formData.firstName}
                                       onChange={(e)=>{
                                           e.preventDefault()
                                           setFormData((prev)=>{
                                               prev.firstName = e.target.value
                                               return {...prev}
                                           })
                                       }}/>
                            </div>
                            <div className="space-y-2">
                                <Input id="lastName"
                                       isRequired
                                       label="Last Name"
                                       value={formData.lastName}
                                       onChange={(e)=>{
                                           e.preventDefault()
                                           setFormData((prev)=>{
                                               prev.lastName = e.target.value
                                               return {...prev}
                                           })
                                       }}/>
                            </div>
                            <div className="space-y-2">
                                <Input id="email"
                                       isRequired
                                       label="Contact Email"
                                       type="email"
                                       description="We'll never share your email with anyone else."
                                       isInvalid={!formData.validEmail}
                                       errorMessage={!formData.validEmail && "Please enter a valid email"}
                                       value={formData.email}
                                       onChange={(e)=>{
                                           e.preventDefault()
                                           setFormData((prev)=>{
                                               prev.email = e.target.value
                                               if(e.target.value.length > 3){
                                                   prev.validEmail = emailRegex.test(e.target.value)
                                               }else{
                                                   prev.validEmail = true
                                               }
                                               return {...prev}
                                           })
                                       }}/>
                            </div>
                            <div className="space-y-2">
                                <Textarea id="message"
                                          isRequired
                                          label="Message"
                                          value={formData.message}
                                          onChange={(e)=>{
                                              e.preventDefault()
                                              setFormData((prev)=>{
                                                  prev.message = e.target.value
                                                  return {...prev}
                                              })
                                          }}/>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-4 border-t">
                        <Button type="submit" className="w-full bg-primary-cyan text-white">Send message</Button>
                    </div>
                </form>
            </LoadingShimmerComp>
        </Card>
    )
}