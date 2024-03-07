"use client";

import { Typography } from "@material-tailwind/react";
import { api } from "@/services/api";
import React from "react";

function Home() {

  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    api.get('/list').then((response) => {
      setData(response.data);
    })
  }, [])

  return (
    <section className="pb-10 px-8 mt-5 font-sans">
      <div className=" container gap-20 mx-auto items-start">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="w-72 flex-none hidden lg:block" style={{ backgroundColor: "#E2DEDC" }}>
            <div className="m-5">
              <Typography placeholder="Ir para página inicial" href="/" as="a">
                &#x2022; Página inicial
              </Typography>
              {data?.map((nav) => {
                return (
                  <Typography key={nav.id} placeholder={nav.name} href={nav.path} as="a">
                    &#x2022; {nav.name}
                  </Typography>
                )
              })}
              <Typography placeholder="Ir para página inicial" href="contato" as="a">
                &#x2022; Contato
              </Typography>
            </div>
          </div>
          <div className="flex flex-col space-y-4 grow">
            <div className="lg:h-72 md:h-40 grow" style={{ backgroundColor: "#ACACAC" }}></div>
            <div className="lg:h-80 grow">
              <Typography placeholder="Texto de boas vindas" variant="lead">
                Seja bem-vindo!
              </Typography>
              <Typography placeholder="Texto de boas vindas" variant="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non maiores quia est iusto dignissimos esse aut facere, eos, hic necessitatibus dicta magni ipsam rem, qui eaque quibusdam. Nisi, ducimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non maiores quia est iusto dignissimos esse aut facere, eos, hic necessitatibus dicta magni ipsam rem, qui eaque quibusdam. Nisi, ducimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non maiores quia est iusto dignissimos esse aut facere, eos, hic necessitatibus dicta magni ipsam rem, qui eaque quibusdam. Nisi, ducimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non maiores quia est iusto dignissimos esse aut facere, eos, hic necessitatibus dicta magni ipsam rem, qui eaque quibusdam. Nisi, ducimus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint non maiores quia est iusto dignissimos esse aut facere, eos, hic necessitatibus dicta magni ipsam rem, qui eaque quibusdam. Nisi, ducimus.
              </Typography>
            </div>
          </div>
        </div>
        <div className="h-44 grow mt-5" style={{ backgroundColor: "#CB0D1F" }}></div>
      </div>
    </section>
  )
}

export default Home;
