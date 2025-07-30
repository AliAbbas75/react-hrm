import HolidayTable from "@/components/holiday-table";
import { useState, useEffect } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import DynamicBreadcrumb from "@/components/dynamicBreadCrumb";

import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header";
import Calendar from "@/components/calendar/Calendar";

function Holidays() {
    
    return (
        <>
        <SidebarProvider
            className="flex h-screen w-full"
            defaultOpen
            defaultInsetOpen>
            {/* Sidebar */}
            <AppSidebar />
            {/* Main Content */}
            <div className="flex flex-col flex-1">
                <SiteHeader>
                </SiteHeader>
            <SidebarInset className="flex flex-col border border-border rounded-3xl bg-background">
                <div className='px-10 py-2'>
                    <DynamicBreadcrumb />
                </div>
                <div className=" w-auto m-10">
                    <Calendar></Calendar>
                </div>
            </SidebarInset>
            </div>
        </SidebarProvider>
        </>



    );
}
export default Holidays;


// 
//                     <div className="flex items-center justify-between p-4">
                        
//                     </div>

//                     <HolidayTable selectedMonth={currentMonth} />
//                 </SidebarInset>
//                 </div>
//             </SidebarProvider>



// const [currentMonth, setCurrentMonth] = useState(0);
//     const [selectedMonth, setSelectedMonth] = useState(0);

//     useEffect(() => {
//         setCurrentMonth(selectedMonth);
//     }, [selectedMonth])

//     const months = [
//         "January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"
//     ];