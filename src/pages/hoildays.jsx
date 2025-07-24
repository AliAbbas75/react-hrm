import HolidayTable from "@/components/holiday-table";
import { useState, useEffect } from "react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"

import { AppSidebar } from "@/components/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { SiteHeader } from "@/components/site-header";

function Holidays() {
    const [currentMonth, setCurrentMonth] = useState(0);
    const [selectedMonth, setSelectedMonth] = useState(0);

    useEffect(() => {
        setCurrentMonth(selectedMonth);
    }, [selectedMonth])

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return (
        <>
            <SidebarProvider
                className="bg-background w-screen min-w-full"
                defaultOpen
                defaultInsetOpen
                defaultVariant="floating"
            >
                <AppSidebar variant="floating" />
                <SidebarInset className="border border-border rounded-3xl mr-8 w-full bg-background">
                    <SiteHeader title="Holidays" btnText="View Source" />
                    <div className="flex items-center justify-between p-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="w-auto">
                                Month:  {months[parseInt(currentMonth)] ?? "Select Month"}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuRadioGroup
                                    value={currentMonth}
                                    onValueChange={(value) => setSelectedMonth(parseInt(value))}
                                >
                                    {months.map((monthName, index) => (
                                        <DropdownMenuRadioItem key={index} value={String(index)}>
                                            {monthName}
                                        </DropdownMenuRadioItem>
                                    ))}
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <HolidayTable selectedMonth={currentMonth} />
                </SidebarInset>
            </SidebarProvider>






        </>



    );
}
export default Holidays;
