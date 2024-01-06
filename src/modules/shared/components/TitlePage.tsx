'use client'
import Link from "next/link";
import { Button } from "@nextui-org/button";

interface Props {
    title: string;
    subTitle: string;

    button?: string;
    path?: string;
    iconButton?: React.ReactNode;
    component?: React.ReactNode;
}

export const TitlePage = ({ button, subTitle, title, component, iconButton, path }: Props) => {
    return (
        <section className="container flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
            <div className="flex items-center gap-4">
                {
                    button && path && (
                        <Link href={path}>
                            <Button startContent={ iconButton } className="bg-gradient" color="primary">{button}</Button>
                        </Link>
                    )
                }
                {
                    component && component
                }
            </div>
        </section>
    )
}
