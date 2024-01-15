"use client"
import React, { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Select,
    SelectItem,
    Input,
    Checkbox, Textarea
} from "@nextui-org/react";
import { Label } from "./ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {FaMinus, FaPlus} from "react-icons/fa";

const personalInfoInputs = [
    {name:"Surname",id:"surName",required:true},
    {name:"First Name",id:"firstName",required:true},
    {name:"Previous Names",id:"previousName",required:true},
    {name:"Home Telephone No.",id:"homeTelephoneNo",required:true},
    {name:"Mobile No.",id:"mobileNo",required:true},
    {name:"E-mail",id:"email",required:true},
    {name:"Address",id:"address",required:true},
    {name:"National Insurance No.",id:"nationalInsuranceNo",required:true},
    {name:"Immigration Details",id:"immigrationDetails",required:true},
]
const personalInfoCheckboxes = [
    "Are you a citizen of the EU?",
    "Do you need a work permit?",
    "Current driving licence?",
    "Do you have a car for work use?",
]
const kinInfoInputs = [
    {name:"Surname",id:"surName",required:true},
    {name:"First Names",id:"firstName",required:true},
    {name:"Relationship",id:"relationship",required:true},
    {name:"Telephone",id:"telephone",required:true},
    {name:"Address",id:"address",required:true},
]

const mandatoryTrainingCheckboxes = [
    "Moving and Handling",
    "Basic Life Support",
    "Intermediate Life Support",
    "Advanced Life Support",
    "Complaints Handling",
    "Handling Violence and Aggression",
    "Fire Safety",
    "COSHH",
    "RIDDOR",
    "Caldicott Protocols",
    "Data Protection",
    "Infection Control",
    "Lone Worker Training",
    "Equality & Inclusion",
    "Food Hygiene (where required to handle food)",
    "Personal Safety (Mental Health & Learning Dis’)",
    "Resuscitation of the Newborn (Midwifery)",
    "Interpretation of Cardiotocograph Traces (Midwifery)",
    "Practical",
]
export default function JoinFormModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [dateIsOpen, setDateIsOpen] = useState<boolean>(false)
    const [date, setDate] = useState<Date>()
    const nextDate = new Date()
    nextDate.setDate(new Date().getDate() + 1)
    const [formData, setFormData] = useState<{
        references:{
            name:string,
            status:string,
            address:string,
            telephone:string,
        }[]
    }>({
        references:[{
            name:"",
            status:"",
            address:"",
            telephone:"",
        }]
    })

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
                        <form>
                            <ModalHeader className="flex flex-col gap-1">
                                Application Form Carers
                            </ModalHeader>
                            <ModalBody>
                                <Select
                                    isRequired
                                    label="Position applied for"
                                    placeholder="Select an option"
                                    defaultSelectedKeys={["care giver"]}
                                    className="w-full"
                                    size="sm"
                                >
                                    <SelectItem key={"care giver"} value={"care giver"} >
                                        Care Giver
                                    </SelectItem>
                                </Select>
                                <Label className="text-base">Personal Information</Label>
                                {personalInfoInputs.map((data,index)=>(
                                    <Input
                                        key={index}
                                        isRequired={data.required}
                                        type="text"
                                        label={data.name}
                                        id={data.id}
                                        className="w-full"
                                        size="sm"
                                    />
                                ))
                                }
                                <div className="flex flex-row items-center space-x-1">
                                    <Input
                                        isRequired
                                        isReadOnly
                                        type="text"
                                        label="Please pick a date you are available for interview:"
                                        className="w-full"
                                        value={date ? format(date, "PPP") : "Pick a date"}
                                        size="sm"
                                    />
                                    <Button onClick={(e)=>{
                                        e.preventDefault()
                                        setDateIsOpen((prev)=>{
                                            return !prev
                                        })
                                    }} isIconOnly  radius="sm" variant="flat" color="primary" className="p-[10px] w-fit h-full">
                                        <CalendarIcon className="w-7 h-7 flex-none"/>
                                    </Button>
                                </div>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    fromDate={nextDate}
                                    className={cn("w-full hidden" , dateIsOpen && "block")}
                                    onSelect={setDate}
                                    initialFocus
                                />
                                {personalInfoCheckboxes.map((data,index)=>(
                                    <Checkbox key={index} id={"personalInfoCheckbox"+index} radius="full">{data}</Checkbox>
                                ))}
                                <Label className="text-base">Next of KIN</Label>
                                {kinInfoInputs.map((data,index)=>(
                                    <Input
                                        key={index}
                                        isRequired={data.required}
                                        type="text"
                                        label={data.name}
                                        id={data.id}
                                        className="w-full"
                                        size="sm"
                                    />
                                ))}
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Previous Employment</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        A full employment history must be detailed beginning with your current employment and covering all reasons for gaps in any given year.
                                    </Label>
                                </div>
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Mandatory Training</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        Please tick if you have completed the following training within the last 12 months. Please enclose copies of your training certificates.
                                    </Label>
                                </div>
                                {mandatoryTrainingCheckboxes.map((data,index)=>(
                                    <Checkbox key={index} id={"personalInfoCheckbox"+index} radius="full">{data}</Checkbox>
                                ))}
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Rehabilitation of offenders ACT 1974 – notice to offenders</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        Because of the nature of the work involved, the post for which you are applying is exempt from Section 4(2) of the Rehabilitation of Offenders Act 1974 by virtue of the Rehabilitation Offenders Act (Exemption Order 1975). This means that you are not entitled to withhold information relating to any convictions you may have had.
                                    </Label>
                                </div>
                                <Checkbox id={"personalInfoCheckbox"} radius="full">I do you have convictions to disclose</Checkbox>
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Additional Personal Details</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        Outside interests, leisure time activities and other personal information which you think may assist us in evaluating your application.
                                    </Label>
                                </div>
                                <Textarea
                                    label="Additional Personal Details"
                                    placeholder=""
                                />
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">References</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        Please give the name and address of at least two referees, one of whom must be your present employer or your most recent employer.
                                    </Label>
                                </div>
                                {formData.references.map((data,index)=>(
                                    <div key={"reference"+index} className="border-y-2 space-y-2 py-2">
                                        <Input
                                            key={index}
                                            type="text"
                                            label="Name"
                                            id={"reference"+index+"name"}
                                            className="w-full"
                                            size="sm"
                                            value={data.name}
                                            onChange={(e)=>{
                                                setFormData((prev)=>{
                                                    prev.references[index].name = e.target.value
                                                    return {...prev}
                                                })
                                            }}
                                        />
                                        <Input
                                            key={index}
                                            type="text"
                                            label="Status"
                                            id={"reference"+index+"status"}
                                            className="w-full"
                                            size="sm"
                                            value={data.status}
                                            onChange={(e)=>{
                                                setFormData((prev)=>{
                                                    prev.references[index].status = e.target.value
                                                    return {...prev}
                                                })
                                            }}
                                        />
                                        <Input
                                            key={index}
                                            type="text"
                                            label="Address"
                                            id={"reference"+index+"Address"}
                                            className="w-full"
                                            size="sm"
                                            value={data.address}
                                            onChange={(e)=>{
                                                setFormData((prev)=>{
                                                    prev.references[index].address = e.target.value
                                                    return {...prev}
                                                })
                                            }}
                                        />
                                        <Input
                                            key={index}
                                            type="tel"
                                            label="Telephone No."
                                            id={"reference"+index+"telephone"}
                                            className="w-full"
                                            size="sm"
                                            value={data.telephone}
                                            onChange={(e)=>{
                                                setFormData((prev)=>{
                                                    prev.references[index].telephone = e.target.value
                                                    return {...prev}
                                                })
                                            }}
                                        />
                                        <Button className="w-full" onClick={(e) => {
                                            e.preventDefault();
                                            setFormData((prev) => {
                                                prev.references.push({
                                                    name:"",
                                                    status:"",
                                                    address:"",
                                                    telephone:"",
                                                })
                                                return {...prev}
                                            })
                                            console.log(formData)

                                        }}>
                                            <FaPlus/>
                                        </Button>
                                        {index !== 0 && (
                                            <Button className="w-full" onClick={(e) => {
                                                e.preventDefault();
                                                setFormData((prev) => {
                                                    prev.references.pop()
                                                    return {...prev}
                                                })
                                                console.log(formData)
                                            }}>
                                                <FaMinus/>
                                            </Button>
                                        )}
                                    </div>
                                ))}
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
