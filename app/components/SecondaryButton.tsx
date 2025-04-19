import { SecondaryButtonProps } from "../types/interface";

export default function SecondaryButton({content}: SecondaryButtonProps) {
return (
    <a href="#" className="px-7 py-4 mb-2 bg-[var(--primary-color)] font-bold rounded-3xl text-lg">
        {content}
    </a>
    );
}
