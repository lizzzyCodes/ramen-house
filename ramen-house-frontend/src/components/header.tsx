interface HeaderProps {
  text: string | undefined;
  font?: string; // Optional font
  size?: string;
}

function Header({ text, font, size }: HeaderProps) {
  // Determine the class based on the size prop

  return (
    <div className={`${font} ${size} pt-4 font-bold text-[32px]`}>
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  );
}
export default Header;
// subheading and  text nunito header monsterrat?
