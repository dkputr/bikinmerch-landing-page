export default function Logo({ style }: { style?: React.CSSProperties }) {
  return (
    <a className="logo" href="#top" aria-label="BikinMerch.aja beranda" style={style}>
      <i />BikinMerch<small>.aja</small>
    </a>
  );
}
