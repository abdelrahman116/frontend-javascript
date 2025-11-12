interface MajorCredits {
  credits: number;
  brand: "major";
}
interface MinorCredits {
  credits: number;
  brand: "minor";
}
function sumMajorCredits(
  subject1: { credits: number },
  subject2: { credits: number }
): MajorCredits {
  const totalCredits = subject1.credits + subject2.credits;

  return { credits: totalCredits, brand: "major" };
}
function sumMinorCredits(
  subject1: { credits: number },
  subject2: { credits: number }
): MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: "minor" };
}
