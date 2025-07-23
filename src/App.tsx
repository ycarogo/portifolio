import "./App.css";
import ComponentAbout from "./_components/ComponentAbout";
import ComponentContact from "./_components/ComponentContact";
import ContentHome from "./_components/ContentHome";
import ListProjects from "./_components/ListProjects";
import NavBarMenu from "./_components/NavBarMenu";

function App() {
  return (
    <>
      <div className="flex w-full h-full">
        <NavBarMenu />
        <div className="grid grid-cols-1 gap-4 w-full">
          <ContentHome />
          <ComponentAbout />
          <ListProjects />
          <ComponentContact />
        </div>
      </div>
    </>
  );
}

export default App;
