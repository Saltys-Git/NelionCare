import {Spinner} from "@nextui-org/react";
import {Label} from "@/components/ui/label";

interface loadingCompProps {
    loading: boolean,
    loader: "shimmer"|"spinner"
    children: React.ReactNode,
    className?: string
}
export default function LoadingComp({loading, loader, children, className}:loadingCompProps) {
    return (
        <div className={className}>
            {loading?
                <div className="flex items-center justify-center h-full w-full relative">
                    <div className="flex flex-col items-center justify-center space-y-2 animate-pulse absolute z-50 w-full h-full bg-gray-200/70 select-none">
                        {loader==="spinner" &&
                            <Spinner size="lg"/>
                        }
                        {loader==="shimmer" &&
                            <div className="flex space-x-2 animate-pulse">
                                <div className="w-3 h-3 bg-primary-cyan rounded-full"></div>
                                <div className="w-3 h-3 bg-primary-cyan rounded-full"></div>
                                <div className="w-3 h-3 bg-primary-cyan rounded-full"></div>
                            </div>
                        }
                        <Label className="text-base text-primary-cyan">Please wait</Label>
                    </div>
                    <div className="relative w-full h-full">
                        {children}
                    </div>
                </div>
                :
                children
            }
        </div>

    )
}