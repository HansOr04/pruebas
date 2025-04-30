import { PrimaryButtonProps } from "../types/interface";

export default function PrimaryButton({content}: PrimaryButtonProps) {
return (
        <a href="#" className="px-7 py-4 me-6 mb-2 bg-[var(--primary-color)] font-bold rounded-3xl text-lg">
            {content}
        </a>
    );
}
