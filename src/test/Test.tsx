interface ITestProps {
  r: number;
}

export default function Test(props: ITestProps) {
  let display = 5 + props.r;

  return (
    <div className="text-3xl font-bold underline">
      résultat : <span className="text-primaryBlack">{display}</span>
    </div>
  )
}
