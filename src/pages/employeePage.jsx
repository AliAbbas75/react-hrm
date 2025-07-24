import React, { useEffect, useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableCell, TableBody } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from '@/components/ui/button';

function EmployeesPage() {
    const [employees, setEmployees] = useState([])
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
        <SidebarProvider
                        className="bg-background w-screen min-w-full"
                        defaultOpen
                        defaultInsetOpen
                        defaultVariant="floating"
                    >
                        <AppSidebar variant="floating" />
                        <SidebarInset className="border border-border rounded-3xl mr-8 w-full bg-background">
                
                <SiteHeader title="Employees" btnText="View Source" />

                <div className='flex w-full justify-end items-end px-5 py-2'>
                    <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Filter</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuRadioGroup value={filter} onValueChange={setFilter}>
                            <DropdownMenuRadioItem value="Active">Active</DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="">Reset</DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow className={""}>
                            <TableHead className={"text-center font-bold"}>Name</TableHead>
                            <TableHead className={"text-center font-bold"}>Report To</TableHead>
                            <TableHead className={"text-center font-bold"}>Working Email</TableHead>
                            <TableHead className={"text-center font-bold"}>Department</TableHead>
                            <TableHead className={"text-center font-bold"}>Location</TableHead>
                            <TableHead className={"text-center font-bold"}>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filterEmployees.map((emp) => (
                            <TableRow key={emp.id}>
                                <TableCell>{emp.name}</TableCell>
                                <TableCell>{emp.reportTo}</TableCell>
                                <TableCell>{emp.workingEmail}</TableCell>
                                <TableCell>{emp.department}</TableCell>
                                <TableCell>{emp.location}</TableCell>
                                <TableCell>
                                    <Badge variant={emp.status === "Active" ? "success" : "destructive"}>
                                        {emp.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </SidebarInset>
        </SidebarProvider>

    )
}

export default EmployeesPage;