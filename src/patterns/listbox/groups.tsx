import { Field, FieldLabel } from "@/components/ui/field"
import {
  Listbox,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxItem,
} from "@/components/ui/listbox"

const warehouses = [
  {
    area: "東日本",
    items: [
      { value: "chiba", name: "千葉物流センター", note: "在庫 128点" },
      { value: "sendai", name: "仙台倉庫", note: "在庫 42点" },
    ],
  },
  {
    area: "西日本",
    items: [{ value: "osaka", name: "大阪物流センター", note: "在庫 96点" }],
  },
]

export function ListboxGroups() {
  return (
    <Field>
      <FieldLabel>出荷元の倉庫</FieldLabel>
      <Listbox name="warehouse" defaultValue="chiba">
        {warehouses.map((group) => (
          <ListboxGroup key={group.area}>
            <ListboxGroupLabel>{group.area}</ListboxGroupLabel>
            {group.items.map((item) => (
              <ListboxItem
                key={item.value}
                value={item.value}
                label={item.name}
              >
                <span className="flex flex-col">
                  {item.name}
                  <span className="font-normal text-muted-foreground text-xs">
                    {item.note}
                  </span>
                </span>
              </ListboxItem>
            ))}
          </ListboxGroup>
        ))}
      </Listbox>
    </Field>
  )
}
