import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { TreeItemData } from "@ui-sdk/react/tree"
import { expect, test, vi } from "vitest"
import {
  Tree,
  TreeGroup,
  TreeItem,
  TreeItemCheckbox,
  TreeItemIndicator,
  TreeItemLabel,
} from "@/components/ui/tree"
import { DemoBoard } from "@/src/demos/demo"
import { SdkDisplayDemos } from "@/src/demos/sdk-display"

const departments: TreeItemData[] = [
  {
    value: "design",
    label: "デザイン部",
    children: [{ value: "designer", label: "プロダクトデザイナー" }],
  },
]

function Departments(props: React.ComponentProps<typeof Tree>) {
  return (
    <Tree aria-label="部署" items={departments} {...props}>
      <TreeItem value="design">
        <TreeItemLabel>
          <TreeItemIndicator />
          <TreeItemCheckbox />
          デザイン部
        </TreeItemLabel>
        <TreeGroup>
          <TreeItem value="designer">
            <TreeItemLabel>
              <TreeItemIndicator />
              <TreeItemCheckbox />
              プロダクトデザイナー
            </TreeItemLabel>
          </TreeItem>
        </TreeGroup>
      </TreeItem>
    </Tree>
  )
}

test("the indicator draws a chevron and pressing a branch opens it", async () => {
  const onExpandedChange = vi.fn()
  render(<Departments onExpandedChange={onExpandedChange} />)

  const branch = screen.getByRole("treeitem", { name: "デザイン部" })
  expect(branch.querySelector('[data-slot="tree-indicator"] svg')).not.toBe(
    null,
  )

  await userEvent.click(within(branch).getByText("デザイン部"))

  expect(onExpandedChange).toHaveBeenLastCalledWith(
    ["design"],
    expect.anything(),
  )
  expect(
    screen.getByRole("treeitem", { name: "プロダクトデザイナー" }),
  ).toBeTruthy()
})

test("a checked item draws a check in its checkbox", () => {
  render(<Departments checkable mode="none" defaultChecked={["design"]} />)

  const branch = screen.getByRole("treeitem", { name: "デザイン部" })
  expect(branch.getAttribute("aria-checked")).toBe("true")
  expect(branch.querySelector('[data-slot="tree-checkbox"] svg')).not.toBe(null)
})

test("the demo selects a job in the department tree", async () => {
  render(
    <DemoBoard>
      <SdkDisplayDemos />
    </DemoBoard>,
  )

  const tree = await screen.findByRole("tree", { name: "部署と職種" })
  await userEvent.click(within(tree).getByText("経理"))

  expect(screen.getByText("経理の応募者を表示中")).toBeTruthy()
})
