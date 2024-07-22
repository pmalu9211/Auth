export default function Button({
  onClick,
  name,
}: {
  onClick: () => void;
  name: string;
}) {
  return (
    <>
      <button onClick={() => onClick()}>{name}</button>
    </>
  );
}
