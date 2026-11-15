import { Field, FieldControl, FieldLabel } from "@/components/ui/field"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"

export function NativeSelectBasic() {
  return (
    <Field>
      <FieldLabel>都道府県</FieldLabel>
      <FieldControl
        render={<NativeSelect className="w-full" />}
        name="prefecture"
        defaultValue=""
      >
        <NativeSelectOption value="">選択してください</NativeSelectOption>
        <NativeSelectOption value="tokyo">東京都</NativeSelectOption>
        <NativeSelectOption value="osaka">大阪府</NativeSelectOption>
        <NativeSelectOption value="fukuoka">福岡県</NativeSelectOption>
        <NativeSelectOption value="okinawa">沖縄県</NativeSelectOption>
      </FieldControl>
    </Field>
  )
}
