const AppHeader = () => {
    return (
      <header className="absolute top-0 left-0 right-0 flex justify-between items-center bg-blue-600 drop-shadow-md text-slate-100 p-4">
        <div>
          <a href="#top" className="text-slate-100 font-bold text-3xl drop-shadow-md">
            Kickstart NIL
          </a>
        </div>
        <div className="space-x-4">
          <a href="https://github.com/harrychaklader/vt-hacks-11" target="_blank" className="text-slate-100 hover:tex-white text-base">
            Repository
          </a>
          <a href="https://harrys-documentation.gitbook.io/nil-deal-scraper/" target="_blank" className="text-slate-100 hover:text-white text-base">
            Documentation
          </a>
        </div>
      </header>
    );
  };
  
  export default AppHeader;
  