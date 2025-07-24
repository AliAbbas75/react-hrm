import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react";
import { isSunday } from "date-fns";


function Leaves() {
    const [leavesData, setLeavesData] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const attendace = await fetch('http://localhost:3001/leaves');
            const data = await attendace.json();
            setLeavesData(data);
            console.log(data);
        }
        fetchData();

    }, [])

    useEffect(() => {


    }, [leavesData]);


    return (
        <SidebarProvider
            className="bg-background w-screen min-w-full"
            defaultOpen
            defaultInsetOpen
            defaultVariant="floating"
        >
            <AppSidebar variant="floating" />
            <SidebarInset className="border border-border rounded-3xl mr-8 w-full bg-background">

                <SiteHeader title="Leaves Details" btnText="View Source" />

                <Table className={"m-4 overflow-x-clip"}>
                    <TableCaption>Total Days in 2025</TableCaption>
                    <TableHeader className={""}>
                        <TableRow>
                            <TableHead className="text-center font-bold text-xl">Leave Type</TableHead>
                            <TableHead className="text-center font-bold text-xl">Start Date</TableHead>

                            <TableHead className="text-center font-bold text-xl">End Date</TableHead>

                            <TableHead className="text-center font-bold text-xl">Number of Days</TableHead>
                            <TableHead className="text-center font-bold text-xl">Status</TableHead>
                            <TableHead className="text-center font-bold text-xl">Reason</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            leavesData.map((leave, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">
                                        {leave.leaveType}
                                    </TableCell>
                                    <TableCell>
                                        {leave.startDate}
                                    </TableCell>
                                    <TableCell>
                                        {leave.endDate}
                                    </TableCell>
                                    <TableCell className="text-center">
                                        {leave.numberOfDays}
                                    </TableCell>
                                    <TableCell>
                                        {leave.status}
                                    </TableCell>
                                    <TableCell>
                                        {leave.reason}
                                    </TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
            </SidebarInset>

        </SidebarProvider>

    )
}

export default Leaves;