import { Table, TableCaption, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { isSunday, isSaturday, format } from "date-fns";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";


function HolidayTable({ selectedMonth = 0 }) {

    const [month, setMonth] = useState(0);
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
            setMonth(selectedMonth);
        }, [selectedMonth]);

    useEffect(()=>{
        setHolidays(getHolidaysInMonth(month));

    },[month])
    


    function getHolidaysInMonth(month) {
        const holidaysInMonth = [];
        let date = new Date(2025, month, 1);
        while (date.getMonth() === month) {
            if (isSunday(date) || isSaturday(date)) {
                holidaysInMonth.push({
                    name: isSunday(date) ? "Sunday" : "Saturday",
                    date: format(date, 'yyyy-MM-dd')
                });
            };
            date.setDate(date.getDate() + 1);
        }
        return holidaysInMonth;
    }




    return (

                <Table className={"m-4"}>
                    <TableCaption>Total Days in 2025</TableCaption>
                    <TableHeader className={""}>
                        <TableRow>
                            <TableHead className="text-center font-bold text-xl">Name</TableHead>
                            <TableHead className="text-center font-bold text-xl">Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {
                            holidays.map((day, index) => {

                                return (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">
                                            {day.name}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            {day.date}
                                        </TableCell>
                                    </TableRow>)

                            })
                        }
                    </TableBody>
                </Table>

           
    );
}

export default HolidayTable;


