function lottery(str) {
  return (
    [...new Set([...str.replace(/[^\d]/g, "")])].join("") || "One more run!"
  );
}
