interface HeaderProps {
  text: string;
}

function Header({ text }: HeaderProps) {
  return (
    <div className="font-montserrat font-bold">
      <h1>{text} </h1>
    </div>
  );
}

export default Header;
// small text typewriter header monsterrat?
