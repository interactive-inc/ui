import { act, render, screen, waitFor, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createAgent } from "@ui-sdk/react/agent"
import { useState } from "react"
import { afterEach, expect, test, vi } from "vitest"
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

const desktopMatchMedia = window.matchMedia
const desktopWidth = window.innerWidth

afterEach(() => {
  window.matchMedia = desktopMatchMedia
  window.innerWidth = desktopWidth
})

function useMobileViewport() {
  window.innerWidth = 375
}

function State() {
  const sidebar = useSidebar()
  return (
    <output>
      {sidebar.state}/{sidebar.isMobile ? "mobile" : "desktop"}/
      {sidebar.openMobile ? "sheet-open" : "sheet-closed"}
    </output>
  )
}

function App(props: {
  collapsible?: "offcanvas" | "icon"
  defaultOpen?: boolean
  onOpenChange?: React.ComponentProps<typeof SidebarProvider>["onOpenChange"]
  onTriggerClick?: () => void
}) {
  return (
    <SidebarProvider
      defaultOpen={props.defaultOpen}
      onOpenChange={props.onOpenChange}
    >
      <Sidebar collapsible={props.collapsible}>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip="注文" render={<a href="#orders" />}>
                <span>注文</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <SidebarTrigger onClick={props.onTriggerClick} />
        <State />
      </SidebarInset>
    </SidebarProvider>
  )
}

function triggerIn(container: HTMLElement) {
  const el = container.querySelector<HTMLElement>("[data-sidebar=trigger]")
  if (el === null) {
    throw new Error("the trigger is missing")
  }
  return el
}

function panel(container: HTMLElement) {
  const el = container.querySelector<HTMLElement>(
    "[data-slot=sidebar-container]",
  )
  if (el === null) {
    throw new Error("sidebar-container is missing")
  }
  return el
}

test("the trigger collapses the panel and says which panel it controls", async () => {
  const onOpenChange = vi.fn()
  const onTriggerClick = vi.fn()
  const { container } = render(
    <App onOpenChange={onOpenChange} onTriggerClick={onTriggerClick} />,
  )

  const trigger = triggerIn(container)
  const root = container.querySelector("[data-slot=sidebar]")
  expect(trigger.getAttribute("aria-label")).toBe("サイドバーを開閉")
  expect(container.querySelector("[data-slot=sidebar-wrapper]")).toBeTruthy()
  expect(trigger.getAttribute("aria-expanded")).toBe("true")
  expect(trigger.getAttribute("aria-controls")).toBe(panel(container).id)
  expect(trigger.querySelector("svg")).toBeTruthy()
  expect(root?.getAttribute("data-state")).toBe("expanded")
  expect(panel(container).hasAttribute("inert")).toBe(false)

  await userEvent.click(trigger)

  expect(onTriggerClick).toHaveBeenCalledOnce()
  expect(onOpenChange).toHaveBeenCalledOnce()
  expect(onOpenChange.mock.calls[0]?.[0]).toBe(false)
  expect(onOpenChange.mock.calls[0]?.[1].reason).toBe("trigger-press")
  expect(trigger.getAttribute("aria-expanded")).toBe("false")
  expect(root?.getAttribute("data-state")).toBe("collapsed")
  expect(root?.getAttribute("data-collapsible")).toBe("offcanvas")
  expect(panel(container).hasAttribute("inert")).toBe(true)
  expect(screen.getByRole("status").textContent).toContain("collapsed")
})

test("the container keeps the header offset classes", () => {
  const { container } = render(<App />)

  const className = panel(container).className
  expect(className).toContain("top-(--header-height,0px)")
  expect(className).toContain("h-[calc(100svh-var(--header-height,0px))]")
})

test("mod+b toggles the panel, and a cancelled change stays put", async () => {
  const { container, rerender } = render(<App />)
  const root = container.querySelector("[data-slot=sidebar]")

  await userEvent.keyboard("{Control>}b{/Control}")
  expect(root?.getAttribute("data-state")).toBe("collapsed")

  await userEvent.keyboard("{Control>}b{/Control}")
  expect(root?.getAttribute("data-state")).toBe("expanded")

  rerender(<App onOpenChange={(_open, details) => details.cancel()} />)
  await userEvent.keyboard("{Control>}b{/Control}")
  expect(root?.getAttribute("data-state")).toBe("expanded")
})

test("the rail toggles too, and icon mode keeps the links reachable", async () => {
  const { container } = render(<App collapsible="icon" />)

  await userEvent.click(
    container.querySelector("[data-slot=sidebar-rail]") as HTMLElement,
  )

  const root = container.querySelector("[data-slot=sidebar]")
  expect(root?.getAttribute("data-collapsible")).toBe("icon")
  expect(panel(container).hasAttribute("inert")).toBe(false)
  expect(screen.getByRole("link", { name: "注文" })).toBeTruthy()
})

test("a controlled sidebar follows its open prop", async () => {
  function Controlled() {
    const [open, setOpen] = useState(false)
    return (
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <Sidebar collapsible="icon" />
        <SidebarTrigger />
        <State />
      </SidebarProvider>
    )
  }
  const { container } = render(<Controlled />)

  expect(screen.getByRole("status").textContent).toContain("collapsed")
  await userEvent.click(triggerIn(container))
  expect(screen.getByRole("status").textContent).toContain("expanded")
})

test("on a phone the trigger opens a sheet and Escape returns focus to it", async () => {
  useMobileViewport()
  const { container } = render(<App />)
  await screen.findByText(/mobile/)

  const trigger = triggerIn(container)
  expect(trigger.getAttribute("aria-haspopup")).toBe("dialog")
  expect(screen.queryByRole("dialog")).toBeNull()

  await userEvent.click(trigger)

  const dialog = await screen.findByRole("dialog", { name: "サイドバー" })
  expect(within(dialog).getByRole("link", { name: "注文" })).toBeTruthy()
  expect(screen.getByRole("status").textContent).toContain("sheet-open")
  expect(trigger.hasAttribute("data-open")).toBe(true)
  expect(trigger.getAttribute("aria-controls")).toBe(dialog.id)

  await userEvent.keyboard("{Escape}")

  expect(screen.getByRole("status").textContent).toContain("sheet-closed")
  expect(trigger.hasAttribute("data-open")).toBe(false)
  expect(document.activeElement).toBe(trigger)
})

test("on a phone mod+b opens the sheet and closes it again", async () => {
  useMobileViewport()
  render(<App />)
  await screen.findByText(/mobile/)

  await userEvent.keyboard("{Control>}b{/Control}")
  await screen.findByRole("dialog", { name: "サイドバー" })

  await userEvent.keyboard("{Control>}b{/Control}")
  expect(screen.getByRole("status").textContent).toContain("sheet-closed")
})

test("two sidebars on one page share the shortcut", async () => {
  const { container } = render(
    <>
      <App />
      <App />
    </>,
  )

  await userEvent.keyboard("{Control>}b{/Control}")

  const states = [...container.querySelectorAll("[data-slot=sidebar]")].map(
    (el) => el.getAttribute("data-state"),
  )
  expect(states).toEqual(["collapsed", "collapsed"])
})

test("two sidebars on a phone open together and close from the top", async () => {
  useMobileViewport()
  render(
    <>
      <App />
      <App />
    </>,
  )
  await screen.findAllByText(/mobile/)

  await userEvent.keyboard("{Control>}b{/Control}")
  expect(await screen.findAllByRole("dialog")).toHaveLength(2)

  await userEvent.keyboard("{Control>}b{/Control}")
  await waitFor(() => expect(screen.queryAllByRole("dialog")).toHaveLength(1))

  await userEvent.keyboard("{Control>}b{/Control}")
  await waitFor(() => expect(screen.queryAllByRole("dialog")).toHaveLength(0))
})

test("an agent finds the sidebar and can close it", async () => {
  const { container } = render(<App />)
  const agent = createAgent()

  const found = agent
    .snapshot()
    .find((component) => component.component === "sidebar")
  expect(found?.actions).toContain("setOpen")

  await act(async () => {
    await agent.act({
      steps: [{ ref: found?.ref ?? "", action: "setOpen", args: [false] }],
    })
  })

  expect(
    container.querySelector("[data-slot=sidebar]")?.getAttribute("data-state"),
  ).toBe("collapsed")
})
