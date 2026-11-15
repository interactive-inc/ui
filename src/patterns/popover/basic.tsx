import { buttonVariants } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverBasic() {
  return (
    <Popover>
      <PopoverTrigger className={buttonVariants({ variant: "outline" })}>
        送料について
      </PopoverTrigger>
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>送料</PopoverTitle>
          <PopoverDescription>
            1回の注文が 10,000円以上なら無料です。それ未満は全国一律
            880円かかります。
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
