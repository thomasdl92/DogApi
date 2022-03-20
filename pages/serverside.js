import axios from "axios";
import { nanoid } from "nanoid";

const serverside = (props) => {
  return (
    <main>
      <h1>Dog images</h1>
      <section>
        {props.message.length > 0 &&
          props.message.map((dog) => (
            <aside key={nanoid()}>
              <img src={dog} />
            </aside>
          ))}
      </section>
    </main>
  );
};

export async function getServerSideProps() {
  const {
    data: { message },
  } = await axios(`https://dog.ceo/api/breeds/image/random/50`);
  return {
    props: {
      message,
    },
  };
}

export default serverside;
