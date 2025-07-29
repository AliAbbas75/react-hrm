import {  IconCirclePlusFilled, IconMail, IconUserBolt, IconCube3dSphere } from "@tabler/icons-react";
import {  BadgeDollarSignIcon, LayoutListIcon,MonitorIcon,User2Icon,Building2Icon,ShieldUserIcon,ShieldAlertIcon,AlertOctagonIcon } from "lucide-react";
import { Button } from "@/components/ui/button"
import CollapsibleNavItem from "@/components/collapsible-nav-item";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom";

export function NavMain({
  items,

}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear">
              <IconCirclePlusFilled />
              <span>Quick Create</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline">
              <IconMail />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <Link to={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        
        <CollapsibleNavItem
            itemLabel={"Assets"} mainIcon = {<MonitorIcon className="w-4 h-4"/>}
            subItem={[
              { link: "/", icon: <BadgeDollarSignIcon />, title: 'Asset Type' },
              { link: "/assets", icon: <LayoutListIcon />, title: 'Asset Details' }
            ]} />
        
        <CollapsibleNavItem
            itemLabel={"OffBoardings"} mainIcon = {<ShieldAlertIcon className="w-4 h-4"/>}
            subItem={[
              { link: "/warnings", icon: <AlertOctagonIcon />, title: 'Warnings' },
              { link: "/resignations", icon: <LayoutListIcon />, title: 'Resignations' }
            ]} />
          
          {/* {Always Pass the array of object in order that you want the subItem to appear in} */}
          <CollapsibleNavItem
            itemLabel={"Employees"} mainIcon = {<User2Icon className="w-4 h-4"/>}
            subItem={[
              { link: "/designation", icon: <ShieldUserIcon />, title: 'Designations' },
              { link: "/department", icon: <Building2Icon />, title: 'Departments' }
            ]} />
            
      </SidebarGroupContent>
    </SidebarGroup>

  );
}



// <SidebarMenu>
//             <SidebarMenuItem>
//               <CollapsibleTrigger asChild>
//                 <SidebarMenuButton asChild>
//                   <div className="flex items-center gap-2 w-full">
//                     <IconMail className="h-4 w-4" />
//                     <p className="mr-10">Employee</p>
//                     <RotatingIcon className="mr-0" />
//                   </div>
//                 </SidebarMenuButton>
//               </CollapsibleTrigger>
//             </SidebarMenuItem>
//             <CollapsibleContent>

//               <SidebarMenuItem>
//                 <Link to={"/employees"}>
//                   <SidebarMenuButton asChild>
//                     <div className="flex flex-row gap-2 w-full">
//                       <IconCube3dSphere />
//                       <span>Employees</span>
//                     </div>
//                   </SidebarMenuButton>
//                 </Link>
//               </SidebarMenuItem>

//               <SidebarMenuItem>
//                 <Link to={"/department"}>
//                   <SidebarMenuButton asChild>
//                     <div className="flex flex-row gap-2 w-full">
//                       <IconUserBolt />
//                       <span>Dept</span>
//                     </div>
//                   </SidebarMenuButton>
//                 </Link>
//               </SidebarMenuItem>

//               <SidebarMenuItem>
//                 <Link to={"/designation"}>
//                   <SidebarMenuButton asChild>
//                     <div className="flex flex-row gap-2 w-full">
//                       <IconCube3dSphere />
//                       <span>Designation</span>
//                     </div>
//                   </SidebarMenuButton>
//                 </Link>
//               </SidebarMenuItem>

//             </CollapsibleContent>
//           </SidebarMenu>