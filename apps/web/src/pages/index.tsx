
const Home = () => (
  <div>
    <div className="p-safe w-full h-full flex border-4 items-center justify-center border-purple-400 m-0 p-0">
      <p className="color-purple-700 font-bold text-xl">Edit app/index.tsx to edit this screen.</p>
      <button type="button" className="p-6 bg-lime-500 rounded-lg mt-5 group hover:bg-yellow-200 active:bg-yellow-500" onClick={() => console.log('clicked')}>
        <p className="color-indigo-900 font-bold text-xl group-active:color-rose-700 group-hover:color-rose-300">Click me!</p>
      </button>
    </div>
  </div>
);

export default Home;
