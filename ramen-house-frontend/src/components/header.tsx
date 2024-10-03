interface HeaderProps {
  text: string;
  font?: string; // Optional font
  size?: string;
}

function Header({ text, font, size }: HeaderProps) {
  // Determine the class based on the size prop

  return (
    <div className={`${font} ${size} pt-6 font-bold`}>
      <div>
        <h1>{text}</h1>
      </div>
    </div>
  );
}
export default Header;
// subheading and  text typewriter header monsterrat?
