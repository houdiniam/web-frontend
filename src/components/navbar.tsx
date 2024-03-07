import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { api } from "@/services/api";



export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [cor, setCor] = React.useState(true);
  const [data, setData] = React.useState<any>([]);
  const pathy = usePathname();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setCor(true)
    );
    window.addEventListener(
      "resize",
      () => window.innerWidth < 960 && setCor(false)
    );
    api.get('/list').then((response) => {
      setData(response.data);
    })
  }, [])

  return (
    <div>
      <div className="text-white text-sm py-3 flex justify-end pr-24" style={{ backgroundColor: '#231F20' }}>
        <div>
          <a href="https://webjump.ai/" className="font-normal underline underline-offset-1" target="_blank">
            Acesse sua conta
          </a>
          <span className="font-extralight"> ou </span>
          <a href="https://webjump.ai/" className="font-normal underline underline-offset-1" target="_blank">
            Cadastre-se
          </a>
        </div>
      </div>
      <div className="flex lg:my-10 lg:ml-10 my-5 hidden lg:block">
        <div className="flex">
          <Image
            width={200}
            height={200}
            src="/image/logo_webjump.webp"
            alt="imagem logo"
            className="ml-10"
          />
          <div className="flex md:inline-flex w-full justify-end my-3 pr-24">
            <input
              type="text"
              name="search"
              id="search"
              className="block border-1 py-1.5 pl-7 pr-20 text-black ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              placeholder="pesquisar"
            />
            <Button className="rounded-none" placeholder="buscar" variant="filled" style={{ backgroundColor: pathy !== "/" ? "#00A8A9" : "#CB0D1F" }}>
              Buscar
            </Button>
          </div>
        </div>
      </div>
      <MTNavbar
        placeholder="Navbar"
        fullWidth
        blurred={false}
        shadow={false}
        style={{ backgroundColor: cor ? '#CB0D1F' : "white " }}
        className="navb sticky top-0 z-50 border-0"
      >
        <div className="container mx-auto flex items-center justify-between">
          <ul className="hidden items-center gap-20 lg:flex">
            <li>
              <Typography
                placeholder="Página inicial"
                as="a"
                href="/"
                variant="paragraph"
                color="gray"
                className="flex items-center gap-2 font-extrabold text-white"
              >
                PÁGINA INICIAL
              </Typography>
            </li>
            {data?.map((nav) => {
              const nome = (nav.name).toUpperCase();
              return (
                <li key={nav.id}>
                  <Typography
                    as="a"
                    href={nav.path}
                    placeholder={nav.name}
                    variant="paragraph"
                    color="gray"
                    className="flex items-center gap-2 font-extrabold text-white"
                  >
                    {nome}
                  </Typography>
                </li>
              );
            })}
            <li>
              <Typography
                placeholder="Contato"
                as="a"
                href="contato"
                variant="paragraph"
                color="gray"
                className="flex items-center gap-2 font-extrabold text-white"
              >
                CONTATO
              </Typography>
            </li>
          </ul>
          <div className="flex lg:hidden">
            <IconButton
              placeholder="Icone"
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto lg:hidden mt-5"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
            <Image
              width={200}
              height={200}
              src="/image/webjump_logo_sm.jpg"
              alt="testimonial image"
              className="ml-14 md:ml-56"
            />
          </div>
          <IconButton
            placeholder="Icone"
            variant="text"
            color="gray"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              pathy != "/" ? <ShoppingCartIcon strokeWidth={2} className="h-6 w-6" /> : <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Typography
                  placeholder="Pagina inicial"
                  as="a"
                  href="/"
                  variant="paragraph"
                  color="gray"
                  className="flex items-center gap-2 font-extrabold text-black"
                >
                  PÁGINA INICIAL
                </Typography>
              </li>
              {data?.map((nav) => {
                const nome = (nav.name).toUpperCase();
                return (
                  <li key={nav.id}>
                    <Typography
                      as="a"
                      href={nav.path}
                      placeholder={nav.name}
                      variant="paragraph"
                      color="gray"
                      className="flex items-center gap-2 font-extrabold text-black"
                    >
                      {nome}
                    </Typography>
                  </li>
                );
              })}
              <li>
                <Typography
                  placeholder="contato"
                  as="a"
                  href="sapatos"
                  variant="paragraph"
                  color="gray"
                  className="flex items-center gap-2 font-extrabold text-black"
                >
                  CONTATO
                </Typography>
              </li>
            </ul>
          </div>
        </Collapse>
      </MTNavbar>
    </div>
  );
}

export default Navbar;
