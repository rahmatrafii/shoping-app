const Loading = ({ width = null, height = null }) => {
  return (
    <div
      className={`${width} ${height} bg-slate-100 rounded-xl p-[10px] shadow-md animate-loading`}
    >
      <div className="w-full h-[220px] rounded-xl mb-4 bg-slate-200"></div>
      <span className="w-full block h-[20px] rounded-xl mb-6 bg-slate-200"></span>
      <span className="w-[75%] block h-[20px] rounded-xl mb-6 bg-slate-200"></span>
      <span className="w-[50%] block h-[20px] rounded-xl mb-6 bg-slate-200"></span>
    </div>
  );
};

export default Loading;
