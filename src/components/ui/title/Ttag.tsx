import { cn } from "@/utils/utils";
import React from "react";
interface ITtag {
    tag: 'h2' | 'h3' | 'h4';
    children?: React.ReactNode;
    className?: string;
}

const Ttag: React.FC<ITtag> = ({ tag, children, className, ...rest }) => {
    const Tag = tag;

    const baseClasses = {
        h2: 'text-[24px] md:text-[32px] font-bold leading-7 md:leading-[44px]',
        h3: 'text-[20px] md:text-[28px] font-semibold leading-6 md:leading-8',
        h4: 'text-[18px] md:text-[24px] font-medium leading-5 md:leading-7',
    };

    const combinedClassName = cn(baseClasses[tag], className);

    return (
        <Tag className={combinedClassName} {...rest}>
            {children}
        </Tag>
    );
};

export default Ttag;