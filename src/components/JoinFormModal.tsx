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
    Checkbox, Textarea, SelectSection
} from "@nextui-org/react";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import {addDays, format} from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {FaMinus, FaPlus} from "react-icons/fa";
import {DateRange} from "react-day-picker";

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

const genders = [
    "Male",
    "Female",
    "I do not wish to disclose this"
]

const race = [
    {group:"Asian or Asian British",items:["Bangladeshi","Indian","Pakistani","Any other Asian background"]},
    {group:"Mixed Raced",items:["White & Asian","White & Black African","White & Black Caribbean","Any other missed background"]},
    {group:"Other Ethnic Group",items:["Chinese","Any other ethnic group","I do not want to disclose this"]},
    {group:"Black or Black British",items:["African","Caribbean","Any other Black background"]},
    {group:"White",items:["British","Irish","Any other White background"]},
]

const equality = [
    "Lesbian","Gay","Bisexual","Atheism","Sikhism","Buddhism","Judaism","Christianity","Hinduism"
]


export default function JoinFormModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [dateIsOpen, setDateIsOpen] = useState<boolean>(false)
    const nextDate = new Date()
    nextDate.setDate(new Date().getDate() + 1)
    const [formData, setFormData] = useState<{
        interviewDate: Date,
        interviewDateIsOpen: boolean,
        employmentHistory:{
            date: DateRange | undefined,
            employer: string,
            position: string,
            salaryBenefit: string,
            reasonForLeaving: string,
        }[],
        educationHistory:{
            institute: string,
            year: number,
            result: string,
        }[],
        references:{
            name:string,
            status:string,
            address:string,
            telephone:string,
        }[]
        dob: Date,
        dobIsOpen: boolean,
        race: Set<never>,
        equality: Set<never>,
    }>({
        interviewDate : new Date(),
        interviewDateIsOpen: false,
        employmentHistory:[{
            date: {
                from: new Date(),
                to: addDays(new Date(), 1),
            },
            employer: "",
            position: "",
            salaryBenefit: "",
            reasonForLeaving: "",
        }],
        educationHistory:[{
            institute: "",
            year: new Date().getFullYear(),
            result: "",
        }],
        references:[{
            name:"",
            status:"",
            address:"",
            telephone:"",
        }],
        dob: new Date(),
        dobIsOpen: false,
        race:new Set([]),
        equality:new Set([]),
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
                                        key={"personalInfoInputs"+index}
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
                                        value={formData.interviewDate ? format(formData.interviewDate, "PPP") : "Pick a date"}
                                        size="sm"
                                    />
                                    <Button onClick={(e)=>{
                                        e.preventDefault()
                                        setFormData((prev)=>{
                                            prev.interviewDateIsOpen = !prev.interviewDateIsOpen
                                            return {...prev}
                                        })
                                    }} isIconOnly  radius="sm" variant="flat" color="primary" className="p-[10px] w-fit h-full">
                                        <CalendarIcon className="w-7 h-7 flex-none"/>
                                    </Button>
                                </div>
                                <Calendar
                                    mode="single"
                                    selected={formData.interviewDate}
                                    fromDate={addDays(new Date(), 1)}
                                    className={cn("w-full hidden" , formData.interviewDateIsOpen && "block")}
                                    onSelect={(e)=>
                                        setFormData((prev)=>{
                                        if(e) prev.interviewDate = e
                                        return {...prev}
                                    })}
                                    initialFocus
                                />
                                {personalInfoCheckboxes.map((data,index)=>(
                                    <Checkbox key={"personalInfoCheckboxes"+index} id={"personalInfoCheckboxes"+index} radius="full">{data}</Checkbox>
                                ))}
                                <Label className="text-base">Next of KIN</Label>
                                {kinInfoInputs.map((data,index)=>(
                                    <Input
                                        key={"kinInfoInputs"+index}
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
                                <div className="border-y-2 space-y-2 py-2">
                                    {formData.employmentHistory.map((data,index)=>(
                                        <div key={"employmentHistory"+index} className="space-y-2 py-2">
                                            <div className="flex flex-row items-center space-x-1">
                                                <Input
                                                    isReadOnly
                                                    type="text"
                                                    label="Date (From-To)"
                                                    className="w-full"
                                                    value={formData.employmentHistory[index].date?.from ? (
                                                        formData.employmentHistory[index].date?.to ? (
                                                            format(formData.employmentHistory[index].date?.from as Date, "LLL dd, y") + "-" + format(formData.employmentHistory[index].date?.to as Date, "LLL dd, y")
                                                        ) : (
                                                            format(formData.employmentHistory[index].date?.from as Date, "LLL dd, y")
                                                        )
                                                    ) : "Pick a date"}
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
                                                mode="range"
                                                selected={formData.employmentHistory[index].date}
                                                className={cn("w-full hidden" , dateIsOpen && "block")}
                                                onSelect={(e) =>
                                                    setFormData((prev) => {
                                                        if (e) prev.employmentHistory[index].date = e
                                                        return {...prev}
                                                    })
                                                }
                                                initialFocus
                                            />
                                            <Input
                                                type="text"
                                                label="Employer’s name(most recent first)"
                                                id={"employmentHistory"+index+"employer"}
                                                className="w-full"
                                                size="sm"
                                                value={data.employer}
                                                onChange={(e)=>{
                                                    setFormData((prev)=>{
                                                        prev.employmentHistory[index].employer = e.target.value
                                                        return {...prev}
                                                    })
                                                }}
                                            />
                                            <Input
                                                type="text"
                                                label="Position held"
                                                id={"employmentHistory"+index+"position"}
                                                className="w-full"
                                                size="sm"
                                                value={data.position}
                                                onChange={(e)=>{
                                                    setFormData((prev)=>{
                                                        prev.employmentHistory[index].position = e.target.value
                                                        return {...prev}
                                                    })
                                                }}
                                            />
                                            <Input
                                                type="text"
                                                label="Salary & Benefits"
                                                id={"employmentHistory"+index+"salaryBenefit"}
                                                className="w-full"
                                                size="sm"
                                                value={data.salaryBenefit}
                                                onChange={(e)=>{
                                                    setFormData((prev)=>{
                                                        prev.employmentHistory[index].salaryBenefit = e.target.value
                                                        return {...prev}
                                                    })
                                                }}
                                            />
                                            <Input
                                                type="tel"
                                                label="Reason for leaving"
                                                id={"employmentHistory"+index+"reasonForLeaving"}
                                                className="w-full"
                                                size="sm"
                                                value={data.reasonForLeaving}
                                                onChange={(e)=>{
                                                    setFormData((prev)=>{
                                                        prev.employmentHistory[index].reasonForLeaving = e.target.value
                                                        return {...prev}
                                                    })
                                                }}
                                            />
                                            <Button className="w-full" onClick={(e) => {
                                                e.preventDefault();
                                                setFormData((prev) => {
                                                    prev.employmentHistory.push({
                                                        date: {
                                                            from: new Date(),
                                                            to: addDays(new Date(), 1),
                                                        },
                                                        employer: "",
                                                        position: "",
                                                        salaryBenefit: "",
                                                        reasonForLeaving: "",
                                                    })
                                                    return {...prev}
                                                })
                                            }}>
                                                <FaPlus/>
                                            </Button>
                                            {index !== 0 && (
                                                <Button className="w-full" onClick={(e) => {
                                                    e.preventDefault();
                                                    setFormData((prev) => {
                                                        prev.employmentHistory.pop()
                                                        return {...prev}
                                                    })
                                                }}>
                                                    <FaMinus/>
                                                </Button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Previous Education</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        Original documents as proof of qualification will be required at interview
                                    </Label>
                                </div>
                                <div className="border-y-2 space-y-2 py-2">
                                    {formData.educationHistory.map((data,index)=>(
                                        <div key={"educationHistory"+index} className="space-y-2 py-2">
                                            <Input
                                                type="text"
                                                label="Secondary School / College / University"
                                                id={"educationHistory"+index+"institute"}
                                                className="w-full"
                                                size="sm"
                                                value={data.institute}
                                                onChange={(e)=>{
                                                    setFormData((prev)=>{
                                                        prev.educationHistory[index].institute = e.target.value
                                                        return {...prev}
                                                    })
                                                }}
                                            />
                                            <Input
                                                type="number"
                                                label="Examinations taken"
                                                id={"educationHistory"+index+"year"}
                                                className="w-full"
                                                size="sm"
                                                value={data.year as any}
                                                onChange={(e)=>{
                                                    setFormData((prev)=>{
                                                        prev.educationHistory[index].year = Number(e.target.value)
                                                        return {...prev}
                                                    })
                                                }}
                                            />
                                            <Input
                                                type="text"
                                                label="Result"
                                                id={"educationHistory"+index+"result"}
                                                className="w-full"
                                                size="sm"
                                                value={data.result}
                                                onChange={(e)=>{
                                                    setFormData((prev)=>{
                                                        prev.educationHistory[index].result = e.target.value
                                                        return {...prev}
                                                    })
                                                }}
                                            />
                                            <Button className="w-full" onClick={(e) => {
                                                e.preventDefault();
                                                setFormData((prev) => {
                                                    prev.educationHistory.push({
                                                        institute: "",
                                                        year: new Date().getFullYear(),
                                                        result: "",
                                                    })
                                                    return {...prev}
                                                })
                                            }}>
                                                <FaPlus/>
                                            </Button>
                                            {index !== 0 && (
                                                <Button className="w-full" onClick={(e) => {
                                                    e.preventDefault();
                                                    setFormData((prev) => {
                                                        prev.educationHistory.pop()
                                                        return {...prev}
                                                    })
                                                }}>
                                                    <FaMinus/>
                                                </Button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Mandatory Training</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        Please tick if you have completed the following training within the last 12 months. Please enclose copies of your training certificates.
                                    </Label>
                                </div>
                                {mandatoryTrainingCheckboxes.map((data,index)=>(
                                    <Checkbox key={"mandatoryTrainingCheckboxes"+index} id={"personalInfoCheckboxes"+index} radius="full">{data}</Checkbox>
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
                                <div className="border-y-2 space-y-2 py-2">
                                    {formData.references.map((data,index)=>(
                                        <div key={"reference"+index} className="space-y-2 py-2">
                                            <Input
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
                                                    console.log(formData.references)
                                                }}>
                                                    <FaMinus/>
                                                </Button>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Equal Opportunities Monitoring</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        This section of the application will be detached and used for monitoring purposes only. Our organisation recognise and actively promote the benefits of a diverse workforce and are committed to treating all employees with dignity and respect regardless of race, gender, disability, age, sexual orientation religion or belief. We welcome applications from all sections of the community.
                                    </Label>
                                </div>
                                <div className="flex flex-row items-center space-x-1">
                                    <Input
                                        isReadOnly
                                        type="text"
                                        label="Date of Birth:"
                                        className="w-full"
                                        value={formData.dob ? format(formData.dob, "PPP") : "Pick a date"}
                                        size="sm"
                                    />
                                    <Button onClick={(e)=>{
                                        e.preventDefault()
                                        setFormData((prev)=>{
                                            prev.dobIsOpen = !prev.dobIsOpen
                                            return {...prev}
                                        })
                                    }} isIconOnly  radius="sm" variant="flat" color="primary" className="p-[10px] w-fit h-full">
                                        <CalendarIcon className="w-7 h-7 flex-none"/>
                                    </Button>
                                </div>
                                <Calendar
                                    mode="single"
                                    selected={formData.dob}
                                    className={cn("w-full hidden" , formData.dobIsOpen && "block")}
                                    onSelect={(e)=>
                                        setFormData((prev)=>{
                                            if(e) prev.dob = e
                                            return {...prev}
                                        })}
                                    initialFocus
                                />
                                <Select
                                    label="Gender"
                                    placeholder="Select an option"
                                    className="w-full"
                                    size="sm"
                                >
                                    {genders.map((data,index)=>(
                                        <SelectItem key={"gender"+index} value={data} >
                                            {data}
                                        </SelectItem>
                                    ))}
                                </Select>
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Race Relations (Amendment) 2000</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        I would describe my ethnic origin as (please indicate with a tick
                                    </Label>
                                </div>
                                <Select
                                    isRequired
                                    aria-label="Race"
                                    placeholder="Select an option"
                                    className="w-full"
                                    size="sm"
                                    /*defaultSelectedKeys={formData.race}
                                    onSelectionChange={(e)=>{
                                        setFormData((prev)=>{
                                            prev.race = e
                                            return {...prev}
                                        })
                                    }}*/
                                >
                                    {race.map((data,index)=>(
                                        <SelectSection key={data.group} title={data.group}>
                                            {data.items.map((itemData,itemIndex)=>{
                                                return(
                                                    <SelectItem key={itemData} value={itemData} >
                                                        {itemData}
                                                    </SelectItem>
                                                    )
                                            })}
                                        </SelectSection>
                                    ))}
                                </Select>
                                <div className="flex flex-col">
                                    <Label className="text-base select-none">Employment Equality Regulations 2003I</Label>
                                    <Label className="text-[10px] text-gray-500 select-none">
                                        Please select the option which best Please indicate your religion or belief describes your sexuality.
                                    </Label>
                                </div>
                                <Select
                                    isRequired
                                    aria-label="Race"
                                    placeholder="Select an option"
                                    className="w-full"
                                    size="sm"
                                    /*defaultSelectedKeys={[formData.equality as string]}
                                    onChange={(e)=>{
                                        setFormData((prev)=>{
                                            prev.equality = e.target.value
                                            return {...prev}
                                        })
                                    }}*/
                                >
                                    {equality.map((data,Index)=>{
                                        return(
                                            <SelectItem key={data} value={data} >
                                                {data}
                                            </SelectItem>
                                            )
                                    })}
                                </Select>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
