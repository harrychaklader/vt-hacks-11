const AppHeader = () => {
    return (
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center bg-red-950 drop-shadow-md text-slate-100 p-4">
        <div>
          <a href="#top" className="text-slate-100 font-bold text-3xl drop-shadow-md">
            Kickstart NIL
          </a>
        </div>
        <div className="space-x-4">
          <a href="">
            Contact
          </a>
          <a href="">
            Book a Meeting
          </a>
        </div>
      </header>
    );
  };
  
  export default AppHeader;
  