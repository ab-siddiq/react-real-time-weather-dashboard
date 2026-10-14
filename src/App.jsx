import Header from "./components/Header/Header";
import WeatherBoard from "./components/Weather/WeatherBoard";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section>
          <WeatherBoard />
        </section>
      </main>
    </div>
  );
}

export default App;
