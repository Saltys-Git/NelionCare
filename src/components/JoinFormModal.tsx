"use client"
import React, {useRef, useState} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
} from "@nextui-org/react";
import {Input as ShadcnInput} from "@/components/ui/input"
import {Label} from "./ui/label";
import LoadingShimmerComp from "./LoadingShimmerComp";
import {sendEmailAttachment} from "@/lib/resendEmail";
import {toast} from "@/components/ui/use-toast";


const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+[.]+[A-Z]{2,4}$/i);


export default function JoinFormModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const confirmButton = useRef<HTMLButtonElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [cv, setCV] = useState<File | undefined>(undefined);
    const [formData, setFormData] = useState<{
        firstName: string,
        surName: string,
        contactNo: string,
        email: string,
        validEmail: boolean,
    }>({
        firstName: "",
        surName: "",
        contactNo: "",
        email: "",
        validEmail: true,
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        if (!emailRegex.test(formData.email)) {
            toast({
                duration:2000,
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "You've entered an invalid email for contact.",
            })
            return setIsLoading(false)
        }
        const data = new FormData();
        data.set("firstName", formData.firstName)
        data.set("surName",  formData.surName)
        data.set("contactNo",  formData.contactNo)
        data.set("email",  formData.email)
        data.set("attachment","")
        if(cv) {
            data.set("attachment", cv)
        }
        sendEmailAttachment(data).then(r => {
            setIsLoading(false)
            if(r.status) {
                toast({
                    description: "Application submitted successfully",
                })
                setFormData({
                    firstName: "",
                    surName: "",
                    contactNo: "",
                    email: "",
                    validEmail: true,
                })
                setCV(undefined)
                if (confirmButton.current !== null) confirmButton.current.click();
            } else {
                toast({
                    variant: "destructive",
                    title: "Uh oh! Something went wrong.",
                    description: "There was a problem with your request. "+r.error,
                })
            }
        })
    }

    return (
        <>
            <Button color="secondary" variant="shadow" onPress={onOpen}
                    className="inline-flex w-full md:w-fit items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
                Apply Now
            </Button>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="outside"
                isDismissable={false}
            >
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={e => handleSubmit(e)}>
                            <LoadingShimmerComp loading={isLoading} loader="spinner" rounded="xl">
                                <ModalHeader className="flex flex-col gap-1">
                                    Applicant Details
                                </ModalHeader>
                                <ModalBody>
                                    <Input
                                        isRequired
                                        type="text"
                                        label="First Name"
                                        className="w-full"
                                        size="sm"
                                        value={formData.firstName}
                                        onValueChange={(e) => setFormData((prev) => {
                                            prev.firstName = e
                                            return {...prev}
                                        })}
                                    />
                                    <Input
                                        isRequired
                                        type="text"
                                        label="Surname"
                                        className="w-full"
                                        size="sm"
                                        value={formData.surName}
                                        onValueChange={(e) => setFormData((prev) => {
                                            prev.surName = e
                                            return {...prev}
                                        })}
                                    />
                                    <Input
                                        isRequired
                                        type="text"
                                        label="Contact No."
                                        className="w-full"
                                        size="sm"
                                        value={formData.contactNo}
                                        onValueChange={(e) => setFormData((prev) => {
                                            prev.contactNo = e
                                            return {...prev}
                                        })}
                                    />
                                    <Input
                                        isRequired
                                        type="email"
                                        label="E-mail"
                                        className="w-full"
                                        size="sm"
                                        isInvalid={!formData.validEmail}
                                        errorMessage={!formData.validEmail && "Please enter a valid email"}
                                        value={formData.email}
                                        onValueChange={(e) => setFormData((prev) => {
                                            prev.email = e
                                            if (e.length > 4) {
                                                prev.validEmail = emailRegex.test(e)
                                            } else {
                                                prev.validEmail = true
                                            }
                                            return {...prev}
                                        })}
                                    />
                                    <div className="flex flex-col">
                                        <Label htmlFor="cv" className="text-base select-none">Attach your
                                            CV (PDF Only)</Label>
                                    </div>
                                    <ShadcnInput
                                        type="file"
                                        name="cv"
                                        accept="application/pdf"
                                        className="w-full"
                                        onChange={e =>
                                            setCV(e.target.files?.[0])}/>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" ref={confirmButton} variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                </ModalFooter>
                            </LoadingShimmerComp>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
