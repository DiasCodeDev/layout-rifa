import Image from "next/image";
import imagemCarro from "../public/up-img.jpeg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex  bg-white  min-h-screen flex-col items-center justify-between pl-24 pr-24 pb-24 pt-24">
      <div className="flex space-y-1 rounded-3xl bg-zinc-600  min-h-[130vw] flex-col items-center justify-between p-4">


      <section className="rounded-3xl space-y-6 bg-white">
      <div className="relative rounded-3xl w-[340px] bg-white flex justify-center  items-center">
        <Image
        className="rounded-3xl"
          src={imagemCarro}
          width={600}
          height={600}
          alt="Picture of the author"
        />
      </div>

      <div className="space-y-1   ">
        <h1 className="-mt-6   text-[2rem] w-[340px] font-bold text-center text-black">
          Sorteio de um Audi
        </h1>
        <h1 className="-mt-6   text-[2rem] w-[340px]  font-bold text-center text-black">
          por apenas R$ 5,00
        </h1>
        <p className="  text-slate-600 text-center w-[340px]">
          Compre a cota e concorra além de um audi, 100 mil e um presente
          misterioso.
        </p>
        <p className=" text-slate-600 text-center w-[340px] ">
          Aproveite nossos pacotes e tenha mais chance de ganhar.
        </p>
      </div>
      </section>



      <section className="flex bg-white  rounded-3xl flex-col items-center justify-between p-4" >
     
      
      <p className="p-1 text-center h-[50px] rounded-tl-3xl rounded-tr-3xl w-[300px] bg-transparent text-[1.8rem] bg text-black">
         Promoção
         </p>
       
      <form className=" flex-col  h-[150px]   grid gap-3 grid-cols-2 items-center
       justify-between bg-white pt-2 pl-1 pr-1 pb-2">
         
         <Button
                  variant="secondary"
                  className="hover:bg-slate-50 hover:text-black hover:border-2 hover:border-zinc-600     bg-zinc-600  text-slate-50 w-[140px] items-center"
                >
                  10 por R$: 47,41
                </Button>
         <Button
                  variant="secondary"
                  className="hover:bg-slate-50 hover:text-black hover:border-2 hover:border-zinc-600 bg-zinc-600  text-slate-50     w-[140px] items-center"
                >
                  20 por R$: 91,82
                </Button>
         <Button
                  variant="secondary"
                  className="hover:bg-slate-50 hover:text-black hover:border-2 hover:border-zinc-600 bg-zinc-600  text-slate-50   w-[140px] items-center"
                >
                  50 por R$: 224,55
                </Button>
         <Button
                  variant="secondary"
                  className="hover:bg-slate-50 hover:text-black hover:border-2 hover:border-zinc-600 bg-zinc-600  text-slate-50  w-[140px] items-center"
                >
                  100 por R$: 424,15
                </Button>
          </form>
      </section>
      <section className="flex bg-white  rounded-3xl flex-col items-center justify-between p-2">
      <div className="space-y-6 ">
      <h4
        className="p-1 text-center h-[50px]   bg-transparent text-[1.5rem] bg text-black"
      >
        Selecione a quantidade de Títulos
      </h4>
      <div
        className="container gap-3 grid-cols-1 justify-items-center w-[20rem] h-[45rem] pt-2 pl-1 pr-1 pb-2  grid 
        "
      >
        <Button
          className="hover:border-4  focus:border-4 
           hover:border-zinc-600  hover:text-zinc-600  
            hover:bg-transparent   flex-col bg-zinc-600  
            text-4xl  text-white border-zinc-600 border 
            w-[280px] h-[90px]  items-center"
        >
          +10
          <p className="hover:text-black  text-[0.8rem] text-white">
            SELECIONAR
          </p>
        </Button>
        <Button
          className="hover:border-4  focus:border-4 
           hover:border-zinc-600  hover:text-zinc-600  
            hover:bg-transparent   flex-col bg-zinc-600  
            text-4xl  text-white border-zinc-600 border 
            w-[280px] h-[90px]  items-center"
        >
          +20
          <p className="hover:text-zinc-600   text-[0.8rem]  text-white">
            SELECIONAR
          </p>
        </Button>
        <Button
          className="hover:border-4  focus:border-4 
           hover:border-zinc-600  hover:text-zinc-600  
            hover:bg-transparent   flex-col bg-zinc-600  
            text-4xl text-white border-zinc-600 border 
             w-[280px] h-[90px]  items-center"
        >
          +50
          <p className="hover:text-zinc-600   text-[0.8rem] text-white">
            SELECIONAR
          </p>
        </Button>
        <Button
          className="hover:border-4  focus:border-4 
           hover:border-zinc-600  hover:text-zinc-600  
            hover:bg-transparent   flex-col bg-zinc-600  
            text-4xl  text-white border-zinc-600 border 
            w-[280px] h-[90px]  items-centerr"
        >
          +100
          <p className="hover:text-zinc-600   text-[0.8rem]  text-white">
            SELECIONAR
          </p>
        </Button>
        <Button
          className="hover:border-4  focus:border-4 
           hover:border-zinc-600  hover:text-zinc-600  
            hover:bg-transparent   flex-col bg-zinc-600  
            text-4xl  text-white border-zinc-600 border 
             w-[280px] h-[90px]  items-centerr"
          >
          +250
          <p className="hover:text-black  text-[0.8rem] text-white">
            SELECIONAR
          </p>
        </Button>
        <Button
          className="hover:border-4  focus:border-4 
           hover:border-zinc-600  hover:text-zinc-600 
            hover:bg-transparent   flex-col bg-zinc-600   
            text-4xl text-white border-zinc-600  border 
              w-[280px] h-[90px]  items-center"
        >
          +1000
          <p className="hover:text-zinc-600   text-[0.8rem] text-white">
            SELECIONAR
          </p>
        </Button>


        <section className="  -space-y-6 flex flex-col p-1">
        <div className="flex items-center  pt-0 pl-1 pr-1 pb-0">
          <button
            type="button"
            id="decrement-button"
            data-input-counter-decrement="quantity-input"
            className="bg-transparent  
                  border-zinc-600  border
                  rounded-s-lg p-3 h-11 focus:ring-gray-100
                   dark:focus:ring-gray-700 
                  focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-zinc-600   "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 2"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h16"
              />
            </svg>
          </button>
          <input
            type="text"
            id="quantity-input"
            data-input-counter
            aria-describedby="helper-text-explanation"
            className="bg-transparent  border-zinc-600  border
                 h-11 text-center text-border text-sm focus:ring-red-60
                  hover:border-2 focus:border-2 focus:border-red-600 hover:border-red-600 block w-full py-2.5 
                   dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-600 dark:focus:border-red-600"
            placeholder="999"
            required
          />
          <button
            type="button"
            id="increment-button"
            data-input-counter-increment="quantity-input"
            className="bg-transparent  
                  border border-zinc-600  rounded-e-lg  
                  p-3 h-11 focus:ring-gray-100  focus:ring-2 focus:outline-none"
          >
            <svg
              className="w-3 h-3 text-zinc-600  "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 1v16M1 9h16"
              />
            </svg>
          </button>
         
        </div>
        </section>
        <div className="-mt-2"> 
        <Button
          variant="secondary"
          className=" w-[17rem] bg-zinc-600 text-white hover:bg-white hover:text-zinc-600  hover:border-zinc-600  border border-zinc-600 "
        >
          Comprar
        </Button>
        </div>
      </div>
    </div>
      </section>
      </div>
    </main>
  );
}
