import { Navbar, Market, Footer, Transactions, Welcome, Services,} from "./components";

const App = () => (
  <div className="min-h-screen">
    <div className="gradient-bg-welcome">
      <Navbar />
      <Welcome />
    </div>
    <Market/>
    <Services />
    <Transactions />
    <Footer />
  </div>
);

export default App;
