export default function toggleAttach(item, setSelectedItems) {
  setSelectedItems((prev) =>
    prev.some((i) => i.id === item.id)
      ? prev.filter((i) => i.id !== item.id)
      : [...prev, item],
  );
}
