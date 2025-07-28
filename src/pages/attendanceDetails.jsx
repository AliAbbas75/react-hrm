import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react";
import { isSunday } from "date-fns";
import { Badge } from "@/components/ui/badge";
import DynamicBreadcrumb from "@/components/dynamicBreadCrumb";
import TableComponent from "@/components/tanstack-table/TableComponent";


function AttendanceDetails() {
    const [attendanceData, setAttendanceData] = useState([]);
    const [columns, setColumns] = useState([
        { header: "Employee ID", accessorKey: "employeeId" },
        { header: "Status", accessorKey: "status" },
        { header: "Clock In", accessorKey: "clockIn" },
        { header: "Clock Out", accessorKey: "clockOut" },
        { header: "Date", accessorKey: "date" },
    ]);
    const [presentCount, setPresentCount] = useState(0);
    const [totalDays, setTotalDays] = useState(0);
    const [lateDays, setLateDays] = useState(0);
    const [totalHoursWorked, setTotalHorsWorked] = useState(
        {
            hours: 0,
            minutes: 0
        }
    );
    useEffect(() => {

        async function fetchData() {
            const attendace = await fetch('http://localhost:3001/attendance');
            const data = await attendace.json();
            setAttendanceData(data);
            setColumns(columns);
        }
        fetchData();

    }, [])



    function isLate(clockInTime, threshold = '09:10') {

        if (!clockInTime) null;
        const [inH, inM] = clockInTime.split(":").map(Number);
        const [tH, tM] = threshold.split(":").map(Number);


        return inH > tH || (inH === tH && inM > tM);

    }

    function calculateTotalHours() {
        let totalWork = 0

        attendanceData.forEach((day) => {
            if (day.clockIn && day.clockOut) {
                const [inH, inM] = day.clockIn.split(":").map(Number);
                const [outH, outM] = day.clockOut.split(":").map(Number);
                const totalWorkInMinutes = ((outH * 60) + outM) - ((inH * 60) + inM);
                totalWork += totalWorkInMinutes;
            }
        });
        const hours = Math.floor(totalWork / 60);
        const minutes = totalWork - (hours * 60);
        return { hours, minutes }
    }

    useEffect(() => {
        console.log(attendanceData);
        const count = attendanceData.filter(day => day.status === "Present").length;
        setPresentCount(count);
        const daysCount = attendanceData.filter(day => day.date).length;
        const weekends = attendanceData.filter(day => isSunday(day.date)).length;
        const workingDaysCount = daysCount - weekends;
        setTotalDays(workingDaysCount);
        const lateCount = attendanceData.filter(day => day.status === "Present" && isLate(day.clockIn)).length;
        setLateDays(lateCount);
        const workHours = calculateTotalHours();
        setTotalHorsWorked(workHours);

    }, [attendanceData])


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
                <Badge className="w-full h-10 text-lg bg-accent" variant="outline">Present: {presentCount} Total Days: {totalDays} Late: {lateDays} Hours Worked: {totalHoursWorked.hours}</Badge>
                <TableComponent data={attendanceData} columns={columns} />
            </SidebarInset>
            </div>

        </SidebarProvider>

    )
}

export default AttendanceDetails;



{/* <Table className={"m-4 overflow-x-clip"}>
                    <TableCaption>Total Days in 2025</TableCaption>
                    <TableHeader className={""}>
                        <TableRow>
                            <TableHead className="text-center font-bold text-xl">Status</TableHead>
                            <TableHead className="text-center font-bold text-xl">Clock In</TableHead>

                            <TableHead className="text-center font-bold text-xl">Clock Out</TableHead>

                            <TableHead className="text-center font-bold text-xl">Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            attendanceData.map((day, index) => 

                                 (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            {day.status}
                                            <div className="text-xs text-red-500">
                                                {day.status === "Present" && isLate(day.clockIn) ? "(Late)" : ""}
                                            </div>
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {day.clockIn}
                                        </TableCell>
                                        <TableCell className="font-medium">
                                            {day.clockOut}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {day.date}
                                        </TableCell>
                                    </TableRow>)

                            )
                        }
                    </TableBody>
                </Table> */}