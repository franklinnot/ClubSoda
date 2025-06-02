interface IProps {
    message: string;
    className?: string;
}

export default function InputError({ message, className = '', ...props }: IProps) {
    return message ? (
        <p {...props} className={'text-sm text-red-500 ' + className}>
            {message}
        </p>
    ) : null;
}
