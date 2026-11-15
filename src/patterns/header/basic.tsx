import { SettingsIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Header,
  HeaderActions,
  HeaderLink,
  HeaderLogo,
  HeaderSeparator,
  HeaderTitle,
} from "@/components/ui/header"

export function HeaderBasic() {
  return (
    <div className="w-full overflow-hidden rounded-xl border">
      <Header className="static">
        <HeaderTitle>
          <HeaderLogo href="#company" src="/inta-icon.png" aria-label="会社" />
          <HeaderSeparator />
          <HeaderLink href="#service">{"dev"}</HeaderLink>
          <HeaderSeparator />
          <HeaderLink href="#app" current>
            {"orders"}
          </HeaderLink>
        </HeaderTitle>
        <HeaderActions>
          <Button variant="secondary" size="icon" aria-label="設定">
            <SettingsIcon />
          </Button>
        </HeaderActions>
      </Header>
    </div>
  )
}
