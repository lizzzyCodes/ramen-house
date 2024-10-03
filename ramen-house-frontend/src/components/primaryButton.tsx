interface ButtonProps {
  text: string;
}

function PrimaryButton({ text }: ButtonProps) {
  return <button className="bg-burgundy text-white">{text}</button>;
}
export default PrimaryButton;
