import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const Contact2 = ({
  title = "Fale Conosco",
  description = "Estamos disponíveis para dúvidas, feedback ou oportunidades de colaboração. Deixe-nos saber como podemos ajudar!",
  phone = "(11) 99999-9999",
  email = "contato@vertixlaw.com",
  web = { label: "vertixlaw.com", url: "https://vertixlaw.com" },
}: Contact2Props) => {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Detalhes de Contato
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Telefone: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Site: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">Primeiro Nome</Label>
                <Input type="text" id="firstname" placeholder="Primeiro Nome" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Sobrenome</Label>
                <Input type="text" id="lastname" placeholder="Sobrenome" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="seu@email.com" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Assunto</Label>
              <Input type="text" id="subject" placeholder="Assunto da mensagem" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea placeholder="Digite sua mensagem aqui." id="message" />
            </div>
            <Button className="w-full">Enviar Mensagem</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
