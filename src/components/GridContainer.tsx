const GridContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-4 justify-items-center gap-10'>
      {children}
    </div>
  );
};

export default GridContainer;
