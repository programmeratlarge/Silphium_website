type Props = {
  text: string;
  className?: string;
};

export default function DisclaimerBanner({ text, className = '' }: Props) {
  return (
    <p className={`text-xs leading-5 text-silphium-muted ${className}`.trim()}>
      {text}
    </p>
  );
}
