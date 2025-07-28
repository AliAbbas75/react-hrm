import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import DynamicBreadcrumb from "@/components/dynamicBreadCrumb"
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog"
import React, { useState, useEffect } from "react"
import DepartmentForm from "@/components/department/DepartmentForm"
import UpdateForm from "@/components/department/UpdateForm"
import { CircleXIcon, SquarePenIcon } from "lucide-react"
import DeleteRow from "@/components/department/DeleteRow"
const TableComponent = React.lazy(() => import("@/components/tanstack-table/TableComponent"));

export default function Department() {

    const [departments, setDepartments] = useState([]);
    const [columns, setColumns] = useState([
        { header: "Name", accessorKey: "name" },
        { header: "Employee Count", accessorKey: "employeeCount" }
    ]);
    const [selectedRow, setSelectedRow] = useState(null)
    const [deleteRow, setDeleteRow] = useState(null)

    useEffect(() => {

        async function fetchData() {
            const departmentData = await fetch('http://localhost:3001/departments');
            const data = await departmentData.json();
            console.log(data);
            setDepartments(data);
        }
        fetchData();
    }, [])



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
                <SiteHeader />
                <SidebarInset className="flex flex-col border border-border rounded-3xl bg-background">
                    <div className='px-10 py-2'>
                        <DynamicBreadcrumb />
                    </div>
                    <div>
                        <Dialog>
                            <DialogTitle title="Add Department" />
                            <DialogTrigger asChild>
                                <Button>Add Department</Button>
                            </DialogTrigger>
                            <DialogContent aria-describedby="department-form">
                                <DepartmentForm />

                            </DialogContent>
                        </Dialog>
                        <UpdateForm
                            rowData={selectedRow}
                            onClose={() => setSelectedRow(null)}
                            onSuccess={() => {
                                setSelectedRow(null)
                                refetch?.() // optional: trigger data refresh
                            }}
                        />
                        <DeleteRow
                            rowData={deleteRow}
                            onClose={() => setDeleteRow(null)}
                            onSuccess={() => {
                                setDeleteRow(null)
                                refetch?.()
                            }} />
                        <TableComponent
                            data={departments}
                            columns={columns}
                            actions={(row) => (
                                <div className="flex flex-row gap-1 items-center justify-center">
                                    <Button asChild variant="ghost" onClick={() => setSelectedRow(row.original)}>
                                        <div><SquarePenIcon /></div>
                                    </Button>

                                    <Button asChild variant="destructive" onClick={() => setDeleteRow(row.original)}>
                                        <div><CircleXIcon /></div>
                                    </Button>
                                </div>

                            )}
                        />
                    </div>

                </SidebarInset>
            </div>
        </SidebarProvider>

    )
}


