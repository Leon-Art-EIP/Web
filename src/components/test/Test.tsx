interface ITestProps {
  r: number;
}

export default function Test(props: ITestProps) {
  let display = 5 + props.r;

  return (
    <div className="text-3xl font-bold underline text-red-400">
      résultat : <span className="text-primaryBlack">{display}</span>
      <div className="text-secondaryGrey">test déploiement</div>
    </div>
  );
}
