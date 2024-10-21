import { cn } from "@/utils/utils";
import React from "react";
type Ptag = React.HTMLAttributes<HTMLParagraphElement> & {

}

export default function PTag({ className, children, ...props }: Ptag) {
    return <p className={cn("text-whiteDark text-[14px] md:text-[16px] leading-[18px] md:leading-[24px]", className, {
      
    })} {...props}>{children}</p>
}
