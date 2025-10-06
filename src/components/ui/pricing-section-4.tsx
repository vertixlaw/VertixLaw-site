"use client";
import { Card, CardContent, CardHeader } from "./card";
import { cn } from "../../lib/utils";
import NumberFlow from "@number-flow/react";
import { motion } from "framer-motion";
import { useState } from "react";

const plans = [
  {
    name: "Start",
    description:
      "Perfeito para startups em fase inicial que precisam de suporte jurídico básico",
    price: 279,
    yearlyPrice: 2678,
    yearlySavings: 670,
    buttonText: "Converse com nossa equipe",
    buttonVariant: "outline" as const,
    includes: [
      "Inclui:",
      "Contrato social",
      "Acordo de sócios",
      "NDA básico",
      "Suporte por email",
      "Atualizações mensais",
    ],
  },
  {
    name: "Growth",
    description:
      "Ideal para startups em crescimento que precisam de mais serviços jurídicos",
    price: 679,
    yearlyPrice: 6518,
    yearlySavings: 1630,
    buttonText: "Converse com nossa equipe",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Tudo do Start, mais:",
      "Contratos de trabalho CLT/PJ",
      "Termos de uso",
      "Política de privacidade (LGPD)",
      "Suporte prioritário",
      "Consultoria mensal",
    ],
  },
  {
    name: "Scale",
    description:
      "Para startups em escala que precisam de suporte jurídico completo",
    price: 1479,
    yearlyPrice: 14198,
    yearlySavings: 3550,
    buttonText: "Converse com nossa equipe",
    buttonVariant: "outline" as const,
    includes: [
      "Tudo do Growth, mais:",
      "Registro de marca",
      "Contratos de transferência de tecnologia",
      "Gestão de captable",
      "Suporte 24/7",
      "Consultoria ilimitada",
    ],
  },
];

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10  rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Mensal</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full  rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Anual
            <span className="text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">-20%</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <section id="planos" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <article className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Planos que funcionam melhor para sua startup
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Confiado por milhares de startups, ajudamos empresas em todo o Brasil. 
            Explore qual opção é ideal para você.
          </p>
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </article>

        <div className="grid md:grid-cols-3 max-w-5xl gap-6 mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-lg"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Mais Popular
                </div>
              )}
              <CardHeader className="text-left">
                <div className="flex justify-between">
                  <h3 className="text-3xl mb-2 text-gray-900">{plan.name}</h3>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-semibold text-gray-900">
                    R$
                    <NumberFlow
                      format={{
                        currency: "BRL",
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl font-semibold"
                    />
                  </span>
                  <span className="text-gray-500 ml-1">
                    /{isYearly ? "ano" : "mês"}
                  </span>
                </div>
                {isYearly && (
                  <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-green-800">
                        Economia anual:
                      </span>
                      <span className="text-lg font-bold text-green-600">
                        R$ {plan.yearlySavings?.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-xs text-green-600 mt-1">
                      Equivale a 2 meses grátis!
                    </p>
                  </div>
                )}
                <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  onClick={scrollToContact}
                  className={`w-full mb-6 p-4 text-sm rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg"
                      : plan.buttonVariant === "outline"
                        ? "bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                        : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-base mb-3 text-gray-900">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <span className="h-2.5 w-2.5 bg-blue-500 rounded-full grid place-content-center"></span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
