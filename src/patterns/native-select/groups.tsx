import { Field, FieldControl, FieldLabel } from "@/components/ui/field"
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectGroups() {
  return (
    <Field>
      <FieldLabel>配送の時間帯</FieldLabel>
      <FieldControl
        render={<NativeSelect className="w-full" />}
        name="deliveryTime"
        defaultValue="none"
      >
        <NativeSelectOption value="none">指定なし</NativeSelectOption>
        <NativeSelectOptGroup label="午前">
          <NativeSelectOption value="am">8時〜12時</NativeSelectOption>
        </NativeSelectOptGroup>
        <NativeSelectOptGroup label="午後">
          <NativeSelectOption value="pm1">14時〜16時</NativeSelectOption>
          <NativeSelectOption value="pm2">16時〜18時</NativeSelectOption>
          <NativeSelectOption value="night" disabled>
            19時〜21時(受付終了)
          </NativeSelectOption>
        </NativeSelectOptGroup>
      </FieldControl>
    </Field>
  )
}
