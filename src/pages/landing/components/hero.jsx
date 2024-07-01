import { heroBg } from "../../../assets";


const Hero = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2  bg-skyBlue place-content-center pl-20 pr-15 ">
        <div className="mx-auto w-fit flex-col">
          <span className="font-thin text-5xl">Best Design of <br /></span>
          <span className="font font-bold text-5xl">Building Collections</span>
        </div>

        <p w-80>A small river named Duden flows by their place <br />and supplies it with the necessary regelialia.</p>
        <button className="bg-white px-6 py-2 rounded-full drop-shadow-lg uppercaset text-deepBlue font-semibold">Discover</button>
      </div>

      <div className="w-1/2">
        <img src={heroBg} alt="hero background" className="object-cover w-full h-full" />
      </div>

    </div>
  )
}

export default Hero;