"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Icons } from "@/components/icons"
import { FormProvider } from "@tutim/headless";
import { TutimWizard, defaultFields } from "@tutim/fields";


const colors = [
  { name: 'Aquamarine', value: 'Aquamarine' },
  { name: 'BlueViolet', value: 'BlueViolet' },
  { name: 'Chartreuse', value: 'Chartreuse' },
  { name: 'CornflowerBlue', value: 'CornflowerBlue' },
];

interface NavigationMenuDemoProps {
  onColorChange: (color: string) => void;
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]


export function NavigationMenuDemo({ onColorChange }: NavigationMenuDemoProps) {
  const [color, setColor] = useState('Purple');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const handleRegistrationClick = () => {
    setShowRegistrationForm(true);
  };

  const handleColorClick = (color: string) => {
    onColorChange(color);
  };

  
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Choosing a page color</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              
            {colors.map((color) => (
                <ListItem key={color.name} onClick={() => handleColorClick(color.value)}>
                  {color.name}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {showRegistrationForm ? (
            <FormProvider
              fieldComponents={defaultFields}
              options={{ clientId: "d2b46f87-566f-4439-94c8-030bd57f8676" }}
            >
              <TutimWizard onSubmit={console.log} formId="823" />
            </FormProvider>
          ) : (
            <Link href="sivan/register" rel="noopener noreferrer">
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                // onClick={handleRegistrationClick}
              >
                Registration
              </NavigationMenuLink>
            </Link>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"





