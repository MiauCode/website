import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";

export default function Card({ title, desc, tags, code, img }) {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-[#0b212d] rounded-2xl max-w-[362px] h-full"
    >
      <div className="bg-bodyColor shadow-shadowOne w-full h-full rounded-2xl p-4 flex flex-col justify-between transform hover:shadow-xl hover:-translate-y-1 hover:shadow-[#C0D6E8]">
        <div>
          <div className="relative w-full rounded-2xl">
            <img
              src={img}
              alt={title}
              className="w-full h-full max-h-[200px] min-h-[200px] rounded-[10px] object-cover border-[1px] border-secondary"
            />
            <div className="absolute inset-0 flex justify-end m-3 ">
              <div
                onClick={() => window.open(code, "_blank")}
                className="bg-slate-800 w-10 h-10 rounded-full border-[1px] border-secondary flex items-center justify-center cursor-pointer text-[#55ad9b]"
              >
                {/* Increased the size of the icon with text-3xl */}
                <FaGithub className="text-3xl text-[#55ad9b] hover:text-[#C0D6E8]" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-black font-bold text-[24px]">{title}</h3>
            <p className="mt-2 text-secondary text-[14px]">{desc}</p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-[14px]">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`font-medium text-white py-0.5 px-1 bg-[#7C93C3] rounded-sm shadow`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </Tilt>
  );
}
