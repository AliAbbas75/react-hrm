import { Icon3dCubeSphere, IconCirclePlusFilled, IconMail, IconUserBolt, IconCube3dSphere } from "@tabler/icons-react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

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
        <Collapsible>
          <SidebarMenu>
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton asChild>
                  <div className="flex items-center justify-between ml-0 w-full">
                    <div className="flex items-center gap-2">
                      <IconMail className="h-4 w-4" />
                      <span>Employee</span>
                    </div>
                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </div>
                </SidebarMenuButton>
              </CollapsibleTrigger>
            </SidebarMenuItem>
            <CollapsibleContent>

              <SidebarMenuItem>
                <Link to={"/employees"}>
                  <SidebarMenuButton asChild>
                    <div className="flex flex-row gap-2 w-full">
                      <IconCube3dSphere />
                      <span>Employees</span>
                    </div>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link to={"/department"}>
                  <SidebarMenuButton asChild>
                    <div className="flex flex-row gap-2 w-full">
                      <IconUserBolt />
                      <span>Dept</span>
                    </div>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <Link to={"/designation"}>
                  <SidebarMenuButton asChild>
                    <div className="flex flex-row gap-2 w-full">
                      <IconCube3dSphere />
                      <span>Designation</span>
                    </div>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>

            </CollapsibleContent>
          </SidebarMenu>
        </Collapsible>
      </SidebarGroupContent>
    </SidebarGroup>

  );
}
