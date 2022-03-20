import { useEffect, useState } from "react";
import axios from "axios";
import { nanoid } from "nanoid";

export default function Home() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    (async function getDogs() {
      const {
        data: { message },
      } = await axios(`https://dog.ceo/api/breeds/image/random/50`);
      setDogs(message);
    })();
  }, []);

  return (
    <main>
      <h1>Dog images</h1>
      <section>
        {dogs.length === 0 && <p>Loading...</p>}
        {dogs.length > 0 &&
          dogs.map((dog) => (
            <aside key={nanoid()}>
              <img src={dog} />
            </aside>
          ))}
      </section>
    </main>
  );
}
