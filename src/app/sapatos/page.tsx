"use client";

import React from 'react'
import {
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import SideBar from '@/components/sidebar';
import { api } from "@/services/api";
import Paging from '@/components/paging';

export default function Sapatos() {

  const [data, setData] = React.useState<any>([]);

  React.useEffect(() => {
    api.get('/tenis').then((response) => {
      setData(response.data);
    })
  }, [])

  return (
    <section className="pb-10 px-8 mt-5">
      <div className=" container gap-20 mx-auto items-start">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <SideBar />
          <div className="flex flex-col space-y-4 grow">
            <div className="grow lg:mt-14 md:mt-10 sm:mt-7 xs:mt-5">
              <div className="mb-8 lg:mb-3">
                <Typography className="text-3xl" placeholder="Texto de boas vindas" variant="lead" style={{ color: "#ED1A39" }}>
                  Sapatos
                </Typography>
                <div className=" w-full my-2 h-0.5 border-t  bg-neutral-100 dark:bg-gray-300"></div>
              </div>
              <div className="grid">
                <div className="ml-1 space-x-2 hidden lg:flex">
                  <i className="fa-solid fa-grip" style={{ color: "#ED1A39" }}></i>
                  <i className="fa-solid fa-list" style={{ color: "#00A8A9" }}></i>
                </div>
                <div className="-mt-5 flex justify-self-end space-x-5 font-sans">
                  <div className=" my-3 lg:my-1">
                    <Typography as="p" className="text-xs font-semibold font-sans text-gray-700 lg:mt-2.5" placeholder="ordernar por" variant="paragraph">
                      ORDENAR POR
                    </Typography>
                  </div>
                  <div>

                    <Select placeholder="order select" label="Order">
                      <Option>Preço</Option>
                      <Option>Tamanho</Option>
                      <Option>Cor</Option>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-4 grid-cols-2 justify-center lg:ml-0 md:-ml-20 -ml-14">
              {data.map((prod) => {
                return (
                  <div key={prod.id} className="mt-6  lg:space-x-4 w-60 h-80">
                    <CardBody placeholder={prod.name} className="">
                      <CardHeader style={{ width: 180, height: 180 }} placeholder={prod.name} className="w-fit border border-t">
                        <img
                          className=""
                          src={prod.image}
                          alt="card-image"
                        />
                      </CardHeader>
                      <Typography placeholder={prod.name} className="flex justify-center mt-3 text-nowrap">
                        {prod.name}
                      </Typography>
                      <Typography placeholder={prod.name} variant="h6" color="blue-gray" className="flex justify-center mt-3" style={{ color: "#1E2B50" }}>
                        R$ {prod.price}
                      </Typography>
                    </CardBody>
                    <CardFooter placeholder={prod.name} className="pt-0 -mt-4 flex justify-center">
                      <Button placeholder={prod.name} className="w-full mx-3.5 font-sans font-extrabold" style={{ backgroundColor: "#00A8A9" }}>COMPRAR</Button>
                    </CardFooter>
                  </div>
                )
              })}
            </div>
            <div className="flex justify-center md:-ml-10">
              <Paging />
            </div>
          </div>
        </div>
        <div className="h-44 grow mt-5" style={{ backgroundColor: "#CB0D1F" }}></div>
      </div>
    </section>
  )
}
