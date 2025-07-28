import React, { Suspense, useEffect, useState } from 'react';

const TableComponent = React.lazy(() => import("@/components/tanstack-table/TableComponent"))

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from '@/components/ui/button';
import DynamicBreadcrumb from '@/components/dynamicBreadCrumb';

function EmployeesPage() {
    const [employees, setEmployees] = useState([])
    const [columns, setColumns] = useState([
        { header: "Id", accessorKey: "id" },
        { header: "Name", accessorKey: "name" },
        { header: "Report To", accessorKey: "reportTo" },
        { header: "Working Email", accessorKey: "workingEmail" },
        { header: "Department", accessorKey: "department" },
        { header: "Location", accessorKey: "location" },
        { header: "Duration", accessorKey: "duration" },
        { header: "Status", accessorKey: "status" },
        { header: "Action", accessorKey: "action" },
    ])
    const [filterEmployees, setFilterEmployees] = useState([])
    const [filter, setFilter] = useState("")
    useEffect(() => {

        async function fetchData() {
            const apiEmployeeData = await fetch('http://localhost:3001/employees');
            const data = await apiEmployeeData.json();
            setEmployees(data);
            setFilterEmployees(data);
        }
        fetchData();
    }, [])



    useEffect(() => {
        if (filter === "Active") {
            filterActive()
            console.log("Applied filter")
        }
        else {
            resetFilter()
        }
    }, [filter])

    function filterActive() {
        const activeEmployees = employees.filter((emp) => {
            if (emp.status === "Active") {
                return true
            }
        });
        setFilterEmployees(activeEmployees);
    }
    function resetFilter() {
        setFilterEmployees(employees);
    }



    return (
        <>
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
                        <TableComponent
                            data={employees}
                            columns={columns}
                        />
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </>

    )
}

export default EmployeesPage;



//  <Table>
//                     <TableHeader>
//                         <TableRow className={""}>
//                             <TableHead className={"text-center font-bold"}>Name</TableHead>
//                             <TableHead className={"text-center font-bold"}>Report To</TableHead>
//                             <TableHead className={"text-center font-bold"}>Working Email</TableHead>
//                             <TableHead className={"text-center font-bold"}>Department</TableHead>
//                             <TableHead className={"text-center font-bold"}>Location</TableHead>
//                             <TableHead className={"text-center font-bold"}>Status</TableHead>
//                         </TableRow>
//                     </TableHeader>
//                     <TableBody>
//                         {filterEmployees.map((emp) => (
//                             <TableRow key={emp.id}>
//                                 <TableCell>{emp.name}</TableCell>
//                                 <TableCell>{emp.reportTo}</TableCell>
//                                 <TableCell>{emp.workingEmail}</TableCell>
//                                 <TableCell>{emp.department}</TableCell>
//                                 <TableCell>{emp.location}</TableCell>
//                                 <TableCell>
//                                     <Badge variant={emp.status === "Active" ? "success" : "destructive"}>
//                                         {emp.status}
//                                     </Badge>
//                                 </TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>