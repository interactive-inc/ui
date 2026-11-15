import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function AvatarSizes() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm" aria-label="佐藤 一郎">
        <AvatarFallback>佐</AvatarFallback>
      </Avatar>
      <Avatar aria-label="鈴木 美穂">
        <AvatarFallback>鈴</AvatarFallback>
      </Avatar>
      <Avatar size="lg" aria-label="高橋 健">
        <AvatarFallback>高</AvatarFallback>
      </Avatar>
    </div>
  )
}
