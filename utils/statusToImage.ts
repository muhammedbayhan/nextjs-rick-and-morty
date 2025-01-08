export function statusToImage(status: string): string {
  switch (status) {
    case "Alive":
      return "alive.png";
    case "Dead":
      return "dead.png";
    case "Female":
      return "female.png";
    case "Male":
      return "male.png";
    case "Genderless":
      return "genderless.png";
    case "unknown":
      return "unknown.png";
    default:
      return "null.png";
  }
}
