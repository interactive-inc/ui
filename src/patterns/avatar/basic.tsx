import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarBasic() {
  return (
    <div className="flex items-center gap-4">
      <Avatar aria-label="インタ株式会社">
        <AvatarImage src="/inta-icon.png" alt="" />
        <AvatarFallback>イ</AvatarFallback>
      </Avatar>
      <Avatar aria-label="山田 花子">
        <AvatarFallback>山</AvatarFallback>
      </Avatar>
    </div>
  )
}
