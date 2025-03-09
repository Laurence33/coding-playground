import Link from "next/link";

export default function Meals() {
  return (
    <>
      <h2>Meals</h2>
      <ul>
        <li><Link href="meals/meal-1">Meal 1</Link></li>
        <li><Link href="meals/meal-2">Meal 2</Link></li>
      </ul>
    </>
  )
}
