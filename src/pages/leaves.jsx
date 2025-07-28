import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import TableComponent from "@/components/tanstack-table/TableComponent";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import DynamicBreadcrumb from "@/components/dynamicBreadCrumb";
import { useEffect, useState } from "react";


function Leaves() {
    const [leavesData, setLeavesData] = useState([]);
    const [columns, setColumns] = useState([
        { header: "Employee id", accessorKey: "employeeId" },
        { header: "Leave Type", accessorKey: "leaveType" },
        { header: "Start Date", accessorKey: "startDate" },
        { header: "End Date", accessorKey: "endDate" },
        { header: "Number of Days", accessorKey: "numberOfDays" },
        { header: "Status", accessorKey: "status" },
        { header: "Reason", accessorKey: "reason" },
    ]);

    useEffect(() => {

        async function fetchData() {
            const attendace = await fetch('http://localhost:3001/leaves');
            const data = await attendace.json();
            setLeavesData(data);
            setColumns(columns);
            console.log(data);
        }
        fetchData();

    }, [])

    useEffect(() => {


    }, [leavesData]);


    return (
        <SidebarProvider
                        className="flex h-screen w-full"
                        defaultOpen
                        defaultInsetOpen
                    >
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

                <SiteHeader title="Leaves Details" btnText="View Source" />
                <TableComponent data={leavesData} columns={columns} />

            </SidebarInset>
            </div>

        </SidebarProvider>

    )
}

export default Leaves;