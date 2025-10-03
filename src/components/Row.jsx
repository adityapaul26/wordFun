import { Cell } from "./Cell";

export const Row = ({ letters, colors }) => {
  return (
    <div className="flex gap-1 mb-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Cell key={i} letter={letters[i]} color={colors[i]} />
      ))}
    </div>
  );
};
