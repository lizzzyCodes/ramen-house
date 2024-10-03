interface ButtonProps {
  text?: string;
}

function PrimaryButton({ text }: ButtonProps) {
  return <button className="bg-burgundy hover:bg-opacity-25 text-white py-2 px-4 rounded-full font-nunito">{text}</button>;
}
export default PrimaryButton;
