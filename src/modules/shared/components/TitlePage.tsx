'use client'
import Link from "next/link";
import { Button } from "@nextui-org/button";

interface Props {
    title: string;
    subTitle: string;

    button?: string;
    action?: () => void;

    component?: React.ReactNode;
}

export const TitlePage = ({ button, action, subTitle, title, component }: Props) => {
    return (
        <section className="container flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <div>
                <h1>{title}</h1>
                <p>{subTitle}</p>
            </div>
            <div className="flex items-center gap-4">
                {
                    button && action && (
                        <Button onClick={action} className="bg-gradient" color="primary">{button}</Button>
                    )
                }
                {
                    component && component
                }
            </div>
        </section>
    )
}
